// HeaderUser.jsx
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import SearchBar from './header/SearchBar';
import { useCart } from '../CartContext';

axios.defaults.withCredentials = true;

function HeaderUser() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { cartCount } = useCart();

    useEffect(() => {
        fetchUserData();
    }, []);

    // In the fetchUserData function
    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user');
            setUser(response.data);

            // Fetch cart count
            const cartResponse = await axios.get('http://localhost:5000/api/cart/count');
            setCartCount(cartResponse.data.count);
        } catch (error) {
            console.error('Error fetching user data:', error);
            if (error.response && error.response.status === 401) {
                window.location.href = '/login';
            }
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5000/api/logout');
            window.location.href = '/';
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const handleProfileClick = () => {
        if (user && user.typeUser === 'vendor') {
            navigate('/Profil du client');
        }
        if (user && user.typeUser === 'client') {
            navigate('/Profil');
        }
    };

    return (
        <>
            <header className="h-20 sm:h-20 md:h-16 flex items-center z-30 w-full border-b-4 bg-white fixed top-0">
                <div className="container mx-auto px-6 md:px-0 flex items-center justify-between">
                    <div>
                        <img className="h-20 w-24 md:mt-2" src="/src/assets/logo2.png" alt="My Image" />
                    </div>
                    <div className="flex items-center">
                        <nav className="font-sen text-gray-800 dark:text-white uppercase text-sm lg:flex items-center hidden">
                            {location.pathname === '/Liste%20des%20produits' && <SearchBar />}
                            <div className="pr-8 py-2 px-4 mt-2">
                                <Link to="/Commande" className="relative">
                                    <FaShoppingCart className="text-2xl" />
                                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1">
                                        {cartCount}
                                    </span>
                                </Link>
                            </div>
                            <Link to="/Liste des produits" className="pr-4 pl-2">
                                <div className="font-bebas-neue uppercase py-2 hover:text-lime-600 transition duration-300">
                                    Produits
                                </div>
                            </Link>
                            <div className="pr-4 pl-2">
                                <a href="#" className="font-bebas-neue uppercase py-2 hover:text-lime-600 transition duration-300">
                                    Devenir partenaire
                                </a>
                            </div>
                            <div className="">
                                <button
                                    className="font-bebas-neue uppercase py-2 px-2 hover:text-lime-600 transition duration-300"
                                    onClick={handleLogout}
                                >
                                    Se déconnecter
                                </button>
                            </div>
                            <div className="py-2 px-4 text-md mr-4">
                                <img
                                    src={user && user.profilePhoto ? `../src/assets/${user.profilePhoto}` : "../src/assets/bliss.jpg"}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border cursor-pointer"
                                    onClick={handleProfileClick}
                                />
                            </div>
                        </nav>
                        <button className="lg:hidden flex flex-col ml-4" onClick={toggleSidebar}>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-64 bg-white h-full sm:invisible shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="p-4">
                    <h2 className="text-2xl font-bold">Menu</h2>
                    <nav className="mt-12">
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded">Profil</a>
                            </li>
                            <a href="" className="hover:bg-gray-200 rounded block">
                                <li className='flex'>
                                    <h1 className="text-gray-800 px-3 py-2">Panier
                                    </h1>
                                    <div className="relative my-auto">
                                        <FaShoppingCart className="text-2xl" />
                                        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1">
                                            {cartCount}
                                        </span>
                                    </div>
                                </li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default HeaderUser;


