import { state } from '../state.js';
import { saveOffers, loadOffers } from './storage.js';
import { lockProduct } from './lock.js';

export function initOffers() {
  state.offers = loadOffers();
}

export function addOffer(offer) {
  const enriched = {
    ...offer,
    id: Date.now(),
    status: "pending"
  };

  state.offers.push(enriched);

  if (offer.productId) {
    lockProduct(offer.productId);
  }

  saveOffers(state.offers);
}
