import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import productsLists from './components/productsLists.jsx';
import searchBar from './components/searchBar.jsx';
import leftBarCategories from './components/leftBarCategories.jsx'
import shoppingCart from './pages/shoppingCart';
// falta importar alguns componentes e páginas

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-page">
          <div className="search-bar">
            <searchBar />
          </div>
          <div className="cart-button">
            <Link data-testid="shopping-cart-button" to="/shoppingCart">
              <img className="cart-img" src={} />
            </Link>
          </div>
          <div className="categories">
            <leftBarCategories />
          </div>
          <div className="products">
            <Switch>
              <Route exact path="/" component={productsLists} />
              <Route path="/shoppingCart" component={shoppingCart} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
