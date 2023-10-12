import anime from "animejs";

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

      contenedor.classList.toggle("active");

      await fetch(`https://thr-backend-w0ns-dev.fl0.io/integrantes/${id}}`)
        .then((res) => res.json())
        .then((member) => {
          anime.remove(".info-mem");
          anime({
            targets: ".info-mem",
            scaleY: ["0%", "100%"],
            duration: 1000,
            elasticity: 200,
          });
          const nombreEle = contenedor.querySelector("h2");
          nombreEle.textContent = member.nombre_mem;
        });
    });
  });
}
