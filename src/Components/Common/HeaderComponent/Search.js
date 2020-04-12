import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = () => {

    return (
        <div className="row">
            <form className="form-inline">
                <input className="form-control text-light col-9" type="search" placeholder="Search" id="search">
                </input>
                <div className="col-1">
                    <FontAwesomeIcon icon={faSearch} className="text-light" size="lg" />
                </div>
            </form>

        </div>
    );
};

export default Search;