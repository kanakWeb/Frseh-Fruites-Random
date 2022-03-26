import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';
import { useState } from 'react';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'
import Cart from '../Cart/Cart';




const Fruits = () => {

    const[fruits,setFruits]=useState([])
    const[carts,setCarts]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])


    const handleAddToCart=(fruit)=>{
       const newCart=[...carts,fruit]
       if(newCart.length<=4){
        setCarts(newCart);
       }
       else{
           alert('Maximum 4 Iteam Add To Cart Available')
       }
       
    }


    function randomHandler(carts) {
        const months = carts.name[0];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);
      }


    return (
      /* details item */
           <div className='sizeing py-4'>
                <div className='row g-4'>
                 <div className='col-12 col-lg-3 color'>
                 <div className='postion-details'>
                 <h1>Details <FontAwesomeIcon className='ps-2 me-0' icon={faNoteSticky}></FontAwesomeIcon ><sup className=' ms-0 ps-0'>{carts.length}</sup> </h1>
                 <h5>Item list:</h5>
            
            {
            
                
                carts.map((cart) =>
                <Cart
                key={cart.id}
                cart={cart}
                ></Cart>  
                 )
            }

             <div className='datails-btn-space'>
             <button  className='btn btn-danger mt-4  w-100'>Chose one item</button>


                <button onClick={randomHandler} className='btn w-100 btn-warning mt-2'>Chose Again</button>
             </div>
                 </div>
          
                </div>

                {/* fruit items and cards */}
                <div className='col-sm-12  col-lg-9'>
                <div className="row g-4">
                {
                    fruits.map(fruit=><Fruit 
                        key={fruit.id}
                        fruit={fruit}
                       handleAddToCart={handleAddToCart}
                    ></Fruit>)
                }
            </div>
                </div>
               
            </div>
           </div>
        
    );
};

export default Fruits;