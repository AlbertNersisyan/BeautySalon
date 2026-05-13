require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGO_URI = process.env.DB_URL || 'mongodb://localhost:27017/beautysalon';

const menuItems = [
    {
        name: 'Classic Facial Treatment',
        price: 45,
        description: 'A deep-cleansing facial that removes impurities, exfoliates dead skin cells, and leaves your skin glowing and refreshed.',
        images: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400']
    },
    {
        name: 'Anti-Aging Serum Kit',
        price: 89,
        description: 'Premium anti-aging serum with retinol and vitamin C to reduce fine lines, wrinkles, and dark spots for a youthful look.',
        images: ['https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400']
    },
    {
        name: 'Hydrating Face Mask Set',
        price: 35,
        description: 'Set of 5 luxurious hydrating sheet masks infused with hyaluronic acid, aloe vera, and collagen for intense moisture.',
        images: ['https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400']
    },
    {
        name: 'Rose Gold Eyeshadow Palette',
        price: 52,
        description: '18 stunning rose gold and warm-toned eyeshadow shades, highly pigmented and blendable for every occasion.',
        images: ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400']
    },
    {
        name: 'Matte Lipstick Collection',
        price: 28,
        description: 'Set of 6 long-lasting matte lipsticks in bold, wearable shades. Enriched with vitamin E for comfortable wear.',
        images: ['https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=400']
    },
    {
        name: 'Keratin Hair Treatment',
        price: 120,
        description: 'Professional-grade keratin smoothing treatment that eliminates frizz, adds shine, and leaves hair silky for up to 3 months.',
        images: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400']
    },
    {
        name: 'Argan Oil Hair Mask',
        price: 38,
        description: 'Rich nourishing hair mask with pure Moroccan argan oil to repair damaged hair, add shine, and prevent breakage.',
        images: ['https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400']
    },
    {
        name: 'Gel Nail Polish Set',
        price: 44,
        description: 'Professional gel nail polish in 12 trending colors. Long-lasting up to 21 days with zero chipping.',
        images: ['https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400']
    },
    {
        name: 'Luxury Body Scrub',
        price: 32,
        description: 'Exfoliating coffee and coconut sugar body scrub that smooths skin texture, boosts circulation, and deeply moisturizes.',
        images: ['https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400']
    },
    {
        name: 'Vitamin C Brightening Moisturizer',
        price: 58,
        description: 'Lightweight daily moisturizer with 15% vitamin C complex that brightens dull skin, evens skin tone, and provides SPF 30 protection.',
        images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400']
    },
    {
        name: 'Professional Makeup Brush Set',
        price: 65,
        description: '15-piece professional makeup brush set with synthetic bristles. Includes brushes for foundation, contouring, blending, and more.',
        images: ['https://images.unsplash.com/photo-1631214499049-6d7ce8f1f8dd?w=400']
    },
    {
        name: 'Micellar Cleansing Water',
        price: 22,
        description: 'Gentle yet powerful micellar water that removes makeup, dirt, and impurities without rinsing — perfect for all skin types.',
        images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400']
    },
    {
        name: 'Lavender Relaxing Bath Bombs Set',
        price: 26,
        description: 'Set of 8 handcrafted bath bombs with lavender essential oil, shea butter, and pink Himalayan salt for the ultimate relaxation.',
        images: ['https://images.unsplash.com/photo-1517974196-e9dbf0b77be8?w=400']
    },
    {
        name: 'Contouring & Highlighting Duo',
        price: 41,
        description: 'Professional contouring and highlighting palette with matte contour shades and shimmer highlighters for sculpted, radiant skin.',
        images: ['https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400']
    },
    {
        name: 'Peptide Eye Cream',
        price: 74,
        description: 'Advanced eye cream with peptides and caffeine to reduce puffiness, dark circles, and crow\'s feet for brighter, younger-looking eyes.',
        images: ['https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400']
    },
    {
        name: 'SPF 50 Sunscreen Lotion',
        price: 30,
        description: 'Broad-spectrum SPF 50 sunscreen that protects against UVA and UVB rays. Lightweight, non-greasy formula suitable for daily use.',
        images: ['https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400']
    },
    {
        name: 'Volumizing Mascara',
        price: 24,
        description: 'Buildable volumizing mascara with a curved brush that lifts, lengthens, and adds dramatic volume — smudge-proof formula.',
        images: ['https://images.unsplash.com/photo-1631214524020-3c69932f5f5b?w=400']
    },
    {
        name: 'Collagen Boosting Night Cream',
        price: 96,
        description: 'Intensive overnight repair cream with marine collagen and retinol that firms skin, reduces wrinkles, and restores radiance while you sleep.',
        images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400']
    }
];

async function seed() {
    try {
        console.log('🔌 Connecting to MongoDB at:', MONGO_URI);
        await mongoose.connect(MONGO_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing products
        const deleted = await Product.deleteMany({});
        console.log(`🗑️  Cleared ${deleted.deletedCount} existing products`);

        // Insert new items
        const inserted = await Product.insertMany(menuItems);
        console.log(`🌱 Successfully seeded ${inserted.length} menu items:`);
        inserted.forEach((item, i) => {
            console.log(`   ${i + 1}. ${item.name} — $${item.price}`);
        });

        console.log('\n🎉 Database seeding complete! Open MongoDB Compass at:');
        console.log('   mongodb://localhost:27017');
        console.log('   Database: beautysalon → Collection: products');

    } catch (err) {
        console.error('❌ Seeding failed:', err.message);
    } finally {
        await mongoose.disconnect();
        console.log('🔌 Disconnected from MongoDB');
        process.exit(0);
    }
}

seed();
