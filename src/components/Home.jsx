import React, { useState, useEffect, useContext } from "react";
import CatagoryContext from "../CatagoryContext"; // Correct import
import ProductList from "./ProductList";

const Home = () => {
    return (
        <div className="p-4">
            <ProductList />
        </div>
    );
};

export default Home;
