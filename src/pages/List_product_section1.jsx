import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

function List_product_section1() {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    };

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    };

    return (
        <div>

            <div class='relative flex items-center pt-2'>
                <MdChevronLeft class="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40} />
                <div id="slider" class="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-2">
                    <img src="../src/assets/fish.png"
                        alt="Product" class=" w-[220px] inline-block  cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    <img src="../src/assets/glass.png"
                        alt="Product" class=" w-[220px] inline-block  cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    <img src="../src/assets/yaourt.png"
                        alt="Product" class=" w-[220px] inline-block  cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    <img src="../src/assets/cola.png"
                        alt="Product" class=" w-[220px] inline-block  cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    <img src="../src/assets/beer.png"
                        alt="Product" class=" w-[220px] inline-block  cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    <img src="../src/assets/cake.png"
                        alt="Product" class=" w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    <img src="../src/assets/poulet.png"
                        alt="Product" class=" w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300" />
                    <img src="../src/assets/Pasta.png"
                        alt="Product" class=" w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300" />
                </div>
                <MdChevronRight class="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40} />
            </div>
            <div>
               <h1 class="text-gray-800 text-3xl font-black p-8 pl-10"> Découvrez notre menu du jour ! </h1>
            </div>
        </div>
    )
}

export default List_product_section1