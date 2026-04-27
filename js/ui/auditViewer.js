import { state } from '../state.js';

export function renderAudit() {
  let panel = document.getElementById('audit-panel');

  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'audit-panel';
    document.body.appendChild(panel);
  }

  panel.innerHTML = `
    <h3>Audit Log</h3>
    <div class="audit-list">
      ${state.audit.slice(-20).map(a => `
        <div class="audit-row">
          <span>${a.type}</span>
          <span>${new Date(a.time).toLocaleTimeString()}</span>
        </div>
      `).join('')}
    </div>
  `;
}
