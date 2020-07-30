class SearchBar extends Component {
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
