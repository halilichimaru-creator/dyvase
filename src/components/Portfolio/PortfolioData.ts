export interface CaseStudy {
    id: string
    title: string
    client: string
    location: string
    category: string
    image: string
    alt: string
    challenge: string
    solution: string
    results: string[]
    link?: string
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'mp-carrelage',
        title: 'Site Vitrine Performance Record',
        client: 'MP Carrelage',
        location: 'Mulhouse',
        category: 'Artisanat',
        image: '/images/maquette-mp-carrelage.jpg',
        alt: 'Création site vitrine Mulhouse - Performance Record MP Carrelage par Dyvase',
        challenge: 'Un artisan talentueux mais invisible en ligne, manquant de moyens pour présenter ses réalisations de manière professionnelle.',
        solution: 'Création d\'un site vitrine ultra-rapide avec une galerie optimisée et un SEO local record pour dominer le trafic à Mulhouse immédiatement.',
        results: [
            'Visibilité record sur "Artisan carrelage Mulhouse"',
            'Chargement instantané sur mobile',
            'Identité de marque haut de gamme'
        ],
        link: '#'
    },
    {
        id: 'cartea-co',
        title: 'Identité Visuelle & Web Design',
        client: 'CARTEA & CO',
        location: 'Mulhouse',
        category: 'Designer de carte de visite',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop',
        alt: 'Agence Web Mulhouse - Design UI/UX et Branding CARTEA & CO',
        challenge: 'Besoin d\'une présence digitale à la hauteur de leurs prestations de luxe pour attirer une clientèle haut de gamme.',
        solution: 'Design minimaliste utilisant des animations fluides (GSAP) et une palette de couleurs terracotta/crème pour un rendu premium.',
        results: [
            'Expérience utilisateur immersive',
            'Augmentation du temps moyen par session',
            'Image de marque cohérente et élégante'
        ]
    }
]
