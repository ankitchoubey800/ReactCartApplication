import React, { useState, useEffect } from 'react';
import { GetShoppingItems } from '../../Services/ShoppingItemServices';

const useShoppingList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        GetShoppingItems().then(result => {
            // setItems(result.items);
            setItems([{ "name": "item 1", "price": { "actual": 1000, "display": 1900 }, "discount": 10 },
            { "name": "item 2", "price": { "actual": 300, "display": 900 }, "discount": 30 },
            { "name": "item 3", "price": { "actual": 200, "display": 900 }, "discount": 50 },
            { "name": "item 4", "price": { "actual": 500, "display": 900 }, "discount": 40 },
            { "name": "item 5", "price": { "actual": 150, "display": 900 }, "discount": 20 },
            { "name": "item 6", "price": { "actual": 450, "display": 900 }, "discount": 60 },
            { "name": "item 7", "price": { "actual": 230, "display": 900 }, "discount": 35 },
            { "name": "item 8", "price": { "actual": 700, "display": 900 }, "discount": 45 }]);
        });
    }, []);

    const setSorting = (sortOption) => {
        if (items && items !== []) {
            if (sortOption == 1) {
                let sortedItems = items.sort(sortByProperty('price', 'desc'));
                setItems([...sortedItems]);
            }
            else if (sortOption == 2) {
                let sortedItems = items.sort(sortByProperty('price', 'asc'));
                setItems([...sortedItems]);
            }
            else if (sortOption == 3) {
                let sortedItems = items.sort(sortByProperty('discount'));
                setItems([...sortedItems]);
            }
            else {
                GetShoppingItems().then(result => {
                    // setItems(result.items);
                    setItems([{ "name": "item 1", "price": { "actual": 1000, "display": 1900 }, "discount": 10 },
                    { "name": "item 2", "price": { "actual": 300, "display": 900 }, "discount": 30 },
                    { "name": "item 3", "price": { "actual": 200, "display": 900 }, "discount": 50 },
                    { "name": "item 4", "price": { "actual": 500, "display": 900 }, "discount": 40 },
                    { "name": "item 5", "price": { "actual": 150, "display": 900 }, "discount": 20 },
                    { "name": "item 6", "price": { "actual": 450, "display": 900 }, "discount": 60 },
                    { "name": "item 7", "price": { "actual": 230, "display": 900 }, "discount": 35 },
                    { "name": "item 8", "price": { "actual": 700, "display": 900 }, "discount": 45 }]);
                });
            }
        }
    }

    const sortByProperty = (property, order) => {
        if (property === 'price' && order === 'desc') {
            return function (a, b) {
                if (a["price"]["actual"] > b["price"]["actual"])
                    return -1;
                else if (a["price"]["actual"] < b["price"]["actual"])
                    return 1;

                return 0;
            }
        }
        else if (property === 'price' && order === 'asc') {
            return function (a, b) {
                if (a["price"]["actual"] > b["price"]["actual"])
                    return 1;
                else if (a["price"]["actual"] < b["price"]["actual"])
                    return -1;

                return 0;
            }
        }
        else {
            return function (a, b) {
                if (a[property] > b[property])
                    return -1;
                else if (a[property] < b[property])
                    return 1;

                return 0;
            }
        }
    }

    return{
        items,
        setSorting        
    }
};

export default useShoppingList;