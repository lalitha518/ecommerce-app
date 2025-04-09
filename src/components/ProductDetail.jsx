import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../features/cartSlice";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, [id]);

    if (loading) {
        return <div className="text-center mt-10">Loading product details...</div>;
    }

    if (!product) {
        return <div className="text-center mt-10">Product not found!</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <div className="flex flex-col md:flex-row gap-4">
                <img src={product.thumbnail} alt={product.title} className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-md" />
                <div className="flex flex-col justify-between">
                    <p className="text-lg text-gray-700">{product.description}</p>
                    <p className="text-xl font-semibold mt-2 text-blue-600">${product.price}</p>
                    <p className="text-xl font-semibold mt-2 text-red-600">Discount %:{product.discountPercentage}</p>
                    <button onClick={() => dispatch(addItem(product))} className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
