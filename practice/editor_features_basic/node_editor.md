---
sidebar_position: 3
---

# Step Flow 

![Step Overview](/img/UI_overview3.png)

Cette fenêtre montre la logique des étapes dans l'expérience. Chaque Step est representé par un cette figure:

![Step Detailed](/img/node_detailed_1.png)

Pour se déplacer dans cette vue, cliquez de manière enfoncée et déplacez la souris.
Pour zoomer et dézoomer sur les Steps, utilisez la molette de la souris. 

Chaque Step est composé de plusieurs parties.

![Step Detailed 2](/img/node_detailed_2.png)

### 1 Condition Group

Un *Condition Group* est un ensemble de *Conditions*. Chaque *Condition* est appliqué sur un objet sur la scène. Toutes les conditions dans un groupe doivent être réalisées afin de faire la transition vers le Step rélié à la sortie de ce groupe. Pour plus de détails sur les Conditions, visitez la section [Conditions &  Behaviours](conditions.md).

Cliquer sur le *-* à gauche du nom du groupe détruit ce *Condition Group*.

### 2 Menu

![Menu](/img/node_menu.png)
 
Vous pouvez accéder au menu si vous cliquer sur *...* en haut à droite du Step. Vous pouvez accéder à différentes options :
-	*Settings*: Ouvre les options du Step dans l'*Inspector*.
-	*Delete step*: Supprime le Step actuel.
-	*Disconnect in*: Supprime le lien de connection entre le Step précédent et l’entrée de ce Step.
-	*Disconnect out*: Supprime les liens de sortie vers les Steps suivants.
-	*Disconnect all*: Supprime les liens d’entrée et de sortie.

### 3 Entrée

L'entrée permet d'être reliée à la sortie du Step précédent.
Pour connecter deux Steps entre eux, cliquez sur une sortie d'un *Condition Group* d'un Step précédent, puis sur l’entrée du Step suivant. 

### 4 Sortie(s)

Les sorties du Step sont des liens vers d’autres Steps si un *Condition Group* est validé. Il y a une sortie par *Condition Group*. Un Step ne peut pas posséder moins d’un *Condition Group*.

### 5 Add Condition Group
Ajoute un *Condition Group*, ainsi que la sortie liée à celui-ci.

## Add steps

![Condition](/img/node_condition.png)

À droite du Step Flow vous trouverez également les *Settings* ainsi que quelques boutons pour rajouter/supprimer un Step ainsi qu'un bouton pour recentrer la vue sur le Step Flow.

## Step Options

![Step Options](/img/UI_node_options.png)

Les options du Step sont ouvertes lorsque un Step est selectionné.

-	Nom de la Step.
-	*Free Teleportation*: Autorise, ou non, la téléportation dans le Step actuel.
-	*VR Module Position and Rotation*: Avec l'option "Stay", le personnage gardera la même position dans la Step suivante.
-	*Show Step Validation* : indique si une animation de validation à la fin du Step apparaitra ou non. 
-	*Show Step Validation* : indique si une animation de validation à la fin de la Step apparaitra ou non. 
-	*Type of Step* : Default indique que ce Step est un Step classique. FirstStep indique que le Step sera lancé en premier lors du lancement du Reader (il ne peut y avoir qu'un seulStep de ce type). LastStep indique que c'est la fin de l'expérience.
-	*Fade In* : Provoquera un fondu au noir lorsque le Step se finira.
-	*Fade out* : Provoquera un fondu au noir lorsque le Step commencera.

*Last Step* : Annonce que ce Step mettra fin à la lecture du Reader (lorsque l'expérience sera lancée via Practice Reader).