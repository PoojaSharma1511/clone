const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


const initialState = {
    isSuccess : false,
    isLoading : false,
    isError : false,
    products : []
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchProducts.pending , (state) => {
            state.isLoading = true 
        })
        .addCase(fetchProducts.fulfilled , (state , actions) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = actions.payload 
        })
        .addCase(fetchProducts.rejected , (state) => {
            state.isLoading = false
            state.isError = true
            state.products = []
        })
    }
})


export const fetchProducts = createAsyncThunk("fetch/products" , async()=>{

    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data

})



export default productSlice.reducer