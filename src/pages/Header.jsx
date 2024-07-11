import React, { useState } from 'react';

const suggestions = [
    "Poisson braisé",
    "Poulet rôti",
    "Maquereau grillé",
    "Frites de patate douce",
    "Salade de fruits",
    "Sushi",
    "Pizza Margherita",
    "Spaghetti Bolognese",
    "Tarte aux pommes"
];

function Header() {
    const [isSignupChoiceOpen, setIsSignupChoiceOpen] = useState(false);
    const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
    const [signupType, setSignupType] = useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

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

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 1) {
            const filtered = suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
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
                            <form className="max-w-md mx-auto relative">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-lime-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input 
                                        type="search" 
                                        id="default-search" 
                                        className="pl-10 pr-2 py-2 text-sm text-gray-900 border border-gray-300 focus:outline-none rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500" 
                                        placeholder="Entrez un plat…" 
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        required 
                                    />
                                </div>
                                {filteredSuggestions.length > 0 && (
                                    <ul className="absolute bg-white border border-gray-300 mt-1 rounded-lg max-h-60 overflow-y-auto w-full">
                                        {filteredSuggestions.map((suggestion, index) => (
                                            <li key={index} className="py-2 text-black hover:bg-gray-200 cursor-pointer">
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </form>
                        </div>
                        <div className="pr-4 pl-2">
                            <a href="#" className="font-bebas-neue uppercase py-2 hover:text-lime-600">
                                Devenir partenaire
                            </a>
                        </div>
                        <div className="pr-4">
                            <a href="#" className="font-bebas-neue uppercase py-2 px-2 hover:text-lime-600">
                                Se connecter
                            </a>
                        </div>
                        <button
                            className="font-bebas-neue uppercase py-2 px-4 rounded-lg bg-lime-500 border-2 border-transparent text-white text-md mr-4 hover:bg-lime-400"
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
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 transition-transform transform duration-300">
                <h2 className="text-3xl mb-6 font-bold text-center text-gray-800">Choisissez votre type d'inscription</h2>
                <div className="flex justify-around">
                    <button
                        className="bg-lime-500 text-white py-3 px-6 rounded-lg hover:bg-lime-400 transition duration-300 flex items-center justify-center w-40 shadow-md hover:shadow-lg"
                        onClick={() => chooseSignupType('client')}
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H19M7 13L5 21H19l-2-8H7z" />
                        </svg>
                        <span>Client</span>
                    </button>
                    <button
                        className="bg-lime-500 text-white py-3 px-6 rounded-lg hover:bg-lime-400 transition duration-300 flex items-center justify-center w-40 shadow-md hover:shadow-lg"
                        onClick={() => chooseSignupType('vendeur')}
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1a9 9 0 100 18 9 9 0 000-18zm.5 13h-1V9h1v5zm-.5-8a.5.5 0 110 1 .5.5 0 010-1z" />
                        </svg>
                        <span>Vendeur</span>
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
                    <button type="submit" className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-400 transition duration-300">
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




