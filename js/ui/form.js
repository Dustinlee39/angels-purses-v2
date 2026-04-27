import { validateOffer } from './validation.js';
import { addOffer } from './offers.js';
import { state } from '../state.js';

export function bindOfferForm(onSubmit) {
  const form = document.getElementById('offer-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      productId: state.selectedProduct?.id,
      offer: form.offer?.value,
      meeting: form.meeting?.value,
      name: form.name?.value,
      contact: form.contact?.value
    };

    if (!validateOffer(data)) return;

    addOffer(data);
    onSubmit(data);
    form.reset();
  });
}
