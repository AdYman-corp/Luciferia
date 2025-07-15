const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const searchBar = document.getElementById('search-bar');
const productCards = document.querySelectorAll('.product-card');

searchBar.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase();

  productCards.forEach(card => {
    const name = card.getAttribute('data-name');
    if (name.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
