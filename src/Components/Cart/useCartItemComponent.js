import React, { useState, useEffect, useContext } from 'react';
import {CartContext} from '../../GlobalElements/CartContext'

const useCartItemComponent = () => {

    const {cart,setCart} = useContext(CartContext);
    // { items: [], totalPrice: 0, totalDisplayPrice: 0, totalDiscount: 0 }

    const AddOneItem=(item)=>{

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
    }

    const RemoveOneItem=(item)=>{

        let tempTotalPrice=cart.totalPrice-item.price.actual;
        let tempTotalDisplayPrice=cart.totalDisplayPrice-item.price.display;
        let tempTotalDiscount=cart.totalDiscount-item.discount;

        if(cart.items.find(itm=>itm.name===item.name))
        {
            let itemInCart=cart.items.find(itm=>itm.name===item.name)
            itemInCart.count--;
            if(itemInCart.count===0){
                setCart(prevState => ({
                    items: prevState.items.filter(x=>x.name!==item.name),
                    totalPrice:tempTotalPrice,
                    totalDisplayPrice:tempTotalDisplayPrice,
                    totalDiscount:tempTotalDiscount
                }))
            }
            else{
                setCart(prevState => ({
                    items: prevState.items.map(x=>x.name===item.name ? itemInCart : x),
                    totalPrice:tempTotalPrice,
                    totalDisplayPrice:tempTotalDisplayPrice,
                    totalDiscount:tempTotalDiscount
                }))
            }
        }               
    }

    const RemoveFromCart=(item)=>{

        let tempTotalPrice=cart.totalPrice-(item.price.actual*item.count);
        let tempTotalDisplayPrice=cart.totalDisplayPrice-(item.price.display*item.count);
        let tempTotalDiscount=cart.totalDiscount-(item.discount*item.count);

        if(cart.items.find(itm=>itm.name===item.name))
        {
            let itemInCart=cart.items.find(itm=>itm.name===item.name)
            setCart(prevState => ({
                items: prevState.items.filter(x=>x.name!==item.name),
                totalPrice:tempTotalPrice,
                totalDisplayPrice:tempTotalDisplayPrice,
                totalDiscount:tempTotalDiscount
            }))
        }               
    }

    return{
        AddOneItem,
        RemoveOneItem,
        RemoveFromCart
    }
};

export default useCartItemComponent;
