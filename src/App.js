import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ProductsList from './components/ProductsList.jsx';
import SearchBar from './components/SearchBar.jsx';
import Categories from './components/Categories.jsx';
import ShoppingCart from './pages/ShoppingCart';
// falta importar alguns componentes e páginas

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-page">
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className="cart-button">
            <Link data-testid="shopping-cart-button" to="/ShoppingCart">
              <img className="cart-img" src="http://shorturl.at/clvE1" alt="Open shopping cart" />
            </Link>
          </div>
          <div className="categories">
            <Categories />
          </div>
          <div className="products">
            <Switch>
              <Route exact path="/" component={ProductsList} />
              <Route path="/ShoppingCart" component={ShoppingCart} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
