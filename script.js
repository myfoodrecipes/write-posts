// Simple scroll animation for the article
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, header, footer");
  const options = { threshold: 0.2 };

  const reveal = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(reveal, options);
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Small animation style
const style = document.createElement("style");
style.textContent = `
  .visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s ease-in-out;
  }
  section, header, footer {
    opacity: 0;
    transform: translateY(30px);
  }
`;
document.head.appendChild(style);
