import { fetchProducts } from './api.js';
import { state } from './state.js';
import { renderGrid } from './ui/grid.js';
import { openModal } from './ui/modal.js';

async function init() {
  const data = await fetchProducts();
  state.products = data.products || [];
  renderGrid(state.products, p => {
    state.selectedProduct = p;
    openModal(p);
  });
}
init();
