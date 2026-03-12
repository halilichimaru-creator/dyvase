import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import { supabase } from '../../lib/supabase'
import './DevisQCM.css'

// ─── QCM Steps Definition ───────────────────────────────────────────────

interface StepOption {
  value: string
  label: string
}

interface QCMStep {
  id: string
  question: string
  type: 'radio' | 'checkbox'
  options: StepOption[]
  showMore?: boolean // if the list has a "show more" toggle
  initialVisible?: number
}

const qcmSteps: QCMStep[] = [
  {
    id: 'type_projet',
    question: 'En quoi consiste votre projet web ?',
    type: 'radio',
    options: [
      { value: 'nouveau_site', label: 'Créer un nouveau site web' },
      { value: 'refonte', label: 'Refondre / moderniser mon site actuel' },
      { value: 'modifications', label: 'Apporter des modifications à mon site web actuel' },
    ],
  },
  {
    id: 'entreprise_immatriculee',
    question: 'Votre entreprise est-elle déjà créée et immatriculée ?',
    type: 'radio',
    options: [
      { value: 'oui', label: 'Oui' },
      { value: 'non', label: 'Non' },
      { value: 'en_cours', label: "La procédure d'enregistrement est en cours" },
    ],
  },
  {
    id: 'type_entreprise',
    question: "Votre projet concerne quel type d'entreprise ?",
    type: 'radio',
    options: [
      { value: 'projet_personnel', label: 'Projet personnel' },
      { value: 'entreprise_individuelle', label: 'Entreprise individuelle / travailleur indépendant' },
      { value: 'petite_entreprise', label: 'Petite entreprise (1 à 9 employés)' },
      { value: 'moyenne_entreprise', label: 'Moyenne entreprise (10 à 29 employés)' },
      { value: 'grande_entreprise', label: 'Grande entreprise (30 à 99 employés)' },
      { value: 'tres_grande', label: 'Très grande entreprise (100 employés ou plus)' },
      { value: 'association', label: 'Association à but non lucratif / organisme caritatif' },
      { value: 'autre', label: 'Autre' },
    ],
  },
  {
    id: 'secteur_activite',
    question: "Votre projet concerne quel secteur d'activité ?",
    type: 'radio',
    showMore: true,
    initialVisible: 8,
    options: [
      { value: 'vente_detail', label: 'Vente au détail / biens de consommation' },
      { value: 'sante', label: 'Santé & bien-être' },
      { value: 'services_entreprises', label: 'Services aux entreprises' },
      { value: 'artisan', label: 'Artisan' },
      { value: 'divertissement', label: 'Divertissement et événementiel' },
      { value: 'restauration', label: 'Restauration / alimentation' },
      { value: 'industries_creatives', label: 'Industries créatives' },
      { value: 'immobilier', label: 'Immobilier' },
      { value: 'technologie', label: 'Technologie / informatique' },
      { value: 'education', label: 'Éducation / formation' },
      { value: 'sport', label: 'Sport / fitness' },
      { value: 'tourisme', label: 'Tourisme / hôtellerie' },
      { value: 'automobile', label: 'Automobile' },
      { value: 'juridique', label: 'Juridique / comptabilité' },
      { value: 'autre', label: 'Autre' },
    ],
  },
  {
    id: 'fonctionnalites',
    question: 'Quelles fonctionnalités souhaitez-vous ? (plusieurs choix possibles)',
    type: 'checkbox',
    options: [
      { value: 'formulaire_contact', label: 'Formulaire de contact' },
      { value: 'blog', label: 'Blog / actualités' },
      { value: 'reservation', label: 'Réservation en ligne' },
      { value: 'portfolio', label: 'Portfolio / galerie photos' },
      { value: 'multi_langues', label: 'Multi-langues' },
      { value: 'seo', label: 'Optimisation SEO avancée' },
      { value: 'animations', label: 'Animations / effets visuels' },
      { value: 'newsletter', label: 'Newsletter / mailing' },
      { value: 'analytics', label: 'Analytique / statistiques' },
      { value: 'chat', label: 'Chat en direct / WhatsApp' },
    ],
  },
  {
    id: 'budget',
    question: 'Quel budget accorderiez-vous à ce projet ?',
    type: 'radio',
    options: [
      { value: 'moins_999', label: "Jusqu'à 999 € (petit site internet)" },
      { value: '1000_1999', label: '1 000 € - 1 999 € (site vitrine simple)' },
      { value: '2000_2999', label: '2 000 € - 2 999 € (site vitrine complet)' },
      { value: '3000_4999', label: '3 000 € - 4 999 € (site web élaboré)' },
      { value: '5000_7000', label: '5 000 € - 7 000 € (site web sur-mesure)' },
      { value: '7000_9999', label: '7 000 € - 9 999 € (site complexe avec fonctionnalités avancées)' },
      { value: 'plus_10000', label: '10 000 € ou plus (haute personnalisation)' },
    ],
  },
  {
    id: 'delai',
    question: 'Quel est votre délai souhaité pour ce projet ?',
    type: 'radio',
    options: [
      { value: 'urgent', label: 'Dès que possible (2-4 jours)' },
      { value: '1_semaine', label: '1 semaine (environ)' },
      { value: '2_semaines', label: '2 semaines (environ)' },
      { value: 'pas_urgent', label: 'Pas urgent (je me renseigne)' },
    ],
  },
]

