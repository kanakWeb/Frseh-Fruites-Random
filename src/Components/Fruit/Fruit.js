import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Fruit.css'


const Fruit = (props) => {

    const{handleAddToCart,fruit}=props
    const{picture,name,price}=fruit
    
   
   
    return (
   
  <div className="col-sm-12 col-md-6 col-lg-4 ">
    <div className="card card-sizing ">
      <img src={picture} className="card-img-top img-sizeing " alt=""/>
      <div className="card-body">
        <h2 className="card-title mt-5">{name}</h2>
        <h5 className='mt-4'>Price:$ {price}</h5>
      </div>
      
       <button  onClick={()=>handleAddToCart(fruit)}  className='btn w-100 btn-warning button-size'>ADD To CART
       <FontAwesomeIcon className='px-3' icon={faShoppingCart}></FontAwesomeIcon>
       </button>
     
    </div>
  </div>
      
    );
};

export default Fruit;