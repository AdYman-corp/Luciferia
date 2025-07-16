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
    const priceText = card.querySelector('.product-flip-front .price').textContent.trim();
    
    // Extract price number from the text (you can adjust this if format changes)
    const priceMatch = priceText.match(/(\d+)\s*EGP/);
    const price = priceMatch ? priceMatch[1] : '';

    // Build URL with params
    const url = `product.html?name=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}`;
    window.location.href = url;
  });
});


