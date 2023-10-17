import anime from "animejs";
import { obtenerColor } from "./roleColorManage";

export function containerOverlay(member) {
  const contenedoresMiembros = document.querySelectorAll(".mem-item");
  const contenedor = document.querySelector("#member-info");

  contenedor.addEventListener("click", () => {
    if (contenedor.classList.contains("active")) {
      contenedor.classList.toggle("active");
      iniciar();
    }
  });

  console.log(contenedoresMiembros);

  contenedoresMiembros.forEach((sel) => {
    sel.addEventListener("click", async (e) => {
      const item = e.target.closest(".mem-item");
      const id = item.dataset.id;
      const indexSelected = member
        .map((object) => object.id_mem)
        .indexOf(parseInt(item.dataset.id));

      contenedor.classList.toggle("active");

      finalizar();
      const BeforeRoles = contenedor.querySelectorAll(".rol-overlay");
      BeforeRoles.forEach((elemento) => {
        elemento.remove();
      });

      const nombreEle = contenedor.querySelector("h2");
      nombreEle.textContent = member[indexSelected].nombre_mem;
      const imgEle = contenedor.querySelector("img");
      imgEle.src = member[indexSelected].img_mem;
      const localEle = contenedor.querySelector(".info-local-text");
      localEle.textContent = member[indexSelected].pais_mem;

      member[indexSelected].role_mem.forEach((e) => {
        const roleList = contenedor.querySelector(".roles-overlay");
        const role = document.createElement("p");
        role.textContent = e;

        role.classList.add("rol-overlay", obtenerColor(role.textContent));
        roleList.append(role);
      });
    });
  });
  // });
}

function iniciar() {
  anime.remove("#member-info-container");
  anime.remove(".img-mem img");
  anime({
    targets: "#member-info-container",
    scaleY: ["100%", "0%"],
    duration: 500,
    elasticity: 50,
  });
  anime({
    targets: ".img-mem img",
    translateX: ["0%", "50%"],
    duration: 500,
    easing: "easeOutExpo",
  });
}

function finalizar() {
  anime.remove("#member-info-container");
  anime.remove(".img-mem img");
  anime({
    targets: ".img-mem img",
    scale: ["50%", "100%"],
    rotate: ["0deg", "-10deg"],
    translateX: ["50%", "0%"],
    duration: 1000,
    easing: "easeOutExpo",
  });

  anime({
    targets: "#member-info-container",
    scaleY: ["0%", "100%"],
    duration: 1000,
    elasticity: 200,
  });
}
