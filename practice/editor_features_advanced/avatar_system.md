---
sidebar_position: 2
---

# Avatar et dégâts physiques

Ce module permet de simuler des blessures ou des altérations d'état associées à des erreurs commises par l'opérateur. Le module permet d'assigner ces altérations à différentes parties du corps virtuel de l'utiisateur. Ces altérations d'état (brûlures, fractures, ...) sont dénommées *Hazards* dans les explications ci-dessous.

## Initialisation

La capture ci-dessous reprend la fenêtre de configuration du module. Cette fenêtre vous permet de définir l'état de l'avatar au début d'un *Node*. 

![Avatar initialization features](/img/avatar_initfeatures.png)
  
**I. Montre ou cache les Hazards sur l’UI de l'avatar**

Sélectionner les icones vous montrera l’état actuel de l’avatar (voir II et III) avec ou sans l’état selectionné. Cela permet de se concentrer sur la répartition corporelle d'un ou de pluseurs Hazards spécifiques.

**II. Selection des parties de l’avatar**

Sélectionne une ou plusieurs parties du corps de l’avatar que vous souhaitez altérer.

**III. Selection des parties des mains**

Sélectionne une ou plusieurs parties des mains de l’avatar que vous souhaitez altérer.

**IV. Selection du Hazard**

Applique l’état sélectionné sur les parties de l’avatar sélectionnées précédemment.

De gauche à droite, de haut en bas : 
* **Cyan - Coupure** : Coupe un membre/phalange.
* **Rouge - Brûlure** : Brûle le membre/phalange sélectionné.
* **Jaune - Ecoulement** : Crée une trace de substance (chimique, ...) jaune sur la surface sélectionnée.
* **Orange - Déchirure** : Créé une trace de déchirure de vêtement sur la surface sélectionnée.
* **Rose - Fracture** : Simule une fracture (os cassé) sur le membre/phalange sélectionné.
* **Vert - Soin** : Soigne la surface sélectionnée. À utiliser sur un node suivant celui où l'avatar est altéré pour simuler le soin.

Attention, les Hazards sont cohérents entre eux : casser un os ou couper un membre va limiter l'application d'autres Hazards sur ce dernier par la suite (ie. couper l’épaule gauche empêchera de voir les coupures sur la main gauche).

**V. Reset l’avatar**

Soigne toutes les parties de l’avatar sans prendre en compte la sélection actuelle.

**VI. Calcule la taille du joueur pour l’avatar**

Une fois votre utilisateur en VR, vous pouvez ajuster la taille de son avatar en demandant à l’utilisateur de rester debout, regarder droit devant lui et appuyer sur ce bouton. L’option Avatar > Resize dans le Menu Statique permet d’effectuer la même action. Veuillez noter qu'à la différence des autres options, celle-ci doit être utilisée pendant que la VR Preview est activée.

## Usage

De cette façon, vous pouvez simuler des blessures de la façon suivante :
* Définissez une condition sur le Node A (Move, ...). 
* Créez un Node B et reliez-le au Node A, de sorte que l'expérience passe au Node B quand la condition définie sur le node A est remplie.
* Configurez l'avatar en utilisant les fonctionnalités décrites ci-dessus de sorte que l'utilisateur commence le Node B avec son Avatar altéré
* Résultat : l'utilisateur remplit la condition liée au Node A, et son avatar est altéré en conséquence.







