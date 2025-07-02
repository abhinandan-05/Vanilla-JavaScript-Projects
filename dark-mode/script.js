const doc = document.documentElement;
const currentTheme = doc.getAttribute("data-theme");
let newTheme

(function () {
  // Then set the 'data-theme' attribute to whatever is in localStorage
  // the line below is commented because stackoverflow won't allow using localStorage on snippets
  button.setAttribute("data-theme", localStorage.getItem("theme"));
})();

// button.addEventListener("click", () => {
//   const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

//   document.querySelector("html").setAttribute("data-theme", newTheme);

//   localStorage.setItem("theme", newTheme);

//   currentThemeSetting = newTheme;
// });

button.addEventListener("click", () => {
  function switchTheme() {
    // Check what is the current theme and get the opposite one
    const targetTheme =
      button.getAttribute("data-theme") === "dark" ? "light" : "dark";

    // Set the attribute 'data-theme' to the targetTheme
    button.setAttribute("data-theme", targetTheme);

    // Save the targetTheme to the localStorage
    // the line below is commented because stackoverflow won't allow using localStorage on snippets
    localStorage.setItem("theme", targetTheme);
  }
});
