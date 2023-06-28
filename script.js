



/* --------------------- menu -------------------- */

document.addEventListener('DOMContentLoaded', function() {
  var hamburgerMenu = document.querySelector('.new-hamburger-icon');
  var sidebar = document.querySelector('.sidebar');
  var closeSidebarButton = document.querySelector('.close-sidebar');
  var menuLinks = document.querySelectorAll('.menu li');

  hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('open');
    sidebar.classList.toggle('active');
  });

  closeSidebarButton.addEventListener('click', function() {
    hamburgerMenu.classList.remove('open');
    sidebar.classList.remove('active');
  });

  document.addEventListener('click', function(event) {
    var target = event.target;
    if (!target.closest('.navbar') && !target.closest('.sidebar')) {
      hamburgerMenu.classList.remove('open');
      sidebar.classList.remove('active');
    }
  });

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      hamburgerMenu.classList.remove('open');
      sidebar.classList.remove('active');
    });
  });
});

   /* --------------- search ---------------    */

document.addEventListener("DOMContentLoaded", function() {
  var searchIcon = document.querySelector(".search-icon");
  var closeIcon = document.querySelector(".close-icon");
  var searchBar = document.querySelector(".search-bar");

  searchIcon.addEventListener("click", function() {
    searchBar.classList.add("active");
  });

  closeIcon.addEventListener("click", function() {
    searchBar.classList.remove("active");
  });
});

/**
 * ----------------- footer------------
 */

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
const yearElement = document.getElementById('year');
yearElement.textContent = currentYear;


window.addEventListener('load', function() {
  const container = document.querySelector('.container');
  container.addEventListener('scroll', function() {
    container.classList.toggle('snapping', container.scrollLeft % 220 !== 0);
  });
});




       /*--------------form----------------*/

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var email = document.getElementById("email-input").value;
  if (validateEmail(email)) {
    // Show the modal
    modal.style.display = "block";
    document.getElementById("email-input").value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});

// Get the modal element
var modal = document.getElementById("success-modal");

// Get the close button for the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside the modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function validateEmail(email) {
  // Simple email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**------------------------- ------------------------ */


const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  this.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', setActiveLink);
});




// Get all slide elements
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show the next slide
function showNextSlide() {
  // Hide the current slide
  slides[currentSlide].classList.remove('active');
  
  // Increment the slide index
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Show the next slide
  slides[currentSlide].classList.add('active');

  // Update the active indicator
  updateIndicators();
}

// Create slide indicators
function createIndicators() {
  const indicatorsContainer = document.querySelector('.indicators');
  
  // Loop through slides and create indicators
  slides.forEach((slide, index) => {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    
    // Add event listener to each indicator
    indicator.addEventListener('click', () => {
      // Show the selected slide
      showSlide(index);
    });
    
    // Append indicator to the indicators container
    indicatorsContainer.appendChild(indicator);
  });
  
  // Add active class to the first indicator
  indicatorsContainer.firstElementChild.classList.add('active');
}

// Update the active indicator
function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  
  // Remove active class from all indicators
  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });
  
  // Add active class to the current slide's indicator
  indicators[currentSlide].classList.add('active');
}

// Show a specific slide
function showSlide(slideIndex) {
  // Hide the current slide
  slides[currentSlide].classList.remove('active');
  
  // Update the slide index
  currentSlide = slideIndex;
  
  // Show the selected slide
  slides[currentSlide].classList.add('active');
  
  // Update the active indicator
  updateIndicators();
}

// Set interval to automatically switch slides every 5 seconds
setInterval(showNextSlide, 5000);

// Create the slide indicators
createIndicators();


// ...



// Function to handle the "Watch Later" button click
function handleWatchLater() {
  const popup = document.querySelector('.popup');
  const closeButton = document.querySelector('.popup-close');

  // Show the popup
  popup.style.display = 'block';

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Close the popup when the "Watch Later" button is clicked again
  this.removeEventListener('click', handleWatchLater);
  this.addEventListener('click', () => {
    popup.style.display = 'none';
    this.addEventListener('click', handleWatchLater);
  });
}

// Get all "Watch Later" buttons
const watchLaterButtons = document.querySelectorAll('.watch-later-button');

// Add event listener to each "Watch Later" button
watchLaterButtons.forEach((button) => {
  button.addEventListener('click', handleWatchLater);
});
