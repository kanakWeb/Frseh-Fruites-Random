import React from 'react';
import './Fruit.css'
const Fruit = (props) => {
    const{fruit}=props;
    const{picture,name,price}=fruit
    
    return (
        
           
  <div className="col-sm-12 col-md-6 col-lg-4">
    <div className="card h-100">
      <img src={picture} className="card-img-top img-sizeing" alt=""/>
      <div className="card-body">
        <h2 className="card-title mt-5">{name}</h2>
        <h5 className='mt-4'>Price:$ {price}</h5>
      </div>
      
       <div><button className='btn w-100 btn-warning'>ADD To CART</button></div>
     
    </div>
  </div>
      
    );
};

export default Fruit;