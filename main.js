document.addEventListener("DOMContentLoaded", function() {
  const headerImage = document.getElementById("headerImage");
  
  // Add 'animate' class to trigger the animation
  headerImage.classList.add("animate");
});

document.addEventListener("DOMContentLoaded", function() {
  const headerContent = document.getElementById("headerContent");
  
  // Add 'animate' class to trigger the animation
  headerContent.classList.add("animate");
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Check if the element is intersecting
      if (entry.isIntersecting) {
        entry.target.classList.add('special__card--visible');
      }
    });
  }, {
    // Options for the observer
    root: null, // null means the viewport
    threshold: 0.1, // 10% of the element must be visible
  });

  // Observe all special cards
  document.querySelectorAll('.special__card').forEach((card) => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const exploreContainer = document.querySelector('.explore__container');
  const img = exploreContainer.querySelector('.explore__image img');
  const contentItems = exploreContainer.querySelectorAll('.explore__content *'); // Get all children of .explore__content

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When .explore__container is in view, animate image and content
        img.classList.add('visible');
        contentItems.forEach((item, index) => {
          // Timeout to stagger the animation of each content item
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 300); // Adjust timing to your preference
        });
      }
    });
  }, {
    threshold: 0.5, // Adjust based on when you want the animation to start
  });

  observer.observe(exploreContainer);
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.banner__card');
  let delay = 0; // Starting delay

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay addition of the visible class to each card
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        delay += 200; // Increment delay for the next card
        observer.unobserve(entry.target); // Optional: Stop observing the entry once it's visible
      }
    });
  }, {
    threshold: 0.1, // Adjust this value based on when you want the animation to start
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const leaders_text = document.querySelectorAll('.leader__content');
  let delay = 0; // Starting delay
  const leader_img = document.querySelectorAll('.leader__image');
  

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay addition of the visible class to each card
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        delay += 200; // Increment delay for the next card
        observer.unobserve(entry.target); // Optional: Stop observing the entry once it's visible
      }
    });
  }, {
    threshold: 0.1, // Adjust this value based on when you want the animation to start
  });

  leaders_text.forEach((leader_text) => {
    observer.observe(leader_text);

  });
  leader_img.forEach((leader_img) => {
    observer.observe(leader_img);
  })
});


document.addEventListener('DOMContentLoaded', function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.swiper-slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Initially show the first slide
  showSlide(currentSlide);

  // Example: Set up an interval for auto-advancing the slides
  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  // Optionally, add event listeners for next/prev buttons if you have them
  document.getElementById('nextButton').addEventListener('click', nextSlide);
  document.getElementById('prevButton').addEventListener('click', previousSlide);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("svg");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
const text = "Nguyễn Đắc Hải - Back-End Developer.";
let index = 0;
let adding = true; // Variable to control whether to add or remove characters
const textElement = document.getElementById('text');

function animateText() {
  if (adding) {
    addText();
  } 
}

function addText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index); // Add one more character
    index++;
    setTimeout(animateText, 100); // Adjust the duration to control the speed of animation
  } else {
    adding = false; // Change to removing characters
    setTimeout(animateText, 1000); // Wait for 1 second before starting to remove characters
  }
}



animateText(); 