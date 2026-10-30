# Jeu des allumettes

Un jeu de stratégie à réaliser en HTML, CSS et JavaScript dans le cadre d’un TP de formation au développement web.

## Règles

- La partie commence avec 50 allumettes.
- De 2 à 4 joueurs peuvent participer.
- Les joueurs jouent à tour de rôle et retirent entre 1 et 6 allumettes.
- Le joueur qui retire la dernière allumette gagne.

## Fonctionnalités

- Écran d’accueil avec saisie du nombre de joueurs.
- Vérification du nombre de joueurs : seules les valeurs de 2 à 4 sont acceptées.
- Affichage du plateau et du joueur dont c’est le tour.
- Retrait des allumettes et mise à jour du compteur.
- Désactivation des boutons correspondant à un retrait impossible.
- Affichage du gagnant et bouton pour recommencer la partie.
- Interface responsive pour les petits et grands écrans.

## Fichiers du projet

- `index.html` : structure de l’écran d’accueil et du plateau.
- `styles.css` : mise en page, couleurs et adaptation aux différentes tailles d’écran.
- `script.js` : validation du nombre de joueurs et logique de la partie.

## Lancer le projet

Ouvrir `index.html` dans un navigateur. Pour que le JavaScript fonctionne, le fichier HTML doit charger `script.js`. Ajoutez cette balise juste avant `</body>` si elle n’y figure pas déjà :

```html
<script src="script.js" defer></script>
```

Le code JavaScript utilise aussi la classe `cache` pour masquer ou afficher l’écran d’accueil et le plateau. Vérifiez que cette règle figure dans `styles.css` :

```css
.cache {
  display: none;
}
```

## Principaux sélecteurs HTML utilisés par le JavaScript

| Sélecteur | Rôle |
| --- | --- |
| `#player-count` | Champ du nombre de joueurs |
| `#start-game` | Bouton de démarrage |
| `#ecran-accueil` | Écran d’accueil |
| `.game-card` | Plateau de jeu |
| `#match-count` | Nombre d’allumettes restantes |
| `#current-player` | Joueur courant |
| `.match` | Représentation d’une allumette |
| `.move-buttons button` | Choix du nombre d’allumettes à retirer |
| `#game-message` | Message de partie ou de victoire |

## Technologies

HTML, CSS et JavaScript natifs, sans bibliothèque externe.
