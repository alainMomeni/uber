import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import SignupChoiceForm from './SignupChoiceForm';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import SignupForm from './SignupForm/SignupForm';
import LoginForm from './LoginForm';
import HeaderUser from '../Header_user';
import axios from 'axios'; // Import axios

function Header() {
    const [isSignupChoiceOpen, setIsSignupChoiceOpen] = useState(false);
    const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
    const [signupType, setSignupType] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true); // Pour gérer l'état de chargement

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
                if (response.status === 200) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                setIsLoggedIn(false);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const toggleSignupChoice = () => {
        setIsSignupChoiceOpen(!isSignupChoiceOpen);
    };

    const chooseSignupType = (type) => {
        setSignupType(type);
        setIsSignupChoiceOpen(false);
        setIsSignupFormOpen(true);
    };

    const closeSignupForm = () => {
        setIsSignupFormOpen(false);
        setSignupType(null);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleLoginForm = () => {
        setIsLoginFormOpen(!isLoginFormOpen);
    };

    const closeLoginForm = () => {
        setIsLoginFormOpen(false);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleSignupSuccess = () => {
        setIsLoggedIn(true);
    };

    if (loading) {
        return <div>Loading...</div>; // Vous pouvez personnaliser cet indicateur de chargement
    }

    if (isLoggedIn) {
        return <HeaderUser />;
    }

    return (
        <>
            <header className="h-20 sm:h-20 md:h-16 flex items-center z-30 w-full border-b-4 bg-white fixed top-0">
                <div className="container mx-auto px-6 md:px-0 flex items-center justify-between">
                    <div>
                        <img className="h-20 w-24 md:mt-2" src="../src/assets/logo2.png" alt="My Image" />
                    </div>
                    <div className="flex items-center">
                        <nav className="font-sen text-gray-800 dark:text-white uppercase text-sm lg:flex items-center hidden">
                            <SearchBar />
                            <div className="pr-4 pl-2">
                                <a href="#" className="font-bebas-neue uppercase py-2 hover:text-lime-600 transition duration-300">
                                    Devenir partenaire
                                </a>
                            </div>
                            <div className="pr-4">
                                <button
                                    className="font-bebas-neue uppercase py-2 px-2 hover:text-lime-600 transition duration-300"
                                    onClick={toggleLoginForm}
                                >
                                    Se connecter
                                </button>
                            </div>
                            <button
                                className="font-bebas-neue uppercase py-2 px-4 rounded-lg bg-lime-500 border-2 border-transparent text-white text-md mr-4 hover:bg-lime-400 transition duration-300"
                                onClick={toggleSignupChoice}
                            >
                                S'inscrire
                            </button>
                        </nav>
                        <button className="lg:hidden flex flex-col ml-4" onClick={toggleSidebar}>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                        </button>
                    </div>
                </div>
            </header>

            {isSidebarOpen && <Sidebar />}
            {isSignupChoiceOpen && <SignupChoiceForm chooseSignupType={chooseSignupType} closeForm={toggleSignupChoice} />}
            {isSignupFormOpen && <SignupForm signupType={signupType} closeForm={closeSignupForm} onSignupSuccess={handleSignupSuccess} />}
            {isLoginFormOpen && <LoginForm closeForm={closeLoginForm} onLoginSuccess={handleLoginSuccess} />}
        </>
    );
}

export default Header;













