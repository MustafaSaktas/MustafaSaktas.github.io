const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${currentSection}`) {
      item.classList.add("active");
    }
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Mesajınız alındı. En kısa sürede dönüş yapılacaktır.";
  contactForm.reset();
});
