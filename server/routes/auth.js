const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const fileUpload = require('../middleware/fileUpload');

const router = express.Router();

router.post('/signup', fileUpload, async (req, res, next) => {
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

    // Handle file uploads
    if (req.files) {
      const profilePhoto = req.files.find(file => file.fieldname === 'profilePhoto');
      if (profilePhoto) {
        userData.profilePhoto = profilePhoto.path;
      }
    }

    const newUser = new User(userData);
    await newUser.save();

    req.login(newUser, (err) => {
      if (err) return next(err);
      return res.status(201).json({ message: 'Utilisateur créé et connecté avec succès', user: newUser });
    });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur: ' + error.message });
  }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Connexion réussie', user: req.user });
});

router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la déconnexion' });
    }
    res.json({ message: 'Déconnexion réussie' });
  });
});

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

module.exports = router;



