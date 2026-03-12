-- Drop old devis tables if they exist
-- Since we renamed devis_requests to contact_messages in code, we should rename it in DB but the prompt says 
-- "Supprime les tables Supabase liées aux devis [...], crée une nouvelle migration pour dropper les anciennes tables"
-- So we drop it (assuming it was devis_requests)
DROP TABLE IF EXISTS devis_requests CASCADE;

-- We also need a table for the generic contact form since we replaced devis_requests with contact_messages in Contact.tsx
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  project_type text,
  message text not null,
  created_at timestamptz default now()
);

-- RLS for contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert contact messages" ON contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Only admins can read contact messages" ON contact_messages FOR SELECT TO service_role USING (true);

-- The actual new tables requested

-- 1. Table `formules`
CREATE TABLE formules (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  prix_cents integer,
  description text,
  features jsonb,
  stripe_price_id text,
  actif boolean default true,
  created_at timestamptz default now()
);

-- RLS for formules
ALTER TABLE formules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read active formules" ON formules FOR SELECT TO anon, authenticated USING (actif = true);
CREATE POLICY "Admins can manage formules" ON formules FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Populate initial formules
INSERT INTO formules (nom, prix_cents, description, features, stripe_price_id) VALUES
('Starter', 79900, 'Idéal pour démarrer avec un site professionnel', '["Site vitrine (page unique ou multipages basique)", "Design moderne et responsive", "Formulaire de contact", "Optimisation SEO de base"]', 'price_1T9uI2PV1k7MXbnz9H1q1Rkc'),
('Pro', 149000, 'Pour les entreprises établies avec des besoins avancés', '["Tout inclus dans Starter", "Design élaboré avec micro-animations", "Performances optimisées (Core Web Vitals)", "Mise en place d''un blog", "Intégration d''outils tiers"]', 'price_1T9uKEPV1k7MXbnz9WWzZVh7'),
('Sur-mesure', null, 'Un projet unique complexe ou e-commerce', '["Solutions e-commerce complètes", "Fonctionnalités avancées (tableau de bord, résa...)", "Design 100% sur-mesure", "Accompagnement dédié"]', null);

-- 2. Table `commandes`
CREATE TABLE commandes (
  id uuid primary key default gen_random_uuid(),
  formule_id uuid references formules(id),
  statut text default 'brief_en_attente'
    check (statut in (
      'brief_en_attente',
      'brief_recu',
      'valide',
      'en_cours',
      'en_revision',
      'livre',
      'annule'
    )),
  stripe_session_id text unique,
  stripe_payment_status text,
  montant_paye_cents integer,
  
  -- Infos client
  client_email text not null,
  client_nom text,
  client_telephone text,
  
  -- Brief
  brief jsonb,
  brief_soumis_at timestamptz,
  
  -- Suivi projet
  notes_internes text,
  date_livraison_estimee date,
  
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Trigger for updated_at on commandes
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_commandes_modtime
BEFORE UPDATE ON commandes FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

-- RLS for commandes
ALTER TABLE commandes ENABLE ROW LEVEL SECURITY;
-- Clients can read their own commandes
CREATE POLICY "Clients can view their own commandes" ON commandes FOR SELECT TO anon, authenticated USING (client_email = current_setting('request.jwt.claims', true)::json->>'email' OR client_email = current_setting('request.jwt.claims', true)::jsonb->'app_metadata'->>'email');
-- Actually, since we might not have a formal auth system for clients in the Vite app (the brief uses a token/link perhaps),
-- we could restrict it to service_role and allow specific access via Edge Functions.
-- Let's just create a more permissive policy for authenticated users if they match email, but service_role can do all.
CREATE POLICY "Admins can manage commandes" ON commandes FOR ALL TO service_role USING (true) WITH CHECK (true);

-- 3. Table `messages_commande`
CREATE TABLE messages_commande (
  id uuid primary key default gen_random_uuid(),
  commande_id uuid references commandes(id) on delete cascade,
  auteur text check (auteur in ('client', 'dyvase')),
  contenu text not null,
  lu boolean default false,
  created_at timestamptz default now()
);

-- RLS for messages_commande
ALTER TABLE messages_commande ENABLE ROW LEVEL SECURITY;
-- Admins can do everything
CREATE POLICY "Admins can manage messages" ON messages_commande FOR ALL TO service_role USING (true) WITH CHECK (true);
