import { state } from '../state.js';
import { logEvent } from './audit.js';

export function acceptOffer(offerId) {
  const offer = state.offers.find(o => o.id === offerId);
  if (!offer) return;

  offer.status = "accepted";
  state.status[offer.productId] = "sold";

  logEvent("OFFER_ACCEPTED", offer);
}

export function rejectOffer(offerId) {
  const offer = state.offers.find(o => o.id === offerId);
  if (!offer) return;

  offer.status = "rejected";

  logEvent("OFFER_REJECTED", offer);
}
