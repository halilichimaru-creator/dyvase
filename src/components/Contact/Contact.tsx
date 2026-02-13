import { motion } from 'framer-motion'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import './Contact.css'

interface FormData {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Envoi des données à Supabase
      const { error: supabaseError } = await supabase
        .from('devis_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            project_type: formData.projectType,
            message: formData.message,
          }
        ])

      if (supabaseError) {
        throw supabaseError
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error('Erreur lors de l\'envoi:', err)
      setError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Travaillons Ensemble</h2>
          <p>
            Prêt à donner vie à votre vision ? Contactez-nous et discutons
            de la façon dont nous pouvons transformer votre présence digitale.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Form */}
          <motion.div
            className="contact__form-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="contact__success-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 24L22 30L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>La demande de devis a été envoyée !</h3>
                <p>Merci de nous avoir contactés. Nous vous répondrons sous 24 heures.</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setIsSubmitted(false)
                    setError(null)
                    setFormData({ name: '', email: '', company: '', projectType: '', message: '' })
                  }}
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                {error && (
                  <motion.div
                    className="contact__error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" />
                      <path d="M10 6V10M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>{error}</span>
                  </motion.div>
                )}
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name">Votre nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email">Adresse email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@entreprise.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="company">Entreprise</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Votre entreprise"
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="projectType">Type de projet</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="website">Création de site web</option>
                      <option value="webapp">Application web</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="branding">Identité de marque</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message">Parlez-nous de votre projet</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez vos objectifs, votre calendrier et vos besoins spécifiques..."
                    rows={5}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact__spinner" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer la demande de devis'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__info-card">
              <h3>Contactez-nous</h3>
              <p>Des questions ? Nous serions ravis d'échanger avec vous. Voici comment nous joindre.</p>

              <div className="contact__info-items">
                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 6.667L9.075 11.05C9.35 11.225 9.675 11.317 10 11.317C10.325 11.317 10.65 11.225 10.925 11.05L17.5 6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.833 4.167H4.167C3.246 4.167 2.5 4.912 2.5 5.833V14.167C2.5 15.088 3.246 15.833 4.167 15.833H15.833C16.754 15.833 17.5 15.088 17.5 14.167V5.833C17.5 4.912 16.754 4.167 15.833 4.167Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact__info-label">Email</span>
                    <a href="mailto:dyvase.contact@gmail.com" className="contact__info-value">dyvase.contact@gmail.com</a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.308 15.275C18.308 15.575 18.242 15.883 18.1 16.183C17.958 16.483 17.775 16.767 17.533 17.033C17.125 17.483 16.675 17.808 16.167 18.017C15.667 18.225 15.125 18.333 14.542 18.333C13.692 18.333 12.783 18.133 11.825 17.725C10.867 17.317 9.908 16.767 8.958 16.075C8 15.375 7.092 14.6 6.225 13.742C5.367 12.875 4.592 11.967 3.9 11.017C3.217 10.067 2.667 9.117 2.267 8.175C1.867 7.225 1.667 6.317 1.667 5.45C1.667 4.883 1.767 4.342 1.967 3.842C2.167 3.333 2.483 2.867 2.925 2.45C3.458 1.925 4.042 1.667 4.658 1.667C4.892 1.667 5.125 1.717 5.333 1.817C5.55 1.917 5.742 2.067 5.892 2.283L7.825 5.008C7.975 5.217 8.083 5.408 8.158 5.592C8.233 5.767 8.275 5.942 8.275 6.1C8.275 6.3 8.217 6.5 8.1 6.692C7.992 6.883 7.833 7.083 7.633 7.283L7 7.942C6.908 8.033 6.867 8.142 6.867 8.275C6.867 8.342 6.875 8.4 6.892 8.467C6.917 8.533 6.942 8.583 6.958 8.633C7.108 8.908 7.367 9.267 7.733 9.7C8.108 10.133 8.508 10.575 8.942 11.017C9.392 11.458 9.825 11.867 10.267 12.242C10.7 12.608 11.058 12.858 11.342 13.008C11.383 13.025 11.433 13.05 11.492 13.075C11.558 13.1 11.625 13.108 11.7 13.108C11.842 13.108 11.95 13.058 12.042 12.967L12.675 12.342C12.883 12.133 13.083 11.975 13.275 11.875C13.467 11.758 13.658 11.7 13.867 11.7C14.025 11.7 14.192 11.733 14.375 11.808C14.558 11.883 14.75 11.992 14.958 12.133L17.717 14.092C17.933 14.242 18.083 14.417 18.175 14.625C18.258 14.833 18.308 15.042 18.308 15.275Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact__info-label">WhatsApp</span>
                    <a href="https://wa.me/33651504173" className="contact__info-value" target="_blank" rel="noopener noreferrer">06 51 50 41 73</a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <div className="contact__info-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11.192C11.436 11.192 12.6 10.028 12.6 8.592C12.6 7.156 11.436 5.992 10 5.992C8.564 5.992 7.4 7.156 7.4 8.592C7.4 10.028 8.564 11.192 10 11.192Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M3.017 7.075C4.658 -0.142 15.35 -0.133 16.983 7.083C17.942 11.317 15.308 14.9 13 17.117C11.325 18.733 8.675 18.733 6.992 17.117C4.692 14.9 2.058 11.308 3.017 7.075Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact__info-label">Adresse</span>
                    <span className="contact__info-value">Mulhouse, France</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
