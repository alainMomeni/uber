import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfilSection1() {

    const [formData, setFormData] = useState({
        typeUser: '',
        profilePhoto: '',
        restaurantPhoto: '',
        firstName: '',
        lastName: '',
        restaurantName: '',
        category: '',
        city: '',
        neighborhood: '',
        openingTime: '',
        closingTime: '',
        phoneNumber: '',
        email: '',
        description: '',
        password: '',
      });

    useEffect(() => {
        fetchUserData();
      }, []);

      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
          setFormData(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching user data:', error);
          console.log('Error fetching user data');
        }
      };

    return (
        <div>
            <div className=" mt-16">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        {/* Profil Sidebar */}
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow-xl rounded-lg p-6 ">
                                <div className="flex flex-col items-center">
                                    <img 
                                        src={`../src/assets/${formData.profilePhoto}`}  
                                        className="w-32 h-32 rounded-full mb-4 border-2 border-gray-200"
                                        alt="Profile"
                                    />
                                    <h1 className="text-2xl font-bold">{formData.restaurantName}</h1>
                                    <p className="text-gray-600">{formData.category}</p>
                                    <div className="mt-4">
                                        <Link 
                                            to="/Dashboard" 
                                            className="bg-lime-500 hover:bg-lime-400 text-white py-2 px-4 rounded-lg transition duration-300 flex items-center"
                                        >
                                            <FaPencilAlt className="mr-2" />
                                            MANAGER
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profil Details */}
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow-xl rounded-lg p-6">
                                <h2 className="text-2xl font-bold mb-4 text-lime-500">Description</h2>
                                <p className="text-gray-700 leading-relaxed">
                                   {formData.description}
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <span className="block text-gray-700 font-bold">Lieu</span>
                                        <p className="mt-2 text-gray-700">
                                         {formData.city} / {formData.neighborhood}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="block text-gray-700 font-bold">Heure d'ouverture</span>
                                        <p className="mt-2 text-gray-700">
                                        {formData.openingTime} / {formData.closingTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilSection1;

