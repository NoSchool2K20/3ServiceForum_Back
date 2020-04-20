# API Service Forum

Déployé sur Clever Cloud : http://app-e1e82fb1-aa79-4119-8706-574e76dbbf4a.cleverapps.io/

**Application est actuellement éteinte pour des raisons de coût**

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


### **GET** **/channel**

Permet de récupérer l'ensemble des channels en base.
Exemple d'input : 
```
http://127.0.0.1:8080/channel
```

Exemple d'ouput :
```
[
    {
        "id": "9",
        "coursname": "monCours"
    },
    {
        "id": "88",
        "coursname": "POO"
    }
]
```
### **GET** **/message?cours=XXX&userId=YYY**

Permet de récupérer l'ensemble des messages pour un cours XXX(idCours) en connaissant l'utilisateur connecté YYY.
Exemple d'input : 
```
http://127.0.0.1:8080/message?cours=POO&userId=monUser
```

Exemple d'ouput :
```
[
    {
        "idmessage": "13",
        "texte": "Ceci est le contenu du message 2fsdfs",
        "dateenvoi": "2020/04/19 14:46:44",
        "idcours": "POO",
        "auteur": "user5",
        "nblikes": "0",
        "isliked": "0"
    },
    {
        "idmessage": "6",
        "texte": "duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce",
        "dateenvoi": "2020/03/19 17:30:05",
        "idcours": "POO",
        "auteur": "user5",
        "nblikes": "2",
        "isliked": "1"
    }
]
```
Le champ  "nblikes" correspond au nombre de likes lié à ce message.
Le champ "isliked" indique si le message est liké par l'utilisateur passé en paramètre ce qui correpond à la personne connectée au site.

### **POST** **/message**

Permet de créer un message en renseignant les champs suivants dans la méthode POST :
* texte = le texte du message
* idCours = le nom du cours dans lequel le message se trouve
* auteur = l'auteur du message 

Exemple d'input : 
```
{
	"texte" : "Ceci est le contenu du message",
	"idCours" : "POO",
	"auteur" : "monUser"
}
```


### **DELETE** **/message**

Permet de supprimer un message avec son idMessage dans la méthode DELETE.
Exemple d'input : 
```
{
	"idMessage" : 214
}
```

### **POST** **/like**

Permet de "liker" un message en fournissant son idMessage et le userId de la personne connectée dans la méthode POST.
Exemple d'input : 
```
{
	"idMessage" : 10,
	"userId" : "monUser"
}
```

### **DELETE** **/like**

Permet de "disliker" (enlever le like) d'un message en fournissant son idMessage et le userId de la personne connectée dans la méthode DELETE.
Exemple d'input : 
```
{
	"idMessage" : 10,
	"userId" : "monUser"
}
```