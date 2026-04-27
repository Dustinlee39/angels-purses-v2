import { state } from '../state.js';

export function updateStatusFromOffers() {
  state.offers.forEach(o => {
    if (!o.productId) return;
    state.status[o.productId] = 'pending';
  });
}
