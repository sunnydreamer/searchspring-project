// searchActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

const options = { method: 'GET', headers: { accept: 'application/json' } };

export const fetchData = createAsyncThunk('search/fetchData', async ({ searchTerm, page = 2 }) => {
    try {
        const link = `https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&resultsFormat=native&q=${searchTerm}&redirectResponse=minimal&page=${page}&resultsPerPage=24`
        const response = await fetch(link, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
