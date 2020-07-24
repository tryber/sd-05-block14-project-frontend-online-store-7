export async function getCategories() {
  fetch("https://api.mercadolibre.com/sites/MLB/categories")
    .then((res) => res.json())
    .then((result) => this.setState({ data: result }));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
