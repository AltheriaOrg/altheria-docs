---
sidebar_position: 2
---

# Logia/Practice : Vue d’ensemble


## Menu principal

![User Interface Overview](/img/UI_overview.png)

### I. Files

Permet de régler les paramètres principaux liés aux fichiers.

- _New project_ : Pour créer un nouveau projet, référez-vous à la section "Gestion de votre projet".
- _Open project_ : Pour ouvrir un nouveau projet, référez-vous à la section "Gestion de votre projet".
- _Save_ : Sauvegarde l'expérience.
- _Save As_ : Sauvegarde l'expérience, et permet de renommer le fichier.
- _Exit project_ : Quitter le projet. Fonctionne seulement si la VR Preview n'est pas active. 
- _Exit Logia_ : Ferme Logia/Practice Editor. Fonctionne seulement si la VR Preview n'est pas active.

### II. Edit

_Les boutons placés dans cette section n'ont pas encore d'application au sein du logiciel, et seront exploités lors de mises à jour ultérieures._

### III. Window

Permet d'ouvrir de nouveaux panneaux au sein de l'éditeur.

### IV. Help

_Les boutons placés dans cette section n'ont pas encore d'application au sein du logiciel, et seront exploités lors de mises à jour ultérieures._

### V. Avatar

Permet de régler les paramètres principaux liés à l'avatar.

- _Activate_ : Active l'avatar.
- _Desactivate_ : Désactive l'avatar.
- _Resize_ : Modifie la taille de l'avatar.

Pour de plus amples descriptions sur l'avatar et ses fonctionnalités, référez-vous à la section "Avatar et dégâts physiques" dans les Fonctionnalités Avancées.

### VI. Project Name

Affiche le nom du projet.

### VII. Language

Permet de changer la langue de l'expérience à la volée. Pour de plus amples descriptions sur ces fonctionnalités, référez-vous à la section "Gestion des langues" dans les Fonctionnalités Avancées.


## Inspector

![Inspector Panel Overview](/img/UI_overview_inspector.png)

Par défaut, la partie droite de l'éditeur contient l'Inspector. Ce panneau fournit des informations sur l’objet actuellement sélectionné dans la _Sceneview_ ou la _Hierarchy_. 

![Inspector Panel Detailed](/img/UI_detailed_inspector.png)

### I. Nom de l’objet

Nom de l’objet actuellement sélectionné.

### II. Active

Indique si l’objet est actuellement actif dans l'étape actuelle.

### III. State

L’état actuel de l’objet. Pour plus d’informations, référez-vous à la section “StateFlow Editor”.

### IV. Tag 

Etiquette indiquant un comportement spécifique avec l’objet. 
Par exemple, déclarer un objet comme _Heavy_ permet d’interagir avec l’avatar, et d'éventuellement le blesser.

### V. Transform

Transform est un composant présent sur tous les objets de l'expérience. Il indique la position, la rotation et la taille de l’objet sélectionné.

### VI. VR Module (sur un objet "VR Module" uniquement)

Il s’agit du composant sur l’objet représentant la position de l’utilisateur dans la VR. Il possède un bouton “Calibrate”. Appuyer sur ce bouton en écartant les manettes de façon à les éloigner d’un mètre. Cela va automatiquement mettre à jour la taille de l’environnement par apport à cette valeur de mètre définis précédemment.

### VII. 3D Mesh

Composant affichant, la présence ou l'absence d’un mesh 3D. 

### VIII. Avatar (sur objet VR Module uniquement)

Composant indiquant la présence de l’avatar. Voir le point Avatar (7) Il permet de définir l’état de l’avatar au début de la Step/Node.


### IX.	Ajouter une condition

Ajoute un composant de type "Condition". Pour plus d'informations, référez-vous à la section "Conditions".

### X. Node Options (lorsqu'il est ouvert depuis un node)

![Node Options](/img/UI_node_options.png)

Les options de Node sont ouvertes dans l’inspector lorsqu’une Node/Step est selectionné via le ctrl+Click ou que les settings de Node sont selectionnés.

-	Nom de la Node.
-	_Free Teleportation_ : Autorise, ou non, la téléportation dans la Node/Step actuelle.
-	_VR Module Position and Rotation_ : _Stay_ signifie dire que le module VR conservera la position de la Node précédente, s’il y en a une. _Reset_ veut dire que le module VR aura la position et rotation indiqué dans la Hierarchy.
-	_Fade In_ : Provoquera un fondu au noir lorsque l’étape se finira.
-	_Last Stage_ : Annonce que ce stage mettra fin à la lecture du Reader (lorsque l’expérience sera lancée via un Reader).
-	_Type of Stage_ : Default indique que Node/Step est un Node classique. FirstStage indique que le Node/Step sera lancé en premier lors du lancement du Reader (il ne peut y avoir qu’une seule Node/Step de ce type). Last Stage indique que c’est la fin de l’expérience.
-	_Show Step Validation_ : indique si une animation de validation à la fin de la Node apparaitra ou non. 
-	_Type of Stage_ : Default indique que Node/Step est un Node classique. FirstStage indique que le Node/Step sera lancé en premier lors du lancement du Reader (il ne peut y avoir qu’une seule Node/Step de ce type). Last Stage indique que c’est la fin de l’expérience.
-	_Show Step Validation_ : indique si une animation de validation à la fin de la Node apparaitra ou non. 


## VR Preview

Par défaut, la fenêtre VR Preview se situe toujours en bas à droite de l'éditeur. 
Cliquer sur "Visual Test" lance immédiatement la VR. Vous pouvez également y voir une partie du champ de vision de l’utilisateur utilisant la VR.
L’expérience sera alors lancée depuis la Step/Node actuellement sélectionnée. 

