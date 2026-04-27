export async function fetchProducts() {
  const res = await fetch('./data/products.json');
  return await res.json();
}
