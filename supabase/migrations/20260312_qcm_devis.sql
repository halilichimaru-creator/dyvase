-- Table pour stocker les réponses du QCM de demande de devis
CREATE TABLE IF NOT EXISTS demandes_devis_qcm (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Réponses QCM
  type_projet text NOT NULL,
  type_entreprise text NOT NULL,
  entreprise_immatriculee text,
  secteur_activite text NOT NULL,
  fonctionnalites text[],
  budget text NOT NULL,
  delai text NOT NULL,
  
  -- Infos contact
  nom text NOT NULL,
  email text NOT NULL,
  telephone text,
  nom_entreprise text,
  message text,
  
  -- Meta
  created_at timestamptz DEFAULT now(),
  statut text DEFAULT 'nouveau' CHECK (statut IN ('nouveau', 'contacte', 'en_cours', 'termine'))
);

-- RLS
ALTER TABLE demandes_devis_qcm ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert devis QCM" ON demandes_devis_qcm FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can read devis QCM" ON demandes_devis_qcm FOR SELECT TO service_role USING (true);
CREATE POLICY "Admins can manage devis QCM" ON demandes_devis_qcm FOR ALL TO service_role USING (true) WITH CHECK (true);
