// ====== SMOOTH SCROLL ======
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// ====== FORM SUBMIT ======
document.querySelector('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully! Thank you for reaching out 😊');
  e.target.reset();
});

// ====== SCROLL ANIMATION ======
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right, .slide-bottom').forEach(el => observer.observe(el));

// ====== THEME TOGGLE ======
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
});

// ====== TYPING ANIMATION ======
const roles = ["Web Developer", "Designer", "Coder"];
let typedText = document.getElementById("typed-text");
let currentRole = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = roles[currentRole];
  
  if (!deleting && charIndex < current.length) {
    typedText.textContent += current.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 120);
  } 
  else if (deleting && charIndex > 0) {
    typedText.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeEffect, 80);
  } 
  else {
    if (!deleting) {
      deleting = true;
      setTimeout(typeEffect, 1200); // Pause before deleting
    } else {
      deleting = false;
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(typeEffect, 300);
    }
  }
}

// Start animation
typeEffect();

document.addEventListener("DOMContentLoaded", () => {
  const profile = document.querySelector(".profile-photo img");
  profile.classList.add("fade-in");
});

// ===== CONTACT FORM (EMAILJS Integration) =====
(function() {
  emailjs.init("Hh4-6ibuQVZ_kMF04"); // Replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Send email
  emailjs.sendForm("service_b2ag0se", "template_umeq40g", this)
    .then(() => {
      alert("✅ Message sent successfully! I'll get back to you soon.");
      e.target.reset();
    }, (error) => {
      console.error("Email send failed:", error);
      alert("❌ Oops! Something went wrong. Please try again later.");
    });
});

const btn = document.querySelector(".btn");
btn.textContent = "Sending...";
emailjs.sendForm("...")
  .then(() => { btn.textContent = "Send Message..."; });
