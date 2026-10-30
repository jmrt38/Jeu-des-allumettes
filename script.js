// DOM

const compteurAllumettes = document.getElementById("match-count");
const auTourDe = document.getElementById("current-player");
const totalAllumettes = document.querySelector("#matches");
const allumettes = document.querySelectorAll(".match");
const boutons = document.querySelectorAll(".move-buttons button");
const msgJeu = document.getElementById("game-message");
const msgFooter = document.querySelector(".game-footer");
const plateau = document.querySelector(".game-card");
const inputJoueur = document.querySelector("#player-count");
const btnCommencer = document.querySelector("#start-game");
const form = document.querySelector(".player-form");
const ecranAccueil = document.querySelector("#ecran-accueil");

// Variables

let nbAllumettes = 50;
let choix = 0;
let joueurActuel = 1;
let nbJoueurs = 2;

// Afficher-cacher

plateau.classList.add("cache");

// Fonctions

const accueil = () => {
    btnCommencer.addEventListener("click", () => {
        nbJoueurs = Number(inputJoueur.value);

        if (nbJoueurs < 2 || nbJoueurs > 4) {
            let msgErreur = form.querySelector(".message-erreur");

            if (!msgErreur) {
                msgErreur = document.createElement("p");
                msgErreur.classList.add("message-erreur");
                form.appendChild(msgErreur);
            }

            msgErreur.textContent =
                "Erreur, veuillez sélectionner entre 2 et 4 joueurs !";
        } else {
            form.querySelector(".message-erreur")?.remove();
            afficherJeu();
        }
    });
};

const afficherJeu = () => {
    ecranAccueil.classList.add("cache");
    plateau.classList.remove("cache");
    auTourDe.textContent = `Joueur ${joueurActuel}`;
    msgJeu.textContent = `Joueur ${joueurActuel}, à vous de jouer !`;
};

const desactiveBouton = () => {
    boutons.forEach((bouton, index) => {
        if (nbAllumettes < index + 1) {
            bouton.disabled = true;
        }
    });
};

const enleverAllumettes = () => {
    const totalRetirees = allumettes.length - nbAllumettes;

    allumettes.forEach((allumette, index) => {
        if (index < totalRetirees) {
            allumette.style.opacity = 0.2;
        }
    });
};

const tour = () => {
    boutons.forEach((bouton, index) => {
        bouton.addEventListener("click", () => {
            choix = index + 1;

            const joueurQuiJoue = joueurActuel;
            nbAllumettes -= choix;
            compteurAllumettes.textContent = nbAllumettes;
            msgFooter.classList.add("cache");

            if (nbAllumettes > 0) {
                joueurActuel = (joueurActuel % nbJoueurs) + 1;
                auTourDe.textContent = `Joueur ${joueurActuel}`;
                msgJeu.textContent = `Joueur ${joueurActuel}, à vous de jouer !`;
            } else {
                msgJeu.textContent =
                    `Partie terminée ! Victoire du Joueur ${joueurQuiJoue}`;
                auTourDe.textContent = "-";
                compteurAllumettes.textContent = 0;
                rejouer();
            }

            enleverAllumettes();
            desactiveBouton();
        });
    });
};

const rejouer = () => {
    const boutonRejouer = document.createElement("button");
    boutonRejouer.textContent = "Rejouer";
    boutonRejouer.classList.add("rejouer");
    plateau.appendChild(boutonRejouer);

    boutonRejouer.addEventListener("click", () => {
        location.reload();
    });
};

// Programme

accueil();
tour();