// script.js

function showPage(pageId) {
    // Hide all sections
    document.querySelectorAll("main section").forEach(section => {
      section.classList.add("hidden");
    });
  
    // Show the selected section
    document.getElementById(pageId).classList.remove("hidden");
  }
  
  // Show the "Home" section by default when the page loads
  window.addEventListener("DOMContentLoaded", () => {
    showPage("home");
  });
  
  