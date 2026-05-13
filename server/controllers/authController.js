const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'supersecret123', {
        expiresIn: '30d',
    });
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Seed admin user
exports.seedAdmin = async (req, res) => {
    try {
        const adminExists = await User.findOne({ username: 'abo123' });
        if (!adminExists) {
            await User.create({
                username: 'abo123',
                password: 'admin123'
            });
            console.log("Admin user seeded.");
        }

        // Seed 8 products and 3 services
        const Product = require('../models/Product');
        const Service = require('../models/Service');

        const productCount = await Product.countDocuments();
        if (productCount === 0) {
            const products = [
                { name: "Radiance Serum", price: 45.00, description: "Hydrating and brightening.", images: ["https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop"] },
                { name: "Silk Hair Mask", price: 32.50, description: "Deep conditioning.", images: ["https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"] },
                { name: "Velvet Matte Lipstick", price: 28.00, description: "Long-lasting color.", images: ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop"] },
                { name: "Rosewater Toner", price: 24.00, description: "Refreshing daily toner.", images: ["https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop"] },
                { name: "Charcoal Face Wash", price: 18.00, description: "Deep pore cleansing.", images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"] },
                { name: "Vitamin C Cream", price: 55.00, description: "Anti-aging night cream.", images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"] },
                { name: "Jade Roller", price: 15.00, description: "Depuffing facial tool.", images: ["https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop"] },
                { name: "Luminous Foundation", price: 42.00, description: "Flawless coverage.", images: ["https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"] }
            ];
            await Product.insertMany(products);
            console.log("8 Products seeded.");
        }

        const serviceCount = await Service.countDocuments();
        if (serviceCount === 0) {
            const services = [
                { name: "Signature Haircut", price: 80.00, description: "Wash, cut, and luxury blowdry.", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop" },
                { name: "Bridal Makeup", price: 200.00, description: "Full glam application with lashes.", image: "https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=800&auto=format&fit=crop" },
                { name: "Spa Manicure", price: 45.00, description: "Cuticle care, massage, and gel polish.", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop" }
            ];
            await Service.insertMany(services);
            console.log("3 Services seeded.");
        }

    } catch (err) {
        console.error("Error seeding DB", err);
    }
}
