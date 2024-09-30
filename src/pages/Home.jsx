import React, { useEffect, useState } from 'react'
import Header from './../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllproducts } from './../redux/slices/productSlice'
const Home = () => {
  const dispatch =useDispatch()
  // get elements from store
  const {allProducts,loading,error}=useSelector(state=>state.productReducer)
  // console.log(allProducts)
  const [currentPage,setCurrentpage] =useState(1)
  const productPerPage =8
  const totalPage =Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastProductIndex =currentPage * productPerPage
  const currentPageStartProductIndex =currentPageLastProductIndex - productPerPage
  const visibleProductCards =allProducts?.slice(currentPageStartProductIndex,currentPageLastProductIndex)
  
  useEffect(()=>{
    dispatch(fetchAllproducts())
  },[])
  const NavigateToNextPage =()=>{
    if(currentPage!=totalPage){
      setCurrentpage(currentPage+1)
    }
  }
  const NavigateToPreviousPage =()=>{
    if(currentPage!=1){
      setCurrentpage(currentPage-1)
    }
  }
  return (
    <>
      <Header insideHome={true}/>
      <div style={{marginTop:'100px'}} className='container mx-auto px-4'>
        {
          loading ?
        <div style={{height:'60vh'}} className='flex justify-center items-center font-bold '>
          <img width={'90px'} height={'90px'} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />
        </div>
        :
       <>
          <div className='grid grid-cols-4 gap-4'>
            {
              allProducts.length>0 ?
              // before pagination
              // allProducts?.map(products=>(
                visibleProductCards?.map(products=>(
                <div key={products?.id} className="rounded border p-2 shadow">
              <img style={{width:'100%',height:'200px'}} src={products?.thumbnail} alt="" />
              <div className='text-center'>
                <h3 className='text-xl font-bold'>{products?.title}</h3>
                <Link className='bg-blue-500 text-white p-1 inline-block rounded'  to={`/${products?.id}/view`}>View More</Link>
              </div>
            </div>
              ))
  
               :
  
               <div className='font-bold text-center mt-5 mb-5 text-red-600'>
                Product not found!!!!
               </div>
            }
  
          </div>
          {/* pagination */}
          <div className='flex justify-center items-center mt-5 mb-5'>
            <span onClick={NavigateToPreviousPage} style={{cursor:'pointer'}}><i className='fa-solid fa-backward me-5'></i></span>
            <span className='font-bold'>{currentPage} of {totalPage}</span>
            <span onClick={NavigateToNextPage} style={{cursor:'pointer'}}><i className='fa-solid fa-forward ms-5'></i></span>
          </div>
       </>
        }
      </div>
      </>
  )
}

export default Home