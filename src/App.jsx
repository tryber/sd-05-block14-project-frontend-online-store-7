import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import index from './pages/index';
import Categories from './components/Categories';
import SearchBar from './components/SearchBar';
import ProductDetails from './pages/ProductDetails';

// falta importar alguns componentes e páginas

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="products">
          <Switch>
            <Route exact path="/" component={index} />
            <Route exact path="/:id" component={ProductDetails} />
            <Route path="/ShoppingCart" component={ShoppingCart} />
          </Switch>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <Categories />
        </div>
        <div className="cart-button">
          <Link data-testid="shopping-cart-button" to="/ShoppingCart">
            <img
              className="cart-img"
              src="https://image.flaticon.com/icons/png/512/263/263142.png"
              alt="Open shopping cart"
              width="300px"
            />
          </Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
