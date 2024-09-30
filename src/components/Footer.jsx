import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{heigth:'700px',marginTop:'150px',padding:'10px'}} className='container mt-5 w-auto bg-yellow-600'>
        <div className='flex flex-row  justify-content-center'>
        <div className='grid-cols-1'>
          <h5 className='text-white font-bold'>Media</h5>
          <p>Designed and built with all the love in 
            the world by the Luminar team with the help 
            of our contributors.
          </p>
          <p>Code licensed Luminar,docs CC BY 3.0.</p>
          <p>Currently v5.3.2</p>
        </div>
        <div className='grid-cols-1'>
          <h5>Links</h5>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link> <br />
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link><br/>
           <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Watching History Page</Link> 

        </div>
        <div className='grid-cols-1'>
          <h5>Guide</h5>
          <p>React</p>
           <p>React Bootstrap</p>
            <p>React Router</p>
        </div>
        <div className='grid-cols-1'>
          <h5>Contact Us</h5>
          <input type="text" style={{padding:'10px'}} placeholder='Enter your email' className='rounded' size="20" />
          <button  className='btn bg-yellow-600 ms-2'><i className="fa-solid fa-arrow-right fs-5 text-center p-1 text-white"></i></button>
          <div className='mt-3 text-white fs-5 grid grid-rows-1 grid-flow-col gap-1'>
           <div className='grid-cols-2'> <i class="fa-brands fa-twitter"></i></div>
           <div className='grid-cols-2'><i class="fa-brands fa-instagram "></i></div>
           <div className='grid-cols-2'><i class="fa-brands fa-facebook  "></i></div>
           <div className='grid-cols-2'><i class="fa-brands fa-linkedin "></i></div>
           <div className='grid-cols-2'><i class="fa-brands fa-github "></i></div>
           <div className='grid-cols-2'> <i class="fa-solid fa-phone "></i></div>
          </div>
        </div>
        </div>
        <div className='text-center mt-12'>
          Copyright Jan 2024 Batch,Media Player.Built with React
        </div>
    </div>
  )
}

export default Footer