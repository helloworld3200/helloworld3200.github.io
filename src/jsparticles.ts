// New particles.js file

const jsParticlesID = "hook-jsparticles";
const jsParticlesConfigPath = "../json/particles-config/hook0.json";

function jsParticlesCallback () {
    console.log('callback - particles.js config loaded');
}

function jsParticlesMain () {
    particlesJS.load(jsParticlesID, jsParticlesConfigPath, jsParticlesCallback);
}

function jsParticlesSetup() {
    jsParticlesMain();
    console.log("🚀 Hello, World! JSParticles setup complete.");
}

jsParticlesSetup();
