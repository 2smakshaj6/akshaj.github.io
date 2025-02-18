// // Function to load HTML components dynamically
// function loadHTMLComponent(id, file) {
//     fetch(file)
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById(id).innerHTML = data;
//       })
//       .catch(error => console.error(`Error loading ${file}:`, error));
//   }
  
//   // Load the Navbar, Home, Experience, Academia, Projects, and Footer
//   document.addEventListener("DOMContentLoaded", function() {
//     loadHTMLComponent("navbar", "pages/navbar.html");
//     loadHTMLComponent("home", "pages/home.html");
//     loadHTMLComponent("experience", "pages/experience.html");
//     loadHTMLComponent("academia", "pages/academia.html");
//     loadHTMLComponent("projects", "pages/projects.html");
//     loadHTMLComponent("footer", "pages/footer.html");
//   });


  // Function to load HTML components dynamically
function loadHTMLComponent(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // Execute callback after loading
    })
    .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load all components first
document.addEventListener("DOMContentLoaded", function() {
  let componentsLoaded = 0;
  const totalComponents = 6; // Number of components

  function checkAllLoaded() {
      componentsLoaded++;
      if (componentsLoaded === totalComponents) {
          console.log("All components loaded!");
          runMainScripts(); // Run other scripts after all components load
      }
  }

  loadHTMLComponent("navbar", "pages/navbar.html", checkAllLoaded);
  loadHTMLComponent("home", "pages/home.html", checkAllLoaded);
  loadHTMLComponent("experience", "pages/experience.html", checkAllLoaded);
  loadHTMLComponent("academia", "pages/academia.html", checkAllLoaded);
  loadHTMLComponent("projects", "pages/projects.html", checkAllLoaded);
  loadHTMLComponent("footer", "pages/footer.html", checkAllLoaded);
});

// Function to run after components load
function runMainScripts() {
  console.log("Running scripts after all sections are loaded.");
  
  // Reapply event listeners for dynamically loaded content
  document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", function () {
          const projectId = this.getAttribute("data-id");
          if (projectId) {
              window.location.href = `project.html?id=${projectId}`;
          }
      });
  });
}
