const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", () => {
  const html = document.documentElement; // <html> element
  const currentTheme = html.getAttribute("data-theme");

  // Toggle between "light" and "dark"
  html.setAttribute("data-theme", currentTheme === "light" ? "dark" : "light");
});
