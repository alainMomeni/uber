import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProduitForm() {
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    price: '',
    Quantity: '',
    description: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductData();
  }, [id]);

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${id}`, { withCredentials: true });
      const product = response.data;
      setFormData({
        name: product.name,
        price: product.price,
        Quantity: product.Quantity,
        description: product.description
      });
    } catch (error) {
      console.error('Error fetching product data:', error);
      setError('Failed to load product data. Please try again.');
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
    setIsLoading(true);
    setError('');

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      });

      setIsLoading(false);
      navigate('/Dashboard/Liste des produits');
    } catch (error) {
      setIsLoading(false);
      setError(error.response?.data?.message || 'An error occurred while updating the product. Please try again.');
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-6xl w-full dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Modifier le produit</h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 dark:text-gray-300">Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
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
        
        <button 
          type="submit" 
          className="w-full bg-lime-500 text-white p-2 rounded mt-4 hover:bg-lime-400 transition duration-200 flex items-center justify-center"
          disabled={isLoading}
        >
          <FaEdit className="mr-2" /> {isLoading ? 'Modification en cours...' : 'Modifier'}
        </button>
      </form>
    </div>
  );
}

export default EditProduitForm;

