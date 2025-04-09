import React, { useContext, useEffect, useState } from 'react';
import CatagoryContext from '../CatagoryContext';
import { PAGE_SIZE } from '../utiliti/constants';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const { selectedCategory } = useContext(CatagoryContext);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=500")
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error(error));
    }, []);


    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    const totalProducts = filteredProducts.length;
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);


    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const currentPageProducts = filteredProducts.slice(start, end);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleLeft = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };
    const handleRight = () => {
        setCurrentPage((prev) => Math.min(prev + 1, noOfPages - 1));
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
                {currentPageProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                        <p className="text-gray-700">${product.price}</p>
                        <p className="text-gray-700">{product.reviews.rating}</p>
                        <button onClick={() => navigate(`/product/${product.id}`)} className="mt-2 w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                noOfPages={noOfPages}
                handleLeft={handleLeft}
                handleRight={handleRight}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default ProductList;
