import { ENV } from './env.js';

export function log(...args) {
  if (ENV.debug) {
    console.log("[DEBUG]", ...args);
  }
}
