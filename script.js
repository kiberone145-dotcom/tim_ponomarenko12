// LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// TYPING EFFECT
const text = "Frontend & AI Developer";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
type();

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  follower.style.left = e.clientX - 15 + "px";
  follower.style.top = e.clientY - 15 + "px";
});

// INTERSECTION OBSERVER ANIMATION
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(c => {
  c.style.opacity = 0;
  c.style.transform = "translateY(50px)";
  c.style.transition = "0.6s";
  observer.observe(c);
});

// PARTICLES BACKGROUND
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#6c5ce7";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animate);
}

animate();