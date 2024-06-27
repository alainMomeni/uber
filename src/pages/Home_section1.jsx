import React from 'react'

function Home_section1() {

    return (
        <div>
            <div class=" bg-[url('../src/assets/acceuil3.png')] md:bg-cover flex relative z-20 items-center overflow-hidden ">
                <div class="container mx-auto px-6 flex relative py-16">
                    <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Passez votre
                            <span class="text-5xl sm:text-7xl">
                                commande!
                            </span>
                        </h1>

                        <div class="flex mt-8">
                            <form class="max-w-md ">
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-pink-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="md:py-3  ps-10 text-sm text-gray-900 border border-pink-300 focus:outline-none rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 md:py-2.5 md:pr-72" placeholder="Entrez un plat…" required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_section1