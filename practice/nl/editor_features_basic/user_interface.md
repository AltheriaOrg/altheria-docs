---
sidebar_position: 2
---

# Overzicht

## Hoofdmenu

![Overzicht gebruikersinterface](/img/UI_overview1.png)
![Overzicht hoofdmenu](/img/UI_overview1_mainmenu.png)

#### Bestanden

Hiermee kunt u de belangrijkste bestandsgerelateerde instellingen aanpassen.

- **Nieuw/Open project** - Om een nieuw project te creëren of te openen, zie de sectie ["Projectbeheer"](project_management).
- **Opslaan** - Slaat de ervaring op.
- **Opslaan als** - Slaat de ervaring op en laat toe het bestand te hernoemen.
- **Project verlaten** - Verlaat het project. Werkt alleen als de VR Preview niet actief is.
- **Afsluiten** - Sluit de Practice Editor.

#### Venster

Hiermee kunt u nieuwe panelen binnen de editor openen en de vensterindeling resetten. U kunt ook panelen openen via de knoppen aan de linkerzijde.

#### Help

Hier vindt u deze handleiding.

#### Projectnaam

Toont de naam van het project.


#### Layouts

![Overzicht gebruikersinterface](/img/UI_overview1_workspace.png)

De layouts zijn vooraf gedefinieerde configuraties die wij aanbieden om uw workflow voor het creëren van ervaringen te ondersteunen.

- **Set up**: Ideaal voor het importeren en plaatsen van objecten op de scène.
- **Training bouwen**: Indeling voor het creëren van verhalen met een focus op de *Step Flow*.
- **VR testen**: Ten slotte, met deze indeling ligt de nadruk op de *VR Preview*, zodat u in realtime de acties van de gebruiker in virtual reality kunt observeren.

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

Voegt een "Condition" type component toe. Voor meer informatie, zie de sectie "Voorwaarden".


## VR Preview

![VR Preview 2](/img/UI_overview6.png)

Standaard bevindt het VR Preview-venster zich altijd rechtsonder in de editor.
Klikken op "Visuele Test" start onmiddellijk de VR. U kunt ook een deel van het gezichtsveld van de gebruiker die de VR gebruikt, zien.
De ervaring zal dan worden gelanceerd vanuit de momenteel geselecteerde Step.

![VR Preview 1](/img/UI_vr_preview_2.png)
![VR Preview 2](/img/UI_vr_preview_1.png)


## Scene View

Het *Sceneview*-venster is een representatie van de omgeving, u kunt er doorhe

