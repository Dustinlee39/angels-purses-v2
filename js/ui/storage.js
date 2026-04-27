import { ENV } from '../core/env.js';

const KEYS = {
  OFFERS: "ap_offers_v1",
  AUDIT: "ap_audit_v1",
  STATUS: "ap_status_v1"
};

export function save(key, data) {
  if (ENV.mode === "production") {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}

export function load(key, fallback = []) {
  try {
    const raw = ENV.mode === "production"
      ? localStorage.getItem(key)
      : sessionStorage.getItem(key);

    return JSON.parse(raw) || fallback;
  } catch {
    return fallback;
  }
}

export const StorageKeys = KEYS;
