import React from 'react'


function Product_section1() {

    return (
        <div>
            <div class=" dark:bg-gray-800 py-8 mt-16">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div class="md:flex-1 px-4">
                            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img class="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product Image" />
                            </div>
                            <div class="flex -mx-2 mb-4">
                                <div class="w-1/2 px-2 ">
                                    <button class="w-full bg-lime-500 dark:bg-lime-500 text-white py-2 px-2 rounded-full font-bold hover:bg-lime-400 dark:hover:bg-lime-400 ">Ajouter au panier</button>
                                </div>
                                <div class="w-1/2 px-2">
                                    <button class="w-full bg-red-500 dark:bg-red-500 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-red-400 dark:hover:bg-red-400 ">Annuler</button>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex-1 px-4">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Poisson braisé</h2>
                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Un délicieux plat de poison braisé maquereaux ou carpe servie avec du piment et des condiments. Avec en accompagnement selon vos goûts du bâton et ou des frites pomme ou plantain.
                            </p>
                            <div class="flex mb-4">
                                <div class="mr-4">
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span class="text-gray-600 dark:text-gray-300">2000 franc</span>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span class="text-gray-600 dark:text-gray-300">En Stock</span>
                                </div>
                            </div>
                            <div>
                                <span class="font-bold text-gray-700 dark:text-gray-300">Décrivez votre commande:</span>
                                <form class="mb-6">
                                    <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                        <label for="comment" class="sr-only">Your comment</label>
                                        <textarea id="comment" rows="6"
                                            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                            placeholder="Écrivez votre commentaire..." required></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_section1