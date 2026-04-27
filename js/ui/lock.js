import { state } from '../state.js';

export function lockProduct(id) {
  state.status[id] = 'pending';
}

export function unlockProduct(id) {
  state.status[id] = 'available';
}

export function isLocked(id) {
  return state.status[id] === 'pending' || state.status[id] === 'sold';
}
