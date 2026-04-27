import { ENV } from './env.js';

export function safeRun(fn) {
  try {
    return fn();
  } catch (e) {
    if (ENV.debug) {
      console.error("Runtime error:", e);
    }
  }
}
