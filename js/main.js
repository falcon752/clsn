// Bootstrap handles navbar collapse; init icons and smooth scroll
console.log('Candlelight static site loaded');

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  
  // Handle mobile navbar close button
  const closeBtn = document.querySelector('.navbar-close-btn');
  const navCollapse = document.querySelector('#mainNav');
  
  if (closeBtn && navCollapse) {
    closeBtn.addEventListener('click', () => {
      // Add hiding class for animation
      navCollapse.classList.add('hiding');
      
      // Wait for animation to complete, then remove show class
      setTimeout(() => {
        navCollapse.classList.remove('show');
        navCollapse.classList.remove('hiding');
      }, 300);
    });
  }
  
  // Optional smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
