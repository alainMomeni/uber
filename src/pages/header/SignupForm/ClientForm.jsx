import React from 'react';

const ClientForm = () => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700">Photo de profil</label>
                <input type="file" name="profilePhoto" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Nom</label>
                <input type="text" name="lastName" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Prénom</label>
                <input type="text" name="firstName" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
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

export default ClientForm;
