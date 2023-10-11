import anime from "animejs";

export function menuAnimations() {
  const menuBtn = document.querySelectorAll(".menu-option");

  function animateButton(el, scale, duration, elasticity) {
    anime.remove(el);
    anime({
      targets: el,
      scale: scale,
      duration: duration,
      elasticity: elasticity,
    });
  }

  function enterButton(el) {
    animateButton(el, 1.2, 800, 400);
  }

  function leaveButton(el) {
    animateButton(el, 1.0, 600, 300);
  }

  menuBtn.forEach((i) => {
    i.addEventListener("mouseenter", (e) => {
      enterButton(e.target);
    });

    i.addEventListener("mouseleave", (e) => {
      leaveButton(e.target);
    });
  });

  const hamburger = document.querySelector(".hamburger");
  const menuOptions = document.querySelector("#menu-nav");
  const pauseScreen = document.querySelector("#pause");
  // On click
  hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menuOptions.classList.toggle("is-active");
    pauseScreen.classList.toggle("is-active");
  });
}
