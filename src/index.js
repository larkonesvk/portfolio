import "./styles.css";
import Photo from "./assets/photo.jpg";
import WebGis from "./assets/web_gis.jpg";
import BetBot from "./assets/betbot.jpg";
import Slsp from "./assets/slsp.jpg";
import Radost from "./assets/radost.jpg";
import Resume from "./assets/resume.pdf";

const bntMobileMenu = document.querySelector("button.mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

bntMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
