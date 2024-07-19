const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Login = require('../models/login');
const Client = require('../models/client');
const Vendor = require('../models/vendor');
const { jwtSecret } = require('../config');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password, signupType } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        let newUser;

        if (signupType === 'client') {
            newUser = new Client(req.body);
        } else if (signupType === 'vendeur') {
            newUser = new Vendor(req.body);
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
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

