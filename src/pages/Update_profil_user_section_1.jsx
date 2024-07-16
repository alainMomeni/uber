import React from 'react';
import { FaEdit } from 'react-icons/fa';

function UpdateProfilUserForm() {
    return (
        <div className='md:mt-16 flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
            <form className="bg-white mt-4 mb-8 p-6 rounded-lg shadow-md dark:bg-gray-800 w-full max-w-6xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Modifier vos informations</h2>
                
                <div className="mb-4">
                    <label htmlFor="productImage" className="block text-gray-700 dark:text-gray-300">Photo de profil</label>
                    <input
                        type="file"
                        id="productImage"
                        name="productImage"
                        className="w-full p-3 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
                        required
                    />
                </div> 

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 dark:text-gray-300">Prenom</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 dark:text-gray-300">Email</label>
                    <input
                        type="email"
                        id="price"
                        name="price"
                        className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 dark:text-gray-300">Password</label>
                    <input
                        type="password"
                        id="description"
                        name="description"
                        className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-lime-500 focus:border-lime-500 transition duration-300"
                        required
                    />
                </div>
                
                <button type="submit" className="w-full bg-lime-500 text-white p-3 rounded mt-8 hover:bg-lime-400 transition duration-200 flex items-center justify-center">
                    <FaEdit className="mr-2" />
                    Modifier
                </button>
            </form>
        </div>
    );
}

export default UpdateProfilUserForm;

