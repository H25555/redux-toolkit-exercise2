import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false,
}
export const getCartItems = createAsyncThunk('cart/getCartItems', async (_, thunkAPI)=> {
    try {
        const resp = await axios.get('https://course-api.com/react-useReducer-cart-project')
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error, error.response.data.msg)
    }
})
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        calculateTotal: (state)=> {
            let total = 0; 
            state.cartItems.forEach((item)=>{
                total += item.price * item.amount
            })
            state.total = total
        },
        removeItem: (state, {payload}) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== payload)
            state.amount -= 1
        },
        increaseAmount: (state, {payload}) => {
            const item = state.cartItems.find((item) => item.id === payload )
            item.amount += 1
        },
        decreaseAmount: (state, {payload}) => {
            const item = state.cartItems.find((item) => item.id === payload )
            item.amount -= 1
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state)=> {
            state.isLoading= true;
        })
        .addCase(getCartItems.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.cartItems = payload;
            state.amount = payload.length;
        })
        .addCase(getCartItems.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const {calculateTotal, removeItem, increaseAmount, decreaseAmount, clearCart} = cartSlice.actions;
export default cartSlice.reducer