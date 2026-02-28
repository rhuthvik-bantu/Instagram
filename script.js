// Reels autoplay on scroll
const reels = document.querySelectorAll(".reel");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}, { threshold: 0.7 });

reels.forEach(reel => {
  observer.observe(reel);
});

// Simple icon navigation
document.querySelector(".fa-film").addEventListener("click", () => {
  document.querySelector(".reels-section").style.display = "block";
  document.querySelector(".messages-section").style.display = "none";
  window.scrollTo(0,0);
});

document.querySelector(".fa-paper-plane").addEventListener("click", () => {
  document.querySelector(".messages-section").style.display = "flex";
  document.querySelector(".reels-section").style.display = "none";
});
