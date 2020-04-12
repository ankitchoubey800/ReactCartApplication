import React, { useState, useEffect, useContext } from 'react';
import CartItemComponent from './CartItemComponent';
import { CartContext } from '../../GlobalElements/CartContext';
import CartBar from './CartBar';

const CartComponent = () => {

    const {cart} = useContext(CartContext);
    const [items,setItems]=useState([]);

    useEffect(() => {
        if(cart.items){
            setItems(cart.items);
        }        
    }, [cart]);

    return (
        <div className="row mt-4 mx-auto">
            <div className="col-md-2 col-xs-0">
            </div>
            <div className="col-md-6 col-xs-12 border-right">
                                
                    {
                        items && items.length!==0 ?
                            items.map((item) => {
                                return <CartItemComponent item={item} key={item.name} />
                            })
                            : <h1>Your Cart Is Empty</h1>
                    }
                
            </div>
            <div className="col-md-3 col-xs-0">
                <CartBar cart={cart}/>
            </div>
        </div>
        
    );

};

export default CartComponent;
