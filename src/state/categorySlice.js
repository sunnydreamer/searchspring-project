import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: '', // Initial state for the fetched data
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;


