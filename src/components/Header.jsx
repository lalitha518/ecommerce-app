import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CatagoryContext from "../CatagoryContext";
import { useSelector } from "react-redux";

const Header = () => {
    const { selectedCategory, setSelectedCategory } = useContext(CatagoryContext);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setCategories(data);
                }
            })
            .catch((error) => console.error("Error fetching categories:", error));
    }, [location]);

    const handleHome = () => {
        setSelectedCategory("");
        navigate("/")

    }

    return (
        <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">Product Store</h1>
            <span className="cursor-pointer" onClick={handleHome}>Home</span>

            <div>
                <input type="text" />
                <label htmlFor="search">🔍</label>
            </div>

            <select
                className="p-2 bg-gray-700 text-white rounded-md"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory || ""}
            >
                <option value="">All Categories</option>
                {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((category, index) => (
                        <option key={index} value={category.slug}>
                            {category.name}
                        </option>
                    ))
                ) : (
                    <option>No categories available</option>
                )}
            </select>

            <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                <span className="text-2xl">🛒</span>
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {totalItems}
                    </span>
                )}
            </div>
        </header>
    );
};

export default Header;
