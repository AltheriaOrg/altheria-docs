---
sidebar_position: 2
---

# Logia/Practice : Vue d’ensemble


## Menu statique

![User Interface Overview](/img/UI_overview.png)

### Files

- New project : pas encore impl.
- Open project : pas encore impl.
- Save : Sauvegarder l’état actuel de l’experience
- Save As : pas encore impl.
- Exit project : Quitte le projet (pas possible si VR preview ouverte)
- Exit Logia : Ferme Logia/Practice Editor. (pas possible si VR preview ouverte)

### Edit

pas encore impl.

### Window

Todo descript

### Help

pas encore impl.

### Avatar

Todo descript

### Project Name

Le nom de votre experience, à but purement information

### Language

Todo descript

## Inspector

![Inspector Panel Overview](/img/UI_overview_inspector.png)

Sur la partie droite par defaut se trouve l’inspector. Ce panneau donne des informations sur l’objet actuellement sélectionné sur la ‘Sceneview’ ou la ‘Hierarchy’. Il est composé de plusieurs bloques possibles :

![Inspector Panel Detailed](/img/UI_detailed_inspector.png)

### I. Nom de l’objet

Nom de l’objet actuellement sélectionné.

### II. Active

Indique si l’objet est actuellement actif dans la step actuelle.

### III. State

L’état actuel de l’objet. Pour plus d’information voir “StateFlow Editor”.

### IV. Tag 

L’Etiquette indiquant un comportement avec l’objet. Déclaré un objet comme “Heavy” va permettre d’interagir avec l’avatar afin de casser les os de ce dernier.

### V. Transform

Transform est un composant se trouvant sur tous les objets. Il indique la position, la rotation et la taille de l’objet (par apport à l’objet original).

### VI. VR Module (sur objet VR Module uniquement)

Il s’agit du composant sur l’objet représentant la position de l’utilisateur dans la VR. Il possède un bouton “Calibrate”. Appuyer sur ce bouton en écartant les manettes de façon à les éloigner d’un mètre. Cela va automatiquement mettre à jour la taille de l’environnement par apport à cette valeur de mètre définis précédemment.

### VII. 3D Mesh

Composant indiquant la présence d’un mesh 3D. 

### VIII. Avatar (sur objet VR Module uniquement)

Composant indiquant la présence de l’avatar. Voir le point Avatar (7) Il permet de définir l’état de l’avatar au début de la Step/Node.


### IX.	Ajouter une condition

Ajoute un composant de type "Condition". Plus de détails sont disponibles dans la section "Conditions".

### X. Node Options (lorsqu'il est ouvert depuis un node)

![Node Options](/img/UI_node_options.png)

Les options de Node sont ouvertes dans l’inspector lorsqu’une Node/Step est selectionné via le ctrl+Click ou que les settings de Node sont selectionnés.

-	Nom de la Node.
-	_Free Teleportation_ : autorise ou non la téléportation dans la Node/Step actuelle.
-	_VR Module Position and Rotation_ : Stay veut dire que le module VR conservera la position de la Node précédente (s’il y en a une) Reset veut dire que le module VR aura la position et rotation indiqué dans la Hierarchy.
-	_Fade In_ : Provoquera un fondu au noir lorsque l’étape se finira.
-	_Last Stage_ : Annonce que ce stage mettra fin à la lecture du Reader (lorsque l’expérience sera lancée via un Reader).
-	_Type of Stage_ : Default indique que Node/Step est un Node classique. FirstStage indique que le Node/Step sera lancé en premier lors du lancement du Reader (il ne peut y avoir qu’une seule Node/Step de ce type). Last Stage indique que c’est la fin de l’expérience.
-	Show Step Validation : indique si une animation de validation à la fin de la Node apparaitra ou non. 
-	Type of Stage : Default indique que Node/Step est un Node classique. FirstStage indique que le Node/Step sera lancé en premier lors du lancement du Reader (il ne peut y avoir qu’une seule Node/Step de ce type). Last Stage indique que c’est la fin de l’expérience.
-	Show Step Validation : indique si une animation de validation à la fin de la Node apparaitra ou non. 


## VR Preview

