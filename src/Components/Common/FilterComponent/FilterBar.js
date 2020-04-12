import React, { useContext } from 'react';
import FilterSlider from './FilterSlider';

const FilterBar = () => {

    return (
        <div className="col-md-2 col-xs-5">
            <div className="row d-none d-md-block">
                <div className="col">
                    <b>Filters</b>
                </div>
                <div className="d-none d-md-block">
                    <FilterSlider />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;