import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {removeWishListItem} from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
  const myCart =useSelector(state=>state.cartReducer)
  const myWishlist =useSelector(state=>state.wishlistReducer)
  const dispatch =useDispatch()
  const handleAddToCart =(product)=>{
    const existingProduct=myCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishListItem(product.id))
      alert("product quantity is the increementing!!")
    }
    else{
      dispatch(addToCart(product))
      dispatch(removeWishListItem(product.id))
    }
  }
  return (
    <>
      <Header/>
      <div style={{marginTop:'100px'}} className='container mx-auto px-4'>
      {
       myWishlist.length>0 ? 
       <>
       <h1 className='text-red-500 text-3xl font-bold mb-5'>Your WishList</h1>
        <div className='grid grid-cols-4 gap-4'>
         {
           myWishlist?.map(product=>(
            <div key={product?.id} className="rounded border p-2 shadow">
           <img style={{width:'100%',height:'200px'}} src={product?.thumbnail} alt="" />
           <div className='text-center'>
             <h3 className='text-xl font-bold'>{product?.title}</h3>
            <div className="flex justify-evenly mt-3">
             <button onClick={()=>dispatch(removeWishListItem(product?.id))} className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
             <button onClick={()=>handleAddToCart(product)} className='text-xl'><i className="fa-solid fa-cart-plus text-green-600"></i></button>
            </div>
           </div>
         </div>
           ))
         }

        </div>
     </>
     :
     <div style={{height:'100vh'}} className='flex flex-col items-center justify-center w-full'>
      <img src="https://media.istockphoto.com/id/1400586811/vector/web.jpg?s=612x612&w=0&k=20&c=r5g0JlssvfuZN_fPTSwD4eoqSxXVxNX21w0Xs0NsWNo=" alt="" />
      <h1 className='text-3xl font-bold text-blue-600'>Your WishList is Empty!!!!!</h1>
     </div>
      }
      </div>
      </>
  )
}

export default Wishlist