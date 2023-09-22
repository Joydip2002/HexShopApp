import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

const CartApiContextB = createContext();
const baseURL = process.env.REACT_APP_BASE_URL;
const userId = sessionStorage.getItem('id');

const API = `${baseURL}/cartlist/${userId}`;
export function CartApiProvide({ children }) {
    const [getCartData, setCartData] = useState([]);
    const getCartProductData = async (url) => {
        try {
            console.log(userId);
            const res = await axios.get(url);
            console.log(res);
            setCartData(res.data?.cartItem);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    const removeItem = async (productId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to remove this item from your cart.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            cancelButtonText: 'No, cancel'
        });
        if (result.isConfirmed) {
            try {
                await axios.delete(`${baseURL}/delete-cart/${productId}`);
                setCartData((prevCartData) =>
                    prevCartData.filter((item) => item.id !== productId)
                );
            } catch (error) {
                console.error("Error removing item: ", error);
            }
        }
    };

    // const reduceQuantity = async (productId) => {
    //     try {
    //         await axios.post(`${baseURL}/update-cart/${productId}`, {'quantity':getCartData[0].quantity-1});
    //         setCartData((prevCartData) =>
    //             prevCartData.map((item) =>
    //                 item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    //             )
    //         );
    //     } catch (error) {
    //         console.error("Error reducing quantity: ", error);
    //     }
    // };

    // const IncreaseQuantity = async (productId) => {
    //     try {
    //         await axios.post(`${baseURL}/update-cart/${productId}`, {'quantity':getCartData[0].quantity+1});
    //         setCartData((prevCartData) =>
    //             prevCartData.map((item) =>
    //                 item.id === productId ? {...item, quantity: item.quantity + 1 } : item
    //             )
    //         );
    //     } catch (error) {
    //         console.error("Error reducing quantity: ", error);
    //     }
    // };

    const reduceQuantity = async (productId) => {
        try {
            const response = await axios.post(`${baseURL}/update-cart/${productId}`, {
                quantity: getCartData.find(item => item.id === productId).quantity - 1
            });

            if (response.status === 200) {
                setCartData((prevCartData) =>
                    prevCartData.map((item) =>
                        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                    )
                );
            } else {
                console.error("Failed to reduce quantity. Server returned an error.");
            }
        } catch (error) {
            console.error("Error reducing quantity: ", error);
        }
    };

    const IncreaseQuantity = async (productId) => {
        try {
            const response = await axios.post(`${baseURL}/update-cart/${productId}`, {
                quantity: getCartData.find(item => item.id === productId).quantity + 1
            });

            if (response.status === 200) {
                setCartData((prevCartData) =>
                    prevCartData.map((item) =>
                        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                    )
                );
            } else {
                console.error("Failed to increase quantity. Server returned an error.");
            }
        } catch (error) {
            console.error("Error increasing quantity: ", error);
        }
    };

    useEffect(() => {
        getCartProductData(API);
    }, []);

    return (
        <CartApiContextB.Provider value={{ cartData: getCartData, setCartData , removeItem: removeItem, reduceQuantity: reduceQuantity, IncreaseQuantity }}>
            {children}
        </CartApiContextB.Provider>
    )
}

export function useCartApi() {
    return useContext(CartApiContextB);
}