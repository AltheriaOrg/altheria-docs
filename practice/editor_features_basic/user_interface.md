---
sidebar_position: 2
---

# Vue d'ensemble

## Menu principal

![User Interface Overview](/img/UI_overview.png)

#### Files

Permet de régler les paramètres principaux liés aux fichiers.

- **New/Open project** - Pour créer ou ouvrir un nouveau projet, référez-vous à la section ["Gestion de votre projet"](project_management).
- **Save** - Sauvegarde l'expérience.
- **Save As** - Sauvegarde l'expérience et permet de renommer le fichier.
- **Exit project** - Quitter le projet. Fonctionne seulement si la VR Preview n'est pas active. 
- **Exit** - Ferme Practice Editor.

#### Window

Permet d'ouvrir de nouveaux panneaux au sein de l'éditeur ainsi que réinitialiser la disposition des fenêtres. Vous pouvez aussi ouvrir des panneaux grâce aux boutons se trouvant sur la colonne gauche.

#### Help

Ici vous trouverez ce guide même.

#### Avatar

Cet onglet vous permet de redimensionner l'avatar. Vous pouvez y accèder en cliquant le bouton "Avatar" sur la *Scene View*.

#### Project Name

Affiche le nom du projet.

#### Layouts

Les layouts sont des configurations prédéfinies que nous vous proposons afin d'aider votre workflow de création d'expériences. 

- **Set up**: Idéal pour placer importer et placer des objets sur scène.
- **Training building**: Disposition pour créer les histoires avec un focus sur le *Step Flow*.
- **VR testing**: Finalement, avec cette disposition vous aurez un accent sur la *VR Preview*, afin d'observer en temps réel les actions de l'utilisateur en réalité virtuelle.

#### Language

Permet de changer la langue de l'expérience à la volée. Pour de plus amples descriptions sur ces fonctionnalités, référez-vous à la section ["Gestion des langues"](../editor_features_advanced/language_management).

## Inspector

![Inspector Panel Overview](/img/UI_overview_inspector.png)

Par défaut, la partie droite de l'éditeur contient l'*Inspector*. Ce panneau fournit des informations sur l'objet actuellement sélectionné dans la *Sceneview* ou la *Hierarchy*.

![Inspector Panel Detailed](/img/UI_detailed_inspector.png)

L'*Inspector* se compose principalement de deux onglets qui définissent l'objet séléctionné: Le *State Content* et le *Step Behaviour*

- *Name*: Le nom de l'objet.
- *Tag*: Etiquette indiquant un comportement spécifique avec l'objet. Par exemple, déclarer un objet comme "Heavy" permet d'interagir avec l'avatar, et d'éventuellement le blesser.

### State Content

#### VR Module (sur un objet "VR Module" uniquement)

Il s'agit du composant sur l'objet représentant la position de l'utilisateur sur la scène. Il possède un bouton "Calibrate". Appuyez sur ce bouton en écartant les manettes d'un mètre afin d'automatiquement mettre à jour la taille de l'environnement par rapport à la taille de l'utilisateur.

#### 3D Mesh

Composant affichant, la présence ou l'absence d'un mesh 3D. Le bouton "Modify" vous permettra accéder à l'[Object Editor](user_interface#object-editor).

#### Material

Composant qui indique le matériel que l'objet utilisera à la fin de cette Step.

### Step Behaviour

#### Active

Indique si l'objet est actuellement actif dans l'étape actuelle.

#### State

L'état actuel de l'objet. Cet état de l'objet affecte directement l'avatar. Par exemple, si l'utilisateur touche un objet avec l'etat "Burning", cela se vera reflété sur la peau de l'avatar. 

#### Transform

Transform est un composant présent sur tous les objets de l'expérience. Il indique la position, la rotation et la taille de l'objet sélectionné.

#### Health Manager (sur objet VR Module uniquement)

Composant indiquant la présence et l'état de l'avatar au début de la Step. Voir le point [Avatar](../editor_features_advanced/avatar_system).

#### Ajouter une condition

Ajoute un composant de type "Condition". Pour plus d'informations, référez-vous à la section "Conditions".

### Step Options

![Step Options](/img/UI_node_options.png)

Les options de Node sont ouvertes dans l'inspector lorsque les settings d'un Step sont selectionnés.

