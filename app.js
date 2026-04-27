const grid = document.getElementById('grid');
const modal = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImgWrap = document.getElementById('modal-img-wrap');
const closeBtn = document.getElementById('modal-close');

let currentProduct = null;

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const products = data.products;

    grid.innerHTML = '';

    products.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <div class="card-img-wrap">
          <img src="${item.image}" alt="${item.alt}" class="card-img"/>
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.description}</p>
          <p class="card-price">Make an Offer</p>
        </div>
      `;

      // CLICK → OPEN MODAL
      card.addEventListener('click', () => {
        currentProduct = item;

        modalTitle.textContent = item.name;
        modalDesc.textContent = item.description;

        modalImgWrap.innerHTML = `
          <img src="${item.image}" alt="${item.alt}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">
        `;

        modal.style.display = 'flex';
      });

      grid.appendChild(card);
    });

    document.getElementById('section-count').textContent =
      products.length + ' pieces';
  })
  .catch(err => {
    console.error('Error loading products:', err);
    grid.innerHTML = '<p style="color:red;">Failed to load products.</p>';
  });

// CLOSE MODAL
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// FORM SUBMIT
const form = document.getElementById('offer-form');
const successMsg = document.getElementById('form-success');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const offer = document.getElementById('offer-amount').value.trim();
  const meeting = document.getElementById('meet-time').value.trim();

  if (!offer || !meeting) {
    form.style.animation = 'shake 0.3s';
    setTimeout(() => form.style.animation = '', 300);
    return;
  }

  successMsg.style.display = 'block';
  form.reset();
});
