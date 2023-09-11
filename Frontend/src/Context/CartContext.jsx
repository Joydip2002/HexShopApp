import { createContext, useContext, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";

const CartContext = createContext();
const initialstate =  {
    cart: [],
    total_item : "",
    total_amount : "",
};
const CartProvider = ({children})=>{
    const  [state,dispatch] = useReducer(CartReducer,initialstate);
    const addToCart = (productData,isSetData)=>{
        dispatch({type:"ADD_TO_CART", payload :{productData,isSetData}})
    }
    return(
        <CartContext.Provider value={{...state,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider, useCartContext};