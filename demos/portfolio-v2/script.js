/* ================================================
   ALI MAJID (AM) — PORTFOLIO JAVASCRIPT
   Interactions, Animations & Particle System
   ================================================ */

// ── CURSOR GLOW ──
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow) {
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── HAMBURGER MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ── TYPEWRITER EFFECT ──
const typewriterEl = document.getElementById('typewriter');
const phrases = [
  'Software & Web Developer',
  'Python Developer',
  'PHP Backend Developer',
  'JavaScript Creator',
  'Building Open Source Projects'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  if (!typewriterEl) return;

  const current = phrases[phraseIndex];
  if (isDeleting) {
    typewriterEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(typeWriter, delay);
}
typeWriter();

// ── PARTICLE CANVAS SYSTEM ──
const canvas = document.getElementById('particleCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = Math.random() > 0.5 ? '2, 132, 199' : '5, 150, 105';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, 1)`;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 60; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 110) * 0.1;
          ctx.strokeStyle = 'rgba(2, 132, 199, 1)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  if (!target) return;

  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}

// ── INTERSECTION OBSERVER FOR SKILL BARS & COUNTERS ──
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Skill bars animation
      const skillBars = entry.target.querySelectorAll('.skill-bar');
      skillBars.forEach(bar => {
        const targetWidth = bar.style.getPropertyValue('--w');
        bar.style.width = targetWidth;
      });

      // Counters animation
      const counters = entry.target.querySelectorAll('.stat-num');
      counters.forEach(c => animateCounter(c));

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.hero, .skills-section').forEach(sec => {
  observer.observe(sec);
});