const TOTAL_STEPS = qcmSteps.length + 1 // +1 for contact form

// ─── Animation Variants ─────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

// ─── Component ──────────────────────────────────────────────────────────

export default function DevisQCM() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [showAllOptions, setShowAllOptions] = useState(false)

  // QCM answers
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})

  // Contact form
  const [contact, setContact] = useState({
    nom: '',
    email: '',
    telephone: '',
    nom_entreprise: '',
    message: '',
  })

  // State
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isContactStep = currentStep === qcmSteps.length
  const currentQCMStep = currentStep < qcmSteps.length ? qcmSteps[currentStep] : null
  const progressPercent = ((currentStep + 1) / TOTAL_STEPS) * 100

  // ─── Handlers ───────────────────────────────────────────────────────

  const handleRadioSelect = (stepId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [stepId]: value }))
  }

  const handleCheckboxToggle = (stepId: string, value: string) => {
    setAnswers(prev => {
      const current = (prev[stepId] as string[]) || []
      if (current.includes(value)) {
        return { ...prev, [stepId]: current.filter(v => v !== value) }
      }
      return { ...prev, [stepId]: [...current, value] }
    })
  }

  const canGoNext = (): boolean => {
    if (isContactStep) {
      return contact.nom.trim() !== '' && contact.email.trim() !== ''
    }
    if (!currentQCMStep) return false
    const answer = answers[currentQCMStep.id]
    if (currentQCMStep.type === 'checkbox') {
      return Array.isArray(answer) && answer.length > 0
    }
    return typeof answer === 'string' && answer !== ''
  }

  const goNext = () => {
    if (!canGoNext()) return
    setDirection(1)
    setShowAllOptions(false)
    if (isContactStep) {
      handleSubmit()
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }

  const goBack = () => {
    if (currentStep === 0) return
    setDirection(-1)
    setShowAllOptions(false)
    setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setError(null)

    try {
      // Build the labels map for readable answers
      const getLabelForValue = (stepId: string, value: string): string => {
        const step = qcmSteps.find(s => s.id === stepId)
        if (!step) return value
        const opt = step.options.find(o => o.value === value)
        return opt ? opt.label : value
      }

      const getLabelsForValues = (stepId: string, values: string[]): string[] => {
        return values.map(v => getLabelForValue(stepId, v))
      }

      const { error: supabaseError } = await supabase
        .from('demandes_devis_qcm')
        .insert([
          {
            type_projet: getLabelForValue('type_projet', answers.type_projet as string),
            entreprise_immatriculee: getLabelForValue('entreprise_immatriculee', answers.entreprise_immatriculee as string),
            type_entreprise: getLabelForValue('type_entreprise', answers.type_entreprise as string),
            secteur_activite: getLabelForValue('secteur_activite', answers.secteur_activite as string),
            fonctionnalites: getLabelsForValues('fonctionnalites', (answers.fonctionnalites as string[]) || []),
            budget: getLabelForValue('budget', answers.budget as string),
            delai: getLabelForValue('delai', answers.delai as string),
            nom: contact.nom,
            email: contact.email,
            telephone: contact.telephone || null,
            nom_entreprise: contact.nom_entreprise || null,
            message: contact.message || null,
          },
        ])

      if (supabaseError) throw supabaseError
      setSuccess(true)
    } catch (err) {
      console.error('Erreur:', err)
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
    } finally {
      setSubmitting(false)
    }
  }

  // ─── Render Helpers ─────────────────────────────────────────────────

  const renderOptions = (step: QCMStep) => {
    const visibleOptions =
      step.showMore && !showAllOptions
        ? step.options.slice(0, step.initialVisible || 8)
        : step.options

    const hasMore = step.showMore && !showAllOptions && step.options.length > (step.initialVisible || 8)

    return (
      <>
        <div className="qcm-options">
          {visibleOptions.map(option => {
            const isSelected =
              step.type === 'checkbox'
                ? ((answers[step.id] as string[]) || []).includes(option.value)
                : answers[step.id] === option.value

            return (
              <motion.div
                key={option.value}
                className={`qcm-option ${isSelected ? 'selected' : ''}`}
                onClick={() =>
                  step.type === 'checkbox'
                    ? handleCheckboxToggle(step.id, option.value)
                    : handleRadioSelect(step.id, option.value)
                }
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {step.type === 'radio' ? (
                  <div className="qcm-option__radio" />
                ) : (
                  <div className="qcm-option__checkbox">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7L5.5 10.5L12 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <span className="qcm-option__label">{option.label}</span>
              </motion.div>
            )
          })}
        </div>
        {hasMore && (
          <button className="qcm-show-more" onClick={() => setShowAllOptions(true)}>
            Afficher plus
          </button>
        )}
      </>
    )
  }

  const renderContactForm = () => (
    <div className="qcm-form">
      {error && (
        <motion.div
          className="qcm-error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ⚠️ {error}
        </motion.div>
      )}
      <div className="qcm-form__row">
        <div className="qcm-form__group">
          <label className="qcm-form__label">
            Nom complet <span className="required">*</span>
          </label>
          <input
            type="text"
            className="qcm-form__input"
            placeholder="Jean Dupont"
            value={contact.nom}
            onChange={e => setContact(prev => ({ ...prev, nom: e.target.value }))}
            required
          />
        </div>
        <div className="qcm-form__group">
          <label className="qcm-form__label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            className="qcm-form__input"
            placeholder="jean@entreprise.com"
            value={contact.email}
            onChange={e => setContact(prev => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>
      </div>
      <div className="qcm-form__row">
        <div className="qcm-form__group">
          <label className="qcm-form__label">Téléphone</label>
          <input
            type="tel"
            className="qcm-form__input"
            placeholder="06 12 34 56 78"
            value={contact.telephone}
            onChange={e => setContact(prev => ({ ...prev, telephone: e.target.value }))}
          />
        </div>
        <div className="qcm-form__group">
          <label className="qcm-form__label">Nom de l'entreprise</label>
          <input
            type="text"
            className="qcm-form__input"
            placeholder="Mon Entreprise"
            value={contact.nom_entreprise}
            onChange={e => setContact(prev => ({ ...prev, nom_entreprise: e.target.value }))}
          />
        </div>
      </div>
      <div className="qcm-form__group">
        <label className="qcm-form__label">Message / précisions</label>
        <textarea
          className="qcm-form__textarea"
          placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
          rows={3}
          value={contact.message}
          onChange={e => setContact(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>
    </div>
  )

  // ─── Success Screen ─────────────────────────────────────────────────

  if (success) {
    return (
      <div className="devis-qcm-page">
        <SEO title="Devis envoyé | Dyvase" />
        <motion.div
          className="qcm-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="qcm-success">
            <motion.div
              className="qcm-success__icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              ✓
            </motion.div>
            <h2>Demande envoyée avec succès !</h2>
            <p>
              Merci {contact.nom} ! Nous avons bien reçu votre demande de devis.
              Notre équipe analysera vos réponses et vous recontactera sous 24h
              avec une proposition personnalisée.
            </p>
            <motion.button
              className="btn btn-primary"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retour à l'accueil
            </motion.button>
          </div>
        </motion.div>
      </div>
    )
  }

  // ─── Main Render ────────────────────────────────────────────────────

  return (
    <div className="devis-qcm-page">
      <SEO
        title="Devis Gratuit | Obtenez votre estimation en 2 minutes | Dyvase"
        description="Répondez à notre questionnaire rapide et recevez un devis personnalisé pour votre projet web. Création de site vitrine, refonte — obtenez votre estimation gratuitement."
      />

      <motion.div
        className="qcm-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Progress Bar */}
        <div className="qcm-progress">
          <motion.div
            className="qcm-progress__bar"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Close Button */}
        <button
          className="qcm-close"
          onClick={() => navigate('/')}
          aria-label="Fermer le questionnaire"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Animated Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="qcm-content">
              <div className="qcm-step-indicator">
                Étape {currentStep + 1} / {TOTAL_STEPS}
              </div>

              {isContactStep ? (
                <>
                  <h2 className="qcm-question">Vos coordonnées pour recevoir le devis</h2>
                  {renderContactForm()}
                </>
              ) : currentQCMStep ? (
                <>
                  <h2 className="qcm-question">{currentQCMStep.question}</h2>
                  {renderOptions(currentQCMStep)}
                </>
              ) : null}
            </div>

            {/* Actions */}
            <div className={`qcm-actions ${currentStep === 0 ? 'qcm-actions--end' : ''}`}>
              {currentStep > 0 && (
                <button className="qcm-btn-back" onClick={goBack}>
                  Retour
                </button>
              )}
              <motion.button
                className={`qcm-btn-next ${isContactStep ? 'qcm-btn-submit' : ''}`}
                onClick={goNext}
                disabled={!canGoNext() || submitting}
                whileHover={canGoNext() ? { scale: 1.03 } : {}}
                whileTap={canGoNext() ? { scale: 0.97 } : {}}
              >
                {submitting
                  ? 'Envoi en cours...'
                  : isContactStep
                    ? 'Envoyer ma demande'
                    : 'Continuer'}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
