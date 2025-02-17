// Function to load HTML components dynamically
async function includeHTML(file, elementId) {
    try {
      const response = await fetch(file);
      const text = await response.text();
      document.getElementById(elementId).innerHTML = text;
    } catch (error) {
      console.error("Error loading file:", file, error);
    }
  }
  
  // Load Navbar and Footer
document.addEventListener("DOMContentLoaded", () => {
    fetch("pages/navbar.html").then(res => res.text()).then(data => document.getElementById("navbar").innerHTML = data);
    fetch("pages/footer.html").then(res => res.text()).then(data => document.getElementById("footer").innerHTML = data);
  });
  
// Show Back-to-Top Button When Scrolling
window.addEventListener("scroll", function () {
  const backToTopBtn = document.getElementById("back-to-top");
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

  
  
 
  
  