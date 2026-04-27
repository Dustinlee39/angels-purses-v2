const KEYS = {
  OFFERS: "ap_offers_v1",
  AUDIT: "ap_audit_v1",
  STATUS: "ap_status_v1"
};

export function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function load(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

export const StorageKeys = KEYS;
