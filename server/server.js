const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://alainmomeni01:5Ew0Ko8TVI2rjmCa@cluster0.nti049d.mongodb.net/uber', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const clientSchema = new mongoose.Schema({
    profilePhoto: String,
    lastName: String,
    firstName: String,
    phoneNumber: String,
    email: String,
    password: String,
});

const vendorSchema = new mongoose.Schema({
    profilePhoto: String,
    restaurantPhoto: String,
    restaurantName: String,
    category: String,
    city: String,
    neighborhood: String,
    openingTime: String,
    closingTime: String,
    phoneNumber: String,
    email: String,
    description: String,
    password: String,
});

const Client = mongoose.model('Client', clientSchema);
const Vendor = mongoose.model('Vendor', vendorSchema);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../src/assets');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

app.post('/signup', upload.fields([{ name: 'profilePhoto' }, { name: 'restaurantPhoto' }]), async (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

