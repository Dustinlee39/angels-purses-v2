import { state } from '../state.js';
import { save, load, StorageKeys } from './storage.js';
import { lockProduct } from './lock.js';
import { syncAll } from './sync.js';

export function initOffers() {
  state.offers = load(StorageKeys.OFFERS, []);
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

  syncAll();
}

import { saveSnapshot } from '../core/rollback.js';

export function snapshotState(state) {
  saveSnapshot(state);
}
