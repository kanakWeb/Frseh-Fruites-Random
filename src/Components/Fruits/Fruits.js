import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Fruit from '../Fruit/Fruit';
import './Fruits.css'

const Fruits = () => {
    const[fruits,setFruits]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])
    return (

           <div className='sizeing'>
                <div className='row g-4'>
                 <div className='col-12 col-lg-3 color'>
            <h1>Details</h1>
                </div>
                <div className='col-sm-12  col-lg-9'>
                <div className="row g-4">
                {
                    fruits.map(fruit=><Fruit 
                        key={fruit.id}
                        fruit={fruit}
                    ></Fruit>)
                }
            </div>
                </div>
               
            </div>
           </div>
        
    );
};

export default Fruits;