import { createContext, useState } from "react";

const CatagoryContext = createContext();


export const CatagoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <CatagoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            {children}
        </CatagoryContext.Provider>
    );
};

export default CatagoryContext;