La fenêtre en bas à droite par défaut est la VR Preview. En appuyant sur le bouton “Visual Test ” au centre de cette fenêtre va lancer la Réalité Virtuelle. Vous pouvez voir une partie du champ de vision de l’utilisateur. L’expérience sera alors lancée depuis la Step/Node actuellement sélectionné. 

![VR Preview 1](/img/UI_vr_preview_1.png)
![VR Preview 2](/img/UI_vr_preview_2.png)

## Scene View

La fenêtre Sceneview est une représentation de l’environnement, vous pouvez voyager à l’aide de votre souris et certain raccourcis clavier. Vous pouvez aussi modifier les composants “transform” de l’objet sélectionné à l’aide des flèches autour/sur l’objet.

Les raccourcis 
- click droit enfoncé + W/A/S/D/Q/E : déplacer la caméra.
- click droit enfoncé + mouvement souris : Effectue une rotation caméra autour du point de concentration. S’il n’y a pas point de concentration, va tourner autour de l’origine (0,0,0) du monde.
- click molette enfoncé + mouvement souris : Effectue une translation de la caméra sur le plan panoramique.
- dérouler molette souris : Zoom/Dezoom vers le point de concentration.
 -   click gauche : Sélectionne l’objet sur le curseur.
- Touche F : Change le point de concentration sur l’objet sélectionné, centre aussi la caméra sur l’objet.
- W : active “les flèches gizmo” pour permettre les mouvements de l’objet sélectionné. 
- E : active “les cercles gizmo” pour permettre la rotation de l’objet sélectionné.
- R : active “les flèches gizmo” pour permettre le 	Changement de taille de l’objet sélectionné.
- T : active “les rectangles gizmo” pour permettre le changement de taille de l’objet par face.
- U : active “le gizmo universel” pour permettre des modifications diverses.
- L : Change le “gizmo” de local à global et inversement.
- Ctrl + D : duplique l’objet sélectionné.
Avec les gizmos en haut à droite, vous pouvez cliquer sur “Persp”/”Iso” afin de passer de vue perspective à vue isométrique. En cliquant sur les flèches, vous pouvez orienter la caméra vers l’axe sélectionné.  

![Gizmos](/img/UI_gizmos.png)


## Hierarchy

Il s’agit d’une liste de tous les objets importés dans votre projet. Il vous est possible de sélectionner les objets depuis cette liste, mettant ainsi à jour l’objet sélectionné dans la sceneview et l’inspector (Les objets inactifs sur la Node/Step actuel ne peuvent pas être sélectionné). 
En appuyant sur le “+” en haut à droite vous pouvez ajouter des éléments.

![Hierarchy](/img/UI_hierarchy.png)

- Add Empty : Ajoute un objet vide, avec uniquement un Transform. 
- Add Cube : Ajoute un cube sur la scene. 
- Add Sphere : Ajoute une sphere.
- Add Plane : Ajoute un 3D objet plan. 
- Add Cylinder : Ajoute un cylindre.
- Add Capsule : Ajoute une capsule. 
- Add Text : Ajout un objet Text. Avec un composant “Text”.
Le composant text possède des propriétés pouvant être modifiées. Dans le bloc Content vous pouvez ajouter le texte que l’objet affichera dans l‘application. 

![Text](/img/UI_text.png)

 À gauche de Content se trouve le bouton permettant de lier une ligne de TextDataBase

 ![TextDB 1](/img/UI_textdb_1.png)
 ![TextDB 2](/img/UI_textdb_2.png)

Text Color vous permet de sélectionner la couleur du texte.
Outline Color vous permet de sélectionner la couleur du contour des lettres dans le texte.
Background Color vous permet de sélectionner la couleur du fond dans le texte il est conseillé de le garder afin de permettre une lisibilité à tout moment.
Texture, Metalness et Roughness sont des élements qui ne sont pas encore modifiable dans la Logia/Practice July Avatar update.

- Add Fluid Emitter : Ajoute un émetteur de liquide. 
  - Add body : Ajoute un corp pouvant être modifié via l’Object Editor(LE TITRE LO)
- Add  Squeegee, Screwdriver, RollerBrush, etc.: Ajoute un objet préparé à être utilisé comme Unit Applicator(LE TITRE LO)

## Object Editor 

Lol jsp comment on fait pour atteindre cette fenetre



