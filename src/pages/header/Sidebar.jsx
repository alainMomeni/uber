import React from 'react';
import { FaSignInAlt, FaTimes } from 'react-icons/fa';
import SearchBar from './SearchBar';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}>
            <div className="fixed top-0 left-0 w-64 bg-white h-full shadow-lg z-50 transform transition-transform duration-300" onClick={e => e.stopPropagation()}>
                <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-800" onClick={toggleSidebar}>
                    <FaTimes size={24} />
                </button>
                <nav className="flex flex-col p-4">
                    <SearchBar />
                    <a href="#" className="font-bebas-neue uppercase py-2 hover:text-lime-600 transition duration-300">
                        Devenir partenaire
                    </a>
                    <button
                        className="font-bebas-neue uppercase py-2 px-2 hover:text-lime-600 transition duration-300"
                        onClick={() => {
                            toggleSidebar();
                            toggleLoginForm();
                        }}
                    >
                        Se connecter
                    </button>
                    <button
                        className="font-bebas-neue uppercase py-2 px-4 rounded-lg bg-lime-500 border-2 border-transparent text-white text-md mt-4 hover:bg-lime-400 transition duration-300"
                        onClick={() => {
                            toggleSidebar();
                            toggleSignupChoice();
                        }}
                    >
                        S'inscrire
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
