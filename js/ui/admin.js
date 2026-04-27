import { state } from '../state.js';

const ADMIN_KEY = "angel-access-2026";

export const adminState = {
  enabled: false,
  lastLogin: null
};

export function enableAdmin(key) {
  if (key === ADMIN_KEY) {
    adminState.enabled = true;
    adminState.lastLogin = Date.now();
    sessionStorage.setItem("ap_admin", "true");
    return true;
  }
  return false;
}

export function isAdmin() {
  if (sessionStorage.getItem("ap_admin") === "true") {
    adminState.enabled = true;
  }
  return adminState.enabled;
}

export function logoutAdmin() {
  adminState.enabled = false;
  sessionStorage.removeItem("ap_admin");
}
