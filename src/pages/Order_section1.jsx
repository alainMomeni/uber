import React, { useState, useEffect } from 'react';
import { FaTrash, FaDollarSign } from 'react-icons/fa';
import axios from 'axios';
import { useCart } from '../CartContext';

function Order_section1() {
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);
    const { updateCart } = useCart();

    useEffect(() => {
        fetchOrder();
    }, []);

    const fetchOrder = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/cart', { withCredentials: true });
            setOrder(response.data.order);
        } catch (error) {
            setError('Error fetching order details');
            console.error('Error fetching order details:', error);
        }
    };

    const handleRemoveProduct = async (productId) => {
        try {
            await axios.post('http://localhost:5000/api/cart/remove', { productId }, { withCredentials: true });
            fetchOrder();
            updateCart();
        } catch (error) {
            setError('Error removing product from cart');
            console.error('Error removing product from cart:', error);
        }
    };

    const handleConfirmOrder = async () => {
        try {
            await axios.post('http://localhost:5000/api/cart/confirm', {}, { withCredentials: true });
            setOrder(null);
            updateCart();
        } catch (error) {
            setError('Error confirming order');
            console.error('Error confirming order:', error);
        }
    };

    const handleCancelOrder = async () => {
        try {
            await axios.post('http://localhost:5000/api/cart/cancel', {}, { withCredentials: true });
            setOrder(null);
            updateCart();
        } catch (error) {
            setError('Error cancelling order');
            console.error('Error cancelling order:', error);
        }
    };

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!order) {
        return <div>No active order found.</div>;
    }

    return (
        <div>
            <section className="py-6 relative mb-12 mt-16">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                    <h2 className="font-manrope font-bold text-4xl leading-10 text-black">
                        Résumé de la commande
                    </h2>
                    <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11">
                        Merci de faire un achat vous pouvez consulter notre récapitulatif de commande ci-dessous
                    </p>
                    <div className="main-box border border-gray-200 rounded-xl shadow-lg pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                            <div className="data">
                                <p className="font-semibold text-base leading-7 text-black">
                                    Commande No: <span className="text-gray-500">#{order._id}</span>
                                </p>
                                <p className="font-semibold text-base leading-7 text-black mt-4">
                                    Date Commande : <span className="text-gray-500 font-medium">{new Date(order.createdAt).toLocaleDateString()}</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-3 min-[400px]:px-6">
                            {order.products.map((product) => (
                                <div key={product._id} className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                                    <div className="img-box max-lg:w-full">
                                        <img
                                            src={`../src/assets/${product.productId.photo}`}
                                            alt={product.productId.name}
                                            className="aspect-square w-full lg:max-w-[140px]"
                                        />
                                    </div>
                                    <div className="flex flex-row items-center w-full">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                            <div className="flex items-center">
                                                <div>
                                                    <h2 className="font-semibold text-xl leading-8 text-black mb-3">{product.productId.name}</h2>
                                                    <p className="font-semibold text-lg leading-8 mb-3">Prix: <span className="text-gray-500">{product.productId.price}f</span> </p>
                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => handleRemoveProduct(product.productId._id)}
                                                            className="flex items-center font-medium text-base leading-7 text-red-700 pr-4 mr-4 border-r border-gray-200">
                                                            <FaTrash className="mr-1" />
                                                            Annuler
                                                        </button>
                                                        <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                            Qte: <span className="text-gray-500">{product.quantity}</span>
                                                        </p>
                                                        <p className="font-medium text-base leading-7 text-black">
                                                            Description: <span className="text-gray-500">{product.description}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between">
                            <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                                <button
                                    onClick={handleConfirmOrder}
                                    className="flex items-center rounded-lg py-3 px-7 font-semibold text-sm leading-7 text-white bg-lime-500 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-lime-400 hover:shadow-lime-400">
                                    <FaDollarSign className="mr-2" />
                                    Confirmer
                                </button>
                                <button 
                                    onClick={handleCancelOrder}
                                    className="flex items-center inline-flex items-center md:ml-4 rounded-lg py-3 px-8 font-semibold text-sm leading-7 text-white bg-red-700 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-500 hover:shadow-red-400">
                                    <FaTrash className="mr-2" />
                                    Annuler
                                </button>
                                <p className=" text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                                    Vous payez aux livreurs après réception du (des) colis dans <span className="">3 heures</span>
                                </p>
                            </div>
                            <p className="font-semibold text-lg text-black py-6">
                                Prix Total: <span className="text-gray-500">
                                    {order.products.reduce((total, product) => total + (product.productId.price * product.quantity), 0)} franc
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Order_section1;