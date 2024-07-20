// app.js (ou server.js, en fonction de votre configuration)
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

// Autres configurations

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





