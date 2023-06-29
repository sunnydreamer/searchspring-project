import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quantity: parseInt(localStorage.getItem("cartCount")) || 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.quantity += 1;
            localStorage.setItem("cartCount", state.quantity)

        },
        clearCart: (state, action) => {
            localStorage.clear()
            state.quantity = 0;
        }
    }

})


export const {
    addToCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer