import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart}=props
    console.log(props);
    return (
        <div>
            <div className='bg-secondary m-2 p-2 boder rounded postion-details'>{cart.name}</div>
        </div>
    );
};

export default Cart;