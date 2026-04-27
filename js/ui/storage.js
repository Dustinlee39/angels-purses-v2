export function saveOffers(offers) {
  localStorage.setItem('offers', JSON.stringify(offers));
}

export function loadOffers() {
  try {
    return JSON.parse(localStorage.getItem('offers')) || [];
  } catch {
    return [];
  }
}
