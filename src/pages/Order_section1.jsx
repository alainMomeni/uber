import React from 'react';

function Order_section1() {
    return (
        <div>
            <section className="py-6 relative mb-12 mt-16">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                    <h2 className="font-manrope font-bold text-4xl leading-10 text-black">
                        Résumé de la commande
                    </h2>
                    <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11">
                        Merci de faire un achat vous pouvez consulter notre récapitulatif de commande ci-dessous
                    </p>
                    <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                            <div className="data">
                                <p className="font-semibold text-base leading-7 text-black">
                                    Commande No: <span className="text-gray-600 font-medium">#10234987</span>
                                </p>
                                <p className="font-semibold text-base leading-7 text-black mt-4">
                                    Date Commande : <span className="text-gray-400 font-medium">18 mai 2024</span>
                                </p>
                            </div>
                            <button
                                className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-green-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-700 hover:shadow-green-400">
                                Confirmer
                            </button>
                        </div>
                        <div className="w-full px-3 min-[400px]:px-6">
                            <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                                <div className="img-box max-lg:w-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Premium Watch image"
                                        className="aspect-square w-full lg:max-w-[140px]"
                                    />
                                </div>
                                <div className="flex flex-row items-center w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                        <div className="flex items-center">
                                            <div>
                                                <h2 className="font-semibold text-xl leading-8 text-black mb-3">Poisson braisé</h2>
                                                <p className="font-normal text-lg leading-8 text-gray-500 mb-3">Poids ou Volume: 500g</p>
                                                <div className="flex items-center">
                                                    <button
                                                        className="font-medium text-base leading-7 text-red-700 pr-4 mr-4 border-r border-gray-200">
                                                        Annuler
                                                    </button>
                                                    <p className="font-medium text-base leading-7 text-black">
                                                        Qte: <span className="text-gray-500">2</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5">
                                            <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                <div className="flex gap-3 lg:block">
                                                    <p className="font-medium text-sm leading-7 text-black">Prix</p>
                                                    <p className="lg:mt-4 font-medium text-sm leading-7 text-gray-500">1000 franc</p>
                                                </div>
                                            </div>
                                            <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                                <div className="flex gap-3 lg:block">
                                                    <p className="font-medium text-sm leading-7 text-black">Status</p>
                                                    <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                        En stock
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-5 lg:col-span-2  flex items-center max-lg:mt-3 md:border md:rounded-lg">
                                                <div className="flex gap-3 lg:block md:mx-auto">
                                                    <p className="font-medium text-sm whitespace-nowrap leading-6 text-black ">Temps estimé</p>
                                                    <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 md:text-2xl text-gray-500 ">3 heures</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                                <div className="img-box max-lg:w-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Premium Watch image"
                                        className="aspect-square w-full lg:max-w-[140px]"
                                    />
                                </div>
                                <div className="flex flex-row items-center w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                                        <div className="flex items-center">
                                            <div>
                                                <h2 className="font-semibold text-xl leading-8 text-black mb-3">Poisson braisé</h2>
                                                <p className="font-normal text-lg leading-8 text-gray-500 mb-3">Poids ou Volume: 500g</p>
                                                <div className="flex items-center">
                                                    <button
                                                        className="font-medium text-base leading-7 text-red-700 pr-4 mr-4 border-r border-gray-200">
                                                        Annuler
                                                    </button>
                                                    <p className="font-medium text-base leading-7 text-black">
                                                        Qte: <span className="text-gray-500">2</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5">
                                            <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                <div className="flex gap-3 lg:block">
                                                    <p className="font-medium text-sm leading-7 text-black">Prix</p>
                                                    <p className="lg:mt-4 font-medium text-sm leading-7 text-gray-500">1000 franc</p>
                                                </div>
                                            </div>
                                            <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                                <div className="flex gap-3 lg:block">
                                                    <p className="font-medium text-sm leading-7 text-black">Status</p>
                                                    <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                        En stock
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-5 lg:col-span-2  flex items-center max-lg:mt-3 md:border md:rounded-lg">
                                                <div className="flex gap-3 lg:block md:mx-auto">
                                                    <p className="font-medium text-sm whitespace-nowrap leading-6 text-black ">Temps estimé</p>
                                                    <p className="font-medium text-base whitespace-nowrap leading-7 md:text-2xl lg:mt-3 text-gray-500 ">3 heures</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ajoutez d'autres produits ici */}

                        </div>
                        <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between">
                            <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                                <button className="inline-flex items-center rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-red-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-700 hover:shadow-red-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9.293l5.146-5.147a.5.5 0 0 1 .708.708L10.707 10l5.147 5.146a.5.5 0 0 1-.708.708L10 10.707l-5.146 5.147a.5.5 0 0 1-.708-.708L9.293 10 4.146 4.854a.5.5 0 1 1 .708-.708L10 9.293z" clipRule="evenodd" />
                                    </svg>
                                    Annuler la commande
                                </button>
                                <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                                    Vous payez aux livreurs après réception du (des) colis dans 3 heures
                                </p>
                            </div>
                            <p className="font-semibold text-lg text-black py-6">
                                Prix Total: <span className="text-green-600">2000 franc</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Order_section1;
