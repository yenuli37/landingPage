const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");
const crossIcon = document.querySelector(".burger .cross-icon"); // Access the cross icon

burger.addEventListener("click", function () {
  navLinks.classList.toggle("nav-active");
  burger.classList.toggle("toggle"); // This will toggle the burger and cross icon
  body.classList.toggle("no-scroll");
});

// // Optional: Consider adding this if you want to close the menu by clicking the cross icon
// crossIcon.addEventListener("click", function () {
//   navLinks.classList.remove("nav-active");
//   burger.classList.remove("toggle");
//   body.classList.remove("no-scroll");
// });


function getConsultation() {
  // You can redirect to a consultation form or open a modal, etc.
  window.location.href = "#"; // Replace '#' with the link to your contact form or modal script
}

function learnMore() {
  // Functionality when 'Learn More' button is clicked
  alert("Navigate to the 'Learn More' page");
  // Replace above line with the actual navigation or modal opening code
}

document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      var panel = this.nextElementSibling;
      if (this.classList.contains("active")) {
        // If it's active, remove the class and collapse the panel
        this.classList.remove("active");
        this.style.color = "black";
        panel.style.backgroundColor = "transparent"; // Reset background color
        panel.style.maxHeight = null;
        this.querySelector(".accordion-icon").textContent = "+"; // Reset icon
      } else {
        // Deactivate all other accordions and panels
        document
          .querySelectorAll(".accordion")
          .forEach(function (otherAccordion) {
            otherAccordion.classList.remove("active");
            otherAccordion.style.color = "black";
            otherAccordion.nextElementSibling.style.backgroundColor =
              "transparent"; // Reset background color
            otherAccordion.nextElementSibling.style.maxHeight = null;
            otherAccordion.querySelector(".accordion-icon").textContent = "+"; // Reset icon
          });
        // Activate this accordion and expand the panel
        this.classList.add("active");
        this.style.color = "purple";
        panel.style.backgroundColor = "#ddd"; // Set background color for active panel
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.querySelector(".accordion-icon").textContent = "−"; // Corrected to minus sign
      }
    });
  });
});

