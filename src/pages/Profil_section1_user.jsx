import React from 'react';

function ProfilSection1User() {
    return (
        <div>
            <div className="bg-white overflow-hidden shadow rounded-lg border mt-20">
                <div className="px-4 py-5 sm:px-6 flex items-center">
                    <img 
                        src="URL_DE_LA_PHOTO_DE_PROFIL" 
                        alt="User profile" 
                        className="h-10 w-10 rounded-full mr-4 border"
                    />
                    <div className="flex items-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Profil utilisateur
                        </h3>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 010 2.828l-9.586 9.586a2 2 0 01-.586.293l-4 1a1 1 0 01-1.264-1.264l1-4a2 2 0 01.293-.586l9.586-9.586a2 2 0 012.828 0zM11 4L4 11v3h3l7-7-3-3z" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Nom complet
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                John Doe
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Adresse email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                johndoe@example.com
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Numéro de téléphone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                (123) 456-7890
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Adresse
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                123 Main St<br />
                                Anytown, USA 12345
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default ProfilSection1User;

