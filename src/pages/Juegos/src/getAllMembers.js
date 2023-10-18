import { containerOverlay } from "./containerOverlayCtr";
import { crearPost } from "./PostAllMembers";

export function getAllMembers() {
  fetch("https://thr-backend-w0ns-dev.fl0.io/juegos")
    .then((res) => res.json())
    .then((mem) => {
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
