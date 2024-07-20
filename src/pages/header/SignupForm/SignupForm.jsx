import React from 'react';
import ClientForm from './ClientForm';
import VendorForm from './VendorForm';
import { FaTimes } from 'react-icons/fa';

const SignupForm = ({ closeForm, signupType }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl">
                        Inscription {signupType === 'client' ? 'Consommateur' : 'Restaurateur'}
                    </h2>
                    <FaTimes className="cursor-pointer" onClick={closeForm} />
                </div>
                <form>
                    {signupType === 'client' ? (
                        <ClientForm />
                    ) : (
                        <VendorForm />
                    )}
                    <button type="submit" className="w-full bg-lime-500 text-white py-2 rounded-lg">
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
};

export default SignupForm;






