import React, { useState } from 'react';
import ClientForm from './ClientForm';
import VendorForm from './VendorForm';
import { FaTimes } from 'react-icons/fa';

const SignupForm = ({ closeForm, signupType }) => {
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                body: formData,
            });
            
            if (response.ok) {
                console.log('User created successfully');
                closeForm();  // Close the form on success
            } else {
                const errorData = await response.json();
                console.log('Error data:', errorData);  // Log error data
                if (errorData.message === 'Les mots de passe ne correspondent pas') {
                    setFieldErrors({ confirmPassword: errorData.message });
                } else if (errorData.message === 'Email déjà utilisé') {
                    setFieldErrors({ email: errorData.message });
                } else {
                    setError(errorData.message || 'Inscription échouée');
                }
            }
        } catch (error) {
            console.error('Erreur:', error);
            setError('Une erreur inattendue s\'est produite. Veuillez réessayer.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl">
                        Inscription {signupType === 'client' ? 'Consommateur' : 'Restaurateur'}
                    </h2>
                    <FaTimes className="cursor-pointer" onClick={closeForm} />
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {signupType === 'client' ? (
                        <ClientForm fieldErrors={fieldErrors} />
                    ) : (
                        <VendorForm fieldErrors={fieldErrors} />
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















