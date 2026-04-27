import { safeImage } from './images.js';
import { batchRender } from './renderQueue.js';

export function renderGrid(products, onSelect) {
  const grid = document.getElementById('grid');
  if (!grid) return;
  grid.innerHTML = '';

  batchRender(products, (p) => {
    if (!p?.name) return;

    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${safeImage(p.image)}" loading="lazy"/>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.description || ''}</p>
      </div>
    `;

    card.onclick = () => onSelect(p);
    grid.appendChild(card);
  });
}
