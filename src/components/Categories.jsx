import React, { Component } from 'react';
import * as API from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    API.getCategories().then((response) => this.setState({ categories: response }));
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;

    return (
      <div className="categories-container">
        <h2>Categorias:</h2>
        <div className="categories-list">
          {categories.map((category) => (
            <div key={category.id}>
              <label data-testid="category" className="category" htmlFor={category.id}>
                <input
                  id={category.id}
                  name="categories"
                  type="radio"
                  onClick={() => onClick(category.id)}
                />
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
