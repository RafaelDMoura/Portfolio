// Fonction pour générer le Header
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
        header.style.top = '-80px';
    }
    else {
        header.style.top = '0';
    }
    lastScroll = currentScroll;
});

function createHeader(currentPage = "") {
    const headerContainer = document.getElementById('headery');
    if (!headerContainer) return;

    // Helper pour le style du bouton actif
    const activeStyle = 'style="pointer-events:none; background-color:#612e2e; opacity:0.6;"';

    headerContainer.innerHTML = `
    <header>
        <div class="nav">
            <p>PORTFOLIO - RAFAEL FAQUIR DE MOURA</p>

            <a href="index.html" class="bouton" ${currentPage === 'index' ? activeStyle : ''}>
                Accueil
            </a>

            <a href="competence.html" class="bouton" ${currentPage === 'competence' ? activeStyle : ''}>
                Compétences
            </a>

            <a href="stages.html" class="bouton" ${currentPage === 'stages' ? activeStyle : ''}>
                Stages
            </a>

            <a href="projets.html" class="bouton" ${currentPage === 'projets' ? activeStyle : ''}>
                Projets
            </a>
        </div>
    </header>`;
}

// Fonction pour générer le Footer
function createFooter() {
    const footerContainer = document.getElementById('footery');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer>
        <div class="footer-main">
            <div class="footer-left">
                <a href="CSS/PDF/RafaelCV.pdf" target="_blank" aria-label="Si vous cliquez ici, vous aurez mon pdf!">
                    <img src="CSS/IMG/moi.jpg" alt="Photo de Rafael" />
                </a>
                <h2>Rafael<br>Faquir De Moura</h2>
            </div>

            <div class="footer-right">
                <h2>Contact</h2>
                <p>+33 07 69 30 45 88</p>
                <p>18, Rue Gabriel Péri</p>
                <p>rafaelfaquirmoura@gmail.com</p>

                <div class="footer-icons">
                    <a href="https://www.linkedin.com/in/rafael-faquir-de-moura-1a8551301/" target="_blank" aria-label="LinkedIn">
                        <img src="CSS/IMG/1linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/RafaelDMoura" target="_blank" aria-label="GitHub">
                        <img src="CSS/IMG/2github.png" alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>&copy; 2025 Rafael Faquir De Moura. Tous droits réservés.</p>
            <a href="mentions.html">Mentions légales</a>
        </div>
    </footer>`;
}

let currentImages = []; 
let currentIndex = 0;

function openLightbox(src) {
    document.getElementById('prev-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function openGallery(img, index) {
    currentImages = img;
    currentIndex = index;
    document.getElementById('prev-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
    updateLightbox();
    document.getElementById('lightbox').style.display = 'flex';
}

function updateLightbox() {
    const imgElement = document.getElementById('lightbox-img');
    if (currentImages[currentIndex]) {
        imgElement.src = currentImages[currentIndex];
    }
}

function changeImage(dir) {
    if (currentImages.length === 0) return;

    currentIndex += dir;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }
    else if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }
    updateLightbox();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});