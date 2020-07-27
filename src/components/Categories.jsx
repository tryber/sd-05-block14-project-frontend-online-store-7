import React, { Component } from 'react';
import * as API from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: '' };
  }
  
  componentDidMount() {
    API.getCategories().then((response) => this.setState({ categories: response }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div data-testid="category">
        <h2>Categorias:</h2>
        <div>
          {categories.map((category) => <p>{category.name}</p>)}
        </div>
      </div>
    );
  }
}

export default Categories;
