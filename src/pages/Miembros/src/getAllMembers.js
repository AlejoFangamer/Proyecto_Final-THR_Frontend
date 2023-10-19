import { containerOverlay } from "./containerOverlayCtr";
import { crearPost } from "./PostAllMembers";

const loadingMessage = document.getElementById("loading-miembros");

loadingMessage.style.display = "block";

export function getAllMembers() {
  fetch("https://thr-backend-w0ns-dev.fl0.io/integrantes")
    .then((res) => res.json())
    .then((mem) => {
      loadingMessage.style.display = "none";
      const allMemObject = mem;
      console.log(allMemObject);
      
      if (Array.isArray(mem)) {
        mem.forEach((mem) => {
          crearPost(mem);
        });
      } else {
        crearPost(mem);
      }

      containerOverlay(allMemObject);
    });
}
