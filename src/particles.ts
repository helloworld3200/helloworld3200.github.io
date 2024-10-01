import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const tsParticlesID = "hook-particles";

const options = {
    background: {
        color: "#000000",
    },
    particles: {
        number: {
            value: 100,
        },
        links: {
            distance: 150,
            enable: true,
        },
        move: {
            enable: true,
        },
        size: {
            value: 1,
        },
        shape: {
            type: "circle",
        },
    },
};

async function particlesMain() {
    await loadFull(tsParticles);

    tsParticles
        .load({
            id: tsParticlesID, 
            options: options
        })
        .then(container => {
            if (container) {
                console.log(`callback - tsparticles config loaded on ${String(container.id)}`);
            } else {
                console.log("callback - tsparticles config loaded on an undefined container");
            }
        })
        .catch(error => {
            console.error(error);
    });

    const particles = tsParticles.domItem(0);

    if (particles) {
        particles.play();
    } else {
        console.error("Particles instance is undefined.");
    }
};

particlesMain();
