import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem, deleteItem } from "../features/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const handleUpdate = (id, quantity) => {
        dispatch(updateItem({ id, quantity }));
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between border p-2 m-2">
                            <div>
                                <h2 className="text-lg font-bold">{item.title}</h2>
                                <p className="text-gray-700">Price: ${item.price}</p>
                                <p className="text-gray-700">Quantity: {item.quantity}</p>
                                <div className="flex items-center mt-2">
                                    <button
                                        onClick={() => handleUpdate(item.id, item.quantity + 1)}
                                        className="bg-blue-500 text-white px-2 py-1 mr-2"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => handleUpdate(item.id, item.quantity - 1)}
                                        className="bg-blue-500 text-white px-2 py-1 mr-2"
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteItem(item.id))}
                                        className="bg-red-500 text-white px-2 py-1"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div><img src={item.thumbnail} alt={item.title} className="w-52 h-52" /></div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
