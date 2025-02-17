import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
    const CartContextProvider = ({Children}) => {
    const [cartCount, setCartCount] = useState(0);
    useEffect(() =>{
        getCart();
    }, [])
    const getCart = async () => {
        const token = localStorage.getItem("userToken");
        console.log("token:", token);
        const response = await axios.get(`${import.meta.env.VITE_BURL}/cart`, 
            {headers: {
                    'Authorization': `Tariq__${token}`
                }
            }); 
            setCartCount(response.data.count);
    }

    return  <CartContext.Provider value={{cartCount, setCartCount}}>
            {Children}
        </CartContext.Provider>
    
    }
    export default CartContextProvider;