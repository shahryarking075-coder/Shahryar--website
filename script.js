/* ===============================
   Global Professional Website Script
   =============================== */

// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Sticky navbar on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 60);
  }
});

// Contact form submit message
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function () {
    alert("Thank you! Your message has been sent successfully. Our team will contact you shortly.");
  });
}

// Reveal animation
const revealItems = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  revealItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100) {
      item.classList.add("active");
    }
  });
});

// Back to top button
const topBtn = document.getElementById("backToTop");
if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
