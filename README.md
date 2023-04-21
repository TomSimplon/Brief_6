```shell
cp key_example.ts key.ts #Pensez à renseigner votre clé API à la place de "INSERT HERE YOUR API KEY"
```

# Clone de Netflix

- Maquette figma : https://www.figma.com/file/BcyPY2JL3g7N3ziF36HHTL/Site-streaming?node-id=1-2&t=dcbG50EwMrIy8Z5P-0
- Trello : https://trello.com/invite/b/7XslWIB1/ATTI77c52ceab10e2eee9021b5bd4fe1549a1AA4F061/developpement-du-projet
- Nécessite parcel :

```shell
npx parcel index.html #si parcel fonctionne à l'échelle de votre projet
parcel index.html #si parcel fonctionne à l'échelle de votre machine
```

## Contexte du projet

- Votre agence participe à un appel d’offre pour réaliser une platform de streaming, pour cela elle souhaite réaliser un MVP (produit minimum viable) à présenter aux futurs clients. Au vu de vos dernières réalisations le responsable technique du projet souhaité vous confier cette tâche.

- ​Ce projet servira de support de démonstration, vous êtes libres dans le design du site mais le plus important reste les fonctionnalités ! Libre à vous de vous inspirer de Netflix (maquettes en ressources) et des autres sites de streaming.

- Néanmoins vous devrez satisfaire les contraintes techniques et fonctionnelles fournies par l’agence dans le cahier des charges.​

- Pour la réalisation du projet vous utiliserez l’API de The Movie DB, les instructions à suivre pour vous créer un compte et obtenir une clé d’authentification se trouvent dans le cahier des charges.

## Critères de performance

- Le site respecte le cahier des charges.
- Les fonctionnalités attendues ne produisent pas d’erreurs.
- Le site est responsive est s’adapte à un maximum d’écran.
- Les fichiers sont découpés de manière pertinentes et les assets sont organisés.
- Les / les page(s) est/sont fonctionnelle(s).
- Respect des bonnes pratiques de nommages / indentation / sémantique.

## Cahier des charges

### Barre de navigation

- Un champ de saisie permet à l’utilisateur de faire une recherche.

### La page d’accueil

- Un hero banner pour mettre en avant un film Cf. maquette.
- 2 listes de films, thème au choix, avec ou sans carrousel Cf. maquette.

### La page de recherche

- Affiche la recherche saisie par l’utilisateur en haut de la page.
- Les 10 films les plus pertinents vis-à-vis de la recherche sont affichés, utiliser une pagination si il y a plus de 10 films à proposer.
- Lorsqu’un utilisateur clique sur un film il est redirigé vers la page détails du film.

### La page de détails

- Elle affiche les données les plus pertinentes à propos du film.
