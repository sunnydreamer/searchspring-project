import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quantity: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.quantity += 1
        },
        removeFromCart: (state, action) => {
            state.quantity -= 1
        }
    }

})


export const {
    addToCart,
    removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer