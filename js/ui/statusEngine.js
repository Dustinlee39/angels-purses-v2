import { state } from '../state.js';

export function updateStatusFromOffers() {
  state.products.forEach(p => {
    const related = state.offers.filter(o => o.productId === p.id);

    if (related.some(o => o.status === "accepted")) {
      state.status[p.id] = "sold";
    } else if (related.length > 0) {
      state.status[p.id] = "pending";
    } else {
      state.status[p.id] = "available";
    }
  });
}
