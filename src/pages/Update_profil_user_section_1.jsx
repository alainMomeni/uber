import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';

function UpdateProfilUserForm() {
  const [formData, setFormData] = useState({
    profilePhoto: null,
    restaurantPhoto: null,
    firstName: '',
    lastName: '',
    restaurantName: '',
    category: '',
    city: '',
    neighborhood: '',
    openingTime: '',
    closingTime: '',
    phoneNumber: '',
    email: '',
    description: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
      setFormData(prevState => ({
        ...prevState,
        ...response.data,
        password: '',
        confirmPassword: '',
        profilePhoto: null,
        restaurantPhoto: null
      }));
    } catch (error) {
      console.error('Error fetching user data:', error);
      setMessage('Erreur lors de la récupération des données utilisateur');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.password !== formData.confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas');
      setIsLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'profilePhoto' || key === 'restaurantPhoto') {
          if (formData[key] instanceof File) {
            formDataToSend.append(key, formData[key]);
          }
        } else if (key !== 'confirmPassword') {
          formDataToSend.append(key, formData[key]);
        }
      });
  
      const response = await axios.put('http://localhost:5000/api/update-user', formDataToSend, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
  
      setMessage('Profil mis à jour avec succès');
      setIsLoading(false);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      setMessage(error.response?.data?.message || 'Erreur lors de la mise à jour du profil');
      setIsLoading(false);
    }
  };

  return (
    <div className="md:mt-16 mt-20 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white mt-4 mb-8 p-6 rounded-lg shadow-md dark:bg-gray-800 w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Modifier vos informations</h2>
        {message && <div className="text-red-500 mb-4">{message}</div>}

        <div className="mb-4">
          <label htmlFor="profilePhoto" className="block text-gray-700 dark:text-gray-300">Photo de profil</label>
          <input
            type="file"
            id="profilePhoto"
            name="profilePhoto"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 dark:text-gray-300">Nom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 dark:text-gray-300">Prenom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 dark:text-gray-300">Confirmation du mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
          />
        </div>

        <button type="submit" disabled={isLoading} className="w-full bg-lime-500 text-white p-2 rounded mt-4 hover:bg-lime-400 transition duration-200 flex items-center justify-center">
          {isLoading ? 'Mise à jour...' : (
            <>
              <FaEdit className="mr-2" /> Modifier
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default UpdateProfilUserForm;



