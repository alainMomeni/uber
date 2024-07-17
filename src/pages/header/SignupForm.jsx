import React from 'react';
import { FaSignInAlt, FaTimes } from 'react-icons/fa';

function SignupForm({ closeForm, signupType }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-h-screen overflow-y-auto">
                <h2 className="text-2xl mb-4">Inscription {signupType === 'client' ? 'Consommateur' : 'Restaurateur'}</h2>
                <form>
                    {signupType === 'client' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700">Photo de profil</label>
                                <input type="file" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nom</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Prénom</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Numéro de téléphone</label>
                                <input type="tel" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Adresse e-mail</label>
                                <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mot de passe</label>
                                <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Confirmation du mot de passe</label>
                                <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                        </>
                    )}
                    {signupType === 'vendeur' && (
                        <>
                           <div className="mb-4">
                                <label className="block text-gray-700">Photo du restaurant</label>
                                <input type="file" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nom du restaurant</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Catégorie</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Ville</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Quartier</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Heure d'ouverture</label>
                                <input type="time" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Heure de fermeture</label>
                                <input type="time" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Numéro de téléphone</label>
                                <input type="tel" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Adresse email</label>
                                <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Description</label>
                                <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mot de passe</label>
                                <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Confirmation du mot de passe</label>
                                <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                            </div>
                        </>
                    )}
                    <button type="submit" className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-400 transition duration-300 flex items-center justify-center">
                        <FaSignInAlt className="mr-2" />
                        S'inscrire
                    </button>
                    <button
                        type="button"
                        className="w-full bg-gray-500 text-white py-2 rounded-lg mt-2 hover:bg-gray-400 flex items-center justify-center"
                        onClick={closeForm}
                    >
                        <FaTimes className="mr-2" />
                        Annuler
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
