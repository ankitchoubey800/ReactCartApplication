import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from './Components/Common/HeaderComponent/Header';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import CartListComponent from './Components/Cart/CartListComponent';
import { CartContextProvider, CartContext } from './GlobalElements/CartContext';
import './App.css';

function App() {

  const {cart} = useContext(CartContext);

  let routes = (
    <Switch>
      <Route exact path="/" component={ShoppingList} />
      <Route path="/Cart" component={CartListComponent} />
      <Redirect to="/" />
    </Switch>
  );
  return (
      <Router>
        <div className="container-fluid p-0">          
          <Header cartCount={cart.items.length}/>
          {routes}
          </div >
      </Router>
  );
}

export default App;