-	Nom de la Step.
-	*Free Teleportation*: Autorise, ou non, la téléportation dans le Step actuel.
-	*VR Module Position and Rotation*: Avec l'option "Stay", le personnage gardera la même position dans la Step suivante.
-	*Fade In* : Provoquera un fondu au noir lorsque le Step se finira.
-	*Last Step* : Annonce que ce Step mettra fin à la lecture du Reader (lorsque l'expérience sera lancée via Practice Reader).
-	*Type of Step* : Default indique que ce Step est un Step classique. FirstStep indique que le Step sera lancé en premier lors du lancement du Reader (il ne peut y avoir qu'une seule Step de ce type). LastStep indique que c'est la fin de l'expérience.
-	*Show Step Validation* : indique si une animation de validation à la fin de la Node apparaitra ou non. 
-	*Type of Step* : Default indique que ce Step est un Step classique. FirstStep indique que le Step sera lancé en premier lors du lancement du Reader (il ne peut y avoir qu'un seulStep de ce type). LastStep indique que c'est la fin de l'expérience.
-	*Show Step Validation* : indique si une animation de validation à la fin du Step apparaitra ou non. 


## VR Preview

Par défaut, la fenêtre VR Preview se situe toujours en bas à droite de l'éditeur. 
Cliquer sur "Visual Test" lance immédiatement la VR. Vous pouvez également y voir une partie du champ de vision de l'utilisateur utilisant la VR.
L'expérience sera alors lancée depuis le Step actuellement sélectionnée. 

![VR Preview 1](/img/UI_vr_preview_1.png)
![VR Preview 2](/img/UI_vr_preview_2.png)

## Scene View

La fenêtre *Sceneview* est une représentation de l'environnement, vous pouvez y voyager à l'aide de votre souris et certains raccourcis clavier. Vous pouvez aussi modifier les composants "Transform" de l'objet sélectionné à l'aide des flèches autour/sur l'objet.

Les raccourcis :

- Clic droit enfoncé + *W*/*A*/*S*/*D*/*Q*/*E*: Déplace la caméra.
- Clic droit enfoncé + mouvement avec la souris: Effectue une rotation de la caméra autour du point de concentration. S'il n'y a pas point de concentration, tourne autour de l'origine (0,0,0) du monde.
- Clic molette enfoncé + mouvement souris: Effectue une translation de la caméra sur le plan panoramique.
- Molette de la souris: Effectue un zoom ou un dézoom vers le point de concentration.
- Clic gauche: Sélectionne l'objet sur le curseur.
- *F*: Change le point de concentration sur l'objet sélectionné. Centre aussi la caméra sur l'objet.
- *W*: Active "les flèches gizmo" pour permettre les mouvements de l'objet sélectionné. 
- *E*: Active "les cercles gizmo" pour permettre la rotation de l'objet sélectionné.
- *R*: Active "les flèches gizmo" pour permettre le changement de taille de l'objet sélectionné.
- *T*: Active "les rectangles gizmo" pour permettre le changement de taille de l'objet par face.
- *U*: Active "le gizmo universel" pour permettre des modifications diverses.
- *L*: Change le "gizmo" de local à global, et inversement.

Avec les gizmos en haut à droite, vous pouvez cliquer sur "Persp"/"Iso" afin de passer de vue perspective à vue isométrique. En cliquant sur les flèches, vous pouvez orienter la caméra vers l'axe sélectionné.  

![Gizmos](/img/UI_gizmos.png)


## Hierarchy

La *Hierarchy* comporte une liste de tous les objets importés et utilisés dans votre projet. En sélectionnant un objet dans cette liste, les éléments lui ayant trait apparaissent dans la *Sceneview* et l'*Inspector*. 

En appuyant sur le *+* en haut à droite vous pouvez également ajouter des éléments.

![Hierarchy](/img/UI_hierarchy.png)

- *Add Empty* : Ajoute un objet vide, disposant uniquement d'un *Transform*. 
- *Add Cube* : Ajoute un cube.
- *Add Sphere* : Ajoute une sphère.
- *Add Plane* : Ajoute un plan. 
- *Add Cylinder* : Ajoute un cylindre.
- *Add Capsule* : Ajoute une capsule. 
- *Add Text* : Ajout un objet *Text* disposant d'un composant *Text*.
Le composant *Text* possède des propriétés pouvant être modifiées. Dans la partie *Content*, vous pouvez ajouter le texte que l'objet affichera dans l'expérience. 

### Text

![Text](/img/UI_text.png)

 À gauche de *Content* se trouve le bouton permettant de lier une ligne de *TextDataBase*.

 ![TextDB 1](/img/UI_textdb_1.png)
 ![TextDB 2](/img/UI_textdb_2.png)

- *Text Color*: permet de sélectionner la couleur du texte.
- *Outline Color*: permet de sélectionner la couleur du contour des lettres dans le texte.
- *Background Color*: permet de sélectionner la couleur du fond dans le texte. 
Il est conseillé de le garder afin de permettre une lisibilité à tout moment.


- *Add Fluid Emitter*: Ajoute un émetteur de liquide.
- *Add Body*: Ajoute un corps pouvant être modifié via l'Object Editor.
- *Add  Paste, Screws, Paint, Trivorex*: Ajoute divers objets prêts à être utilisés comme Unit Applicator.
