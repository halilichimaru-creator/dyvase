'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '@/lib/supabase'
import './LeadMagnet.css'

export default function LeadMagnet() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const { error } = await supabase
                .from('leads_guide')
                .insert([{ email, nom: name }])

            if (error) throw error

            setStatus('success')
            
            // Trigger download after a short delay
            setTimeout(() => {
                const link = document.createElement('a')
                const fileName = '10 erreurs qui tuent votre visibilité à Mulhouse.pdf'
                link.href = `/guides/${encodeURIComponent(fileName)}`
                link.download = fileName
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            }, 1000)

        } catch (err) {
            console.error('Lead Magnet Error:', err)
            setStatus('error')
        }
    }

    return (
        <section className="lead-magnet">
            <div className="container">
                <motion.div 
                    className="lead-magnet__card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="lead-magnet__content">
                        <span className="lead-magnet__badge">Ressource Gratuite</span>
                        <h2 className="lead-magnet__title">
                            10 erreurs qui tuent votre <span className="highlight">visibilité à Mulhouse</span>
                        </h2>
                        <p className="lead-magnet__description">
                            Téléchargez notre mini-guide PDF exclusif pour booster votre référencement local et devancer vos concurrents haut-rhinois.
                        </p>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div 
                                    className="lead-magnet__success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="success-icon">✓</div>
                                    <p>Merci ! Votre téléchargement va démarrer...</p>
                                </motion.div>
                            ) : (
                                <motion.form 
                                    className="lead-magnet__form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="form-group-row">
                                        <input 
                                            type="text" 
                                            placeholder="Votre prénom" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required 
                                            className="lead-input"
                                        />
                                        <input 
                                            type="email" 
                                            placeholder="Votre e-mail professionnel" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required 
                                            className="lead-input"
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary lead-submit"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Envoi...' : 'Recevoir le guide PDF'}
                                    </button>
                                    {status === 'error' && (
                                        <p className="error-msg">Une erreur s'est produite. Réessayez.</p>
                                    )}
                                </motion.form>
                            )}
                        </AnimatePresence>
                        
                        <p className="lead-magnet__privacy">
                            🔒 Vos données sont en sécurité. Désinscription possible à tout moment.
                        </p>

                        <div className="lead-magnet__linkedin">
                            <p>Retrouvez également nos conseils sur LinkedIn :</p>
                            <a 
                                href="https://www.linkedin.com/in/dyvase-agence-40a5b13b7/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="linkedin-link"
                            >
                                <svg className="linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                Suivre Dyvase sur LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
