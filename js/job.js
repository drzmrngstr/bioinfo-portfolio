document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".dna-background");
    const letters = ["A", "T", "G", "C"];
    const lineHeight = 25; // px
    const totalLines = Math.ceil(window.innerHeight / lineHeight);

    function randomSequence(length) {
        return Array.from({ length }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
    }

    function createLine(index) {
        const line = document.createElement("div");
        line.className = "dna-line";
        line.style.top = `${index * lineHeight}px`;

        // Make the sequence long enough so that even after shifting -50%, it still covers
        const seq = randomSequence(300); // longer string to avoid gaps
        line.textContent = seq + " " + seq; // duplicate to ensure seamless loop

        const speed = 15 + Math.random() * 8;
        line.style.animation = `${index % 2 === 0 ? "scroll-left" : "scroll-right"} ${speed}s linear infinite`;

        container.appendChild(line);
    }

    for (let i = 0; i < totalLines; i++) {
        createLine(i);
    }
});
const greetings = [
      "Welcome", "സ്വാഗതം", "Willkommen", "ようこそ", "स्वागत है", "Bienvenue"
    ];

    const greetingText = document.getElementById("greeting-text");
    let index = 0;
    const greetingDuration = 180;
    const totalGreetingTime = greetings.length * greetingDuration;


    const interval = setInterval(() => {
      if (index < greetings.length) {
        greetingText.textContent = greetings[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, greetingDuration);

    window.addEventListener("load", () => {
      greetingText.classList.add("visible");

      setTimeout(() => {
        const loader = document.getElementById("welcome-loader");
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';

        loader.style.display = 'none';
setTimeout(() => {
  document.getElementById("main-content").style.opacity = '1';
}, 100);

      }, totalGreetingTime + 100);
    });
window.addEventListener("load", () => {
  const greetings = [
    "Welcome", "സ്വാഗതം", "Willkommen", "ようこそ", "स्वागत है", "Bienvenue"
  ];
  const greetingText = document.getElementById("greeting-text");
  let index = 0;
  const greetingDuration = 150;
  const totalGreetingTime = greetings.length * greetingDuration;

  const interval = setInterval(() => {
    if (index < greetings.length) {
      greetingText.textContent = greetings[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, greetingDuration);

  greetingText.classList.add("visible");

 

  setTimeout(() => {
    const loader = document.getElementById("welcome-loader");
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';

    setTimeout(() => {
      loader.style.display = 'none';
      document.getElementById("main-content").style.opacity = '1';
    }, 300);

   
  },totalGreetingTime + 100);
});
// ===================================
// NEW THEME SWITCHER LOGIC (DNA HELIX)
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const cycleButton = document.getElementById('dna-theme-cycle');

  // Define the four base gradients (A, T, G, C)
  const gradients = [
    'linear-gradient(135deg, #7F00FF, #E100FF)', // A: Purple (Default)
    'linear-gradient(135deg, #ff7e5f, #feb47b)', // T: Orange/Coral
    'linear-gradient(135deg, #00c6ff, #0072ff)', // G: Blue
    'linear-gradient(135deg, #56ab2f, #a8e063)'  // C: Green
  ];

  let currentGradientIndex = 0;
  const savedGradient = localStorage.getItem('selectedGradient');

  // 1. Initial Load: Check if a gradient is saved
  if (savedGradient) {
    root.style.setProperty('--gradient', savedGradient);
    
    // Find the index of the saved gradient to resume the cycle
    // Note: The saved gradient must match one of the predefined strings exactly
    const savedIndex = gradients.indexOf(savedGradient);
    if (savedIndex !== -1) {
        currentGradientIndex = savedIndex;
    }
  }
  
  // 2. Click Handler: Cycle through the gradients
  if (cycleButton) {
    cycleButton.addEventListener('click', () => {
      // Increment index and loop back to 0 if it exceeds the array length
      currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
      
      const newGradient = gradients[currentGradientIndex];
      root.style.setProperty('--gradient', newGradient);
      localStorage.setItem('selectedGradient', newGradient); // Save choice
    });
  }
});

// ===== Responsive Mobile Menu =====
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bi-x"); // changes to "X" icon
});

// Close navbar on link click
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bi-x");
  });
});