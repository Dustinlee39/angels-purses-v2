import { fetchProducts } from './api.js';
import { state } from './state.js';
import { renderGrid } from './ui/grid.js';
import { openModal } from './ui/modal.js';
import { bindOfferForm } from './ui/form.js';
import { initOffers } from './ui/offers.js';

async function init() {
  const data = await fetchProducts();

  state.products = data.products;
  initOffers();

  renderGrid(state.products, (p) => {
    state.selectedProduct = p;
    openModal(p);
  });

  bindOfferForm((offer) => {
    console.log('Offer saved:', offer);
  });
}

init();
