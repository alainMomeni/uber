import React from 'react';
import { FaUser, FaStore } from 'react-icons/fa';

function SignupChoiceForm({ chooseSignupType }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 transition-transform transform duration-300">
                <h2 className="text-3xl mb-6 font-bold text-center text-gray-800">Choisissez votre type d'inscription</h2>
                <div className="flex justify-around">
                    <button
                        className="bg-lime-500 text-white py-3 px-6 rounded-lg hover:bg-lime-400 transition duration-300 flex items-center justify-center w-46 shadow-md hover:shadow-lg"
                        onClick={() => chooseSignupType('client')}
                    >
                        <FaUser className="w-6 h-6 mr-2" />
                        <span>Consommateur</span>
                    </button>
                    <button
                        className="bg-lime-500 text-white py-3 px-6 rounded-lg hover:bg-lime-400 transition duration-300 flex items-center justify-center w-46 shadow-md hover:shadow-lg"
                        onClick={() => chooseSignupType('vendeur')}
                    >
                        <FaStore className="w-6 h-6 mr-2" />
                        <span>Restaurateur</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignupChoiceForm;
