//Cargar DOM
import { getAllBlog } from "./src/getAllBlog.js";
import { checkInputs } from "./src/checkForm.js";
import anime from "animejs";

document.addEventListener("DOMContentLoaded", () => {
  getAllBlog();
  checkInputs();

  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

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
        throw new Error("Error al agregar el blog");
      }
      alert("Blog agregado con éxito");
      location.reload();
    });
  });

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
  const pauseScreen = document.querySelector("#pause")
  // On click
  hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menuOptions.classList.toggle("is-active");
    pauseScreen.classList.toggle("is-active");
  });
});
