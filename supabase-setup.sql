-- Création de la table pour les demandes de devis
CREATE TABLE IF NOT EXISTS devis_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  project_type VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Index pour améliorer les performances de recherche
CREATE INDEX IF NOT EXISTS idx_devis_requests_created_at ON devis_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_devis_requests_email ON devis_requests(email);

-- Activer Row Level Security (RLS)
ALTER TABLE devis_requests ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre l'insertion publique (pour le formulaire)
CREATE POLICY "Permettre insertion publique" ON devis_requests
  FOR INSERT
  WITH CHECK (true);

-- Politique pour permettre la lecture aux utilisateurs authentifiés uniquement
CREATE POLICY "Lecture pour utilisateurs authentifiés" ON devis_requests
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Commentaires pour la documentation
COMMENT ON TABLE devis_requests IS 'Table pour stocker les demandes de devis du site web Dyvase';
COMMENT ON COLUMN devis_requests.name IS 'Nom complet du client';
COMMENT ON COLUMN devis_requests.email IS 'Adresse email du client';
COMMENT ON COLUMN devis_requests.company IS 'Nom de l''entreprise (optionnel)';
COMMENT ON COLUMN devis_requests.project_type IS 'Type de projet demandé';
COMMENT ON COLUMN devis_requests.message IS 'Description détaillée du projet';
COMMENT ON COLUMN devis_requests.created_at IS 'Date et heure de création de la demande';

