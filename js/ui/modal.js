export function openModal(product) {
  const root = document.getElementById('modal');
  if (!root || !product) return;
  root.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'modal-overlay';
  wrap.innerHTML = `
    <div class="modal">
      <button class="close">×</button>
      <img src="${product.image}" />
      <h2>${product.name}</h2>
      <p>${product.description || ''}</p>
    </div>`;
  wrap.querySelector('.close').onclick = () => root.innerHTML = '';
  wrap.onclick = e => { if (e.target === wrap) root.innerHTML = ''; };
  root.appendChild(wrap);
}
