import React, { useContext, useState } from 'react';


const SortBar = (props) => {

    const [active, setActive] = useState(0);

    const setSortActive = (option) => {
        if (option === 1) {
            if (active === 1) {
                setActive(0);
                props.onSelectSorting(0);
            }
            else {
                setActive(1);
                props.onSelectSorting(1);
            }
        }
        else if (option === 2) {
            if (active === 2) {
                setActive(0);
                props.onSelectSorting(0);
            }
            else {
                setActive(2);
                props.onSelectSorting(2);
            }
        }
        else {
            if (active === 3) {
                setActive(0);
                props.onSelectSorting(0);
            }
            else {
                setActive(3);
                props.onSelectSorting(3);
            }
        }
    }

    return (
        <div className="row ml-2">
            <div className="d-md-flex justify-content-start topnav card-header-tabs d-none">
                <b className="nav-link">Sort By</b>                
                <span className={active === 1 ? "active nav-link" : "nav-link"} onClick={() => { setSortActive(1) }}>Price -- High Low</span>
                <span className={active === 2 ? "active nav-link" : "nav-link"} onClick={() => { setSortActive(2) }}>Price -- Low High</span>
                <span className={active === 3 ? "active nav-link" : "nav-link"} onClick={() => { setSortActive(3) }}>Discount</span>
            </div>
        </div>
    );
};

export default SortBar;