export function saveSnapshot(state) {
  localStorage.setItem("ap_snapshot", JSON.stringify(state));
}

export function restoreSnapshot() {
  try {
    return JSON.parse(localStorage.getItem("ap_snapshot"));
  } catch {
    return null;
  }
}
