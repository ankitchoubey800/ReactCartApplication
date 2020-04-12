import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Search from './Search';
import CartIcon from '../../Cart/CartIcon';

const Header = (props) => {

    return (
        <nav className="navbar navbar-expand">
            <Link className="navbar-brand" to={`/`}><FontAwesomeIcon icon={faStar} size="lg" color="yellow"/></Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item col-10">
                        <Search />
                    </li>
                    <li className="nav-item col-2">
                        <CartIcon cartCount={props.cartCount}/>
                    </li>
                </ul>
        </nav>
    );
};

export default Header;