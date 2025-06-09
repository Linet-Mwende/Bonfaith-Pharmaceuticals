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

let context = `Bonfaith Pharmaceuticals is a healthcare startup founded by local pharmacists in Kenya. 
The founders were inspired by the lack of essential drugs in their community. 
Bonfaith aims to provide high-quality, affordable, and accessible medications using innovative delivery methods such as nano-technology and herbal extracts. 
Our key products include PainRelief fast-acting tablets, AntiCoagulant micro-dose vials, and ImmunoBoost herbal supplements. 
Our mission is to improve community health by offering fair prices and consistent access to medication. 
To support or contact us, visit our website or reach out through the contacts listed in our About section. 
Our long-term goal is to become the leading provider of community-based pharmaceutical care in East Africa.`;

// Optional bonus: load from a public file
// fetch('context.txt').then(res => res.text()).then(txt => context = txt);

document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    console.log("Send button clicked!");
}

function setSample(text) {
  document.getElementById("user-input").value = text;
}

async function sendMessage() {
  const inputBox = document.getElementById("user-input");
   //const chatWindow = document.getElementById("chat-window"); //
  const chatWindow = document.querySelector(".chat-window");


  const userMessage = inputBox.value.trim();
  if (!userMessage) return;

  chatWindow.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
  inputBox.value = "";

  const response = await puter.ai.chat({
    messages: [
      { role: "system", content: context },
      { role: "user", content: userMessage }
    ]
  });

  chatWindow.innerHTML += `<div><strong>Bonfaith AI:</strong> ${response.message.content}</div>`;
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

