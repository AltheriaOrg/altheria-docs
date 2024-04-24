---
sidebar_position: 5
---

# Conditions et Interactions

Le principe de base de Logia/Practice Editor est le suivant : chaque expérience est divisée en "Steps", qui peuvent être vus comme les différentes étapes de la procédure que vous souhaitez simuler. Pour passer d'un Step à l'autre, des conditions doivents être remplies par l'utilisateur (exécuter une action, déplacer un objet, ...). Logia/Practice Editor met à votre disposition une large liste de conditions vous permettant de reproduire de nombreux process.

Les conditions sont donc affectées : 
* À un objet (devant être déplacé, tourné, ... pour remplir la condition)
* À un Step (pour définir les critères de passage au Node suivant)

Vous allez retrouver les paramètres de la condition dans l'inspector et retrouver également la petite icône de la condition selectionnée sous la colone *condition group* de votre Step dans le Step flow.

*Pour rappel : Cliquer sur une icône d'un behavior permet d'affecter un behavior à et objet.* 

**! ATTENTION ! Tous les behaviours ne sont pas des conditions, certains behaviours sont en quelques sortent des options appliquées sur l'objet pour le step selectionné !**

![Conditions : Select Condition Menu](/img/cond_selectmenu.png)

## Conditions Basiques

En ajoutant une condition dans l’inspecteur, vous aller peupler la Condition Group actuellement sélectionnée. Une fois l’expérience lancée, les Conditions devront être honorées par l’utilisateur afin de pouvoir passer au Node relié à la sortie du Condition Group. Vous pouvez ajouter plusieurs conditions sur Node ; pour passer au Node suivant, elles devront toutes être remplies, sans ordre particulier. 


### Move

Ajoute une condition de type "Move". Il s’agit d’une condition exigeant que l’objet possedant cette condition soit déposé sur la “Move Target” correspondante. La "Move Target" est une copie de l'objet générée lors de l'ajout de cette condition. Elle doit être placée là où l'utilisateur est censé placer l'objet dans le cadre de l'expérience en cours. Après application de cette condition, l’objet peut être déplacé librement par l’utilisateur, et la condition sera validée lors que l'objet sera placé sur la cible.

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné. Outre la position de la "Move Target", cette section vous permet de définir plusieurs options.

![Conditions : Move](/img/cond_move.png)

**Only position**  : Indique que seule la position sera prise en compte. 

**Sensivity distance** : Indique la distance minimale à laquelle l’objet devra se trouver de la "Move Target" pour valider l’objectif.

**Sensivity angle** : Indique la marge d’erreur autorisée pour la rotation (Uniquement si Only Position n’est pas coché).

**Move Family** : Indique si la cible peut être activée par d’autres objets possedant le composant “Move”. Si la family est autre chose que “None” cela veut dire que la cible pourra être activé par tout autre objet possedant la même family. Un cas d'usage possible est le placement de plusieurs objets identiques sur plusieurs "Move Target" identiques, de façon interchangeable.


### Rotate

Ajoute une condition de type "Rotate". Il s’agit d’une condition exigeant que l’objet possédant ce composant soit aligné sur la “Rotate Target” correspondante. La "Rotate Target" est générée selon un principe similaire à celui de la "Move Target". Après application de cette condition, l’objet peut être tourné (mais pas déplacé) librement par l’utilisateur, et la condition sera validée lors que l'objet sera aligné sur la cible.

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné.

![Conditions : Rotate](/img/cond_rotate.png)

**Sensivity angle** : Indique la marge d’erreur autorisée pour la rotation.

**Repeat** : Indique que la rotation est à répéter le nombre de fois indiqué dans la boite de texte. Si "Reverse before repeat" n'est pas coché, les rotations se font de façon additive : l'objet ne reviendra pas à sa position initiale après chaque rotation.

**Reverse before repeat** : (Requiert un nombre de Repeat > 1) : Replace l'objet à sa position initiale après chaque rotation.


### Slide

Ajoute une condition de type "Slide". Les fonctionnalités sont identiques à celle de la Condition Move, mais l’objet ne pourra se déplacer que dans la direction de sa Target ou à l’opposé de celle-ci. Après application de cette condition, l’objet peut être déplacé sur un axe fixe, et la condition sera validée lors que l'objet sera placé sur la cible.

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné.

![Conditions : Slide](/img/cond_slide.png)

**Sensivity distance** : Indique la distance à laquelle l’objet devra se trouver de la cible pour valider la condition.


### Touch

