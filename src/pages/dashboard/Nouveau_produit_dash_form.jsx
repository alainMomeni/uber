import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function NouveauProduitForm() {
  const [formData, setFormData] = useState({
    IdRestaurant: '',
    photo: null,
    name: '',
    price: '',
    Quantity: '',
    description: ''
  });

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
      setFormData(prevData => ({
        ...prevData,
        IdRestaurant: response.data._id
      }));
    } catch (error) {
      console.error('Error fetching user data:', error);
      setMessage('Error fetching user data. Please try again.');
      setIsError(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      photo: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.keys(formData).forEach(key => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/add', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      });

      if (response.status === 201) {
        setMessage('Product created successfully');
        setIsError(false);
        setTimeout(() => {
          navigate('/Dashboard/Liste des produits');
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage(error.response?.data?.message || 'An unexpected error occurred. Please try again.');
      setIsError(true);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Ajouter un nouveau produit</h2>
        {message && (
          <div className={`mb-4 p-2 rounded ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
        <input type="hidden" name="IdRestaurant" value={formData.IdRestaurant} />
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 dark:text-gray-300">Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 dark:text-gray-300">Prix</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Quantity" className="block text-gray-700 dark:text-gray-300">Quantité</label>
          <input
            type="number"
            id="Quantity"
            name="Quantity"
            value={formData.Quantity}
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
        
        <button type="submit" className="w-full bg-lime-500 text-white p-2 rounded mt-4 hover:bg-lime-400 transition duration-200 flex items-center justify-center">
          <FaPlus className="mr-2" />
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default NouveauProduitForm;







