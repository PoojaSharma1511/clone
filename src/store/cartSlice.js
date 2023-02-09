import  { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCart(state , action){
            state.push(action.payload)
        },
        remove(state , action){
          return state.filter(item => item.id !== action.payload)
        },
        plus(state,action){
            console.log(action.payload);
            return state.map((i)=>i.id===action.payload.id?action.payload:i)

        }
     

    }
})

export const {addToCart , remove,plus} = cartSlice.actions
export default cartSlice.reducer