// Files for the footer
import "./scss/footer.scss";

const footerYear = document.getElementById("footer-year");

const footerYearPrefix = "© Copyright ";
const footerYearSuffix = ". All rights reserved.";

const date = new Date();
const year = date.getFullYear();
const yearString = year.toString();

const footerYearString = footerYearPrefix + yearString + footerYearSuffix;

function footerYearSetup() {
    footerYear.innerText = footerYearString;
}

function footerSetup() {
    footerYearSetup();
    console.log("🚀 Hello, World! Footer setup complete.");
}

footerSetup();