Ajoute une condition de type Touch. Cette condition s’activera si l’objet est touché.

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné.

![Conditions : Touch](/img/cond_touch.png)

**Trigger**	: Indique si l'utilisateur doit également presser la gâchette de son contrôleur lorsque sa main est en contact avec l'objet pour valider la condition.

**Minimum time** : Indique le temps de contact nécessaire pour valider la condition.


### Helper Tool

Ajoute une condition de type Debug. **Cette condition sera implémentée lors d'une mise à jour ultérieure.**

![Conditions : Helper](/img/cond_helper.png)

### Unit Applicator

Le module **Unit Applicator** est utilisé pour simuler l'application ou le nettoyage de substances fluides. 

Il est constitué d'un ensemble de 3 types d’objets ayant une relation au sein d’un groupe que l’on nomme “(Unit) Family”.  Dans cette Family on retrouve un **Applicator Tool** qui va appliquer une “Sub Family” sur un **Applicator Target**. Vous pouvez changer la “Sub Family” que va distribuer l’Applicator Tool via un Applicator Dispenser qui va distribuer un type de “sub family”.

**Exemples**

* Peinture : (Unit) Family
* Pinceau avec *peinture rouge* : *Applicator Tool = Pinceau* avec *Sub Family = rouge*
* Pot de *peinture bleue* : *Applicator Dispenser = Pot* avec *Sub Family = bleu*
* Mur à peindre en *rouge* : *Applicator Target = Mur* attendant une *Sub Family = rouge*
* Peinture bleue : *Sub Family = bleu*
* Absence de peinture : *Sub Family = vide*
* Peinture rouge : *Sub Family = rouge*

**Autre Exemples**

* Vis : (Unit) Family
* Tournevis sans vis au bout : *Applicator Tool = Tournevis* avec *Sub Family = vide*
* Sac de vis taille 12 : *Applicator Dispenser = Sac* avec *Sub Family = taille 12*
* Emplacement pour visser des vis taille 12 : *Applicator Target  = Emplacement* attendant une *Sub Family = taille 12*
* Vis Taille 12 : *Sub Family = taille 12*
* Absence de vis : *Sub Family = vide*

**Pour que la Condition soit valide il faut au minimum un Applicator Tool et un Applicator Target avec la même relation de subFamily (ApplicatorTool possède la subfamilly attendu par l’ApplicatorTarget)**

### Applicator Tool

Il s'agit de l'outil destiné à appliquer la substance.

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné :

![Conditions : Unit Applicator - Applicator Tool](/img/cond_apptool.png)

**Family** : (l’Unit) Family. Tous les Applicator Dispenser et Applicator Target qui vont interagir avec cet Applicator Tool doivent porter la même Family. *Ex. : Peinture*

**Sub Family** : Sous-famille indiquant l’état “porté” par l’Applicator Tool au début du step. Si celui-ci correspond à la sub Family attendu par la Target, la target sera validée. Les Sub Family possibles sont partagés entre tous les éléments d’une même Family. *Ex. : Peinture bleue*

L’applicator Tool peut changer de SubFamilly via un Applicator Dispenser (*Ex : Pinceau commençant sans peinture et passant dans un seau de peinture bleue*)

**Target Touch (x2)** :  **Cette option sera implémentée lors d'une mise à jour ultérieure.**

**Anchors** : Points d’ancrage. Ces éléments sont à définir dans l’Object Editor ou le sont déjà pour les objets importables par défaut dans la hiérarchie. Pour l’Applicator Tool, deux points d’ancrage sont à définir :
* Handle : Définit la zone qui pourra être attrapée par les mains de l’utilisateur (ie. le manche de l'outil).
* Business End : Partie qui devra toucher la Target pour y appliquer la Sub Family (ie. les poils du pinceau).


### Applicator Dispenser

Il s'agit d'un objet capable de changer la Sub Family appliquée sur un Tool (comme un pot de peinture permet de changer la couleur de la peinture associée à un pinceau). L'Applicator Tool doit être doté de la même Family que le Dispenser pour pouvoir interagir avec celui-ci.

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné.

![Conditions : Unit Applicator - Applicator Dispenser](/img/cond_appdisp.png)

**Family** : (l’Unit) Family. Tous les Applicator Tool qui vont interagir avec cet Applicator Dispenser doivent porter la même Family.

**Sub Family** : Indique quelle Sub Family sera attribuée sur l’Applicator Tool si ce dernier entre en contact avec.

**Tool state after** : **Cette option sera implémentée lors d'une mise à jour ultérieure.**


### Applicator Target

Il s'agit de la surface sur laquelle la substance doit être appliquée. Cette surface peut être divisée en plusieurs morceaux, ou Sub Targets (pour modéliser le cas où une large surface ne peut pas être ouverte d'un coup par le Tool).

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné.

