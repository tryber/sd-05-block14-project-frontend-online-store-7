export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories').then((res) => res.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let Url;
  if (categoryId) Url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  else if (query) Url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else Url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const Result = fetch(Url).then((response) => response.json());
  return Result;
}
