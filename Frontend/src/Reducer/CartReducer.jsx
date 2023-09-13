import axios from "axios";

function CartReducer(state, action) {
    if (action.type === "ADD_TO_CART") {
        let products = action.payload;
        console.log("add to cart", products);

        let cartProduct = {
            id: products.productData.id,
            title: products.productData.title,
            thumbnail: products.productData.thumbnail,
            price: products.productData.price,
            quantity: products.isSetData
        };
        const addToCart = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/store-cartlist", cartProduct);
                console.log("Add to cart response:", response.data);
            } catch (error) {
                if (error.response) {
                    console.error('Server Error:', error.response.data);
                    console.error('Status Code:', error.response.status);
                } else if (error.request) {
                    console.error('No Response:', error.request);
                } else {
                    console.error('Error:', error.message);
                }
            }
        };

        addToCart();

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }

    if (action.type === 'REMOVE_TO_CART') {
        console.log("remove");
        let id = action.payload;
        let updatedCart = state.cart.filter(item => item.id !== id);
        return {
            ...state,
            cart: updatedCart
        };
    }
    return state;
}

export default CartReducer;
