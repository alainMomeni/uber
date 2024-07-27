const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const fileUpload = require('../middleware/fileUpload');
const path = require('path');

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
      if (req.files.profilePhoto && req.files.profilePhoto[0]) {
        userData.profilePhoto = path.basename(req.files.profilePhoto[0].path);
      }
      if (req.files.restaurantPhoto && req.files.restaurantPhoto[0]) {
        userData.restaurantPhoto = path.basename(req.files.restaurantPhoto[0].path);
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

router.put('/update-user', fileUpload, async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    console.log('Received data:', req.body);
    console.log('Received files:', req.files);

    const updatedData = req.body;
    const userId = req.user._id;

    // Handle file uploads
    if (req.files) {
      if (req.files.profilePhoto) {
        updatedData.profilePhoto = path.basename(req.files.profilePhoto[0].path);
      }
      if (req.files.restaurantPhoto) {
        updatedData.restaurantPhoto = path.basename(req.files.restaurantPhoto[0].path);
      }
    }

    // If password is provided, hash it
    if (updatedData.password) {
      const saltRounds = 10;
      updatedData.password = await bcrypt.hash(updatedData.password, saltRounds);
    } else {
      // If password is not provided, remove it from updatedData to avoid overwriting with undefined
      delete updatedData.password;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user: ' + error.message, error: error.toString() });
  }
});

module.exports = router;



