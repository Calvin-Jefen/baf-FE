import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../../services/ProductService'

export const fetchProductsThunk = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const data = await fetchProducts();
        //    console.log('first', data)
        return data;
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsThunk.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProductsThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer
