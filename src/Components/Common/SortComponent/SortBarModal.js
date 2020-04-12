import React, { useContext, useState } from 'react';


const SortBarModal = (props) => {

    const [displayModal, setDisplayModal] = useState(false);
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
        <div>
        <button type="button" className="btn btn-outline-dark col-12" data-toggle="modal" data-target="#sortModal">
            Sort
            </button>

        <div className="modal fade" id="sortModal" tabIndex="-1" role="dialog" aria-labelledby="sortModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="sortModalLabel">Sort By</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row ml-2">
                            <div className="d-flex justify-content-start topnav card-header-tabs">
                                <ul>
                                <span className={active === 1 ? "active nav-link" : "nav-link"} onClick={() => { setSortActive(1) }}>Price -- High Low</span>
                                <span className={active === 2 ? "active nav-link" : "nav-link"} onClick={() => { setSortActive(2) }}>Price -- Low High</span>
                                <span className={active === 3 ? "active nav-link" : "nav-link"} onClick={() => { setSortActive(3) }}>Discount</span>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SortBarModal;