/*const body = document.querySelector("body"),
sidebar = document.querySelector(".sidebar"),
  toggle = document.querySelector(".toggle"),
  modeSwitch = document.querySelector(".toggle-switch"),
  modeText = document.querySelector(".mode-text"),
  searchBtn = document.querySelector(".search-bar");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  //   document.querySelector(".mode-text").innertext=""

  if (body.classList.contains("dark")) {
    modeText.innerText = " Light Mode ";
  } else modeText.innerText = " Dark Mode ";
});

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
  
document.getElementById('find-part-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
});

document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});*/
// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function() {
  // Back to top button functionality
  const backToTopButton = document.getElementById('backToTop');

  // Show or hide the back-to-top button based on scroll position
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  // Scroll to the top of the page when the button is clicked
  backToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Form validation (optional)
  const form = document.getElementById('find-part-form');
  form.addEventListener('submit', function(event) {
      // Example validation: check if email and phone are filled out
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      if (!email || !phone) {
          alert('Please fill out the required fields.');
          event.preventDefault(); // Prevent form submission
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.querySelector('.sidebar');
  const toggleButton = document.querySelector('.toggle');

  toggleButton.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
  });
});




