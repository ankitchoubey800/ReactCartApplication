import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import {CartContext} from '../../../GlobalElements/CartContext';

const FilterSlider = () => {

    const { filterValue,setFilterValue } = useContext(CartContext);

    let rupeeSign = (value) => { return (<><FontAwesomeIcon icon={faRupeeSign} size="sm" /> {value}</>) };
    return (
        <div className="col-10 my-4 mx-auto" style={{ textAlign: 'center' }}>

            <InputRange
                draggableTrack
                maxValue={10000}
                minValue={100}
                onChange={value => setFilterValue(value)}
                onChangeComplete={value => console.log(value)}
                value={filterValue}
                formatLabel={value => rupeeSign(value)} />

            <div className="mt-3"><b>Price</b></div>
        </div>
    );
};

export default FilterSlider;


