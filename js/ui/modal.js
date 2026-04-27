import { modalState } from './modalState.js';
import { getStatus } from './productStatus.js';

export function openModal(product) {
  const root = document.getElementById('modal');
  if (!root || !product || modalState.open) return;

  modalState.open = true;

  const status = getStatus(product.id);

  root.innerHTML = `
    <div class="modal-overlay">
      <div class="modal">
        <button class="close">×</button>
        <div class="badge">${status}</div>
        <img src="${product.image}" />
        <h2>${product.name}</h2>
        <p>${product.description || ''}</p>
      </div>
    </div>
  `;

  const overlay = root.querySelector('.modal-overlay');
  const close = root.querySelector('.close');

  const shut = () => {
    root.innerHTML = '';
    modalState.open = false;
  };

  close.onclick = shut;
  overlay.onclick = (e) => {
    if (e.target === overlay) shut();
  };
}
