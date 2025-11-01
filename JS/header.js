function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

let lastScroll = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        // Scroll vers le bas → cache le header
        header.style.top = '-80px';
    } else {
        // Scroll vers le haut → montre le header
        header.style.top = '0';
    }
    lastScroll = currentScroll;
});
