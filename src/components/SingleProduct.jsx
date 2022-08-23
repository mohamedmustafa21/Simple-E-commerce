import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data'
import axios from 'axios';

function SingleProduct({cart,setcart,setRemove,remove}) {


  
     const [catrBtn, setCartBtn] = useState("Added To Cart")
    const proid = useParams()
    const proDetail = DATA.filter(x=>x.id == proid.id)
    const product =proDetail[0];
    const addToCart = (product)=>{
      // console.log(product)
    }
  
    console.log(cart)

   function handleCart(){
        if (catrBtn === "Added To Cart"){
          setCartBtn('Remove From Cart')
          addToCart(product)
          setcart([...cart,{...product , quantity :1}])
          

       
            
          
        }
        else{
          setCartBtn('Added To Cart')
         


        }
    }
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} alt={product.title}  height='400px'/>
            </div>
            <div className="col-md-6 flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr />
                <h2 className='my-4'>{product.price}</h2>
                <p className='lead'>{product.desc}</p>
                <button onClick={()=>handleCart(product)} className='btn btn-outline-primary my-5'>{catrBtn}</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
