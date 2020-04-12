import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from './Components/Common/HeaderComponent/Header';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import CartListComponent from './Components/Cart/CartListComponent';
import CartContext from './GlobalElements/CartContext';
import './App.css';

function App() {

  const [cart, setCart] = useState({ items: [], totalPrice: 0, totalDisplayPrice: 0, totalDiscount: 0 });
  const [searchKeyword, setSearchKeyword]=useState('');

  let routes = (
    <Switch>
      <Route exact path="/" component={ShoppingList} />
      <Route path="/Cart" component={CartListComponent} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <CartContext.Provider value={[cart, setCart, searchKeyword, setSearchKeyword]}>
      <Router>
        <div className="container-fluid p-0">          
          <Header cartCount={cart.items.length}/>
          {routes}
          </div >
      </Router>
    </CartContext.Provider>
  );
}

export default App;
