---
sidebar_position: 2
---

# Overzicht

## Hoofdmenu

![Overzicht gebruikersinterface](/img/UI_overview1.png)
![Overzicht hoofdmenu](/img/UI_overview1_mainmenu.png)

#### Bestanden

Met het "File" menu kunt u de belangrijkste bestandsgerelateerde instellingen aanpassen.

- **New/Open project** - Om een nieuw project te creëren of te openen, zie de sectie ["Projectbeheer"](project_management).
- **Save** - Slaat de ervaring op.
- **save as** - Slaat de ervaring op en laat toe het bestand te hernoemen.
- **Exit Project** - Sluit het project en keer terug naar de startpagina.
- **Exit Practice** - Sluit de Practice Editor.


#### Venster

Hiermee kunt u nieuwe panelen binnen de editor openen en de vensterindeling resetten. U kunt ook panelen openen via de knoppen aan de linkerzijde.

#### Help

Hier vindt u deze handleiding.

#### Projectnaam

Toont de naam van het project.


#### Layouts

![Overzicht gebruikersinterface](/img/UI_overview1_workspace.png)

De layouts zijn vooraf gedefinieerde configuraties die wij aanbieden om uw workflow voor het creëren van vr ervaringen te ondersteunen.

- **Set up**: Ideaal voor het importeren en plaatsen van objecten op de scène.
- **Training building**: Indeling voor het creëren van verhalen met een focus op de *Step Flow*.
- **VR testing**: Ten slotte, met deze indeling ligt de nadruk op de *VR Preview*, zodat u in realtime de acties van de gebruiker in virtual reality kunt observeren.

U kan zelf ook de layout aanpassen door de paneled te slepen.

#### Taal

![Overzicht gebruikersinterface](/img/UI_overview1_language.png)

Hiermee kunt u de taal van de ervaring on the fly wijzigen. Voor meer beschrijvingen van deze functies, zie de sectie ["Taalbeheer"](../editor_features_advanced/language_management).

## Inspector

![Overzicht Inspector-paneel](/img/UI_overview2.png)

Standaard bevindt de *Inspector* zich aan de rechterkant van de editor. Dit paneel biedt informatie over het object dat momenteel is geselecteerd in de *Sceneview* of de *Hierarchy*.

![Gedetailleerd Inspector-paneel](/img/UI_InspectorAll.png)

De *Inspector* bestaat hoofdzakelijk uit twee tabbladen die het geselecteerde object definiëren: de *State Content* en de *Step Behaviour*

- *Naam*: De naam van het object.
- *Tag*: Label dat een specifiek gedrag met het object aangeeft. Bijvoorbeeld, een object als "Zwaar" verklaren, kan interactie met de avatar mogelijk maken en eventueel schade veroorzaken.

### Content

#### VR Module (alleen op een "VR Module" object)

Dit is het component op het object dat de positie van de gebruiker op het toneel vertegenwoordigt. Het heeft een "Kalibreer" knop. Druk op deze knop door de controllers een meter uit elkaar te houden om automatisch de grootte van de omgeving bij te werken naar de grootte van de gebruiker.

#### 3D Mesh

