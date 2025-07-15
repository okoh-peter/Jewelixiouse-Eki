// Simple slider logic
const slides = document.querySelectorAll('.slider img');
let current = 0;
const slideDuration = 3000; // 3 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, slideDuration);

// Hamburger menu toggling
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const closeNav = document.getElementById('closeNav');

hamburger.addEventListener('click', () => {
  mobileNav.style.display = 'block';
});

closeNav.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});

// Close mobile menu when clicking any link inside it
const mobileLinks = mobileNav.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.style.display = 'none';
  });
});
