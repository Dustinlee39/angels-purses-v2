export function renderGrid(products, onSelect) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" />
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>`;
    card.onclick = () => onSelect(p);
    grid.appendChild(card);
  });
}
