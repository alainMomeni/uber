import React from 'react';

function ProductCard({ image, location, name, price }) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl transition transform">
      <a href="#">
        <img src={image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{location}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">{price} franc</p>
            <div className="ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus hover:text-lime-400 hover:scale-125 transition duration-300" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function ListProductSection2() {
  const products = [
    { image: "../src/assets/poisson.jpg", location: "Yaounde", name: "Poisson braisé", price: "2000" },
    { image: "../src/assets/poulet.jpg", location: "Douala", name: "Poulet braisé", price: "2000" },
    { image: "../src/assets/okok.jpg", location: "Yaounde", name: "Okok", price: "2000" },
    { image: "../src/assets/grenadine.png", location: "Yaounde", name: "Top grenadine", price: "500" },
    { image: "../src/assets/eru.png", location: "Yaounde", name: "Eru", price: "2000" },
    { image: "../src/assets/djino.jpg", location: "Douala", name: "Djino cocktail", price: "500" },
    { image: "../src/assets/ndole.jpg", location: "Yaounde", name: "Ndolé", price: "2000" },
    { image: "../src/assets/koki.jpg", location: "Yaounde", name: "Koki", price: "2000" },
  ];

  return (
    <div>
            <div className="text-gray-800 text-3xl mt-16 font-black p-8">
                <h1>  Liste des produits poulet ... </h1>
            </div>
      <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-2 mb-5">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
      <div className="flex items-center justify-center w-screen mb-12">
        <div className="flex flex-1 max-w-lg px-4 py-3 mt-8 border shadow-md sm:px-6 ">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="relative z-0 flex justify-between w-full -space-x-px rounded-md" aria-label="Pagination">
              <button type="button" className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-lime-500 hover:text-white sm:rounded-r-md transition duration-300" >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Previous Page
              </button>
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">Page 1/1</span>
              <button type="button" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-lime-500 hover:text-white sm:rounded-r-md transition duration-300">
                Next Page
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProductSection2;

