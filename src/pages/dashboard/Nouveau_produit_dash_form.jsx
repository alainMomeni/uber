import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function NouveauProduitForm() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex items-center justify-center min-w-screen ">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Ajouter un nouveau produit</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Nom du produit</label>
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



