import React, { useState, useRef } from 'react';
import ClientForm from './ClientForm';
import VendorForm from './VendorForm';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const SignupForm = ({ closeForm, signupType, onSignupSuccess }) => {
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    // Reset errors
    setError('');
    setFieldErrors({});

    // Check if email is filled
    const email = formData.get('email');
    if (!email) {
      setFieldErrors(prev => ({ ...prev, email: 'L\'adresse e-mail est requise' }));
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        console.log('User created successfully');

        // Attempt to log in the user immediately after signup
        const loginResponse = await axios.post('http://localhost:5000/api/login', {
          email: formData.get('email'),
          password: formData.get('password'),
        });

        if (loginResponse.status === 200) {
          onSignupSuccess();
          closeForm();
        } else {
          setError('Inscription réussie, mais la connexion a échoué.');
        }
      } else {
        const errorData = response.data;
        console.log('Error data:', errorData);
        if (errorData.message === 'Les mots de passe ne correspondent pas') {
          setFieldErrors(prev => ({ ...prev, confirmPassword: errorData.message }));
        } else if (errorData.message === 'Email déjà utilisé') {
          setFieldErrors(prev => ({ ...prev, email: errorData.message }));
        } else {
          setError(errorData.message || 'Inscription échouée');
        }
      }
    } catch (error) {
      console.error('Erreur:', error);
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.message === 'Les mots de passe ne correspondent pas') {
          setFieldErrors(prev => ({ ...prev, confirmPassword: errorData.message }));
        } else if (errorData.message === 'Email déjà utilisé') {
          setFieldErrors(prev => ({ ...prev, email: errorData.message }));
        } else {
          setError(errorData.message || 'Une erreur inattendue s\'est produite. Veuillez réessayer.');
        }
      } else {
        setError('Une erreur inattendue s\'est produite. Veuillez réessayer.');
      }
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
        <form onSubmit={handleSubmit} encType="multipart/form-data" ref={formRef}>
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


















