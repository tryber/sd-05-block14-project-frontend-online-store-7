import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '', value: '' };
    this.onClickSearch = this.onClickSearch.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  onClickSearch(event) {
    this.setState({ search: event.target.value, value: event.target.value });
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    const { search, value } = this.state
    return (
      <div>
        <form>
          <input
            type="text"
            value={value}
            data-testid="query-input"
            onChange={this.onClickSearch}
          />
          <Link
            to={{
              pathname: '/',
              state: { search },
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
