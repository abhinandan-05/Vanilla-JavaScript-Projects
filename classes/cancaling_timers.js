const countdown = setTimeout(() => {
  console.log("liftoff");
}, 10000);

console.log(countdown);

abortButton.addEventListener("click", () => {
  clearTimeout(countdown);
});
