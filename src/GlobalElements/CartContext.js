import React,{useState} from 'react';

export const CartContext = React.createContext();

export const CartContextProvider = props => {
    
  const [cart, setCart] = useState({ items: [], totalPrice: 0, totalDisplayPrice: 0, totalDiscount: 0 });
  const [searchKeyword, setSearchKeyword]=useState('');
  const [filterValue, setFilterValue] = useState({ min: 100, max: 10000 });

    const contextValue = {
        cart,
        setCart,
        searchKeyword,
        setSearchKeyword,
        filterValue,
        setFilterValue
    };

    return (
        <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
    );
};