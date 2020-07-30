import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { inputValue, searchValueHandler, getProductsFromInput } = this.props;

    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={inputValue}
          onChange={searchValueHandler}
        />
        <button
            data-testid="query-button"
            type="button"
            onClick={getProductsFromInput}
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default SearchBar;
