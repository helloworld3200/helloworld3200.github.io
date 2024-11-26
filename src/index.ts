// SCSS Imports
import "./scss/main.scss";
import "./scss/nav.scss";
import "./scss/hook.scss";
import "./scss/experience.scss";

// JS Sleep function
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const date = new Date();

const carouselPaths = [
    "my-langs-imgs/cpp.png",
    "my-langs-imgs/python.png",
    "my-langs-imgs/js.png",
    "my-langs-imgs/kotlin.png",
    "my-langs-imgs/htmllogo.png",
    "my-langs-imgs/csharp.png"
];

const carouselMax = carouselPaths.length;
const carouselDelay = 1250;

const carouselPostScrollDelay = 50;

const carouselScrolls = {
    scroll1: "scroll1",
    scroll2: "scroll2"
};

// milliseconds
const experienceStatsDelay = 70;

// Experience years is the current year minus the year we started programming
const experienceYears = date.getFullYear() - 2017;

const experienceStats = [
    ["exp-stats-years", experienceYears, experienceStatsDelay],
    ["exp-stats-langs", 10, experienceStatsDelay],
    ["exp-stats-technologies", 8, experienceStatsDelay],
    ["exp-stats-projects", 3, experienceStatsDelay]
];

// Change this periodically when we learn new things!!

class FocusedImages {
    current: HTMLImageElement;
    next: HTMLImageElement;
    last: HTMLImageElement;

    constructor (imgs, index) {
        let currentIndex = trueMod(index, carouselMax);
        let nextIndex = trueMod(index + 1, carouselMax);
        let lastIndex = trueMod(index - 1, carouselMax);
        console.log("Indexes at ", index, "are", currentIndex, nextIndex, lastIndex);

        this.current = imgs[currentIndex];
        this.next = imgs[nextIndex];
        this.last = imgs[lastIndex];
    }
}

function trueMod (n: number, m: number) {
    return ((n % m) + m) % m;
}

function setupCarousel () {
    const carousel = document.getElementById("carousel");
    let imgs = [];
    let count = 0;

    // Whether to treat the first image as a special image or don't apply the scroll effect
    // (for first run of the carousel)
    //let firstSpecial = true;

    carouselPaths.forEach((path) => {
        // Creates image elements for each carousel item as a child of the carousel element
        // and adds the class "hook-carousel-img" to each element with the src attribute set to the path
        const img = document.createElement("img");
        img.src = path;
        img.classList.add("hook-carousel-img");
        imgs.push(img);
    });

    imgs[carouselMax - 1].classList.add(carouselScrolls.scroll1, carouselScrolls.scroll2);
    carousel.appendChild(imgs[carouselMax - 1]);

    imgs[0].classList.add(carouselScrolls.scroll1);
    carousel.appendChild(imgs[0]);

    carousel.appendChild(imgs[1]);

    let fimgs: FocusedImages;
    setInterval(() => {
        fimgs = new FocusedImages(imgs, count);

        setTimeout(() => {
            fimgs.next.classList.add(carouselScrolls.scroll1)
        }, carouselPostScrollDelay);
        carousel.append(fimgs.next);

        fimgs.current.classList.add(carouselScrolls.scroll2);

        carousel.removeChild(fimgs.last);
        fimgs.last.classList.remove(carouselScrolls.scroll1);
        fimgs.last.classList.remove(carouselScrolls.scroll2);

        count++;
    }, carouselDelay);
}

async function experienceStartAnim (element: HTMLElement, num: number, delay: number) {
    let count = 0;
    element.innerText = count.toString();

    while (count <= num) {
        await sleep(experienceStatsDelay);
        element.innerText = count.toString();
        count++;
    }
}

function setupExperience () {
    experienceStats.forEach((stat) => {
        const element = document.getElementById(stat[0] as string);

        experienceStartAnim(element, stat[1] as number, stat[2] as number);
    });
}

function main () {
    setupCarousel();
    setupExperience();

    console.log("Hello, World! Index page loaded.");
}

main();
