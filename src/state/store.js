import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchReducer from './searchSlices';
import categorySlice from './categorySlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer,
        category: categorySlice
    }

})

export default store