Component dat de aan- of afwezigheid van een 3D mesh weergeeft. De knop "Aanpassen" geeft u toegang tot de [Object Editor](user_interface#object-editor).

#### Materiaal

Component dat aangeeft welk materiaal het object uiteindelijk zal gebruiken.

### Step Behaviour

#### Actief

Geeft aan of het object momenteel actief is in de huidige stap.

#### Staat op huidige stap

De huidige staat van het object. Deze staat van het object beïnvloedt direct de avatar. Bijvoorbeeld, als de gebruiker een object aanraakt met de staat "Brandend", zal dit weerspiegeld worden op de huid van de avatar.

#### Transform

Transform is een component aanwezig op alle objecten in de ervaring. Het geeft de positie, rotatie en grootte van het geselecteerde object aan.

#### Health Manager (alleen op VR Module object)

Component dat de aanwezigheid en staat van de avatar aan het begin van de Stap aangeeft. Zie het punt [Avatar](../editor_features_advanced/avatar_system).

#### Voorwaarde toevoegen

Voegt een "Condition" type component toe. Voor meer informatie, zie de sectie "Condities".


## VR Preview

![VR Preview 2](/img/UI_overview6.png)

Standaard bevindt het VR Preview-venster zich altijd rechtsonder in de editor.
Klikken op "Visuele Test" start onmiddellijk de VR. U kunt ook een deel van het gezichtsveld van de gebruiker die de VR gebruikt, zien.
De ervaring zal dan worden gelanceerd vanuit de momenteel geselecteerde Step.

![VR Preview 1](/img/UI_vr_preview_2.png)
![VR Preview 2](/img/UI_vr_preview_1.png)


# Scene View

Het *Sceneview*-venster is een weergave van de omgeving, die u kunt navigeren met uw muis en bepaalde sneltoetsen. U kunt ook de "Transform" componenten van het geselecteerde object aanpassen met de pijlen rondom/het object.

Sneltoetsen:

- Rechtermuisknop ingedrukt houden + *W*/*A*/*S*/*D*/*Q*/*E*: Verplaatst de camera.
- Rechtermuisknop ingedrukt houden + muisbeweging: Voert een rotatie van de camera uit rondom het focuspunt. Als er geen focuspunt is, draait het rondom de oorsprong (0,0,0) van de wereld.
- Middenmuisknop ingedrukt houden + muisbeweging: Voert een pan van de camera uit op het panoramische vlak.
- Muiswiel: Zoomt in of uit op het focuspunt.
- Linkermuisklik: Selecteert het object onder de cursor.
- *F*: Verandert het focuspunt naar het geselecteerde object. Centreert ook de camera op het object.
- *W*: Activeert "de pijlgizmo's" om de bewegingen van het geselecteerde object mogelijk te maken.
- *E*: Activeert "de cirkelgizmo's" om de rotatie van het geselecteerde object mogelijk te maken.
- *R*: Activeert "de pijlgizmo's" om de grootte van het geselecteerde object aan te passen.
- *T*: Activeert "de rechthoekgizmo's" om de grootte van het object per gezicht aan te passen.
- *U*: Activeert "de universele gizmo" voor diverse aanpassingen.
- *L*: Wisselt de "gizmo" van lokaal naar globaal en vice versa.

Met de gizmo's rechtsboven kunt u klikken op "Persp"/"Iso" om te wisselen tussen perspectief- en isometrisch zicht. Door op de pijlen te klikken, kunt u de camera oriënteren naar de geselecteerde as.

![Gizmos](/img/UI_gizmos.png)

Verschillende knoppen aan de linkerkant van de scene view stellen u in staat bepaalde snelkoppelingen te activeren.

- *Move*: Activeert "de pijlgizmo's" voor de bewegingen van het geselecteerde object.
- *Rotate*: Activeert "de cirkelgizmo's" voor de rotatie van het geselecteerde object.
- *Scale*: Activeert "de pijlgizmo's" om de grootte van het geselecteerde object aan te passen.
- *Center view*: Centreert het camerazicht op het geselecteerde object.
- *Snap on the ground*: Plakt het geselecteerde object op de dichtstbijzijnde grond.

![Gizmos](/img/UI_Sceneview_2.png)

Links onderaan vindt u knoppen voor snelkoppelingen om van stap te wisselen of om er een toe te voegen (kleine "+").

![Gizmos](/img/UI_Sceneview_1.png)

Rechts onderaan zijn een reeks kleine knoppen snelkoppelingen om gedragingen direct aan de geselecteerde objecten toe te voegen.
Druk op de kleine "+" om meer opties te zien.

![Gizmos](/img/UI_Sceneview_3.png)

## Hiërarchie

De *Hiërarchie* bevat een lijst van alle geïmporteerde en gebruikte objecten in uw project. Door een object in deze lijst te selecteren, verschijnen de bijbehorende elementen in de *Sceneview* en de *Inspector*.

![Hiërarchie](/img/UI_hierarchy2.png)

Door op de *+* rechtsonder te drukken kunt u ook elementen toevoegen.

![Hiërarchie](/img/UI_hierarchy1.png)

- *Add Empty* : Voegt een leeg object toe, alleen voorzien van een *Transform*.
- *Add Cube* : Voegt een kubus toe.
- *Add Sphere* : Voegt een bol toe.
- *Add Plane* : Voegt een vlak toe.
- *Add Cylinder* : Voegt een cilinder toe.
- *Add Capsule* : Voegt een capsule toe.
- *Add Text* : Voegt een *Text* object toe met een *Text* component.
Het *Text* component heeft eigenschappen die u kan aanpassen. In het *Content* gedeelte kunt u de tekst toevoegen die het object zal weergeven in de VR ervaring.

- *Add Waypoint Chain* : Voegt een *waypoint chain* object toe om een reeks punten te definiëren die gebruikt kunnen worden om objecten te animeren of te verplaatsen.
- *Add Particle Emitter* : Voegt een *particle emitter* object toe om speciale effecten en deeltjes zoals vuur te creëren.

### Text

![Text](/img/UI_Text1.png)

Aan de linkerkant van *Content* bevindt zich de knop om een regel van *TextDataBase* te koppelen.

![TextDB 1](/img/UI_textdb_1.png)
![TextDB 2](/img/UI_textdb_2.png)

- *Text Color*: maakt het mogelijk om de kleur van de tekst te selecteren.
- *Outline Color*: maakt het mogelijk om de kleur van de omtrek van de letters in de tekst te selecteren.
- *Background Color*: maakt het mogelijk om de achtergrondkleur van de tekst te selecteren.
Het wordt aanbevolen om deze aan te houden om te allen tijde leesbaarheid te garanderen.

- *Add Fluid Emitter*: Voegt een vloeistofemitter toe.
- *Add Body*: Voegt een lichaam toe dat kan worden aangepast via de Object Editor.
- *Add Paste, Screws, Paint, Trivorex*: Voegt diverse objecten toe die klaar zijn om gebruikt te worden als Unit Applicator.