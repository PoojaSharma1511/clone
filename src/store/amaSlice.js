import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import amaService from "./amaService";
const localStorageUser = JSON.parse(localStorage.getItem("user"))
const initialState = {
    user : localStorageUser? localStorageUser :  null,
    isError : false,
    isLoading : false,
    isSuccess : false,
    message : ""
}

const amaSlice = createSlice({
    name : "ama",
    initialState,
    reducers : {
        reset : (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(register.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled , (state , action)=>{
            state.user = action.payload
            state.isSuccess = true
            state.isLoading = false
        })
        .addCase(register.rejected , (state , action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        //login
        .addCase(login.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled , (state , action)=>{
            state.user = action.payload
            state.isSuccess = true
            state.isLoading = false
        })
        .addCase(login.rejected , (state , action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        
        .addCase(logout.fulfilled ,(state)=>{
            state.user = null 

        });
    }
})

export const register = createAsyncThunk('ama/register' , async(user , thunkAPI)=>{

    try {
        return await amaService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
       
        return thunkAPI.rejectWithValue(message)
    }
})

// Login User
export const login = createAsyncThunk('ama/login' , async(user , thunkAPI)=>{
    try {
        return await amaService.login(user)


     } catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
         
        return thunkAPI.rejectWithValue(message)
        }
    
});
// logout user

export const logout = createAsyncThunk('ama/logout' , async ()=>{
    await amaService.logout()
})
export const {reset} = amaSlice.actions
export default amaSlice.reducer