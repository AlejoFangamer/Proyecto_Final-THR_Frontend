import { menuAnimations } from "../Menu/script.js";
import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", async () => {
  ScrollReveal().reveal("main", {
    origin: "bottom",
    distance: "50px",
    delay: 200, // Retraso en milisegundos
    interval: 200,
    duration: 1000, // Duración de la animación en milisegundos
  });
  menuAnimations();
});
