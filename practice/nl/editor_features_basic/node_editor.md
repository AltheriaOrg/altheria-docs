---
sidebar_position: 3
---

# Step Flow

![Stapoverzicht](/img/UI_overview3.png)

Dit venster toont de logica van de stappen in de ervaring. Elke stap wordt weergegeven door deze figuur:

![Gedetailleerde Stap](/img/node_detailed_1.png)

Om in dit beeld te navigeren, klik en houd vast en beweeg de muis.
Om in en uit te zoomen op de stappen, gebruik het muiswiel.

Elke stap bestaat uit meerdere delen.

![Gedetailleerde Stap 2](/img/node_detailed_2.png)

### 1 Voorwaardengroep

Een *Voorwaardengroep* is een verzameling van *Voorwaarden*. Elke *Voorwaarde* wordt toegepast op een object op het toneel. Alle voorwaarden in een groep moeten vervuld zijn om de overgang naar de stap die verbonden is met de uitgang van deze groep te maken. Voor meer details over Voorwaarden, bezoek de sectie [Voorwaarden & Gedragingen](conditions.md).

Klikken op de *-* links van de groepsnaam vernietigt deze *Voorwaardengroep*.

### 2 Menu

![Menu](/img/node_menu.png)

Je kunt toegang krijgen tot het menu door op *...* te klikken in de rechterbovenhoek van de Stap. Je kunt verschillende opties openen:
-	*Instellingen*: Opent de opties van de Stap in de *Inspector*.
-	*Verwijder stap*: Verwijdert de huidige Stap.
-	*Verbinding verbreken in*: Verwijdert de verbindingslink tussen de vorige Stap en de ingang van deze Stap.
-	*Verbinding verbreken uit*: Verwijdert de uitgangslinks naar de volgende Stappen.
-	*Verbinding verbreken alle*: Verwijdert de inkomende en uitgaande links.

### 3 Ingang

De ingang laat toe om verbonden te worden met de uitgang van de vorige Stap.
Om twee Stappen met elkaar te verbinden, klik je op een uitgang van een *Voorwaardengroep* van een vorige Stap, en vervolgens op de ingang van de volgende Stap.

### 4 Uitgang(en)

De uitgangen van de Stap zijn links naar andere Stappen als een *Voorwaardengroep* is gevalideerd. Er is een uitgang per *Voorwaardengroep*. Een Stap kan niet minder dan één *Voorwaardengroep* hebben.

### 5 Voeg Voorwaardengroep toe
Voegt een *Voorwaardengroep* toe, evenals de uitgang die daaraan gekoppeld is.

## Stappen toevoegen

![Voorwaarde](/img/node_condition.png)

Aan de rechterkant van de Step Flow vind je ook de *Instellingen* en enkele knoppen om een Stap toe te voegen/verwijderen en een knop om het beeld te centreren op de Step Flow.

## Stapopties

![Stapopties](/img/UI_node_options.png)

De opties van de Stap worden geopend wanneer een Stap is geselecteerd.

- Naam van de Stap.
- *Vrije Teleportatie*: Staat teleportatie in de huidige Stap toe of niet.
- *VR Module Positie en Rotatie*: Met de optie "Blijven", zal het personage dezelfde positie behouden in de volgende Stap.
- *Toon Stap Validatie*: geeft aan of een validatieanimatie aan het einde van de Stap verschijnt of niet.
- *Type of Step*: Default geeft aan dat deze Stap een klassieke Stap is. FirstStep geeft aan dat de Stap als eerste zal worden gestart bij het starten van de Reader (er kan slechts één Stap van dit type zijn). LastStep geeft aan dat dit het einde van de ervaring is.
- *Fade In*: Zal een fade naar zwart veroorzaken wanneer de Stap eindigt.
- *Fade out*: Zal een fade naar zwart veroorzaken wanneer de Stap begint.

*Last Step*: Geeft aan dat deze Stap het einde van de afspeling via Practice Reader zal markeren (wanneer de ervaring wordt gestart
