import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import LoginForm from '../pages/header/LoginForm';
import { useCart } from '../CartContext';

function ProductSection1() {
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    price: '',
    Quantity: '',
    description: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const { updateCart } = useCart();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    fetchProductData();
    checkAuth();
    fetchOrderData();
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
    }
  };

  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const fetchOrderData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cart', { withCredentials: true });
      const order = response.data.order;
      if (order) {
        const productInOrder = order.products.find(p => p.productId._id === id);
        if (productInOrder) {
          setQuantity(productInOrder.quantity);
          setComment(productInOrder.description);
          setOrderData(productInOrder);
        } else {
          setQuantity(1);
          setComment('');
          setOrderData(null);
        }
      }
    } catch (error) {
      console.error('Error fetching order data:', error);
    }
  };

  const handleAddToCart = async () => {
    if (isLoggedIn) {
      try {
        await axios.post('http://localhost:5000/api/cart/add', {
          productId: id,
          quantity: quantity,
          description: comment
        }, { withCredentials: true });
        console.log('Produit ajouté ou modifié dans le panier');
        updateCart();
        fetchOrderData(); // Refetch order data to update the component state
      } catch (error) {
        console.error('Error adding/modifying cart:', error);
      }
    } else {
      setIsLoginFormOpen(true);
    }
  };

  const handleRemoveFromCart = async () => {
    if (isLoggedIn) {
      try {
        await axios.post('http://localhost:5000/api/cart/remove', { productId: id }, { withCredentials: true });
        console.log('Produit retiré du panier');
        updateCart();
        setQuantity(1);
        setComment('');
        setOrderData(null);
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    } else {
      setIsLoginFormOpen(true);
    }
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginFormOpen(false);
    window.location.reload();
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
                <button
                  className="w-full bg-lime-500 text-white py-2 px-4 rounded-full font-bold transition duration-300 hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart className="mr-2" />
                  {orderData ? "Modifier dans le panier" : "Ajouter au panier"}
                </button>
              </div>
              {orderData && (
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-full font-bold transition duration-300 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
                    onClick={handleRemoveFromCart}
                  >
                    <FaTimes className="mr-2" />
                    Retirer du panier
                  </button>
                </div>
              )}
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
            <div className="mb-6">
              <span className="font-bold text-gray-700 dark:text-gray-300">Quantité:</span>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                min="1"
                className="ml-2 p-1 border border-gray-300 rounded"
              />
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
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isLoginFormOpen && !isLoggedIn && (
        <LoginForm closeForm={closeLoginForm} onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default ProductSection1;
