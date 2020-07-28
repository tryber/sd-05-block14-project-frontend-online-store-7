import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' }
    this.onClickSearch = this.onClickSearch.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  onClickSearch(event) {
    this.setState({searchText: event.target.value})
  }

  resetInput() {
    this.setState({ searchText: '' })
  }



  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <form>
          <input
            value={inputValue}
            data-testid="query-input"
            onChange={this.onClickSearch}
          />
          <Link
            to={{
              pathname: '/',
              state: { inputValue },
            }}
          >
            <button
              onClick={this.resetInput}
              type="submit"
              data-testid="query-button"
            >
              Pesquisar
            </button>
          </Link>
        </form>
      </div>
    );
  }

}

export default SearchBar;
