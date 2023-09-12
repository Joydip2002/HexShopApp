import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";

const CartContext = createContext();
const getCartData=()=>{

    let cartdata=localStorage.getItem("ShoppingCart");
    if(cartdata.length == []){
        return [];
    }
    else{
        return JSON.parse(cartdata);
    }
}
const initialstate = {
    // cart:[],
    cart: getCartData(),
    total_item: "",
    total_amount: "",
};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialstate);
    const addToCart = (productData, isSetData) => {
        dispatch({ type: "ADD_TO_CART", payload: { productData, isSetData } })
    }
    const removeItem = (id) => {
        console.log(id);
        dispatch({ type: "REMOVE_TO_CART", payload: { id } })
    }
    useEffect(()=>{
        localStorage.setItem("ShoppingCart",JSON.stringify(state.cart))
    },[state.cart]);
    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };