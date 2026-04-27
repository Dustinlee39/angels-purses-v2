import { fetchProducts } from './api.js';
import { state } from './state.js';
import { renderGrid } from './ui/grid.js';
import { openModal } from './ui/modal.js';
import { bindOfferForm } from './ui/form.js';
import { initOffers } from './ui/offers.js';
import { updateStatusFromOffers } from './ui/statusEngine.js';
import { logEvent } from './ui/audit.js';
import { initAdminEntry } from './ui/adminEntry.js';
import { StorageKeys, load } from './ui/storage.js';

async function init() {
  const data = await fetchProducts();
  state.products = data.products || [];

  initOffers();

  state.audit = load(StorageKeys.AUDIT, []);
  state.status = load(StorageKeys.STATUS, {});

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
