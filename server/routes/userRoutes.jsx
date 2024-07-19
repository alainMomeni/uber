
const express = require('express');
const router = express.Router();
const upload = require('../server'); // Importing multer instance
const Client = require('../models/client');
const Vendor = require('../models/vendor');

router.post('/signup', upload.fields([{ name: 'profilePhoto' }, { name: 'restaurantPhoto' }]), async (req, res) => {
    const { signupType, ...data } = req.body;
    let user;

    if (signupType === 'client') {
        user = new Client({
            ...data,
            profilePhoto: req.files['profilePhoto'] ? req.files['profilePhoto'][0].path : null,
        });
    } else if (signupType === 'vendeur') {
        user = new Vendor({
            ...data,
            restaurantPhoto: req.files['restaurantPhoto'] ? req.files['restaurantPhoto'][0].path : null,
        });
    }

    try {
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
