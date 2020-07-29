import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import index from './pages/index';
import Categories from './components/Categories';
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
      </BrowserRouter>
    </div>
  );
}

export default App;
