const grid = document.getElementById('grid');

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const products = data.products; // <-- FIX HERE

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
        </div>
      `;

      grid.appendChild(card);
    });

    document.getElementById('section-count').textContent =
      products.length + ' pieces';
  })
  .catch(err => {
    console.error('Error loading products:', err);
    grid.innerHTML = '<p style="color:red;">Failed to load products.</p>';
  });
