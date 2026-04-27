export async function fetchProducts() {
  try {
    const res = await fetch('./data/products.json');
    if (!res.ok) throw new Error('Network error');

    const data = await res.json();

    if (!data?.products || !Array.isArray(data.products)) {
      throw new Error('Schema invalid');
    }

    return data;

  } catch (err) {
    console.error('API error:', err);
    return { products: [] };
  }
}
