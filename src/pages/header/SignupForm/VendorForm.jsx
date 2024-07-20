import React from 'react';

const VendorForm = () => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700">Photo du restaurant</label>
                <input type="file" name="restaurantPhoto" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Nom du restaurant</label>
                <input type="text" name="restaurantName" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Catégorie</label>
                <input type="text" name="category" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Ville</label>
                <input type="text" name="city" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Quartier</label>
                <input type="text" name="neighborhood" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Heure d'ouverture</label>
                <input type="time" name="openingTime" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Heure de fermeture</label>
                <input type="time" name="closingTime" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Numéro de téléphone</label>
                <input type="tel" name="phoneNumber" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Adresse e-mail</label>
                <input type="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea name="description" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Mot de passe</label>
                <input type="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirmation du mot de passe</label>
                <input type="password" name="confirmPassword" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
        </>
    );
};

export default VendorForm;

