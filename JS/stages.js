const stages = {
    stage1: {
        title: "Access Creed",
        html: `
            <div class="stage" id="access-creed">
                <div class="container-img">
                    <img src="CSS/IMG/accesscreed.png" alt="Access Creed" class="img-centre">
                </div>
                <ul>
                    <li>Une entreprise Freelancer</li>
                    <li>L’entreprise aide à réparer les soucis des ordinateurs de ses clients (dans d’autres entreprises) via du code PowerShell</li>
                    <li>Access Creed fait aussi des délivraisons d’outils (ordinateurs, composants, écrans, etc.).</li>
                </ul> <br>
                <h2>J'ai fait quoi dans Access Creed?</h2>
                <p>Du 19 Mai 2025 au 27 Juin 2025, j'ai eu un projet et une mission :</p>
                <ul>
                    <li>Mon Projet : La construction du site web</li>
                    <li>Ma Mission : Un formulaire applicative en C# pour une autre entreprise</li>
                </ul>
            </div>
        `
    },
    stage2: {
        title: "Celeonet",
        html: `
            <div class="stage" id="celeonet">
                <div class="container-img">
                    <img src="CSS/IMG/celeonet.png" alt="Celeonet" class="img-centre">
                </div>
                <ul>
                    <li>Une entreprise expert en hébergement créée en 2003.</li>
                    <li>L'entreprise constitue d'une équipe d’experts d’internet et des réseaux.</li>
                    <li>C'est une entreprise qui se répartie sur la région Parisienne et Lyonnaise.</li>
                    <li>Pour en savoir plus <a href="https://www.celeonet.fr/societe" target="_blank">cliquer ici.</a></li>
                </ul>
                <h2>J'ai fait quoi dans Celeonet?</h2>
                <p>Du 5 Janvier 2026 au 13 Février 2026, J'ai eu un projet et deux mission :</p>
                <ul>
                    <li>Mon Projet : La construction d'une application web interrogeant la BDD MySQL d'un serveur téléphonique.</li>
                    <li>Ma Première Mission : Mise en place d'une API pour obtenir les tables localement.</li>
                    <li>Ma Deuxième Mission : Mise en place des Test Unitaires en PHP.</li>
                </ul>
                <h2>Le Projet</h2>
                <p>Ce projet est une application web en HTML/CSS, JS et PHP natif.</p>
                <p>Le bût du projet est pour utiliser </p>
            </div>
        `
    }
};


function Stage(name) {
    const stage = stages[name];
    const container = document.getElementById("stage-content");

    if (!stage) {
        container.innerHTML = "<p>Stage introuvable.</p>";
        return;
    }

    container.innerHTML = stage.html;
    window.location.hash = name;
}

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && stages[hash]) {
        Stage(hash); 
    }
});
