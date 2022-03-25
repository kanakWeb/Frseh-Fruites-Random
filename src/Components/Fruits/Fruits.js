import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Fruit from '../Fruit/Fruit';

const Fruits = () => {
    const[fruits,setFruits]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])
    return (

            <div className='row'>
                <div className='col-9'>
                <div className="row container">
                {
                    fruits.map(fruit=><Fruit 
                        key={fruit.id}
                        fruit={fruit}
                    ></Fruit>)
                }
            </div>
                </div>
                <div className='col-3'>
            <h1>Details</h1>
                </div>
            </div>
        
    );
};

export default Fruits;