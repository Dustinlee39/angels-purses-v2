export function renderGrid(products, onSelect) {
  const grid = document.getElementById('grid');
  if (!grid) return;
  grid.innerHTML = '';
  products.forEach(p => {
    if (!p?.image || !p?.name) return;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.alt || ''}" loading="lazy"/>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.description || ''}</p>
      </div>`;
    card.onclick = () => onSelect(p);
    grid.appendChild(card);
  });
}
