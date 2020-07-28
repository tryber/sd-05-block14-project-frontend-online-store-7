import React from 'react';
import CartList from './CartList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalValue: 0 };
  }

   updateTotal() {
    const { cartItems } = this.props;
    if (cartItems.length >= 1) {
      const soma = cartItems.reduce((acc, item) => acc + item.sumTotalItem);
      this.setState({ totalValue: soma });
    }
  }
 
  render() {
    const { increaseQuantity, decreaseQuantity, removeFromCart, cartProduct } = this.props;

    return (
      <div>
        <button>Retorno</button>
        <img
          className="cart-img"
          src="https://image.flaticon.com/icons/png/512/263/263142.png"
          alt="Open shopping cart"
          width="50px"
        />
        <h1>Carrinho de Compras</h1>
        <CartList
          cartProduct={cartProduct}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
        <p>
          Total da Compra: R${this.state.totalValue}
        </p>
        <button type="button" data-testid="checkout-products">
          Finalizar compra
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
