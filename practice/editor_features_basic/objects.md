---
sidebar_position: 3
---

# Objects

Nous pouvons donc importer différents élements à notre projet depuis la hierarchie mais aussi depuis la Media Library.

![Hierarchy](/img/UI_hierarchy1.png) 

### Basic Shapes

Vous pouvez importez plusieurs type de forme standard, souvent utilisée dans les logiciels 3D pour esquisser rapidement
des idées.

![Particle](/img/Shapes.JPG)

### Empty 



Si vous importez un Empty object, représenté par un cercle, vous pouvez l'utiliser pour certain behaviors 
qui ne sont pas disponnibles sur des mesh objects. (comme les formes ci-dessus)
En effet si vous voulez créer un Smartboard, un Timer ou un endroit ou vous téléporter vous aurez besoin d'un empty object.

![Particle](/img/Empty_Object.JPG)

### Text

![Text](/img/UI_Text1.png)

 À gauche de *Content* se trouve le bouton permettant de lier une ligne de *TextDataBase*.

 ![TextDB 1](/img/UI_textdb_1.png)
 ![TextDB 2](/img/UI_textdb_2.png)

- *Text Color*: permet de sélectionner la couleur du texte.
- *Outline Color*: permet de sélectionner la couleur du contour des lettres dans le texte.
- *Background Color*: permet de sélectionner la couleur du fond dans le texte. 
Il est conseillé de le garder afin de permettre une lisibilité à tout moment.



### Waypoint chain

Un Waypoint chain permet de créer une série de points lié entre eux et formant un chemin. 
Ce chemin peut être utilisé pour guider des objects avec le behavior animate.

Utilisez le raccourcis "P" pour ajouter des points rapidement lorsque le Waypoint chain est sélectionné.

![Particle](/img/UI_Waypoint.JPG)
![Particle](/img/UI_Waypoint2.gif)

### Particle Emitter

En important un Particle Emitter vous pouvez créer des effets comme de la fumée ou des feux et autres.

![Particle](/img/UI_Praticle.JPG)

- *Particle Visual*: permet de sélectionner le visuel désiré de la particule.
- *Gravity Direction*: Indique la direction de l'effet de gravité sur les particules.
- *Gravity Factor*: permet de sélectionner l'intensité de la gravité. 
- *Particle Color Start*: permet de sélectionner la couleur de la particule en début de vie.
- *Particel Color End*: permet de sélectionner la couleur de la particule en fin de vie.
- *Particle Size*: permet de sélectionner la taille de la particule.
- *Particle Lifetime*: permet de sélectionner la durée de vie d'une particule.
- *Loop Duration*: permet de sélectionner la durée de vie du loop.
- *Rate (per second)*: permet de sélectionner le nombre de particule générées par seconde.
- *Starting Speed*: permet de sélectionner la vistesse d'une particule au début de sa création.
- *Origin Shape*: permet de sélectionner la forme dans laquelle les particules seront créées.
- *Origin Size*: permet de sélectionner la taille de la forme d'origine.
- *Looping*: permet de sélectionner si le particule Emitter boucle ou non.
- *Pre-Simulate*: permet de sélectionner si le particule Emitter est déja simulé en entrant un step ou si la simulation débuteras en entrant un step.

