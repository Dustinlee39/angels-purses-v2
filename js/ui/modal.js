export function openModal(product) {
  const root = document.getElementById('modal');
  root.innerHTML = `
    <div class="modal-overlay">
      <div class="modal">
        <button id="close">×</button>
        <img src="${product.image}" />
        <h2>${product.name}</h2>
        <p>${product.description}</p>
      </div>
    </div>`;
  document.getElementById('close').onclick = () => root.innerHTML = '';
  root.onclick = e => {
    if (e.target.classList.contains('modal-overlay')) root.innerHTML = '';
  };
}
