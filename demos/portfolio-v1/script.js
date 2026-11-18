/* ================================================
   MOHAMMED BAQIR NAZAR — PORTFOLIO JAVASCRIPT
   Interactions, Animations, Particles
   ================================================ */

// ── CURSOR GLOW ──
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ── TYPEWRITER ──
const typewriterEl = document.getElementById('typewriter');
const phrases = [
  'Web Developer',
  'Full Stack Developer',
  'Next.js & TypeScript Dev',
  'PHP Developer',
  'JavaScript Enthusiast',
  'Problem Solver'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout;

function typeWriter() {
  const current = phrases[phraseIndex];
  if (isDeleting) {
    typewriterEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  typeTimeout = setTimeout(typeWriter, delay);
}
typeWriter();

// ── PARTICLE CANVAS ──
const canvas = document.getElementById('particleCanvas');
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
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '124, 58, 237' : '6, 182, 212';
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

// Initialize particles
for (let i = 0; i < 80; i++) {
  particles.push(new Particle());
}

// Draw connecting lines between nearby particles
function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.save();
        ctx.globalAlpha = (1 - dist / 120) * 0.15;
        ctx.strokeStyle = 'rgba(124, 58, 237, 1)';
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

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
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

// ── INTERSECTION OBSERVER ──
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach(fill => {
        setTimeout(() => fill.classList.add('animated'), 200);
      });

      // Animate counters
      const counters = entry.target.querySelectorAll('.stat-num');
      counters.forEach(c => animateCounter(c));

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add reveal class and observe
document.querySelectorAll('.section, .skill-card, .project-card, .about-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Observe hero stats for counter
const heroStats = document.querySelector('.hero-stats');
if (heroStats) observer.observe(heroStats);

// ── SKILL BARS ON SCROLL ──
const skillsSection = document.getElementById('skills');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach((fill, i) => {
        setTimeout(() => fill.classList.add('animated'), i * 100);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (skillsSection) skillObserver.observe(skillsSection);

// ── SMOOTH ACTIVE NAV LINKS ──
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinkEls.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#a78bfa';
    }
  });
});

// ── PROJECT CARDS TILT ──
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── CONTACT FORM ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-contact-btn');
  const success = document.getElementById('formSuccess');
  const form = document.getElementById('contact-form');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
    success.classList.add('visible');
    setTimeout(() => success.classList.remove('visible'), 4000);
  }, 1200);
}

// ── CODE CARD TYPING EFFECT ──
const codeLines = document.querySelectorAll('.code-body code span');
codeLines.forEach((span, i) => {
  span.style.opacity = '0';
  setTimeout(() => {
    span.style.transition = 'opacity 0.3s ease';
    span.style.opacity = '1';
  }, 600 + i * 80);
});

// ── PAGE LOAD ANIMATION ──
document.body.style.opacity = '0';
window.addEventListener('load', () => {
  document.body.style.transition = 'opacity 0.5s ease';
  document.body.style.opacity = '1';
});
