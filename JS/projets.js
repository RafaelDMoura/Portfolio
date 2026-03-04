const projets = {
    scrabble: {
        title: "Scrabble 2 Joueurs",
        techs: ["C#", "XAML", "SQL/MySQL", "API"],
        description: "Un projet de jeu Scrabble en C# avec interface WPF, permettant à deux joueurs de s’affronter et sauvegarder leurs scores dans une base de données.",
        img: `
        <div class="pre">
            <div id="one">
                <p>La sauvegarde des parties</p>
                <img id="stage" src="CSS/IMG/scrabble1.png" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
            </div>
            <div id="two">
                <p>La partie en elle-même</p>
                <img id="stage" src="CSS/IMG/scrabble2.png" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
            </div>
        </div>`
    },
    multiburo: {
        title: "Multiburo",
        techs: ["HTML", "CSS", "JS", "PHP", "SQL/MySQL"],
        description: "Une application web simulant la gestion d’espaces de coworking avec authentification, gestion de réservations et base de données MySQL.",
        img: `
        <div class="pre">
            <div id="one">
                <p>Le profil</p>
                <img id="stage" src="CSS/IMG/multiburo1.png" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
            </div>
            <div id="two">
                <p>La profil quand vous-êtes connecter</p>
                <img id="stage" src="CSS/IMG/multiburo2.png" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
            </div>
        </div> <br>
        <div class="pre">
            <div id="one">
                <p>La Connection</p>
                <img id="stage" src="CSS/IMG/multiburo3.png" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
            </div>
            <div id="two">
                <p>L'Inscription</p>
                <img id="stage" src="CSS/IMG/multiburo4.png" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
            </div>
            <div id="three">
                <p>La réservation</p>
                <img id="stage" src="CSS/IMG/multiburo5.png" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
            </div>
        </div>`
    },
    gourmetise: {
        title: "Gourmetise",
        techs: ["Frameworks : Vue.Js", "SQL/MySQL", "Android Studio", "API : Symfony"],
        description: "Une application web simulant l'inscription de participer, de voir les résultats après l'évènement. <br> Une application mobile simulant pour juger les boulangeries inscrite",
        img: `
        <div class="pre">
            <div id="one">
                <p>Rien</p>
                <img id="stage" src="CSS/IMG/" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
                <div id="lightbox" class="lightbox" onclick="this.style.display='none'">
                    <span class="close">&times;</span>
                    <img class="lightbox-content" id="lightbox-img">
                </div>
            </div>
            <div id="two">
                <p>Nada</p>
                <img id="stage" src="CSS/IMG/" class="img-centre img-lightbox" onclick="openLightbox(this.src)">
            </div>
        </div>`
    }
};

function Projet(name) {
    const projet = projets[name];
    const container = document.getElementById("project-content");

    if (!projet) {
        container.innerHTML = "<p>Projet introuvable.</p>";
        return;
    }

    container.innerHTML = `
        <div id="rouge"><p>${projet.title}</p></div>
        <p>${projet.description}</p>
        <ul>${projet.techs.map(t => `<li>${t}</li>`).join("")}</ul>
        ${projet.img}
    `;
}

window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);
    if (hash && projets[hash]) {
        Projet(hash);
    }
});
