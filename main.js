import anime from "animejs";

document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: "#textos-izq .txt",
    opacity: 1,
    translateX: [-50, 0],
    delay: anime.stagger(200),
  });

  anime({
    targets: "#img-der",
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 1000,
    delay: 900, // increase delay by 100ms for each elements.
  });

  anime({
    targets: "#background",
    background: [
      "linear-gradient(45deg, rgb(27, 21, 48) 100%, rgb(41, 66, 145) 100%)",
      "linear-gradient(45deg, rgb(27, 21, 48) 0%, rgb(41, 66, 145) 100%)",
    ],
    easing: "easeOutQuad",
    duration: 5000,
    delay: 500, // increase delay by 100ms for each elements.
  });
});
