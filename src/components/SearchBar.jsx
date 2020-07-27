import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <input type="text" value={searchText} onChange={onSearchTextChange} />
      </div>
    );
  }
}

export default SearchBar;
