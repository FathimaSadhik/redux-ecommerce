import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllproducts=createAsyncThunk('products/fetchAllproducts',async()=>{
    const result =await axios.get("https://dummyjson.com/products")
    // console.log(result);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products
})
const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:false,
        error:''
    },
    reducers:{
        // product search
        searchProduct:(state,actionFromHeader)=>{
            state.allProducts=state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(actionFromHeader.payload))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllproducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state. dummyAllProducts=apiResult.payload
            state.loading=false
            state.error=""
        })
        builder.addCase(fetchAllproducts.pending,(state,apiResult)=>{
            state.allProducts=[]
            state. dummyAllProducts=[]
            state.loading=true
            state.error=""
        })
        builder.addCase(fetchAllproducts.rejected,(state,apiResult)=>{
            state.allProducts=[]
            state. dummyAllProducts=apiResult.payload
            state.loading=false
            state.error='API call failed....Please try after sometimes!!!'
        })
    }
})
export const {searchProduct} =productSlice.actions
export default productSlice.reducer