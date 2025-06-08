document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            console.log(`Navigating to ${link.getAttribute("href")}`);
        });
    });
});

function exploreFeatures() {
  alert("Explore Features clicked! You can add navigation here."); }

  

const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % dots.length;
  updateCarousel(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateCarousel(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(index);
  });
});
