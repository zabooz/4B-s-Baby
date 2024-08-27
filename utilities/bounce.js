
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".bounceScroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bounce");
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    },
    { threshold: 0.5 }
  ); // Adjust the threshold as needed

  elements.forEach((element) => {
    observer.observe(element);
  });
});