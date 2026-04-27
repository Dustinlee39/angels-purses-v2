import { modalState } from './modalState.js';

export function openModal(product) {
  const root = document.getElementById('modal');
  if (!root || !product || modalState.open) return;

  modalState.open = true;

  root.innerHTML = `
    <div class="modal-overlay">
      <div class="modal">
        <button class="close">×</button>
        <img src="${product.image}" />
        <h2>${product.name}</h2>
        <p>${product.description || ''}</p>
      </div>
    </div>
  `;

  const overlay = root.querySelector('.modal-overlay');
  const close = root.querySelector('.close');

  const closeFn = () => {
    root.innerHTML = '';
    modalState.open = false;
  };

  close.onclick = closeFn;
  overlay.onclick = (e) => {
    if (e.target === overlay) closeFn();
  };
}
