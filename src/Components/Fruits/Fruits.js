import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
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
                 <div className='postion-details'>
                 <h1>Details <FontAwesomeIcon className='ps-2 me-0' icon={faNoteSticky}></FontAwesomeIcon ><sup className=' ms-0 ps-0'>{carts.length}</sup> </h1>
            
            {
                carts.map((cart) =>
                
                <div key={cart.id} className='cart'>
                    <p className='bg-secondary m-2 p-2 boder rounded postion-details'>{cart.name}</p>
                </div>
                  
                    )
            }
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