import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onClickSearch = this.onClickSearch.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  onClickSearch(event) {
    this.setState({ search: event.target.value, value: event.target.value });
    console.log(this.state.value);
  }

  resetInput() {
    this.setState({ value: '' });
  }

  render() {
    const { onClick } = this.props;
    const { search, value } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            value={value}
            data-testid="query-input"
            onChange={this.onClickSearch}
          />
          <Link to={{ pathname: '/', state: { search } }} >
            <button
              onClick={() => {
                onClick(search);
                this.resetInput();
              }}
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
