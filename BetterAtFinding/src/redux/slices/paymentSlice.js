import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { createPayment } from "../../services/PaymentService";

export const createPaymentThunk = createAsyncThunk(
    'payment/createPaymentThunk',
    async (paymentData, auth) => {
        const data = await createPayment(paymentData, auth)
        console.log('data redux', data)
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