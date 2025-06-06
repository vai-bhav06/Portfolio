// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Reveal on Scroll
  const revealElements = document.querySelectorAll('.project, .skills-list li');
  window.addEventListener('scroll', () => {
    const triggerHeight = window.innerHeight / 1.3;
  
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerHeight) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  });
  