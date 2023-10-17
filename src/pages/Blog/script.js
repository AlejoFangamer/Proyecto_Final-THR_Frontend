//Cargar DOM
import { getAllBlog } from "./src/getAllBlog.js";
import { checkInputs } from "./src/checkForm.js";
import { menuAnimations } from "../Menu/script.js";
import { mostrarPantallaDeCarga, ocultarPantallaDeCarga } from "./src/loadingFun.js";
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

  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    mostrarPantallaDeCarga();

    const formData = new FormData(formulario);
    const formDataObject = {};

    formData.forEach((value, key) => {
      if (!formDataObject.hasOwnProperty(key)) {
        formDataObject[key] = value == "" ? null : value;
      }
    });

    console.log(formDataObject);

    await fetch(`https://thr-backend-w0ns-dev.fl0.io/blog/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    }).then((res) => {
      if (!res.ok) {
        ocultarPantallaDeCarga();
        alert("Error al agregar el blog");
        throw new Error("Error al agregar el blog");
      }
      alert("Blog agregado con éxito");
      location.reload();
    });
  });
  
  menuAnimations();
});
