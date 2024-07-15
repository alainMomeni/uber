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

function Home_section1() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

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
        <div>
            <div className="bg-[url('../src/assets/acceuil3.png')] bg-cover bg-center md:max-h-[27rem] flex items-center justify-center w-screen h-3/4 md:mt-16 z-20 overflow-hidden">
                <div className="container flex flex-col items-center text-center max-h-[27rem] relative py-16 bg-opacity-50 bg-black overflow-hidden ">
                    <div className="w-full flex flex-col items-center relative z-20 text-white">
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black leading-none">
                            Vous avez faim ?
                            <span className="text-5xl sm:text-2xl block mt-2">
                                Commandez et faites vous livrer
                            </span>
                        </h1>
                        <div className="flex mt-8 w-full justify-center">
                            <form className="max-w-xl w-full flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-lg relative">
                                <div className="relative flex items-center flex-grow">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-6 h-6 text-lime-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="w-full py-3 pl-12 pr-4 text-sm text-gray-900 focus:outline-none bg-gray-100 rounded-l-full"
                                        placeholder="Recherche par zone, nom de rue, point de repère..."
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-lime-500 text-white py-3 px-6 rounded-r-full hover:bg-lime-400 transition duration-300"
                                >
                                    Let's go
                                </button>
                            </form>
                        </div>
                        <div className='w-screen flex justify-center md:mr-24 '>
                        {filteredSuggestions.length > 0 && (
                                        <ul className=" fixed bg-white border border-gray-300 mt-1 rounded-lg max-h-60 ">
                                            {filteredSuggestions.map((suggestion, index) => (
                                                <li key={index} className=" md:px-40 text-black hover:bg-gray-200 cursor-pointer">
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_section1;







