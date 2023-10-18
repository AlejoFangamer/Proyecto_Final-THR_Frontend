import anime from "animejs";

export function btnAnims(buttons) {
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

    buttons.forEach((i) => {
    i.addEventListener("mouseenter", (e) => {
        enterButton(e.target);
    });

    i.addEventListener("mouseleave", (e) => {
        leaveButton(e.target);
    });
    });
}