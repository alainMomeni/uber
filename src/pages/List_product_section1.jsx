import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const products = [
    { id: 1, name: 'Fish', img: '../src/assets/fish.png' },
    { id: 2, name: 'Glass', img: '../src/assets/glass.png' },
    { id: 3, name: 'Yaourt', img: '../src/assets/yaourt.png' },
    { id: 4, name: 'Cola', img: '../src/assets/cola.png' },
    { id: 5, name: 'Beer', img: '../src/assets/beer.png' },
    { id: 6, name: 'Cake', img: '../src/assets/cake.png' },
    { id: 7, name: 'Poulet', img: '../src/assets/poulet.png' },
    { id: 8, name: 'Pasta', img: '../src/assets/pasta.png' },
];

function ListProductSection1() {

    const slide = (direction) => {
        const slider = document.getElementById('slider');
        const scrollAmount = 500;
        slider.scrollLeft = direction === 'left' ? slider.scrollLeft - scrollAmount : slider.scrollLeft + scrollAmount;
    };

    return (
        <div>
            <div className='relative flex items-center pt-20  border-b shadow-lg'>
                <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={() => slide('left')} size={40} />
                <div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-2 mb-6">
                    {products.map(product => (
                        <div key={product.id} className="inline-block w-[120px] text-center">
                            <img src={product.img} alt={product.name} className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
                            <p className="mt-2">{product.name}</p>
                        </div>
                    ))}
                </div>
                <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={() => slide('right')} size={40} />
            </div>
            <div>
                <h1 className="text-gray-800 text-3xl font-black p-8 pl-10">Découvrez notre menu du jour !</h1>
            </div>
        </div>
    );
}

export default ListProductSection1;



