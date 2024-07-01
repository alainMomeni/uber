import React from 'react'


function Order_section1() {

    return (
        <div>
            <section class="py-6 relative mb-12">
                <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                    <h2 class="font-manrope font-bold text-4xl leading-10 text-black ">
                        Résumé de la commande
                    </h2>
                    <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 ">Merci de faire un achat vous pouvez consulter notre récapitulatif de commande ci-dessous</p>
                    <div class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                        <div
                            class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                            <div class="data">
                                <p class="font-semibold text-base leading-7 text-black"> Commande No: <span class="text-indigo-600 font-medium">#10234987</span></p>
                                <p class="font-semibold text-base leading-7 text-black mt-4">Date Commande : <span class="text-gray-400 font-medium"> 18 mai
                                    2024</span></p>
                            </div>
                            <button
                                class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Confirmer
                            </button>
                        </div>
                        <div class="w-full px-3 min-[400px]:px-6">
                            <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                                <div class="img-box max-lg:w-full">
                                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Premium Watch image"
                                        class="aspect-square w-full lg:max-w-[140px]" />
                                </div>
                                <div class="flex flex-row items-center w-full ">
                                    <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                                        <div class="flex items-center">
                                            <div class="">
                                                <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                                                    Poisson braisé</h2>
                                                <p class="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                                    Par: Dust Studios</p>
                                                <div class="flex items-center ">
                                                    <p
                                                        class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                        Poids ou Volume: <span class="text-gray-500">500g</span></p>
                                                    <p class="font-medium text-base leading-7 text-black ">Qte: <span
                                                        class="text-gray-500">2</span></p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="grid grid-cols-5">
                                            <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                <div class="flex gap-3 lg:block">
                                                    <p class="font-medium text-sm leading-7 text-black">prix</p>
                                                    <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">1000 franc</p>
                                                </div>
                                            </div>
                                            <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                                <div class="flex gap-3 lg:block">
                                                    <p class="font-medium text-sm leading-7 text-black">Status
                                                    </p>
                                                    <p
                                                        class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                        En stock</p>
                                                </div>

                                            </div>
                                            <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                                <div class="flex gap-3 lg:block">
                                                    <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                        Temps estimé</p>
                                                    <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                        3 heures </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                                <div class="img-box max-lg:w-full">
                                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Premium Watch image"
                                        class="aspect-square w-full lg:max-w-[140px]" />
                                </div>
                                <div class="flex flex-row items-center w-full ">
                                    <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                                        <div class="flex items-center">
                                            <div class="">
                                                <h2 class="font-semibold text-xl leading-8 text-black mb-3">
                                                    Poisson braisé</h2>
                                                <p class="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                                    Par: Dust Studios</p>
                                                <div class="flex items-center ">
                                                    <p
                                                        class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                        Poids ou Volume: <span class="text-gray-500">500g</span></p>
                                                    <p class="font-medium text-base leading-7 text-black ">Qte: <span
                                                        class="text-gray-500">2</span></p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="grid grid-cols-5">
                                            <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                                <div class="flex gap-3 lg:block">
                                                    <p class="font-medium text-sm leading-7 text-black">prix</p>
                                                    <p class="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">1000 franc</p>
                                                </div>
                                            </div>
                                            <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                                <div class="flex gap-3 lg:block">
                                                    <p class="font-medium text-sm leading-7 text-black">Status
                                                    </p>
                                                    <p
                                                        class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                                                        En stock</p>
                                                </div>

                                            </div>
                                            <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                                <div class="flex gap-3 lg:block">
                                                    <p class="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                                        Temps estimé</p>
                                                    <p class="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                    3 heures</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                            <div class="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                                <button
                                    class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-red-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-red-700 hover:shadow-red-400">Annuler la commande
                                </button>
                                <p class="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">Vous payez aux livreur après réception du colis </p>
                            </div>
                            <p class="font-semibold text-lg text-black py-6">Prix Total: <span class="text-indigo-600">2000 franc</span></p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order_section1