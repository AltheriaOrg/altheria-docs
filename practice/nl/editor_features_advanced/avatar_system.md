---
sidebar_position: 2
---

# Avatar en fysieke schade

Deze module maakt het mogelijk om verwondingen of statuswijzigingen te simuleren die zijn gekoppeld aan fouten gemaakt door de operator. De module laat toe deze wijzigingen toe te wijzen aan verschillende delen van het virtuele lichaam van de gebruiker. Deze statuswijzigingen (brandwonden, breuken, ...) worden *Gevaren* genoemd in de onderstaande uitleg.

## Initialisatie

De onderstaande afbeelding toont het configuratievenster van de module. Dit venster stelt u in staat om de toestand van de avatar aan het begin van een *Node* te definiëren.

![Avatar initialisatie functies](/img/avatar_initfeatures.png)

**I. Selectie van delen van de avatar**

Selecteer een of meerdere delen van het lichaam van de avatar die u wilt wijzigen.

**II. Selectie van delen van de handen**

Selecteer een of meerdere delen van de handen van de avatar die u wilt wijzigen.

**III. Selectie van het Gevaar**

Past de geselecteerde toestand toe op de eerder geselecteerde delen van de avatar.

Van links naar rechts, van boven naar beneden:
* **Cyaan - Snede**: Snijdt een ledemaat/vingerkootje door.
* **Rood - Brandwond**: Verbrandt het geselecteerde ledemaat/vingerkootje.
* **Geel - Lekkage**: Creëert een spoor van een substantie (chemisch, ...) geel op het geselecteerde oppervlak.
* **Oranje - Scheur**: Maakt een scheur in kleding op het geselecteerde oppervlak.
* **Roze - Breuk**: Simuleert een breuk (gebroken bot) op het geselecteerde ledemaat/vingerkootje.
* **Groen - Genezing**: Geneest het geselecteerde oppervlak. Te gebruiken op een node na degene waar de avatar is gewijzigd om genezing te simuleren.

Let op, de gevaren zijn onderling consistent: het breken van een bot of het doorsnijden van een ledemaat zal het toepassen van andere gevaren op deze later beperken (bijv. het doorsnijden van de linker schouder zal voorkomen dat er sneden op de linkerhand worden gezien).

**IV. Reset de avatar**

Geneest alle delen van de avatar zonder rekening te houden met de huidige selectie.

**V. Bereken de grootte van de speler voor de avatar**

Zodra uw gebruiker in VR is, kunt u de grootte van zijn avatar aanpassen door de gebruiker te vragen rechtop te staan, recht vooruit te kijken en op deze knop te drukken. De optie Avatar > Resize in het statische menu maakt het mogelijk om dezelfde actie uit te voeren. Merk op dat, in tegenstelling tot de andere opties, deze moet worden gebruikt terwijl de VR Preview is geactiveerd.

## Gebruik

Op deze manier kunt u verwondingen simuleren als volgt:
* Stel een voorwaarde in op Node A (Move, ...).
* Creëer een Node B en verbind deze met Node A, zodat de ervaring overgaat naar Node B wanneer de voorwaarde gedefinieerd op Node A is vervuld.
* Configureer de avatar met behulp van de hierboven beschreven functies zodat de gebruiker Node B begint met zijn Avatar gewijzigd
* Resultaat: de gebruiker vervult de voorwaarde gekoppeld aan Node A, en zijn avatar wordt dienovereenkomstig gewijzigd.
