import React from 'react';
import './Fruit.css'
const Fruit = (props) => {
    const{fruit}=props;
    const{picture}=fruit
    
    return (
        
           
  <div className="col-sm-12 col-md-6 col-lg-4">
    <div className="card h-100">
      <img src={picture} className="card-img-top img-sizeing" alt=""/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p>Price</p>
      </div>
      <div className="card-footer">
       <button>ADD To CART</button>
      </div>
    </div>
  </div>
      
    );
};

export default Fruit;