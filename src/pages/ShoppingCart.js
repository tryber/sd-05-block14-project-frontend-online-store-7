import React from 'react';
import { Link } from 'react-router-dom';
import CartList from './CartList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalValue: 0 };
  }

  componentDidMount() {
    this.updateTotal();
  }

  updateTotal() {
    const { cartItems } = this.props;
    if (cartItems.length >= 1) {
      const soma = cartItems.reduce((acc, curr) => (acc + curr.price) * curr.quantity, 0);
      this.setState({ totalValue: soma });
    }
  }

  render() {
    const { addToCart, decreaseQuantity, removeFromCart, cartItems } = this.props;
    const { totalValue } = this.state;

    return (
      <div>
        <div className="return-icon">
          <Link exact path to="/">Retorno</Link>
        </div>
        <div className="shopping-cart-icon">
          <Link data-testid="shopping-cart-button" to="/ShoppingCart">
            <img
              src="https://image.flaticon.com/icons/png/512/263/263142.png"
              alt="Shopping cart icon"
              width="50px"
            />
          </Link>
        </div>
        <h1>Carrinho de Compras</h1>
        <CartList
          cartItems={cartItems}
          addToCart={addToCart}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
        <p>
          Total da Compra: R${totalValue}
        </p>
      </div>
    );
  }
}

export default ShoppingCart;
