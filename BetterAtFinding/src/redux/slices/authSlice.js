import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { login } from "../../services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const loginThunk = createAsyncThunk(
    'login/loginThunk',
    async (credentials) => {
        const data = await login(credentials.email, credentials.password)
        return data
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: 'idle',
        error: null
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.status = 'idle';
            AsyncStorage.removeItem('userToken');


        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                console.log('Login successful:', action.payload);
                state.status = 'succeeded'
                state.user = action.payload
                AsyncStorage.setItem('userToken', state.user.data)

            })
            .addCase(loginThunk.rejected, (state, action) => {
                console.log('Login failed:', action.error);
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer