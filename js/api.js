export async function fetchProducts() {
  const res = await fetch('./data/products.json');
  if (!res.ok) throw new Error('Fetch failed');
  const data = await res.json();
  if (!data || !Array.isArray(data.products)) {
    throw new Error('Invalid product schema');
  }
  return data;
}
