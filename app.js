/* Animations */
/* Fading in texts of projects */
const observery = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade");
      } else {
        entry.target.classList.remove("fade");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".move");
  hiddenElements.forEach((el) => observery.observe(el));
  /* Fading in scroll-up-button */
  const scrollDownBtn = document.getElementById("scroll-down-btn");
  const scrollUpBtn = document.getElementById("scroll-up-btn");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        scrollUpBtn.classList.add("upstate");
      } else {
        scrollUpBtn.classList.remove("upstate");
      }
    });
  });
  observer.observe(scrollDownBtn);
  
  /* Auto scroll the user down a bit in they don't */
  document.addEventListener("DOMContentLoaded", () => {
    let scrolled = false;
    const targetElement = document.getElementById("name");
    const scroll = () => {
      if (!scrolled) targetElement.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("scroll", () => {
      scrolled = true;
    });
    setTimeout(scroll, 3000);
  });