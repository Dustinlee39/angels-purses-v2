// ── GLOBALS ──
let products = [];
let currentProduct = null;

// ── DOM REFS ──
const grid         = document.getElementById('grid');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose   = document.getElementById('modal-close');
const modalImg     = document.getElementById('modal-img');
const modalImgWrap = document.getElementById('modal-img-wrap');
const modalTitle   = document.getElementById('modal-title');
const modalDesc    = document.getElementById('modal-desc');
const offerForm    = document.getElementById('offer-form');
const formSuccess  = document.getElementById('form-success');
const sectionCount = document.getElementById('section-count');

const chatBtn      = document.getElementById('chat-btn');
const chatPanel    = document.getElementById('chat-panel');

// ── LOAD PRODUCTS ──
fetch('products.json')
  .then(r => r.json())
  .then(data => {
    products = data;
    sectionCount.textContent = data.length + ' pieces';
    data.forEach((p, i) => {
      const card = buildCard(p, i);
      grid.appendChild(card);
    });
  })
  .catch(() => {
    grid.innerHTML = '<p style="color:#9c8878;font-size:.85rem;letter-spacing:.1em;">Unable to load collection. Please refresh.</p>';
  });

// ── BUILD CARD ──
function buildCard(p, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.animationDelay = (index * 0.06) + 's';

  card.innerHTML = `
    <div class="card-img-wrap">
      <div class="img-placeholder">
        <span class="ph-icon">👜</span>
        <span class="ph-label">Add photo</span>
      </div>
      <div class="card-overlay">
        <span class="card-overlay-text">Make an offer</span>
      </div>
    </div>
    <div class="card-body">
      <div class="card-name">${p.name}</div>
      <div class="card-tag">Offers only &nbsp;·&nbsp; By appointment</div>
    </div>
  `;

  // swap placeholder for real image if it loads
  const img = new Image();
  img.onload = () => {
    const wrap = card.querySelector('.card-img-wrap');
    const placeholder = wrap.querySelector('.img-placeholder');
    placeholder.replaceWith(img);
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;transition:transform .4s ease;';
  };
  img.src = p.image;

  card.addEventListener('click', () => openModal(p));
  return card;
}

// ── OPEN MODAL ──
function openModal(p) {
  currentProduct = p;

  // image
  modalImgWrap.innerHTML = `
    <div class="modal-img-placeholder">
      <span class="ph-icon">👜</span>
      <span class="ph-label">Add photo · ${p.name}</span>
    </div>
  `;
  const img = new Image();
  img.onload = () => {
    modalImgWrap.innerHTML = '';
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
    modalImgWrap.appendChild(img);
  };
  img.src = p.image;

  modalTitle.textContent = p.name;
  modalDesc.textContent  = p.description;

  // reset form
  offerForm.reset();
  offerForm.style.display = 'block';
  formSuccess.style.display = 'none';

  // update form action with product name in subject
  offerForm.setAttribute('data-product', p.name);

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── CLOSE MODAL ──
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  currentProduct = null;
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── OFFER FORM SUBMIT ──
offerForm.addEventListener('submit', async e => {
  e.preventDefault();

  const offerAmt  = document.getElementById('offer-amount').value.trim();
  const meetTime  = document.getElementById('meet-time').value.trim();
  const name      = document.getElementById('buyer-name').value.trim();
  const contact   = document.getElementById('buyer-contact').value.trim();
  const productName = offerForm.getAttribute('data-product') || 'Unknown Item';

  // validation — both offer AND meeting time required
  if (!offerAmt || !meetTime) {
    shake(offerForm);
    return;
  }

  const submitBtn = offerForm.querySelector('.btn-submit');
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        product:  productName,
        offer:    offerAmt,
        meeting:  meetTime,
        name:     name,
        contact:  contact
      })
    });

    if (res.ok) {
      offerForm.style.display = 'none';
      formSuccess.style.display = 'block';
    } else {
      submitBtn.textContent = 'Try Again';
      submitBtn.disabled = false;
    }
  } catch {
    // fallback: open mailto if fetch fails
    const subject = encodeURIComponent(`Offer on: ${productName}`);
    const body    = encodeURIComponent(
      `Item: ${productName}\nOffer: ${offerAmt}\nMeeting time: ${meetTime}\nName: ${name}\nContact: ${contact}`
    );
    window.location.href = `mailto:YOUREMAIL@example.com?subject=${subject}&body=${body}`;
    submitBtn.textContent = 'Submit Offer';
    submitBtn.disabled = false;
  }
});

// shake animation for validation
function shake(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shake 0.35s ease';
  setTimeout(() => el.style.animation = '', 400);
}

// ── MESSENGER POPUP ──
function openMessenger(e) {
  e.preventDefault();
  const url = 'https://m.me/1XnyL2hAM1';
  const w = 420, h = 640;
  const left = Math.round((screen.width  - w) / 2);
  const top  = Math.round((screen.height - h) / 2);
  const popup = window.open(
    url,
    'MessengerChat',
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
  );
  // fallback: if popup blocked, open in new tab
  if (!popup || popup.closed) {
    window.open(url, '_blank');
  }
}

// ── CHAT BUBBLE ──
chatBtn.addEventListener('click', () => {
  chatPanel.classList.toggle('open');
});

// close chat when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.chat-bubble')) {
    chatPanel.classList.remove('open');
  }
});
