//Cargar DOM
import { getAllBlog } from "./src/getAllBlog.js";
import { checkInputs, initFormulario } from "./src/checkForm.js";
import { menuAnimations } from "../Menu/script.js";
import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal("main", {
    origin: "bottom",
    distance: "50px",
    delay: 200, // Retraso en milisegundos
    interval: 200,
    duration: 1000, // Duración de la animación en milisegundos
  });

  getAllBlog();
  checkInputs();
  initFormulario();

  menuAnimations();
});
