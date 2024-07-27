import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';

function ModifierUserDashForm() {
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
    <div className="">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-6xl w-full dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Modifier le profil</h2>
        
        {message && <div className="mb-4 text-center text-green-500">{message}</div>}

        <div className="mb-4">
          <label htmlFor="profilePhoto" className="block text-gray-700 dark:text-gray-300">Photo du restaurant</label>
          <input
            type="file"
            id="profilePhoto"
            name="profilePhoto"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="restaurantName" className="block text-gray-700 dark:text-gray-300">Nom du restaurant</label>
          <input
            type="text"
            id="restaurantName"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 dark:text-gray-300">Catégorie</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 dark:text-gray-300">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="district" className="block text-gray-700 dark:text-gray-300">Quartier</label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.neighborhood}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="openingTime" className="block text-gray-700 dark:text-gray-300">Heure d'ouverture</label>
          <input
            type="time"
            id="openingTime"
            name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>

        <div className="mb-4">
        <label className="block text-gray-700">Heure de fermeture</label>
        <input type="time" name="closingTime" value={formData.closingTime} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
      </div>
        
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 dark:text-gray-300">Numéro de téléphone</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>        
        
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 dark:text-gray-300">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
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

export default ModifierUserDashForm;
