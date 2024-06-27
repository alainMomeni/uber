import React from 'react';

function Header() {


    return (
        <header class="h-20 sm:h-20 md:h-16 flex items-center z-30 w-full border-b-4 ">
            <div class="container mx-auto px-6 md:px-0 flex items-center justify-between">
                <div>
                    <img class="h-20 w-24 md:mt-2" src="../src/assets/logo2.png" alt="My Image" />
                </div>
                <div class="flex items-center">
                    <nav class="font-sen text-gray-800 dark:text-white uppercase text-sm lg:flex items-center hidden">
                        <div class="pr-4">
                            <form class="max-w-md mx-auto">
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-lime-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="ps-10 text-sm text-gray-900 border border-gray-300 focus:outline-none rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 md:py-2.5 md:pr-48" placeholder="Entrez un plat…" required />
                                </div>
                            </form>
                        </div>
                        <div class="pr-4">
                            <a href="#" class="uppercase py-2 px-4 hover:text-lime-600 font-bold">
                                Se connecter
                            </a>
                        </div>
                        <button class="uppercase py-2 px-4 rounded-lg bg-lime-500 border-2 border-transparent text-white text-md mr-4 hover:bg-lime-400">
                            S'inscrire
                        </button>
                    </nav>
                    <button class="lg:hidden flex flex-col ml-4">
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header