const initSlider = () => {
  const buttons = document.querySelectorAll(".control");
  const sliderWrapper = document.querySelector(".slider-wrapper");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = sliderWrapper.clientWidth * direction;
      sliderWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};

window.addEventListener("load", initSlider);
