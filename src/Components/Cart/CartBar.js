import React, { useContext } from 'react';

const CartBar = (props) => {
    let cart=props.cart;
    // { items: [], totalPrice: 0, totalDisplayPrice: 0, totalDiscount: 0 }
    return (
        <div className="row">
            <div className="col-12">
                <div class="card">
                    <div class="card-header">
                        PRICE DETAILS
                    </div>
                    <div class="card-body">
                        
                        <p class="card-text">Price: {cart.totalDisplayPrice}</p>
                        <p class="card-text">Discount: {cart.totalDisplayPrice-cart.totalPrice}</p>
                    </div>
                    <div class="card-footer text-muted">
                        Total Payable: {cart.totalPrice}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBar;