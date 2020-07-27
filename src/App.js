import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// falta importar todos os componentes

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-page">
          <div className="search-bar">
            <searchBar />
          </div>
          <div className="cart-button">
            <Link data-testid="shopping-cart-button" to="/shoppingCart"> colocar imagem do botão aqui </Link>
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
