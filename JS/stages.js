const stages = {
    accessCreed: {
        title: "Access Creed",
        html: `
            <div class="stage" id="access-creed">
                <div class="container-img">
                    <img src="CSS/IMG/accesscreed.png" alt="Access Creed" class="img-centre">
                </div>
                <ul>
                    <li>Une entreprise Freelancer</li>
                    <li>Aide à réparer les soucis des ordinateurs de ses clients (dans d’autres entreprises) via du code PowerShell</li>
                    <li>Fait des délivraisons d’outils (ordinateurs, composants, écrans, etc.).</li>
                    <li>Fait des applications webs pour les clients.</li>
                </ul>
                <h2>J'ai fait quoi dans Access Creed?</h2>
                <p>Du 19 Mai 2025 au 27 Juin 2025, j'ai eu un projet et une mission :</p>
                <ul>
                    <li>Mon Projet : La construction du site web</li>
                    <li>Ma Mission : Un formulaire applicative en C# pour une autre entreprise</li>
                </ul>

                <h2>Le Projet du site web</h2>
                <p>Ce projet est un site web en HTML/CSS/JS et PHP natif.</p>
                <p>Le bût du projet est pour faire un site web pour que les clients ont un moyen de contacter l'entreprise.</p>
                <p>Et pour qu'ils ont une compte sécuriser grâce aux tickets.</p>
                <h3>Voici les pages faites pendant le projet :</h3>
                <div class="pre2">
                    <img id="stage" src="CSS/IMG/access-creed-1.png" alt="AC1" class="img-centre">
                    <img id="stage" src="CSS/IMG/access-creed-2.png" alt="AC2" class="img-centre">
                </div> <br>
                <div class="pre2">
                    <div id="one">
                        <img id="stage" src="CSS/IMG/access-creed-3.png" alt="AC3" class="img-centre">
                    </div>
                    <div id="two">
                        <img id="stage" src="CSS/IMG/access-creed-4.png" alt="AC4" class="img-centre">
                    </div>
                </div>
                <h2>La Mission du Formulaire en C#</h2>
                <p>Cette mission est pour faire un formulaire sous C#</p>
                <p>Elle est mise en forme par XAML et après transformer en fichier executable</p>
                <p>Le bût c'est qu'on obtient de l'information des ordinateurs et lequels les utilisent pour une entreprise</p>
                <p>Cette information fini par être enregistrer dans une base de donnée</p>
                <h3>Voici comment le formulaire ce ressemble :</h3>
                <img id="stage" src="CSS/IMG/access-creed-c.png" alt="AC Formulaire" class="img-centre">
            </div>
        `
    },
    celeonet: {
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

                <h2>Le Projet de l'application web</h2>
                <p>Ce projet est une application web en HTML/CSS, JS et PHP natif.</p>
                <p>Le bût du projet est pour utiliser la BDD Asterisk pour obtenir des informations.</p>
                <p>Et grâce aux tables de cette, BDD, on peut faire des requêtes mySQL pour obtenir :</p>
                <ol>
                    <li>La disponibilité des techniciens.</li>
                    <li>La présence ou absence des techniciens dans les files de traitement des appels clients.</li>
                    <li>Un traitement statistique sur les appels clients (liste des appelants, nombre d'appels, etc.).</li>
                </ol>
                <h3>Voici les tables faitent pour le projet :</h3>
                <div class="pre2">
                    <img id="stage" src="CSS/IMG/celeonet-1.png" alt="Celeonet1" class="img-centre">
                    <img id="stage" src="CSS/IMG/celeonet-2.png" alt="Celeonet2" class="img-centre">
                </div>
                <div class="pre2">
                    <img id="stage" src="CSS/IMG/celeonet-3.png" alt="Celeonet3" class="img-centre">
                    <img id="stage" src="CSS/IMG/celeonet-4.png" alt="Celeonet4" class="img-centre">
                </div>
                <div class="pre2">
                    <img id="stage" src="CSS/IMG/celeonet-5.png" alt="Celeonet5" class="img-centre">
                    <img id="stage" src="CSS/IMG/celeonet-6.png" alt="Celeonet6" class="img-centre">
                </div>
                <p>Pour une petite info, la synthèse vient d'une autre BDD nommée CallSupport</p>

                <h2>La Mission de l'API</h2>
                <p>Cette mission est pour faire une API sur les même BDDs</p>
                <p>Elle est mise en forme par la framework Symfony, et grâce à ça,</p>
                <p>on peut faire des requêtes GET</p>
                <h3>Voici une des tables sous l'API :</h3>
                <img id="stage" src="CSS/IMG/celeonet-api-1.png" alt="CeleonetAPI1" class="img-centre">
                <p>Grâce à l'API, on peut automatisé l'importations d'une BDD envers une table d'une autre BDD</p>
                <h3>Voici  la synchronisation avec Asterisk envers la table de la synthèse d'appels des clients :</h3>
                <img id="stage" src="CSS/IMG/celeonet-api-2.png" alt="CeleonetAPI2" class="img-centre">

                <h2>La Mission de Test Unitaires PHP</h2>
                <p>Cette mission est pour faire un Test Unitaire sous PHP</p>
                <p>Elle est mise en forme par la framework PHPUnit, et grâce à ça,</p>
                <p>on peut faire tester les fonctions faitent pour voir si elles marchent vraiment</p>
                <h3>Voici le test fait directement en terminal :</h3>
                <img id="stage" src="CSS/IMG/celeonet-phpunit.png" alt="CeleonetPHPUnit" class="img-centre">
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
