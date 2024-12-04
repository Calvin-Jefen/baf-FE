import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import authReducer from './slices/authSlice'
import paymentReducer from './slices/paymentSlice'


export const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer,
        payment: paymentReducer,
    },
})