![VR Preview 1](/img/UI_vr_preview_1.png)
![VR Preview 2](/img/UI_vr_preview_2.png)

## Scene View

La fenêtre _Sceneview_ est une représentation de l’environnement, vous pouvez voyager à l’aide de votre souris et certain raccourcis clavier. Vous pouvez aussi modifier les composants “transform” de l’objet sélectionné à l’aide des flèches autour/sur l’objet.

Les raccourcis :

- Clic droit enfoncé + *W*/*A*/*S*/*D*/*Q*/*E* : Déplace la caméra.
- Clic droit enfoncé + mouvement avec la souris : Effectue une rotation de la caméra autour du point de concentration. S’il n’y a pas point de concentration, tourne autour de l’origine (0,0,0) du monde.
- Clic molette enfoncé + mouvement souris : Effectue une translation de la caméra sur le plan panoramique.
- Molette de la souris : Effectue un zoom ou un dézoom vers le point de concentration.
- Clic gauche : Sélectionne l’objet sur le curseur.
- *F* : Change le point de concentration sur l’objet sélectionné. Centre aussi la caméra sur l’objet.
- *W* : Active “les flèches gizmo” pour permettre les mouvements de l’objet sélectionné. 
- *E* : Active “les cercles gizmo” pour permettre la rotation de l’objet sélectionné.
- *R* : Active “les flèches gizmo” pour permettre le changement de taille de l’objet sélectionné.
- *T* : Active “les rectangles gizmo” pour permettre le changement de taille de l’objet par face.
- *U* : Active “le gizmo universel” pour permettre des modifications diverses.
- *L* : Change le “gizmo” de local à global, et inversement.
- *Ctrl* + *D* : Duplique l’objet sélectionné.

Avec les gizmos en haut à droite, vous pouvez cliquer sur “Persp”/”Iso” afin de passer de vue perspective à vue isométrique. En cliquant sur les flèches, vous pouvez orienter la caméra vers l’axe sélectionné.  

![Gizmos](/img/UI_gizmos.png)


## Hierarchy

La _Hierarchy_ comporte une liste de tous les objets importés et utilisés dans votre projet. En sélectionnant un objet dans cette liste, les éléments lui ayant trait apparaissent dans la _Sceneview_ et l’_Inspector_. 
Notez que les objets inactifs sur la Node/Step actuelle ne peuvent pas être sélectionnés.

En appuyant sur le *+* en haut à droite vous pouvez également ajouter des éléments.

![Hierarchy](/img/UI_hierarchy.png)

- _Add Empty_ : Ajoute un objet vide, disposant uniquement d'un _Transform_. 
- _Add Cube_ : Ajoute un cube.
- _Add Sphere_ : Ajoute une sphère.
- _Add Plane_ : Ajoute un plan. 
- _Add Cylinder_ : Ajoute un cylindre.
- _Add Capsule_ : Ajoute une capsule. 
- _Add Text_ : Ajout un objet _Text_ disposant d'un composant _Text_.
Le composant _Text_ possède des propriétés pouvant être modifiées. Dans la partie _Content_, vous pouvez ajouter le texte que l’objet affichera dans l'expérience. 

![Text](/img/UI_text.png)

 À gauche de _Content_ se trouve le bouton permettant de lier une ligne de _TextDataBase_.

 ![TextDB 1](/img/UI_textdb_1.png)
 ![TextDB 2](/img/UI_textdb_2.png)

_Text Color_ permet de sélectionner la couleur du texte.
_Outline Color_ permet de sélectionner la couleur du contour des lettres dans le texte.
_Background Color_ permet de sélectionner la couleur du fond dans le texte. 
Il est conseillé de le garder afin de permettre une lisibilité à tout moment.

_Texture_, _Metalness_ et _Roughness_ sont des élements qui seront modifiables dans une version ultérieure de Logia/Practice.

- _Add Fluid Emitter_ : Ajoute un émetteur de liquide. 
- _Add Body_ : Ajoute un corps pouvant être modifié via l’Object Editor.
- _Add  Squeegee, Screwdriver, RollerBrush & co_ : Ajoute divers objets prêts à être utilisés comme Unit Applicator.

## Object Editor 

L’Object Editor offre une vue plus approfondie sur les objets 3D placés dans la scène. Vous pouvez ainsi modifier ou ajouter des éléments individuels situés dans l’objet tel que des points d’ancrage (ou anchors). 

 

Pour ouvrir l’Objet Editor, sélectionner un objet modifiable sur la SceneView. Il peut s’agit d’un simple cube ou d’un objet plus complexe. 

Dans l’Inspector, sous le composant “3D Mesh”, cliquez sur le bouton “modifier”.  

 

Cela ouvrira la fenêtre “Object Editor” qui fonctionne de la même façon que la SceneView. 

Vous pouvez y effectuer des actions tels que : 

Ajouter un cube, permettant ainsi de prototyper avec des formes un peu plus complexe (de nouvelles primitives arriveront bientôt) 

Modifier les transform de chaques parties 

Ajouter un point d’ancrage (Anchor). N’oubliez pas de nommer ce dernier. 

[Nommer un point d’ancrage “sharp” rendra cette partie d’objet coupante, permettant ainsi de couper l’Avatar]. 

 “Save” n’est pas encore implémenté. 

“Save as” permet de sauvegarder l’objet sous un nouveau 3D Object avec un nouveau nom. Vous pouvez ainsi l’importer depuis la Media Library sur la SceneView.  

Vous pouvez utiliser les lignes des axes afin de repérer le centre de l’objet. Si vous souhaitez faire tourner l’objet depuis un autre centre vous pouvez le faire ici. 


