import { state } from '../state.js';

const ADMIN_KEY = "angel-access-2026";

export const adminState = {
  enabled: false
};

export function enableAdmin(key) {
  if (key === ADMIN_KEY) {
    adminState.enabled = true;
    console.log("Admin mode enabled");
    return true;
  }
  return false;
}

export function isAdmin() {
  return adminState.enabled;
}
