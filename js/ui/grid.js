import { setCache, getCache } from './cache.js';

export function renderGrid(products, onSelect) {
  const grid = document.getElementById('grid');
  if (!grid) return;

  grid.innerHTML = '';

  const fragment = document.createDocumentFragment();

  products.forEach(p => {
    if (!p?.name) return;

    let card = getCache(p.id);

    if (!card) {
      card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${p.image}" loading="lazy"/>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p>${p.description || ''}</p>
        </div>
      `;

      card.onclick = () => onSelect(p);
      setCache(p.id, card);
    }

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}
