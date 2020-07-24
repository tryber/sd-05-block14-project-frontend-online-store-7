// Requisições de API

export async function getCategories() {
  fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((res) => res.json())
    .then((result) => this.setState({ data: result }));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((res) => res.json())
    .then((result) => this.setState({ data: result }));
}
