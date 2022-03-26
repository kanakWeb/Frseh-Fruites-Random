import React from 'react';
import './Cart.css'

const Cart = (prop) => {
    const{cart,random}=prop
    console.log(random);
    return (
        <div>
             <div key={cart.id} className='cart'>
                 <img className='image-modify' src={cart.picture} alt=""/>
                    <p className='m-2 p-2 boder rounded postion-details'>{cart.name}</p>
                </div>
        </div>
    );
};

export default Cart;