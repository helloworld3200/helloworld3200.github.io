// Migrating to particles.js so we don't need to use this anymore

import { ILoadParams, tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { showEditor } from "@tsparticles/editor";
import { initPjs } from "@tsparticles/particles.js";

const { particlesJS } = initPjs(tsParticles);

const tsParticlesID = "hook-particles";
const tsParticlesConfigPath = "../json/particles-config/hook1.json";

// OLD OPTIONS CODE
/*
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
};*/

async function particlesSetup() {
    const optionsFile = await fetch(tsParticlesConfigPath);
    const options = await optionsFile.json();
    particlesMain(options);
}

async function particlesMain(options) {
    await loadFull(tsParticles);

    console.log(options);

    tsParticles
        .load({id: tsParticlesID, options: options})
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

particlesSetup();
