import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

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
       setCarts(newCart);
    }
    return (
      /* details item */
           <div className='sizeing py-4'>
                <div className='row g-4'>
                 <div className='col-12 col-lg-3 color'>
            <h1>Details</h1>
            {
                carts.map(cart=><div className='bg-light m-2 p-2'>
                    {cart.name}
                    </div>)
            }
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