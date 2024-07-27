import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfilSection1User() {

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
        <div className="flex ">
            <div className="bg-white mx-auto overflow-hidden shadow-xl rounded-xl border w-full h-full max-w-7xl mb-4 mt-20">
                <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
                    <div className="flex items-center">
                        <img 
                            src={`../src/assets/${formData.profilePhoto}`} 
                            alt="User profile" 
                            className="h-16 w-16 rounded-full mr-4 border-2 border-gray-300"
                        />
                        <h3 className="text-2xl leading-6 font-semibold text-gray-900">
                            Profil utilisateur
                        </h3>
                    </div>
                    <Link to="/Modifier profil" className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 010 2.828l-9.586 9.586a2 2 0 01-.586.293l-4 1a1 1 0 01-1.264-1.264l1-4a2 2 0 01.293-.586l9.586-9.586a2 2 0 012.828 0zM11 4L4 11v3h3l7-7-3-3z" />
                        </svg>
                    </Link>
                </div>
                <div className="border-t border-gray-300 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Nom complet
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {formData.firstName} {formData.lastName}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Adresse email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                               {formData.email}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Numéro de téléphone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {formData.phoneNumber}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default ProfilSection1User;


