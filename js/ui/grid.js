import { safeImage } from './images.js';
import { batchRender } from './renderQueue.js';
import { getStatus } from './productStatus.js';
import { isLocked } from './lock.js';

export function renderGrid(products, onSelect) {
  const grid = document.getElementById('grid');
  if (!grid) return;

  grid.innerHTML = '';

  batchRender(products, (p) => {
    if (!p?.name) return;

    const status = getStatus(p.id);
    const locked = isLocked(p.id);

    const card = document.createElement('div');
    card.className = 'card';

    card.style.opacity = locked ? '0.6' : '1';
    card.style.pointerEvents = locked ? 'none' : 'auto';

    card.innerHTML = `
      <div class="status">${status}</div>
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
