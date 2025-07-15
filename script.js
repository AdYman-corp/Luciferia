// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Search Filter (for collection page)
const searchBar = document.getElementById('search-bar');
if (searchBar) {
  const productCards = document.querySelectorAll('.product-card');
  searchBar.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    productCards.forEach(card => {
      const name = card.getAttribute('data-name');
      card.style.display = name.includes(searchValue) ? 'block' : 'none';
    });
  });
}
