const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    let userData = req.body;

    if (userData.password !== userData.confirmPassword) {
      return res.status(400).json({ message: 'Les mots de passe ne correspondent pas' });
    }

    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    const saltRounds = 10;
    userData.password = await bcrypt.hash(userData.password, saltRounds);
    delete userData.confirmPassword;

    const newUser = new User(userData);
    await newUser.save();

    req.login(newUser, (err) => {
      if (err) return next(err);
      return res.status(201).json({ message: 'Utilisateur créé et connecté avec succès' });
    });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur: ' + error.message });
  }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Connexion réussie' });
});

module.exports = router;


