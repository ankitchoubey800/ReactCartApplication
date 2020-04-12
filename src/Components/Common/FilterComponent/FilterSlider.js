import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

const FilterSlider = () => {

    return (
        <div className="col-12 my-4" style={{textAlign:'center'}}>
                <div className="d-flex flex-row justify-content-between">
                    <div ><FontAwesomeIcon icon={faRupeeSign} size="sm" />100</div>
                    <div ><FontAwesomeIcon icon={faRupeeSign} size="sm" />10000</div>
                </div>
                <input type="range" className="custom-range" id="customRange"></input>
                <div>Price</div>
                <button className="btn btn-md mt-4" href="#"
                    style={{ borderRadius: '15px', border: 'none', backgroundColor: '#3c85e7', color: 'white', width: '100px' }}>
                    <b>Apply</b></button>
        </div>
    );
};

export default FilterSlider;


