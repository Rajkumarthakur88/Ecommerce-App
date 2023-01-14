import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
}

const CartSlice = createSlice({

    name: 'cart',
    initialState,
    // cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    reducers: {
        addTocart(state, action) {
            state.cart.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.cart))
        },
        removeProduct(state, action) {
            // return state.cart.filter(product => product.id !== action.payload)
            const remove = state.cart.filter(product => product.id !== action.payload)
            state.cart = remove
            localStorage.setItem("cartItems", JSON.stringify(state.cart))

        }
    }

})

export const { addTocart, removeProduct } = CartSlice.actions
export default CartSlice.reducer