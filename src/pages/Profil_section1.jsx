import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

function ProfilSection1() {
    return (
        <div>
            <div className=" mt-16">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        {/* Profil Sidebar */}
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow-lg rounded-lg p-6 ">
                                <div className="flex flex-col items-center">
                                    <img 
                                        src="../src/assets/bliss.jpg" 
                                        className="w-32 h-32 rounded-full mb-4 border-2 border-gray-200"
                                        alt="Profile"
                                    />
                                    <h1 className="text-2xl font-bold">Le Bliss</h1>
                                    <p className="text-gray-600">Snack Bar</p>
                                    <div className="mt-4">
                                        <a 
                                            href="#" 
                                            className="bg-lime-500 hover:bg-lime-400 text-white py-2 px-4 rounded-lg transition duration-300 flex items-center"
                                        >
                                            <FaPencilAlt className="mr-2" />
                                            MANAGER
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profil Details */}
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h2 className="text-2xl font-bold mb-4 text-lime-500">Description</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                                    vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                                    et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                    luctus risus rhoncus id.
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <span className="block text-gray-700 font-bold">Lieu</span>
                                        <p className="mt-2 text-gray-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                            tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                            suscipit.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="block text-gray-700 font-bold">Heure d'ouverture</span>
                                        <p className="mt-2 text-gray-700">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                            tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                            suscipit.
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

