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

/* ============================================
   PARTICLES.JS CONFIGURATION (index.html)
   ============================================ */
if (document.getElementById('particles-about') && typeof particlesJS !== 'undefined') {
  particlesJS("particles-about", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: [
          "#FF6B6B",
          "#4ECDC4",
          "#FFE66D",
          "#95E1D3",
          "#F38181",
          "#AA96DA",
          "#FCBAD3",
          "#A8D8EA",
        ],
      },
      shape: {
        type: ["circle", "triangle", "polygon", "star"],
        stroke: {
          width: 2,
          color: "#fff",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 4,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 180,
        color: "#A8D8EA",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: true,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: ["grab", "bubble"],
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.8,
          },
        },
        repulse: {
          distance: 300,
          duration: 0.6,
        },
        bubble: {
          distance: 250,
          size: 15,
          duration: 2,
          opacity: 1,
        },
      },
    },
    retina_detect: true,
  });
}

/* ============================================
   SCROLL ANIMATIONS (All pages)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-slide-up, .scroll-zoom-in'
  );
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});

/* ============================================
   CONTACT FORM VALIDATION & reCAPTCHA (contact-page.html)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const contactCaptchaError = document.getElementById('captchaError');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isFormValid = contactForm.checkValidity();
      if (!isFormValid) {
        contactForm.classList.add('was-validated');
        return;
      }

      // Get reCAPTCHA token
      try {
        if (typeof grecaptcha !== 'undefined') {
          const token = await grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', { action: 'submit' });
          // Add token to form as hidden field
          const tokenInput = document.createElement('input');
          tokenInput.type = 'hidden';
          tokenInput.name = 'recaptcha_token';
          tokenInput.value = token;
          contactForm.appendChild(tokenInput);
          contactCaptchaError.style.display = 'none';
          
          // Show success alert with blue accent color
          if (typeof Swal !== 'undefined') {
            Swal.fire({
              icon: 'success',
              title: 'Message Sent!',
              html: 'Thank you for reaching out. We\'ll get back to you as soon as possible.',
              confirmButtonColor: '#38bdf8',
              didClose: () => {
                // Reset form after success
                contactForm.reset();
                contactForm.classList.remove('was-validated');
              }
            });
          }
        }
      } catch (error) {
        if (contactCaptchaError) {
          contactCaptchaError.style.display = 'block';
        }
        if (typeof Swal !== 'undefined') {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong. Please try again.',
            confirmButtonColor: '#38bdf8'
          });
        }
        console.error('reCAPTCHA error:', error);
      }
    });

    // Enhanced scroll animations with on-load and bi-directional scroll support
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-slide-up, .scroll-slide-left, .scroll-slide-right, .scroll-zoom-in'
    );
    
    // Observe all animated elements
    animatedElements.forEach((el) => observer.observe(el));
    
    // Trigger animations for elements already in viewport on page load
    setTimeout(() => {
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        
        if (isInViewport || rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    }, 100);
  }
});

/* ============================================
   FAQ SEARCH/FILTER (faq.html)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const faqInput = document.getElementById('faqSearch');
  const faqItems = Array.from(document.querySelectorAll('#faqAccordion .accordion-item'));

  if (faqInput && faqItems.length > 0) {
    function norm(s) { 
      return (s || '').toLowerCase().replace(/\s+/g, ' ').trim(); 
    }

    faqInput.addEventListener('input', () => {
      const q = norm(faqInput.value);
      faqItems.forEach(item => {
        const text = norm(item.innerText);
        const match = !q || text.includes(q);
        item.classList.toggle('d-none', !match);

        // Close if hidden
        if (!match) {
          const collapse = item.querySelector('.accordion-collapse');
          if (collapse && typeof bootstrap !== 'undefined') {
            const inst = bootstrap.Collapse.getInstance(collapse);
            if (inst) inst.hide();
          }
        }
      });
    });
  }
});

/* ============================================
   VOLUNTEER FORM VALIDATION & reCAPTCHA (volounteer.html)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const volunteerForm = document.getElementById("volunteerForm");
  const volunteerCaptchaError = document.getElementById("captchaError");

  if (volunteerForm) {
    volunteerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isFormValid = volunteerForm.checkValidity();
      if (!isFormValid) {
        volunteerForm.classList.add("was-validated");
        return;
      }

      try {
        if (typeof grecaptcha !== 'undefined') {
          const token = await grecaptcha.execute(
            "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
            { action: "submit" },
          );

          const tokenInput = document.createElement("input");
          tokenInput.type = "hidden";
          tokenInput.name = "recaptcha_token";
          tokenInput.value = token;
          volunteerForm.appendChild(tokenInput);

          if (volunteerCaptchaError) {
            volunteerCaptchaError.style.display = "none";
          }

          if (typeof Swal !== 'undefined') {
            Swal.fire({
              icon: "success",
              title: "Submitted!",
              html: "Thank you for volunteering. We'll be in touch soon.",
              confirmButtonColor: "#38bdf8",
              didClose: () => {
                volunteerForm.reset();
                volunteerForm.classList.remove("was-validated");
              },
            });
          }
        }
      } catch (error) {
        if (volunteerCaptchaError) {
          volunteerCaptchaError.style.display = "block";
        }
        if (typeof Swal !== 'undefined') {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#38bdf8",
          });
        }
        console.error("reCAPTCHA error:", error);
      }
    });
  }
});

/* ============================================
   HELP PAGE - Auto-open first accordion (help-and-information.html)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const firstDetails = document.querySelector("details");
  if (firstDetails) {
    firstDetails.setAttribute("open", "open");
  }
});
