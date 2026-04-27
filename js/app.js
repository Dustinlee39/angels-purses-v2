import { fetchProducts } from './api.js';
import { state } from './state.js';
import { renderGrid } from './ui/grid.js';
import { openModal } from './ui/modal.js';
import { bindOfferForm } from './ui/form.js';
import { initOffers } from './ui/offers.js';
import { updateStatusFromOffers } from './ui/statusEngine.js';
import { logEvent } from './ui/audit.js';
import { initAdminEntry } from './ui/adminEntry.js';
import { ENV } from './core/env.js';
import { log } from './core/logger.js';

async function init() {
  log("Environment:", ENV.mode);

  const data = await fetchProducts();
  state.products = data.products || [];

  initOffers();
  updateStatusFromOffers();
  initAdminEntry();

  renderGrid(state.products, (p) => {
    state.selectedProduct = p;
    openModal(p);
    logEvent("PRODUCT_VIEW", p);
  });

  bindOfferForm((offer) => {
    logEvent("OFFER_SUBMITTED", offer);
  });
}

init();

import { VERSION } from './core/version.js';

console.log("Build:", VERSION.label, VERSION.build);
