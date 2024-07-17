const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://alainmomeni01:5Ew0Ko8TVI2rjmCa@cluster0.nti049d.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("uber");
        const users = database.collection("user");

        // Ajout d'un nouvel utilisateur
        const newUser = {
            photo_profil: "url_de_la_photo_profil",
            nom: "Doe",
            prenom: "John",
            numero_telephone: "0123456789",
            adresse_email: "john.doe@example.com",
            login: "johndoe",
            password: "securepassword"
        };

        const result = await users.insertOne(newUser);
        console.log(`Nouvel utilisateur inséré avec l'ID: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
