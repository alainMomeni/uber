import React, { useState } from 'react';
import axios from 'axios';
import ClientForm from './ClientForm';
import VendorForm from './VendorForm';
import { FaTimes } from 'react-icons/fa';

const SignupForm = ({ closeForm, signupType }) => {
    const [formData, setFormData] = useState({
        profilePhoto: null,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        restaurantPhoto: null,
        restaurantName: '',
        category: '',
        city: '',
        neighborhood: '',
        openingTime: '',
        closingTime: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
        data.append('signupType', signupType);

        try {
            await axios.post('http://localhost:3000/api/auth/signup', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            closeForm();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 max-h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl">
                        Inscription {signupType === 'client' ? 'Consommateur' : 'Restaurateur'}
                    </h2>
                    <FaTimes className="cursor-pointer" onClick={closeForm} />
                </div>
                <form onSubmit={handleSubmit}>
                    {signupType === 'client' ? (
                        <ClientForm handleChange={handleChange} formData={formData} />
                    ) : (
                        <VendorForm handleChange={handleChange} formData={formData} />
                    )}
                    <button type="submit" className="w-full bg-lime-500 text-white py-2 rounded-lg">
                        S'inscrire
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
};

export default SignupForm;



