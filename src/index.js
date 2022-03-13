import "./styles.css";
import Photo from "./assets/photo.jpg";
import WebGis from "./assets/web_gis.jpg";

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const contentImage = document.getElementById("content-image");
const webGisImg = document.getElementById("webGisImg");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

contentImage.src = Photo;

webGisImg.src = WebGis;
