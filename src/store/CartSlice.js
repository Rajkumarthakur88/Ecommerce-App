import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     cart: []
// }

const CartSlice = createSlice({

    name: 'cart',
    initialState:[],
    reducers: {
        addTocart(state, action) {
            state.push(action.payload)
        },
        removeProduct(state, action) {
           return state.filter(product => product.id !== action.payload)
        }
    }

})

export const { addTocart, removeProduct } = CartSlice.actions
export default CartSlice.reducer