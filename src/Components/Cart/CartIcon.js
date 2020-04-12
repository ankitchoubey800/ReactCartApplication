import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartIcon = (props) => {

    return (
        <div className="row">
            <Link to={`/Cart`}>
                <FontAwesomeIcon icon={faShoppingCart} className="text-light my-2" size="lg" />
                {props.cartCount !== 0 ?
                    <span className="text-light border px-1"
                        style={{ borderRadius: '50%', backgroundColor: 'red', position: 'absolute' }}>{props.cartCount}</span>
                    : ''}
            </Link>
        </div>
    );
};

export default CartIcon;