// const startItem = document.querySelectorAll(".start__item")[2];
const soundButton = document.getElementById("sound-button");
const volumeSliderWrapper = document.querySelector("#vSliderWrapper");
const volumeSlider = document.querySelector("#volume-control");
volumeSlider.addEventListener("change", function (e) {
  audio.volume = e.currentTarget.value / 100;
});
// startItem.addEventListener("mouseenter", () => {
//   volumeSlider.style.opacity = `0.7`;
// });
soundButton.addEventListener("mouseenter", () => {
  volumeSlider.style.opacity = `0.7`;
});
volumeSlider.addEventListener("mouseenter", () => {
  volumeSlider.style.opacity = `0.7`;
});

volumeSliderWrapper.addEventListener("mouseleave", () => {
  setTimeout(() => {
    volumeSlider.style.opacity = `0`;
  }, 500);
});
