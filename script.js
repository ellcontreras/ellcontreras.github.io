'use strict'

var frippedWeb = document.getElementById('frippedWeb');
var frippedDiv = document.getElementById('frippedDiv');

var box = document.getElementById('box');
var imgPerfil = document.getElementById('imgPerfil');

box.addEventListener("mouseenter",() => {
    box.style.display = "none";
    imgPerfil.style.display = 'inherit';
});

box.addEventListener("mouseout", () => {
    window.setTimeout(() => {
        box.style.display = "inherit";
        imgPerfil.style.display = 'none';
    }, 100);
});

frippedWeb.onmouseover = () => {
    frippedDiv.innerHTML = '<h2>Fripped web.</h2><p>Página web de la startup fripped.</p>';
    document.getElementById('proyectoFripped').className = "proyecto";
};
frippedWeb.onmouseout = () => {
    while(frippedDiv.firstChild){
        frippedDiv.removeChild(frippedDiv.firstChild);
    }

    document.getElementById('proyectoFripped').classList.remove("proyecto");
};
