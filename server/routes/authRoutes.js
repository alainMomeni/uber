const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const Login = require('../models/login');
const Client = require('../models/client');
const Vendor = require('../models/vendor');
const { jwtSecret } = require('../config');

const router = express.Router();

// Configuration de multer pour gérer les fichiers
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../src/assets'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.post('/signup', upload.fields([{ name: 'profilePhoto', maxCount: 1 }, { name: 'restaurantPhoto', maxCount: 1 }]), async (req, res, next) => {
    const { email, password, signupType } = req.body;

    // Debug: log the request body
    console.log('Request body:', req.body);

    try {
        // Validation des données
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }
        if (!signupType) {
            return res.status(400).json({ error: 'Signup type is required' });
        }

        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        let newUser;

        if (signupType === 'client') {
            newUser = new Client(req.body);
        } else if (signupType === 'vendeur') {
            newUser = new Vendor(req.body);
        } else {
            return res.status(400).json({ error: 'Invalid signup type' });
        }

        // Ajouter le chemin de la photo au document utilisateur
        if (req.files.profilePhoto) {
            newUser.profilePhoto = req.files.profilePhoto[0].path;
        }
        if (req.files.restaurantPhoto) {
            newUser.restaurantPhoto = req.files.restaurantPhoto[0].path;
        }

        newUser.password = hashedPassword;
        const savedUser = await newUser.save();

        const login = new Login({
            userId: savedUser._id,
            email: savedUser.email,
            password: hashedPassword,
            type: signupType,
        });

        await login.save();

        const token = jwt.sign({ userId: login.userId, type: login.type }, jwtSecret, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const login = await Login.findOne({ email });
        if (!login) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, login.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: login.userId, type: login.type }, jwtSecret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;



