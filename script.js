// Hamburger Menu Toggles
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Search Filter for Flip Cards Collection
const searchInput = document.getElementById('searchInput');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.flip-product-card');

    productCards.forEach(card => {
      const titleElement = card.querySelector('.product-flip-front h4');
      if (titleElement) {
        const name = titleElement.textContent.toLowerCase();
        card.style.display = name.includes(query) ? 'block' : 'none';
      }
    });
  });
}

// Redirect to Product Details on Click
const productCards = document.querySelectorAll('.flip-product-card');

productCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.product-flip-front h4').textContent.trim();
    const image = card.querySelector('.product-flip-front img').src;
    const oldPrice = card.querySelector('.product-flip-front .old-price').textContent.trim();
    const newPrice = card.querySelector('.product-flip-front .price').childNodes[1].nodeValue.trim();

    const url = `product.html?name=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&oldPrice=${encodeURIComponent(oldPrice)}&newPrice=${encodeURIComponent(newPrice)}`;

  });
});
// Grab URL Params
const params = new URLSearchParams(window.location.search);

const productName = params.get('name');
const productImage = params.get('image');
const productOldPrice = params.get('oldPrice');
const productNewPrice = params.get('newPrice');

if (productName) document.getElementById('productName').textContent = productName;
if (productImage) document.getElementById('productImage').src = productImage;
if (productNewPrice) {
  document.getElementById('productPrice').innerHTML = `
    <span class="old-price">${productOldPrice}</span> ${productNewPrice}
  `;
}

// Add to Cart Button (Placeholder)
document.getElementById('addToCartBtn').addEventListener('click', () => {
  const size = document.getElementById('size').value;
  if (!size) {
    alert('Please select a size before adding to cart.');
  } else {
    alert(`"${productName}" of size "${size}" added to cart (not implemented).`);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  const productName = params.get('name');
  const productImage = params.get('image');
  const productOldPrice = params.get('oldPrice');
  const productNewPrice = params.get('newPrice');

  if (productName) document.getElementById('productName').textContent = productName;
  if (productImage) document.getElementById('productImage').src = productImage;
  if (productNewPrice) {
    document.getElementById('productPrice').innerHTML = `
      <span class="old-price">${productOldPrice}</span> ${productNewPrice}
    `;
  }

  const addToCartBtn = document.getElementById('addToCartBtn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const size = document.getElementById('size').value;
      if (!size) {
        alert('Please select a size before adding to cart.');
      } else {
        alert(`"${productName}" of size "${size}" added to cart (not implemented).`);
      }
    });
  }
});

