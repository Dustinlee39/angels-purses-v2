let open = false;

export function openModal(product) {
  const root = document.getElementById('modal');
  if (!root || !product || open) return;

  open = true;

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

  const shut = () => {
    root.innerHTML = '';
    open = false;
  };

  close.onclick = shut;
  overlay.onclick = (e) => {
    if (e.target === overlay) shut();
  };
}
