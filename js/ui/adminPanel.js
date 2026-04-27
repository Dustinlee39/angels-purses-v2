import { adminState } from './admin.js';
import { state } from '../state.js';
import { acceptOffer, rejectOffer } from './offerWorkflow.js';

export function renderAdminPanel() {
  if (!adminState.enabled) return;

  let panel = document.getElementById('admin-panel');

  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'admin-panel';
    document.body.appendChild(panel);
  }

  panel.innerHTML = `
    <div class="admin-box">
      <h3>Admin Control</h3>

      <div class="offers">
        ${state.offers.map(o => `
          <div class="offer-row">
            <span>${o.name || 'Guest'}</span>
            <span>$${o.offer}</span>
            <span>${o.status}</span>

            <button onclick="window.__accept(${o.id})">Accept</button>
            <button onclick="window.__reject(${o.id})">Reject</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// expose actions for inline buttons
window.__accept = (id) => acceptOffer(id);
window.__reject = (id) => rejectOffer(id);
