import { createContext, useState, useEffect } from "react";
import { all_products } from '../assets/data';

export const ShopContext = createContext();

const ShopContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : {};
    });
    const [allProducts] = useState(all_products);
    const [token,setToken] = useState(() => {
        return localStorage.getItem("token") || "";
    });

useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
},[cartItems]);

useEffect(() => {
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
}, [token]);

const addToCart = (id) => {
    setCartItems(prev => ({
        ...prev, [id]: (prev[id] ? prev[id] + 1 : 1)
    }))
};

const removeFromCart = (id , removeAll = false) => {
    setCartItems(prev => {
        const updatedCart = {...prev};
            if(removeAll || updatedCart[id] === 1) delete updatedCart[id];
            else updatedCart[id] -= 1;
            return updatedCart;
})};

const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, quantity]) => {
        const product = allProducts.find(p => p._id === id);
        return total + (product ? product.price * quantity : 0);
    }, 0);
};

const value = {
    all_products: allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken
};

return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
};

export default ShopContextProvider;