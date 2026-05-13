// ============================================================
//  STATIC MOCK DATA  –  replaces backend API responses
//  Used when the server is unavailable (frontend-only demo)
// ============================================================

const STATIC_PRODUCTS = [
    {
        _id: 'prod-001',
        name: 'Rose Gold Glow Serum',
        price: 48.99,
        description: 'A luxurious vitamin C serum infused with 24K rose-gold particles and hyaluronic acid. Visibly brightens skin tone, reduces fine lines, and delivers an all-day luminous glow.\n\nSuitable for all skin types. Apply 2–3 drops to clean skin every morning before moisturiser.',
        images: [
            'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        _id: 'prod-002',
        name: 'Velvet Noir Lip Collection',
        price: 34.50,
        description: 'A curated set of five long-lasting matte lipsticks in deep, bold shades. Each formula is enriched with vitamin E and shea butter to keep lips soft and hydrated throughout the day.\n\nIncludes: Ruby Noir, Plum Royale, Berry Bliss, Nude Rose, and Classic Red.',
        images: [
            'https://images.unsplash.com/photo-1586495777744-4e6232bf2f5b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        _id: 'prod-003',
        name: 'Midnight Bloom Perfume',
        price: 89.00,
        description: 'An intoxicating eau de parfum blending top notes of black orchid and bergamot with a heart of jasmine and rose, settling into a warm base of sandalwood and musk.\n\n50ml | Longevity: 8–10 hours. Perfect for evening wear.',
        images: [
            'https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        _id: 'prod-004',
        name: 'Pearl Luminance Foundation',
        price: 42.00,
        description: 'A medium-to-full coverage foundation with a natural satin finish. Infused with micro-pearl pigments for a skin-like glow that lasts up to 16 hours.\n\nAvailable in 20 shades. Dermatologist tested, non-comedogenic.',
        images: [
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1631214524020-3c69f7bdddaa?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        _id: 'prod-005',
        name: 'Silk Repair Hair Mask',
        price: 27.99,
        description: 'An intensive 5-minute treatment mask that repairs and strengthens damaged hair. Formulated with argan oil, keratin proteins, and silk amino acids.\n\n250ml jar. For best results use twice weekly on towel-dried hair.',
        images: [
            'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1631730486784-74757f08b57c?q=80&w=800&auto=format&fit=crop'
        ]
    },
    {
        _id: 'prod-006',
        name: 'Crystal Clear Eye Palette',
        price: 55.00,
        description: 'A 12-pan eyeshadow palette featuring a blend of matte, shimmer, and glitter shades ranging from champagne nudes to deep smokey tones.\n\nHighly pigmented, blendable formula with zero fall-out.',
        images: [
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=800&auto=format&fit=crop'
        ]
    }
];

const STATIC_SERVICES = [
    {
        _id: 'svc-001',
        name: 'Signature Facial',
        price: 95.00,
        description: 'A bespoke 60-minute facial tailored to your skin type. Includes deep cleanse, exfoliation, steam, extractions, a customised mask, and finishing moisturiser.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop'
    },
    {
        _id: 'svc-002',
        name: 'Luxury Hair Treatment',
        price: 120.00,
        description: 'A professional keratin smoothing treatment combined with a deep-conditioning Olaplex ritual. Leaves hair visibly stronger, shinier, and frizz-free for up to 3 months.',
        image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop'
    },
    {
        _id: 'svc-003',
        name: 'Bridal Makeup',
        price: 180.00,
        description: 'A full-day bridal makeup service including a trial session. Our lead artist uses only premium brands to create a personalised look that photographs beautifully and lasts all day.',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop'
    },
    {
        _id: 'svc-004',
        name: 'Gel Manicure & Pedicure',
        price: 75.00,
        description: 'A relaxing nail spa experience combining shaping, cuticle care, a soothing scrub and massage, followed by a long-lasting gel colour of your choice.',
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop'
    },
    {
        _id: 'svc-005',
        name: 'Lash Lift & Tint',
        price: 65.00,
        description: 'A semi-permanent treatment that lifts and curls your natural lashes from root to tip, followed by a deep tint for a mascara-free, wide-eyed look lasting 6–8 weeks.',
        image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=800&auto=format&fit=crop'
    },
    {
        _id: 'svc-006',
        name: 'Hot Stone Massage',
        price: 110.00,
        description: 'A deeply therapeutic 75-minute full-body massage using smooth, heated basalt stones combined with aromatic oils to melt away tension and promote total relaxation.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop'
    }
];
