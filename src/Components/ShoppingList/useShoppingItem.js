import React, { useState, useEffect, useContext } from 'react';
import {CartContext} from '../../GlobalElements/CartContext'

const useShoppingItem = () => {

    const { cart,setCart } = useContext(CartContext);
    // { items: [], totalPrice: 0, totalDisplayPrice: 0, totalDiscount: 0 }

    const AddToCart=(item)=>{

        let tempTotalPrice=cart.totalPrice+item.price.actual;
        let tempTotalDisplayPrice=cart.totalDisplayPrice+item.price.display;
        let tempTotalDiscount=cart.totalDiscount+item.discount;

        if(cart.items.find(itm=>itm.name===item.name))
        {
            let itemInCart=cart.items.find(itm=>itm.name===item.name)
            itemInCart.count++;
            
            setCart(prevState => ({
                items: prevState.items.map(x=>x.name===item.name ? itemInCart : x),
                totalPrice:tempTotalPrice,
                totalDisplayPrice:tempTotalDisplayPrice,
                totalDiscount:tempTotalDiscount
            }))
        }
        else{
            item.count=1;            
            setCart(prevState => ({
                items: [...prevState.items,item],
                totalPrice:tempTotalPrice,
                totalDisplayPrice:tempTotalDisplayPrice,
                totalDiscount:tempTotalDiscount
            }))
        }               
    }

    return{
        AddToCart
    }
};

export default useShoppingItem;
