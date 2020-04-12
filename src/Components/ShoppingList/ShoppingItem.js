import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import useShoppingItem from './useShoppingItem';
import laptop from '../../Images/home-office-336373_640.jpg'
import headphones from '../../Images/headphone-1868612_640.jpg'
const ShoppingItem = (props) => {

    let item = props.item;
    
    const { AddToCart }=useShoppingItem();

    return (
        <>
            {item ?
            <div className="col-lg-3 col-md-4 col-6">
                <div className="card" style={{ border: 'none' }}>                   
                            <img src={headphones} className="image" />                        
                    <div className="mt-2">
                        <div>
                            <span>{item.name}</span>
                        </div>
                        <div className="row mt-1 mx-auto">
                            <b className="ml-2"><FontAwesomeIcon icon={faRupeeSign} size="sm" />{item.price ? item.price.actual : ''}</b>
                            <del className="ml-2">{item.price ? item.price.display : ''}</del>
                            <b className="ml-auto" style={{ color: 'green', fontWeight: 'bold' }}>{item.discount}% OFF</b>
                        </div>                        
                        <div className="mt-2 mb-5" style={{ textAlign: 'center' }}>
                            <button href="#" onClick={()=>AddToCart(item)}
                            style={{ borderRadius: '15px', border: 'none', backgroundColor: '#fabd0c' }}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                </div>
                : ''
            }
        </>
    );
};
export default ShoppingItem;