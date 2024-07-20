const express = require('express');
const mongoose = require('mongoose');
const busboy = require('busboy');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://alainmomeni01:5Ew0Ko8TVI2rjmCa@cluster0.nti049d.mongodb.net/uber', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

const userSchema = new mongoose.Schema({
  typeUser: String,
  profilePhoto: String,
  restaurantPhoto: String,
  firstName: String,
  lastName: String,
  restaurantName: String,
  category: String,
  city: String,
  neighborhood: String,
  openingTime: String,
  closingTime: String,
  phoneNumber: String,
  email: { type: String, unique: true },
  description: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const uploadsDir = path.join(__dirname, '../src/assets');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.post('/api/signup', (req, res) => {
  const bb = busboy({ headers: req.headers });
  const userData = {};
  const fileBuffers = {};

  bb.on('file', (name, file, info) => {
    const buffers = [];
    file.on('data', data => buffers.push(data));
    file.on('end', () => {
      fileBuffers[name] = { buffer: Buffer.concat(buffers), info };
    });
  });

  bb.on('field', (name, val) => {
    userData[name] = val;
  });

  bb.on('finish', async () => {
    try {
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

      for (const [name, { buffer, info }] of Object.entries(fileBuffers)) {
        const fileExtension = path.extname(info.filename);
        let baseFileName;
        
        if (name === 'profilePhoto') {
          baseFileName = `${userData.email}`;
        } else if (name === 'restaurantPhoto') {
          baseFileName = `${userData.email}`;
        } else {
          baseFileName = `${name}_${Date.now()}`;
        }
        
        const filename = `${baseFileName}${fileExtension}`;
        const uploadPath = path.join(uploadsDir, filename);
        fs.writeFileSync(uploadPath, buffer);
        userData[name] = '/assets/' + filename;
      }

      const newUser = new User(userData);
      await newUser.save();
      res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
      res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur: ' + error.message });
    }
  });

  req.pipe(bb);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

