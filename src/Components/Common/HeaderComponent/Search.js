import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../GlobalElements/CartContext';

const Search = (props) => {

    const [searchWord,setSearchWord]=useState('');
    const [cart,setCart,searchKeyword, setSearchKeyword] = useContext(CartContext);

    const handleChange=(event)=>{
        setSearchWord(event.target.value);
    }

    const search=()=>{
        setSearchKeyword(searchWord);
    }

    return (
        <div className="row">
            <form className="form-inline">
                <input className="form-control text-light col-9" onChange={handleChange} value={searchWord}
                    type="search" placeholder="Search" id="search">
                </input>
                <div className="col-1" onClick={search}>
                    <FontAwesomeIcon icon={faSearch} className="text-light" size="lg"/>
                </div>
            </form>

        </div>
    );
};

export default Search;