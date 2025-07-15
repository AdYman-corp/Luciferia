// Product List (same used on collection.html)
const products = [
  { img: "https://i.ibb.co/3gNN18P/shirt1.jpg", name: "Luciferia White Tee", price: "$39", desc: "Premium cotton tee with embroidered logo." },
  { img: "https://i.ibb.co/ynw42xJx/shirt2.jpg", name: "Shadow Script Tee", price: "$42", desc: "Gothic font print with midnight ink." },
  { img: "https://i.ibb.co/KzpkdtyJ/shirt3.jpg", name: "Mystic Eye Tee", price: "$45", desc: "All-seeing eye symbol with metallic print." },
  { img: "https://i.ibb.co/tT5MqmF8/shirt4.jpg", name: "Duality Tee", price: "$41", desc: "Half-light, half-shadow split design." },
  { img: "https://i.ibb.co/jvYJJ69w/shirt5.jpg", name: "Inferno Tee", price: "$44", desc: "Blazing flames from hell's core." },
  { img: "https://i.ibb.co/hFbRWX0t/shirt6.jpg", name: "Nocturnal Tee", price: "$43", desc: "Dark elegance for night wanderers." }
];

// Render products on the collection page
function renderProducts(list) {
  const container = document.getElementById('productContainer');
  if (!container) return;
  container.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price}</div>
      <button class="btn" style="padding:10px 20px; font-size:1rem;">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
  });
}

// Initialize functions on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  setupSearch();
});
