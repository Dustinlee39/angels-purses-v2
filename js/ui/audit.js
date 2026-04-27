import { state } from '../state.js';
import { save, load, StorageKeys } from './storage.js';

export function logEvent(type, payload) {
  if (!state.audit) state.audit = load(StorageKeys.AUDIT, []);

  state.audit.push({
    type,
    payload,
    time: Date.now()
  });

  save(StorageKeys.AUDIT, state.audit);
}
