import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wislist',
    initialState:[],
    reducers:{
        // add product to wishlist,component must pass entire product object
        addToWishList :(state,productBycomponentAction)=>{
            state.push(productBycomponentAction.payload)
        },
        // remove prodduct from wishlist,component must pass product id
        removeWishListItem:(state,productBycomponentAction)=>{
            return state.filter(item=>item.id!=productBycomponentAction.payload)
        }
    }
}) 

export const{addToWishList,removeWishListItem} =wishlistSlice.actions
export default wishlistSlice.reducer