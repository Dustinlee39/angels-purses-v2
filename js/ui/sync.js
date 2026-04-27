import { state } from '../state.js';
import { save, StorageKeys } from './storage.js';

export function syncAll() {
  save(StorageKeys.OFFERS, state.offers);
  save(StorageKeys.AUDIT, state.audit);
  save(StorageKeys.STATUS, state.status);
}
