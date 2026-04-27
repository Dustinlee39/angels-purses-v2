import { state } from '../state.js';
import { saveOffers, loadOffers } from './storage.js';

export function initOffers() {
  state.offers = loadOffers();
}

export function addOffer(offer) {
  state.offers.push({
    ...offer,
    id: Date.now()
  });

  saveOffers(state.offers);
}
