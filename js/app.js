import { fetchProducts } from './api.js';
import { state } from './state.js';
import { renderGrid } from './ui/grid.js';
import { openModal } from './ui/modal.js';
import { el } from './ui/guards.js';

async function init() {
  try {
    const data = await fetchProducts();
    state.products = data.products || [];

    renderGrid(state.products, (p) => {
      state.selectedProduct = p;
      openModal(p);
    });

  } catch (err) {
    console.error(err);
    const grid = el('grid');
    if (grid) grid.innerHTML = '<p>Failed to load products.</p>';
  }
}

init();
