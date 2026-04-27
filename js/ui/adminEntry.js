import { enableAdmin } from './admin.js';
import { renderAdminPanel } from './adminPanel.js';
import { renderAudit } from './auditViewer.js';

export function initAdminEntry() {
  window.enableAdminMode = (key) => {
    if (enableAdmin(key)) {
      renderAdminPanel();
      renderAudit();
    }
  };
}