![Conditions : Unit Applicator - Applicator Target](/img/cond_apptarg.png)

**Family** : (l’Unit) Family. Tous les Applicator Tool qui vont interagir avec cet Applicator Target doivent porter la même Family.

**Sub Family** : Sous-famille que doit porter l’Applicator Tool afin d'interagir avec cette Target.

**Minimum time** : Temps en secondes pendant lequel l’Applicator doit toucher cette target afin de la valider. (Ex : visser pendant 1 seconde).

**Stack time** : Est-ce que le temps pendant lequel la cible est touchée (Minimum time) par l’Applicator Tool se cumule entre les entrées et sortie de l’Applicator Tool ?  (ex : Si le Tool doit rester en contact avec la Target pendant 5 secondes, cocher cette case permet à l'utilisateur d'appliquer l'outil pendant 3 secondes, de le retirer, puis de le ré-appliquer pendant 2 secondes).

**Angle** : Angle avec lequel l’Applicator Tool doit toucher la Target pour valider la condition. 

**Custom Float** : Marge d’erreur autorisée pour l’angle en degré.

**Tool State After** : **Cette option sera implémentée lors d'une mise à jour ultérieure.**

**Sub Family After** : Sub Family qui sera appliqué sur l’Applicator Tool après complétion d'une Sub Target (Ex: pas de peinture sur le pinceau après application de peinture bleue)

**Finished on** : All : toutes les Sub Targets doivent être validées pour valider la Condition.

**Percentage** : 70% des Sub Targets doivent être complétées.

**Subdivise** : Permet de définir le nom de Sub Targets. Par exemple, X=10, Y=1, Z=10 vous permet de découper la Target orignale en 100 Sub-Targets. Si une valeur est ‘0’ elle sera automatiquement traité comme étant ‘1’.

**Is Target Group** : Les enfants de cette Applicator Target seront considérés comme target à remplir (ex: Emplacement de vis). A le même effet si vous appliquez un Applicator Target sur plusieurs objets séparément.


### Smart Board

Le Smart Board est un panneau qui permet de simuler des actions abstraites ou trop complexes à simuler en 3D. Cet objet peut être assimilé à un questionnaire.

Après ajout de la condition à un objet, un "Smart Board Item" est associé à l'objet. 

En VR, le Smart Board item apparaitra avec un titre/Question (**Question**). Une liste de réponses possibles sera proposée, chacune disposant d'un nom (**Item Name**). Lorsqu’une proposition est validée, un chargement va s’effectuer (**Item Duration**). Une réaction à cette réponse sera alors montrée à l’utilisateur (**Item Answer**).

La section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné.

![Conditions : Smart Baord](/img/cond_smartboard.png)

**Question** : Le titre/question qui sera montré à l’utilisateur.

**Actions** : Liste des actions/réponses existantes dans l’expérience. Elles sont partagées avec tous les Smart Board Item. (sur l’exemple il y en a une seule). Le marqueur à gauche de la question indique si la proposition sera présente sur le Smart Board Item actuel. Le marqueur à droite indique si la réponse est considérée comme correcte. Une proposition doit obligatoirement être correcte et être présente afin d’éviter de bloquer l’utilisateur dans l’expérience. En cliquant sur "Add Action” un nouveau bloc de création apparait.

**Item Name** : Nom de la proposition.

**Item Duration** : Temps de chargement entre la validation de la proposition et l’affichage de la réaction.

**Item Answer** : Réaction à la réponse. Elle peut réprésenter par exemple une explication si la réponse est fausse ou un message de félicitations. En Appuyant sur “ok” vous allez rajouter la proposition dans la liste ainsi que l’ajouter pour le Smart Board Item actuel (le marqueur de droite sera coché).

**On wrong** : *Continue* va valider la Condition même si la réponse est choisie fausse. *Repeat* va à nouveau proposer de répondre et donc choisir une proposition. 

**Scored** : Indique si ce smartBoard va contribuer à la Condition “conditional activator” durant l’experience. (Si On Wrong est en *Repeat*, le score sera enregistré pour la première réponse donnée uniquement). 

*Toutes les boites de textes disponibles dans le Smart Board peuvent être liées à un TextDB*.

![Conditions : Smart Baord](/img/cond_smartboard2.png)


### Teleport

La Condition Teleport permet d'imposer à l'utilisateur de se déplacer à un endroit. Lorsque cette Condition est ajoutée à un objet, un marqueur (“Teleport Target") indiquant la destination du déplacement imposé sera créé et associé à l'objet.

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné.

![Conditions : Teleport](/img/cond_teleport.png)

**Mode** : *To Point* va demander à l’utilisateur de s’approcher du marqueur. *Away* va demander de s’éloigner du marqueur.

**Spot Marker Radius** : Indique à quelle distance l’utilisateur doit se trouver / s’éloigner du point en mètres. Il est conseillé de laisser une marge d’erreur pour l’utilisateur si celui doit se rapprocher.


### Timer

![Conditions : Conditional Activator](/img/cond_timer.png)

Termine la step à la fin du temps défini.

**Digit Display** : Projète une horloge numérique avec un décompte.

**Time Left Visual** : Projète une horloge visuelle avec un décompte.

**Time** : Temps qu'il reste avant le prochain step.

### Sensor

Ce behaviours permet de sélectionner un élément réel de votre installation VR qui pourra activer une condition 
et passer au prochain Step.

**Sensor selection** : Sélectionne un élément de votre installation connectée qui activera la condition.

![Conditions : animate](/img/UI_Sensors.JPG)


## Autres behaviours:

Les behaviours ci-dessous n'activent aucunes conditions.
Ils servent principalement à changer l'état d'objects dans le step sélectionné.

### Conditional Activator

Cet objet propose d’afficher ou de cacher un objet en fonction du Score obtenu avec tous les Smart Board Item rencontrés jusqu’à présent dans l’expérience et possédant la propriété "Scored".

Après ajout de la condition à un objet, la section suivante s'affiche dans l'inspecteur quand ledit objet est sélectionné.

![Conditions : Conditional Activator](/img/cond_condav.png)
 
**Mode** : *Hide* va cacher cet objet si celui-ci valide la condition de score. *Show* va afficher l’objet si celui-ci valide la condition de score.

**Perform inverse** : Le score devra se trouver en dessous du score demandé.

**Min%** : Si le score se trouve au-dessus de ce pourcentage, la première condition est validée. (Si perform inverse est off).

**Max%** : Si le score se trouve en dessous de ce pourcentage la deuxième condition est validée. (Si perform inverse est off).

*Min et max ne peuvent pas être le même chiffre, Min ne peut pas être plus grand que Max et Max ne peut pas être plus petit que Min*

### Animate

![Conditions : animate](/img/UI_Animate.JPG)

**Mode**:   
-*Spline* : Dans ce mode les object vont suivre le waypoint chain.  

-*Nav* : Dans ce mode les object vont suivre le waypoint chain comme guide mais se deplacera sur le sol, évitant les obstacles jusqu'au point final.  

**Waypoint chain**:     
 Selectionnne le waypoint chain que l'objet va suivre.

**Delay**:      
Indiquer en seconde le délais désiré avant que l'animation se lance.

**Easing**:     
 Choisissez quel type d'animation vous désirez.

**Measure**:  
-*Speed* : Choisissez en m/s la rapidité avec laquelle l'objet se déplacera.   

-*Time* : Choisissez en seconde la durée de l'animation. 

**Start from position**:    
-*Current* : L'animation commence avec la position de l'objet dans le step actif.   

-*Waypoint* : L'animation commence avec la position de l'objet directement au premier point du Waypoint chain.

**Starting Point**: 
Sélectionnez quel point du Waypoint sera le début de l'animation.

**Path Type**: 
-*Straight* : L'object suit le waypoint chain à l'identique.

-*Rounded* : Courbe le waypoint chain pour rendre l'animation plus "courbée" quand l'object passe de points en points.

**Loop Type**:  
Choisissez si vous voulez que l'animation boucle et quel type d'effet vous désirez.

**Y offset**:   
Permet d'ajouter un décalage en hauteur pour l'animation de l'objet.

### Actuator

L'actuators permet de changer l'état de composants réels de votre installation VR. 
Comme la couleur de vos lampes.


![Conditions : Actuators](/img/UI_Actuators.JPG)    
*Avec les options ci-dessus, lorsque le trainee atteindra ce Step l'actuators modifiera la couleur
de votre lampe connectée en vert. Cela peut permettre par exemple d'indiquer au Trainer qu'il a réussi une
étape.*

