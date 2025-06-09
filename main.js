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

document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", function () {
        let openAnswer = document.querySelector(".faq-answer:not([style*='display: none'])");
        if (openAnswer && openAnswer !== this.nextElementSibling) {
            openAnswer.style.display = "none";
        }
        this.nextElementSibling.style.display =
            this.nextElementSibling.style.display === "block" ? "none" : "block";
    });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let feedback = document.getElementById("feedback");

    if (!name || !email || !message) {
        feedback.textContent = "All fields are required!";
        feedback.style.color = "red";
        feedback.style.display = "block";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        feedback.textContent = "Please enter a valid email address!";
        feedback.style.color = "red";
        feedback.style.display = "block";
        return;
    }

    feedback.textContent = "Message sent successfully!";
    feedback.style.color = "green";
    feedback.style.display = "block";

    this.reset(); // Clears the form
});
// Get the current count from localStorage
let visitCount = localStorage.getItem('visitCount');

// If not present, initialize to 0
if (!visitCount) {
  visitCount = 0;
}

// Convert to number and increment
visitCount = parseInt(visitCount) + 1;

// Update localStorage
localStorage.setItem('visitCount', visitCount);

// Display on page
document.getElementById('visitCount').textContent = visitCount; 
