import React from 'react';
import ProductsLists from './productsLists';
class SearchBar extends React.Component {
  change = (e) => console.log(e.target.value);
  render() {
    return (
      // <input onChange={this.change}></input>
      <ProductsLists />
    );
  }
}
export default SearchBar;
