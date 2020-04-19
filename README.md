# API Service Forum

Ce projet s'inscrit dans la démarche du projet NoSchool qui à pour objectif de créer une plateforme de formation qualifiante en informatique à distance.
Cette partie traite de la partie Back du service Forum (API). 
Les fonctionnalités sont listés dans les _User Stories_ ci-dessous.


## User Stories

* Story 1 : En tant qu’ « utilisateur », je peux poster un message sur un channel

* Story 2 : En tant qu’ « utilisateur », je consulter un channel

* Story 3 : En tant qu’ « utilisateur », je vois les nouveaux messages s’afficher sans avoir à rafraîchir l’affichage

* Story 4 : En tant qu’ « utilisateur », je peux supprimer mes propres messages

* Story 5 : En tant qu’ « utilisateur », je peux « approuver » un message d’un autre utilisateur, à l’image d’un
like FB, Twitter ou Reddit.

* Story 6 : En tant qu’ « utilisateur », je peux annuler un de mes « approuver » sur un message d’un autre
utilisateur, à l’image d’un like FB, Twitter ou Reddit. A noter qu’il s’agit de supprimer un de mes « approuver »
et non de « désapprouver ».

## Exécution du projet

Installer les dépendances du projet dans un dossier node_modules local.

`npm install`

Exécuter la construction du projet à partir du package.json.

`npm run build `

Exécuter le lanceur du projet défini dans le package.json

`npm start`

## Routes de l'API

Le projet permet de générer des réponses JSON en fonction des routes exécutées.

### **GET** **/**

Permet de récupérer le message de bienvenue sur API

### **GET** **/message?cours=XXX&userId=YYY**

Permet de récupérer l'ensemble des messages pour un cours XXX(idCours) en connaissant l'utilisateur connecté YYY.

### **POST** **/message**

Permet de créer un message en renseignant les champs suivants dans la méthode POST :
* texte = le texte du message
* idCours = le nom du cours dans lequel le message se trouve
* auteur = l'auteur du message

### **DELETE** **/message**

Permet de supprimer un message avec son idMessage dans la méthode DELETE.

### **POST** **/like**

Permet de "liker" un message en fournissant son idMessage et le userId de la personne connectée dans la méthode POST.

### **DELETE** **/like**

Permet de "disliker" (enlever le like) d'un message en fournissant son idMessage et le userId de la personne connectée dans la méthode DELETE.
