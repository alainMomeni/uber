import React, { useState } from 'react';
import { FaTimes, FaSignInAlt } from 'react-icons/fa';
import SignupChoiceForm from './SignupChoiceForm';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import SignupForm from './SignupForm/SignupForm';

function Header() {
    const [isSignupChoiceOpen, setIsSignupChoiceOpen] = useState(false);
    const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
    const [signupType, setSignupType] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

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

                {isSignupChoiceOpen && <SignupChoiceForm chooseSignupType={chooseSignupType} />}
                {isSignupFormOpen && <SignupForm closeForm={closeSignupForm} signupType={signupType} />}
                {isLoginFormOpen && <LoginForm closeForm={closeLoginForm} />}
            </header>

            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
}

function LoginForm({ closeForm }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-sm max-h-screen overflow-y-auto">
                <h2 className="text-2xl mb-4">Connexion</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Adresse email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mot de passe</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300" />
                    </div>
                    <button type="submit" className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-400 transition duration-300 flex items-center justify-center">
                        <FaSignInAlt className="mr-2" />
                        Se connecter
                    </button>
                    <button
                        type="button"
                        className="w-full bg-gray-500 text-white py-2 rounded-lg mt-2 hover:bg-gray-400 flex items-center justify-center"
                        onClick={closeForm}
                    >
                        <FaTimes className="mr-2" />
                        Annuler
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Header;









