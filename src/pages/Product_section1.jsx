import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

function ProductSection1() {
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
        photo: `http://localhost:5000/assets/${product.photo}`,
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

  return (
    <div className="dark:bg-gray-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={formData.photo}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-lime-500 text-white py-2 px-4 rounded-full font-bold transition duration-300 hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400 flex items-center justify-center">
                  <FaShoppingCart className="mr-2" />
                  Ajouter au panier
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-red-500 text-white py-2 px-4 rounded-full font-bold transition duration-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center">
                  <FaTimes className="mr-2" />
                  Annuler
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{formData.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base mb-6">
              {formData.description}
            </p>
            <div className="flex mb-6">
              <div className="mr-6">
                <span className="font-bold text-gray-700 dark:text-gray-300">Prix:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">{formData.price} franc</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Disponibilité:</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">En Stock</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Décrivez votre commande:</span>
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">Votre commentaire</label>
                  <textarea
                    id="comment"
                    rows="6"
                    className="w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:bg-gray-800"
                    placeholder="Écrivez votre commentaire..."
                    required
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection1;
