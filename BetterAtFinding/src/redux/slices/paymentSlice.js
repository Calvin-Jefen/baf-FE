import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { createPayment } from "../../services/PaymentService";

export const createPaymentThunk = createAsyncThunk(
    'payment/createPaymentThunk',
    async (paymentData) => {
        const data = await createPayment(paymentData)
        console.log('data', data)
        return data
    }
)

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        payment: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPaymentThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createPaymentThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.payment = action.payload
            })
            .addCase(createPaymentThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default paymentSlice.reducer