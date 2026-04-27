import { state } from '../state.js';

export function logEvent(type, payload) {
  if (!state.audit) state.audit = [];

  state.audit.push({
    type,
    payload,
    time: Date.now()
  });
}
