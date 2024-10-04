// New particles.js file

const jsParticlesID = "hook-jsparticles";
const jsParticlesConfigPath = "../json/particles-config/hook0.json";

function jsParticlesMain () {
    particlesJS.load(jsParticlesID, jsParticlesConfigPath, function() {
        console.log('callback - particles.js config loaded');
    })
}

jsParticlesMain();
