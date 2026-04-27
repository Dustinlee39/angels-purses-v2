import { fetchProducts } from './api.js';
import { state } from './state.js';
import { renderGrid } from './ui/grid.js';
import { openModal } from './ui/modal.js';

async function init() {
  try {
    const data = await fetchProducts();
    state.products = data.products || [];
    renderGrid(state.products, p => {
      state.selectedProduct = p;
      openModal(p);
    });
  } catch (e) {
    console.error(e);
  }
}
init();
