import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function HeaderUser() {

    return (
        <header className="h-20 sm:h-20 md:h-16 flex items-center z-30 w-full border-b-4 bg-white fixed top-0">
            <div className="container mx-auto px-6 md:px-0 flex items-center justify-between">
                <div>
                    <img className="h-20 w-24 md:mt-2" src="../src/assets/logo2.png" alt="My Image" />
                </div>
                <div className="flex items-center">
                    <nav className="font-sen text-gray-800 dark:text-white uppercase text-sm lg:flex items-center hidden">
                        <div className="pr-4">
                            <form className="max-w-md mx-auto">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-lime-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="ps-10 text-sm text-gray-900 border border-gray-300 focus:outline-none rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 md:py-2.5 md:pr-48" placeholder="Entrez un plat…" required />
                                </div>
                            </form>
                        </div>
                        <div className="pr-4 py-2 px-4 mt-2">
                            <div className="relative">
                                <FaShoppingCart className="text-2xl" />
                                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1">
                                    3 {/* Nombre de produits dans le panier */}
                                </span>
                            </div>
                        </div>
                        <div
                            className=" py-2 px-4 text-md mr-4"
                        >
                            <img
                                src="../src/assets/bliss.jpg"
                                alt="Profile"
                                className="w-10 h-10 rounded-full border"
                            />
                        </div>
                    </nav>
                    <button className="lg:hidden flex flex-col ml-4">
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default HeaderUser;
