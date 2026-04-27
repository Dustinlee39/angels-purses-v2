export const adminState = {
  enabled: false
};

export function enableAdmin() {
  adminState.enabled = true;
}

export function isAdmin() {
  return adminState.enabled;
}
