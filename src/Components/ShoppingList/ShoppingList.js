import React, { useState, useEffect } from 'react';
import useShoppingList from './useShoppingList';
import ShoppingItem from './ShoppingItem';
import SortBar from '../Common/SortComponent/SortBar';
import FilterBar from '../../Components/Common/FilterComponent/FilterBar';
import FilterBarModal from '../../Components/Common/FilterComponent/FilterBarModal';
import SortBarModal from '../Common/SortComponent/SortBarModal';

const ShoppingList = () => {

    const { items, setSorting, toggleSort } = useShoppingList();

    return (
        <>
        <div className="row mt-4 mx-auto d-md-none">
            <div className="col-6 p-0">
                <FilterBarModal onSelectSorting={setSorting} />
            </div>
            <div className="col-6 p-0">
                <SortBarModal onSelectSorting={setSorting} />
            </div>
        </div>
        <div className="row mt-4 ml-0 mx-auto">
            <FilterBar />
            <div className="col-md-10 border-left">
                <SortBar onSelectSorting={setSorting} />
                <div className="row mt-4">
                    {
                        items ?
                            items.map((item) => {
                                return <ShoppingItem item={item} key={item.name} />
                            })
                            : ''
                    }
                </div>
            </div>
        </div>
        </>
    );

};

export default ShoppingList;
