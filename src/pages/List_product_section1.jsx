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
            <div className='relative flex items-center pt-20'>
                <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40} />
                <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-2">
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/fish.png" alt="Fish" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Fish</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/glass.png" alt="Glass" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Glass</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/yaourt.png" alt="Yaourt" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Yaourt</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/cola.png" alt="Cola" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Cola</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/beer.png" alt="Beer" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Beer</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/cake.png" alt="Cake" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Cake</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/poulet.png" alt="Poulet" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Poulet</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/Pasta.png" alt="Pasta" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Pasta</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/fish.png" alt="Fish" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Fish</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/glass.png" alt="Glass" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Glass</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/yaourt.png" alt="Yaourt" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Yaourt</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/cola.png" alt="Cola" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Cola</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/beer.png" alt="Beer" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Beer</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/cake.png" alt="Cake" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Cake</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/poulet.png" alt="Poulet" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Poulet</p>
                    </div>
                    <div className="inline-block w-[120px] text-center">
                        <img src="../src/assets/Pasta.png" alt="Pasta" className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                        <p className="mt-2">Pasta</p>
                    </div>
                    {/* Ajoutez d'autres images ici */}
                </div>
                <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40} />
            </div>
            <div>
                <h1 className="text-gray-800 text-3xl font-black p-8 pl-10">Découvrez notre menu du jour !</h1>
            </div>
        </div>
    )
}

export default List_product_section1
