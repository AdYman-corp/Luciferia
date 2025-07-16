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

    // Select all flip product cards inside the grid
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

