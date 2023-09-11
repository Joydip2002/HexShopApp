
function CartReducer(state, action) {
    if (action.type === "ADD_TO_CART") {
        let  products  = action.payload;
        // alert("hello");
        console.log("add to cart", products);

        let cartProduct;
        cartProduct ={ 
            id :  products.productData.id,
            title :  products.productData.title,
            thumbnail :  products.productData.thumbnail,
            price :  products.productData.price,
            quantity :  products.isSetData
        };
        return{
            ...state,
            cart:[...state.cart,cartProduct],
        }
    }
    return state;
}

export default CartReducer
