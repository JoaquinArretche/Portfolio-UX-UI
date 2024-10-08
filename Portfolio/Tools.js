const textArray = ["Diseñador Industrial", "Diseñador UX UI", "Front End Developer"];
let currentTextIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 0; // Velocidad de escritura en ms
const erasingSpeed = 50; // Velocidad al borrar
const newTextDelay = 2000; // Tiempo que se queda el texto antes de cambiar

const typewriter = document.getElementById("typewriter");

function type() {
    if (currentCharIndex < textArray[currentTextIndex].length) {
        typewriter.textContent += textArray[currentTextIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (currentCharIndex > 0) {
        typewriter.textContent = textArray[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % textArray.length; // Cambia al siguiente texto
        setTimeout(type, typingSpeed); // Espera antes de empezar a escribir de nuevo
    }
}

// Inicia la animación
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay + 250); // Inicia la animación después de que la página cargue
});
