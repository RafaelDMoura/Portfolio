const stages = {
    accessCreed: {
        title: "Access Creed",
        html: `
            <div class="stage" id="Access-creed">
                <div class="container-img">
                    <img src="CSS/IMG/accesscreed.png" alt="Access Creed" class="img-centre">
                </div>
                <p>Une entreprise Freelancer créée en 2018</p>
                <p>Aide à réparer les soucis des ordinateurs de ses clients (dans d’autres entreprises) via du code PowerShell</p>
                <p>Fait des délivrances d’outils (ordinateurs, composants, écrans, etc.).</p>
                <p>Fait des applications web pour les clients.</p>
                
                <h2>J'ai fait quoi dans Access Creed ?</h2>
                <p>Du 19 mai 2025 au 27 juin 2025, j'ai eu un projet et une mission :</p>
                <ul>
                    <li>Mon Projet : La construction du site web.</li>
                    <li>Ma Mission : un formulaire applicatif en C# pour une autre entreprise.</li>
                </ul>

                <h2>Site Web</h2>
                <p>Ce projet est un site web en HTML/CSS/JS et PHP natif.</p>
                <p>Le but du projet est de faire un site web pour que les clients aient un moyen de contacter l'entreprise.</p>
                <p>Et pour qu'ils aient un une compte sécurisé grâce aux tickets.</p>
                <h3>Voici les pages faites pendant le projet :</h3>
                <div class="pre2">
                    <img id="stage" src="CSS/IMG/access-creed-1.png" alt="AC1" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                    <img id="stage" src="CSS/IMG/access-creed-2.png" alt="AC2" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                </div>
                <div class="pre2">
                    <div id="one">
                        <img id="stage" src="CSS/IMG/access-creed-3.png" alt="AC3" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                    </div>
                    <div id="two">
                        <img id="stage" src="CSS/IMG/access-creed-4.png" alt="AC4" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                    </div>
                </div>
                <h2>Formulaire sous C#</h2>
                <p>Cette mission est pour faire un formulaire sous C#.</p>
                <p>Elle est mise en forme par XAML et après transformée en fichier exécutable.</p>
                <p>Le but c'est qu'on obtient de l'information des ordinateurs et lesquels les utilisent pour une entreprise.</p>
                <p>Cette information finit par être enregistrée dans une base de données.</p>
                <h3>Voici comment les formulaires se ressemblent :</h3>
                <img id="stage" src="CSS/IMG/access-creed-c.png" alt="AC Formulaire" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">

                <h2>Bilan</h2>
            </div>
        `
    },
    celeonet: {
        title: "Celeonet",
        html: `
            <div class="stage" id="Celeonet">
                <div class="container-img">
                    <img src="CSS/IMG/celeonet.png" alt="Celeonet" class="img-centre2">
                </div>
                <p>Une entreprise experte en hébergement créée en 2003.</p>
                <p>L'entreprise est constituée d'une équipe d’experts d’internet et des réseaux.</p>
                <p>C'est une entreprise qui se répartit sur la région parisienne et lyonnaise.</p>
                <p>Pour en savoir plus, <a href="https://www.celeonet.fr/societe" target="_blank">cliquer ici.</a></p>
                

                <h2>J'ai fait quoi dans Celeonet ?</h2>
                <p>Du 5 janvier 2026 au 13 Février 2026, J'ai eu un projet et deux missions :</p>
                <ul>
                    <li>Mon Projet : la construction d'une application web interrogeant la BDD MySQL d'un serveur téléphonique.</li>
                    <li>Ma Première Mission : mise en place d'une API pour obtenir les tables localement.</li>
                    <li>Ma Deuxième Mission : mise en place des Test Unitaires en PHP.</li>
                </ul>

                <h2>Application Web</h2>
                <p>Ce projet est une application web en HTML/CSS, JS et PHP natif.</p>
                <p>Le but du projet est d'utiliser la BDD Asterisk pour obtenir des informations.</p>
                <p>Et grâce aux tables de cette BDD, on peut faire des requêtes MySQL pour obtenir :</p>
                <ol>
                    <li>La disponibilité des techniciens.</li>
                    <li>La présence ou absence des techniciens dans les files de traitement des appels clients.</li>
                    <li>Un traitement statistique sur les appels clients (liste des appelants, nombre d'appels, etc.).</li>
                </ol>
                <h3>Voici les tables faites pour le projet :</h3>
                <div class="pre2">
                    <img id="stage" src="CSS/IMG/celeonet-1.png" alt="Celeonet1" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                    <img id="stage" src="CSS/IMG/celeonet-2.png" alt="Celeonet2" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                </div>
                <div class="pre2">
                    <img id="stage" src="CSS/IMG/celeonet-3.png" alt="Celeonet3" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                    <img id="stage" src="CSS/IMG/celeonet-4.png" alt="Celeonet4" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                </div>
                <div class="pre2">
                    <img id="stage" src="CSS/IMG/celeonet-5.png" alt="Celeonet5" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                    <img id="stage" src="CSS/IMG/celeonet-6.png" alt="Celeonet6" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                </div>
                <p>Pour une petite info, la synthèse vient d'une autre BDD nommée CallSupport.</p>

                <h2>Test Unitaires</h2>
                <p>Cette mission est pour faire des test unitaires sous PHP.</p>
                <p>Elle est mise en forme par le framework PHPUnit, et grâce à ça,</p>
                <p>On peut faire tester les fonctions faites pour voir si elles marchent vraiment.</p>
                <h3>Voici le test fait directement en terminal :</h3>
                <img id="stage" src="CSS/IMG/celeonet-phpunit.png" alt="CeleonetPHPUnit" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">

                <h2>API</h2>
                <p>Cette mission est pour faire une API sur les mêmes BDD.</p>
                <p>Elle est mise en forme par le framework Symfony, et grâce à ça,</p>
                <p>On peut faire des requêtes GET.</p>
                <h3>Voici une des tables sous l'API :</h3>
                <img id="stage" src="CSS/IMG/celeonet-api-1.png" alt="CeleonetAPI1" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">
                <p>Grâce à l'API, on peut automatiser l'importation d'une BDD envers une table d'une autre BDD</p>
                <h3>Voici la synchronisation avec Asterisk envers la table de la synthèse d'appels des clients :</h3>
                <img id="stage" src="CSS/IMG/celeonet-api-2.png" alt="CeleonetAPI2" class="img-centre2 img-lightbox" onclick="openLightbox(this.src)">

                <h2>Bilan</h2>
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
