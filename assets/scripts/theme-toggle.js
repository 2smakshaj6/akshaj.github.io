document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const rootElement = document.documentElement; // Use root <html> element for theme switching
  let darkMode = localStorage.getItem("darkMode");

  // Function to enable dark mode
  const enableDarkMode = () => {
      rootElement.setAttribute("data-theme", "dark");
      localStorage.setItem("darkMode", "enabled");
      themeToggleButton.innerHTML = "🌞"; // Sun icon for light mode
  };

  // Function to disable dark mode
  const disableDarkMode = () => {
      rootElement.setAttribute("data-theme", "light");
      localStorage.setItem("darkMode", "disabled");
      themeToggleButton.innerHTML = "🌙"; // Moon icon for dark mode
  };

  // Apply saved theme preference on page load
  if (darkMode === "enabled") {
      enableDarkMode();
  } else {
      disableDarkMode();
  }

  // Toggle event listener
  themeToggleButton.addEventListener("click", () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
          enableDarkMode();
      } else {
          disableDarkMode();
      }
  });
});
