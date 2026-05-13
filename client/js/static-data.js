// ============================================================
//  STATIC MOCK DATA  –  replaces backend API responses
//  Used when the server is unavailable (frontend-only demo)
// ============================================================

const IMG = {
    serum:       'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=800&q=80',
    skincare:    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    cream:       'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    lipstick:    'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80',
    perfume:     'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
    foundation:  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    eyeshadow:   'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    hair:        'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
    mask:        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    nails:       'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    spa:         'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    makeup:      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    lash:        'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=800&q=80',
    salon:       'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
};

const STATIC_PRODUCTS = [
    {
        _id: 'prod-001',
        name: 'Rose Gold Glow Serum',
        price: 48.99,
        description: 'A luxurious vitamin C serum infused with 24K rose-gold particles and hyaluronic acid. Visibly brightens skin tone, reduces fine lines, and delivers an all-day luminous glow.\n\nSuitable for all skin types. Apply 2–3 drops to clean skin every morning before moisturiser.',
        images: [IMG.serum, IMG.skincare, IMG.cream]
    },
    {
        _id: 'prod-002',
        name: 'Velvet Noir Lip Collection',
        price: 34.50,
        description: 'A curated set of five long-lasting matte lipsticks in deep, bold shades. Each formula is enriched with vitamin E and shea butter to keep lips soft and hydrated throughout the day.\n\nIncludes: Ruby Noir, Plum Royale, Berry Bliss, Nude Rose, and Classic Red.',
        images: [IMG.lipstick, IMG.makeup]
    },
    {
        _id: 'prod-003',
        name: 'Midnight Bloom Perfume',
        price: 89.00,
        description: 'An intoxicating eau de parfum blending top notes of black orchid and bergamot with a heart of jasmine and rose, settling into a warm base of sandalwood and musk.\n\n50ml | Longevity: 8–10 hours. Perfect for evening wear.',
        images: [IMG.perfume, IMG.skincare]
    },
    {
        _id: 'prod-004',
        name: 'Pearl Luminance Foundation',
        price: 42.00,
        description: 'A medium-to-full coverage foundation with a natural satin finish. Infused with micro-pearl pigments for a skin-like glow that lasts up to 16 hours.\n\nAvailable in 20 shades. Dermatologist tested, non-comedogenic.',
        images: [IMG.foundation, IMG.makeup]
    },
    {
        _id: 'prod-005',
        name: 'Silk Repair Hair Mask',
        price: 27.99,
        description: 'An intensive 5-minute treatment mask that repairs and strengthens damaged hair. Formulated with argan oil, keratin proteins, and silk amino acids.\n\n250ml jar. For best results use twice weekly on towel-dried hair.',
        images: [IMG.hair, IMG.salon]
    },
    {
        _id: 'prod-006',
        name: 'Crystal Clear Eye Palette',
        price: 55.00,
        description: 'A 12-pan eyeshadow palette featuring a blend of matte, shimmer, and glitter shades ranging from champagne nudes to deep smokey tones.\n\nHighly pigmented, blendable formula with zero fall-out.',
        images: [IMG.eyeshadow, IMG.foundation]
    },
    {
        _id: 'prod-007',
        name: 'Hydrating Face Mask Set',
        price: 35.00,
        description: 'Set of 5 luxurious hydrating sheet masks infused with hyaluronic acid, aloe vera, and collagen for intense moisture.\n\nOne mask for every day of your beauty week.',
        images: [IMG.mask, IMG.skincare]
    },
    {
        _id: 'prod-008',
        name: 'Luxury Body Scrub',
        price: 32.00,
        description: 'Exfoliating coffee and coconut sugar body scrub that smooths skin texture, boosts circulation, and deeply moisturizes.\n\n300g. Use 2–3 times per week on damp skin in circular motions.',
        images: [IMG.spa, IMG.mask]
    },
    {
        _id: 'prod-009',
        name: 'Vitamin C Brightening Moisturizer',
        price: 58.00,
        description: 'Lightweight daily moisturizer with 15% vitamin C complex that brightens dull skin, evens skin tone, and provides SPF 30 protection.\n\n50ml. Apply morning and evening after cleansing.',
        images: [IMG.cream, IMG.serum]
    },
    {
        _id: 'prod-010',
        name: 'Peptide Eye Cream',
        price: 74.00,
        description: 'Advanced eye cream with peptides and caffeine to reduce puffiness, dark circles, and crow\'s feet for brighter, younger-looking eyes.\n\n15ml. Gently pat around the orbital bone morning and night.',
        images: [IMG.skincare, IMG.cream]
    },
    {
        _id: 'prod-011',
        name: 'Collagen Night Cream',
        price: 96.00,
        description: 'Intensive overnight repair cream with marine collagen and retinol that firms skin, reduces wrinkles, and restores radiance while you sleep.\n\n50ml. Apply as the last step in your evening routine.',
        images: [IMG.cream, IMG.serum]
    },
    {
        _id: 'prod-012',
        name: 'Volumizing Mascara',
        price: 24.00,
        description: 'Buildable volumizing mascara with a curved brush that lifts, lengthens, and adds dramatic volume — smudge-proof formula.\n\n10ml. Clinically tested: 200% more volume from root to tip.',
        images: [IMG.lash, IMG.makeup]
    }
];

const STATIC_SERVICES = [
    {
        _id: 'svc-001',
        name: 'Signature Facial',
        price: 95.00,
        description: 'A bespoke 60-minute facial tailored to your skin type. Includes deep cleanse, exfoliation, steam, extractions, a customised mask, and finishing moisturiser.',
        image: IMG.mask
    },
    {
        _id: 'svc-002',
        name: 'Luxury Hair Treatment',
        price: 120.00,
        description: 'A professional keratin smoothing treatment combined with a deep-conditioning Olaplex ritual. Leaves hair visibly stronger, shinier, and frizz-free for up to 3 months.',
        image: IMG.hair
    },
    {
        _id: 'svc-003',
        name: 'Bridal Makeup',
        price: 180.00,
        description: 'A full-day bridal makeup service including a trial session. Our lead artist uses only premium brands to create a personalised look that photographs beautifully and lasts all day.',
        image: IMG.makeup
    },
    {
        _id: 'svc-004',
        name: 'Gel Manicure & Pedicure',
        price: 75.00,
        description: 'A relaxing nail spa experience combining shaping, cuticle care, a soothing scrub and massage, followed by a long-lasting gel colour of your choice.',
        image: IMG.nails
    },
    {
        _id: 'svc-005',
        name: 'Lash Lift & Tint',
        price: 65.00,
        description: 'A semi-permanent treatment that lifts and curls your natural lashes from root to tip, followed by a deep tint for a mascara-free, wide-eyed look lasting 6–8 weeks.',
        image: IMG.lash
    },
    {
        _id: 'svc-006',
        name: 'Hot Stone Massage',
        price: 110.00,
        description: 'A deeply therapeutic 75-minute full-body massage using smooth, heated basalt stones combined with aromatic oils to melt away tension and promote total relaxation.',
        image: IMG.spa
    }
];
