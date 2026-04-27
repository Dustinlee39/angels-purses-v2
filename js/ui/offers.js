import { state } from '../state.js';
import { saveOffers, loadOffers } from './storage.js';
import { lockProduct } from './lock.js';

export function initOffers() {
  state.offers = loadOffers();
}

export function addOffer(offer) {
  state.offers.push({
    ...offer,
    id: Date.now()
  });

  if (offer.productId) {
    lockProduct(offer.productId);
  }

  saveOffers(state.offers);
}
