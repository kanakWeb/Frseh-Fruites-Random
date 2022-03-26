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
    const[random,setRandom]=useState({})

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])

    const reseat=()=>{
        setRandom([])
        setCarts([])
    }

    const handleAddToCart=(fruit)=>{
       const newCart=[...carts,fruit]
       if(newCart.length<=4){
        setCarts(newCart);
       }
       else{
           alert('Maximum 4 Item Add To Cart Available')
       }
       
    }


    function randomHandler(carts) {
        

        const random = Math.floor(Math.random() * carts.length);
        setRandom(carts[random])
      
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
             <hr />
             <p>One product selected</p><div key={random.id} className='cart'>
                 <img className='image-modify' src={random.picture} alt=""/>
                    <p className='m-2 p-2 boder rounded postion-details'>{random.name}</p>
                </div>

             <div className='datails-btn-space'>
             <button onClick={()=>randomHandler(carts)} className='btn btn-danger mt-4  w-100'>Choose one item</button>


                <button onClick={reseat} className='btn w-100 btn-warning mt-2'>Choose Again</button>
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