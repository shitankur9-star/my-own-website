// Dark mode
const toggle = document.getElementById("darkModeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.onclick = () => {
  nav.classList.toggle("show");
};

// Scroll animation
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Filter projects
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
  } else {
    alert("Message sent successfully!");
  }
});

// Back to top
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};