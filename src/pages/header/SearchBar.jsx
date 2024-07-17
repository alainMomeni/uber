import React, { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Liste de suggestions pour la démonstration
    const suggestionList = [
        'Pizza',
        'Burger',
        'Sushi',
        'Salad',
        'Pasta',
        'Steak',
        'Soup'
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 0) {
            const filteredSuggestions = suggestionList.filter(suggestion =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="relative max-w-md mx-auto md:mr-4">
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
                        className="pl-10 pr-2 py-2 text-sm text-gray-900 border border-gray-300 focus:outline-none rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500 transition duration-300" 
                        placeholder="Entrez un plat…" 
                        value={query}
                        onChange={handleInputChange}
                        required 
                    />
                </div>
                {suggestions.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 mt-1 rounded-lg max-h-60 overflow-y-auto w-full">
                        {suggestions.map((suggestion, index) => (
                            <li 
                                key={index} 
                                className="py-2 text-black hover:bg-lime-500 hover:text-white cursor-pointer"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
}

export default SearchBar;


