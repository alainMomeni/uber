import React from 'react';
import { FaTimes, FaSignInAlt } from 'react-icons/fa';

const LoginForm = ({ closeForm }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-sm max-h-screen overflow-y-auto">
                <h2 className="text-2xl mb-4">Connexion</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Adresse email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mot de passe</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                    </div>
                    <button type="submit" className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-400 transition duration-300 flex items-center justify-center">
                        <FaSignInAlt className="mr-2" />
                        Se connecter
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
};

export default LoginForm;
