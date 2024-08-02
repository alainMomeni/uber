import React, { useState, useEffect } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListeProduitsDashTable() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, [currentPage, searchTerm]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products/user', {
        params: {
          page: currentPage,
          limit: itemsPerPage,
          search: searchTerm
        },
        withCredentials: true
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`, { withCredentials: true });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="p-4">
      <div className="relative mb-4 md:flex">
        <input
          type="text"
          className="block focus:outline-none p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500 transition duration-300"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="w-5 h-5 text-lime-500" />
        </div>
        <Link to="/Dashboard/Nouveau produit" className="ml-2 p-3 bg-lime-500 text-white rounded-lg hover:bg-lime-400 transition duration-300 flex items-center">
          <FaPlus className="w-5 h-5" />
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3">Qty</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Modify</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">
                  <img
                    src={`http://localhost:5000/assets/${product.photo}`}
                    className="w-16 md:w-32 max-w-full max-h-full rounded-lg"
                    alt={product.name}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {product.Quantity}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${product.price}
                </td>
                <td className="px-6 py-4">
                  <Link to={`/Dashboard/Editer les produits/${product._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center mb-4">
        <div className="flex flex-1 max-w-lg px-4 py-3 mt-8 border shadow-md sm:px-6 ">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="relative z-0 flex justify-between w-full -space-x-px rounded-md" aria-label="Pagination">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-lime-500 hover:text-white sm:rounded-r-md transition duration-300"
              >
                Previous Page
              </button>
              <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
                Page {currentPage}/{totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-lime-500 hover:text-white sm:rounded-r-md transition duration-300"
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeProduitsDashTable;



