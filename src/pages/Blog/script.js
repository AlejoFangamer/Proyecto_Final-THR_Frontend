//Cargar DOM
import { getAllBlog } from "./src/getAllBlog.js";
import { checkInputs, initFormulario } from "./src/checkForm.js";
import { menuAnimations } from "../Menu/script.js";
import { startAnim } from "../startPageAnim.js";

document.addEventListener("DOMContentLoaded", () => {
  getAllBlog();
  checkInputs();
  initFormulario();
  menuAnimations();
});
