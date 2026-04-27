export async function fetchProducts() {
  const res = await fetch('./data/products.json');
  if (!res.ok) throw new Error('Product data failed');
  return await res.json();
}
