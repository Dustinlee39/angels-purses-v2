import { state } from '../state.js';

export function setStatus(productId, status) {
  state.status[productId] = status;
}

export function getStatus(productId) {
  return state.status[productId] || 'available';
}
