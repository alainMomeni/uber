import React, { useState } from 'react';

function Header() {
    const [isSignupChoiceOpen, setIsSignupChoiceOpen] = useState(false);
    const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
    const [signupType, setSignupType] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

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

    return (
        <>
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
                                        <input type="search" id="default-search" className="ps-10 text-sm text-gray-900 border border-gray-300 focus:outline-none rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 md:py-2.5 md:pr-2" placeholder="Entrez un plat…" required />
                                    </div>
                                </form>
                        </div>
                        <div className="pr-4">
                            <a href="#" className="uppercase py-2 px-4 hover:text-lime-600 font-bold">
                                Se connecter
                            </a>
                        </div>
                        <button
                            className="uppercase py-2 px-4 rounded-lg bg-lime-500 border-2 border-transparent text-white text-md mr-4 hover:bg-lime-400"
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
                            <li>
                                <a className="text-gray-800 px-3 py-2 hover:bg-gray-200 rounded block">Panier
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

         </>
    );
}

function SignupChoiceForm({ chooseSignupType }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl mb-4">Choisissez votre type d'inscription</h2>
                <div className="flex justify-around">
                    <button
                        className="bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-400"
                        onClick={() => chooseSignupType('client')}
                    >
                        Client
                    </button>
                    <button
                        className="bg-lime-500 text-white py-2 px-4 rounded-lg hover:bg-lime-400"
                        onClick={() => chooseSignupType('vendeur')}
                    >
                        Vendeur
                    </button>
                </div>
            </div>
        </div>
    );
}

function SignupForm({ closeForm, signupType }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                <h2 className="text-2xl mb-4">Inscription {signupType === 'client' ? 'Client' : 'Vendeur'}</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Nom</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Mot de passe</label>
                        <input type="password" className="w-full px-3 py-2 border rounded-lg" />
                    </div>
                    {signupType === 'client' && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700">Photo utilisateur</label>
                                <input type="file" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Numéro de téléphone</label>
                                <input type="tel" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Date de naissance</label>
                                <input type="date" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Photo avant carte nationale d'identité</label>
                                <input type="file" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Photo arrière carte nationale d'identité</label>
                                <input type="file" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                        </>
                    )}
                    {signupType === 'vendeur' && (
                        <>
                            {/* Ajoutez ici les champs spécifiques pour l'inscription en tant que vendeur */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Nom de l'entreprise</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Adresse de l'entreprise</label>
                                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Numéro de téléphone de l'entreprise</label>
                                <input type="tel" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Photo de l'entreprise</label>
                                <input type="file" className="w-full px-3 py-2 border rounded-lg" />
                            </div>
                        </>
                    )}
                    <button type="submit" className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-400">
                        S'inscrire
                    </button>
                    <button
                        type="button"
                        className="w-full bg-gray-500 text-white py-2 rounded-lg mt-2 hover:bg-gray-400"
                        onClick={closeForm}
                    >
                        Annuler
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Header;




