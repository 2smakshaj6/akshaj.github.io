// Function to load HTML components dynamically
function loadHTMLComponent(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error(`Error loading ${file}:`, error));
  }
  
  // Load the Navbar, Home, Experience, Academia, Projects, and Footer
  document.addEventListener("DOMContentLoaded", function() {
    loadHTMLComponent("navbar", "pages/navbar.html");
    loadHTMLComponent("home", "pages/home.html");
    loadHTMLComponent("experience", "pages/experience.html");
    loadHTMLComponent("academia", "pages/academia.html");
    loadHTMLComponent("projects", "pages/projects.html");
    loadHTMLComponent("footer", "pages/footer.html");
  });
  