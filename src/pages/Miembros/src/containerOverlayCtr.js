import anime from "animejs";
import { obtenerColor } from "./roleColorManage";

export function containerOverlay() {
  const contenedoresMiembros = document.querySelectorAll(".mem-item");
  const contenedor = document.querySelector("#member-info");

  contenedor.addEventListener("click", () => {
    if (contenedor.classList.contains("active")) {
      contenedor.classList.toggle("active");
      anime.remove(".info-mem");
      anime({
        targets: ".info-mem",
        scaleY: ["100%", "0%"],
        duration: 500,
        elasticity: 50,
      });
    }
  });

  console.log(contenedoresMiembros);

  contenedoresMiembros.forEach((sel) => {
    sel.addEventListener("click", async (e) => {
      const item = e.target.closest(".mem-item");
      const id = item.dataset.id;

      await fetch(`https://thr-backend-w0ns-dev.fl0.io/integrantes/${id}}`)
        .then((res) => res.json())
        .then((member) => {
          contenedor.classList.toggle("active");
          anime.remove(".info-mem");
          anime({
            targets: ".info-mem",
            scaleY: ["0%", "100%"],
            duration: 1000,
            elasticity: 200,
          });

          const BeforeRoles = contenedor.querySelectorAll(".rol-overlay");
          BeforeRoles.forEach((elemento) => {
            elemento.remove();
          });

          const nombreEle = contenedor.querySelector("h2");
          nombreEle.textContent = member.nombre_mem;
          const imgEle = contenedor.querySelector("img");
          imgEle.src = member.img_mem;
          const localEle = contenedor.querySelector(".info-local-text");
          localEle.textContent = member.pais_mem;

          member.role_mem.forEach((e) => {
            const roleList = contenedor.querySelector(".roles-overlay");
            const role = document.createElement("p");
            role.textContent = e;
  
            role.classList.add("rol-overlay",obtenerColor(role.textContent));
            roleList.append(role);
          })
        });
    });
  });
}
