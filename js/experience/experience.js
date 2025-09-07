document.addEventListener("DOMContentLoaded", () => {
  const milestones = document.querySelectorAll(".milestone-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  milestones.forEach((card) => {
    observer.observe(card);
  });
});
