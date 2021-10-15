---
sidebar_position: 3
---

# Node Editor/Step Editor 

## Menu principal
![Node Overview](/img/node_overview.png)

Cette fenêtre montre la logique des étapes dans l'expérience. Chaque Step/Node est representé par un Node.

Pour se déplacer dans cette vue, cliquez de manière enfoncée et déplacez la souris.
Pour zoomer et dézoomer sur les Nodes, utilisez la molette de la souris. 


![Node Detailed](/img/node_detailed_1.png)

Chaque Step/Node est composé de plusieurs parties.

![Node Detailed 2](/img/node_detailed_2.png)

## I. Nom de la Node/Step

Nom donné à cette Node.

## II. Condition Group

Il s'agit de l'ensemble des _Conditions_ et _Behaviours_ nécessaires à la sortie de cette Node. Les _Conditions_ et _Behaviours_ sont des éléments nécessitant une manipulation de la part de l’utilisateur en VR. 
Lorsque toutes les manipulations d’un _Condition Group_ sont réalisées, l'expérience continue vers la Node reliée à la sortie de ce _Condition Group_.

Cliquer sur le *-* à gauche du nom du groupe détruit ce _Condition Group_.

## III.	Menu

![Menu](/img/node_menu.png)
 
Cliquer sur *...* en haut à droite ouvre le menu. Vous pouvez accéder à différentes options :
-	_Settings_ : Ouvre les options de Node dans l’_Inspector_.
-	_Delete stage node_ : Supprime la Node actuelle.
-	_Disconnect in_ : Supprime le lien de connection entre la Node précédente et l’entrée de cette Node.
-	_Disconnect out_ : Supprime les liens de sortie vers les Nodes suivantes.
-	_Disconnect All_ : Supprime les liens d’entrée et de sortie.

## IV. Entrée

L'entrée permet d'être reliée à la sortie de la Node précédente.
Pour connecter deux Nodes entre elles, cliquez sur une sortie de la Node, puis sur l’entrée de la Node suivante. 

## V. Sortie(s)

Les sorties de Node/Step sont des liens vers d’autre Node/Step si un _Condition Group_ est validé. Il y a une sortie par _Condition Group_. Une Node/Step ne peut pas posséder moins d’un _Condition Group_.

##	VI. Add Condition Group
Ajoute un _Condition Group_, ainsi que la sortie liée à celui-ci.

![Condition](/img/node_condition.png)

Le *+* en haut à droite de la fenêtre Node Editor permet de rajouter un Node/Step.
Le *x* en dessous permet de recentrer la vue du Node Editor.

