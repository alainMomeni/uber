import React from 'react';

const VendorForm = ({ handleChange, formData }) => {
    return (
        <>
            <div className="mb-4">
                <label className="block text-gray-700">Photo du restaurant</label>
                <input type="file" name="restaurantPhoto" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Nom du restaurant</label>
                <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Catégorie</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Ville</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Quartier</label>
                <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Heure d'ouverture</label>
                <input type="time" name="openingTime" value={formData.openingTime} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Heure de fermeture</label>
                <input type="time" name="closingTime" value={formData.closingTime} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Numéro de téléphone</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Adresse e-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Mot de passe</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirmation du mot de passe</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
            </div>
        </>
    );
};

export default VendorForm;
