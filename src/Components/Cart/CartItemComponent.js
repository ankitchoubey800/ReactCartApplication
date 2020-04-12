import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCartItemComponent from './useCartItemComponent';
import { faRupeeSign, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import headphones from '../../Images/headphone-1868612_640.jpg'
const CartItemComponent = (props) => {

    let item = props.item;

    const { AddOneItem, RemoveOneItem, RemoveFromCart } = useCartItemComponent();

    return (
        <>
            {item ?
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={headphones} className="card-img" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <div className="card-text">
                                            <b className="ml-2"><FontAwesomeIcon icon={faRupeeSign} size="sm" />{item.price ? item.price.actual : ''}</b>
                                            <del className="ml-2">{item.price ? item.price.display : ''}</del>
                                            <b className="ml-3" style={{ color: 'green', fontWeight: 'bold' }}>{item.discount}% OFF</b>
                                        </div>
                                        <div className="card-text">
                                            <span onClick={() => RemoveOneItem(item)}>
                                                <FontAwesomeIcon icon={faMinusCircle} size="md"/>
                                            </span>
                                            <span className="border mx-2">{item.count}</span>
                                            <span onClick={() => AddOneItem(item)}>
                                                <FontAwesomeIcon icon={faPlusCircle} size="md"/>
                                            </span>
                                        </div>
                                        <p className="card-text" onClick={() => RemoveFromCart(item)}>REMOVE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ''
            }
        </>
    );
};
export default CartItemComponent;