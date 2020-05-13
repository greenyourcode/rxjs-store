Projet : 
--------

Dans le module profile, on souhaite renseigner les informations liées au paramétrage du profil d’un utilisateur dans une fiche intitulée « Settings ». 

On souhaite mettre en place un store afin de pouvoir réutiliser ces données dans d’autres modules et d’avoir toujours accès à ce qui a été renseigné si on passe d’un module à l’autre. 

--------------------------

1/ Création de l’objet et affichage
A partir de l'objet mock créé dans profile.component.ts, on affiche ses informations de profil ainsi que ses paramètres (settings) sur la même page. 

--------------------------

2/ Création du formulaire pour modification
En complément des informations de settings, afficher un formulaire en vue de modifier les valeurs de settings. 
Le formulaire contiendra des informations pré-saisies comme une modification classique. 
Utiliser un Reactive form pour réaliser cet exercice. 

--------------------------

3/ Validation du formulaire
Ajouter un bouton de validation. 
Au clic, on souhaite que les informations saisies soient mises à jour dans le modèle. 
Les nouvelles informations doivent être répercutées dans la vue. 

--------------------------

4/ Mise en place et design du store
On souhaite désormais conserver les informations lors du passage d'un module à l'autre. De même, on aimerait afficher la couleur du thème dans le module customer. 
Pour ce faire, designer le state, l'écrire et initialiser le store. 

--------------------------

5/ Détection de changement sur le formulaire
On souhaite initier une détection de changement sur chaque onKey des élements du formulaire.
Via un console log, afficher chaque nouvelle valeur du formulaire. 
Remarque : un bug devra être résolu pour atteindre cette étape.

--------------------------

6/ Liaison entre le formulaire existant et le store
On met en place la mécanique qui permet de rattacher le store au formulaire. 
Au terme de cette étape, on sera capable d'afficher la valeur courante qui est dans le store. 

--------------------------

7/ Action de mise à jour du formulaire
Suite au clic sur un bouton d'action, on souhaite charger un profil.
Concrétement, les données du formulaire devront être modifiées au même titre que le store. 

--------------------------

