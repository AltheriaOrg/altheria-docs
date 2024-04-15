---
sidebar_position: 4
---

# Voorwaarden en Interacties

Het basisprincipe van Logia/Practice Editor is dat elke ervaring is opgedeeld in stappen (Steps), die kunnen worden gezien als de verschillende stadia van de procedure die u wilt simuleren. Om van de ene stap naar de andere te gaan, moeten er voorwaarden worden vervuld door de gebruiker (een actie uitvoeren, een object verplaatsen, ...). Practice Editor biedt een brede lijst van conditities die je kan gebruiken om verschillende processen te simuleren.

De conditities zijn dus van toepassing op:
* Een object (dat verplaatst, gedraaid, ... moet worden om de voorwaarde te vervullen)
* Een Stap (om de criteria te definiëren voor de overgang naar de volgende Node)

U vindt de instellingen van de voorwaarde in de inspector en ziet ook het kleine pictogram van de geselecteerde voorwaarde onder de kolom *condition group* van uw Stap in de Step Flow.

*Ter herinnering: Door op een pictogram van een behavior te klikken, kan een behavior aan een object worden toegewezen.*

**! LET OP ! Niet alle behaviors zijn voorwaarden, sommige behaviors zijn in zekere zin opties die op het object worden toegepast voor de geselecteerde stap!**

![Voorwaarden: Selecteer Voorwaarden Menu](/img/cond_selectmenu.png)

## Basisvoorwaarden

Door een voorwaarde toe te voegen in de inspector, vult u de momenteel geselecteerde Condition Group. Eenmaal de ervaring gestart is, moeten de Voorwaarden door de gebruiker worden nageleefd om over te gaan naar de Node verbonden aan de uitgang van de Condition Group. U kunt meerdere voorwaarden aan een Node toevoegen; om over te gaan naar de volgende Node moeten deze allemaal zijn vervuld, zonder specifieke volgorde.

### Verplaatsen

Voegt een "Move" type voorwaarde toe. Dit is een voorwaarde die vereist dat het object met deze voorwaarde wordt geplaatst op de overeenkomstige "Move Target". De "Move Target" is een kopie van het object dat wordt gegenereerd bij het toevoegen van deze voorwaarde. Het moet worden geplaatst waar de gebruiker het object in de huidige ervaring verondersteld is te plaatsen. Na toepassing van deze voorwaarde kan het object vrij worden verplaatst door de gebruiker, en de voorwaarde wordt gevalideerd wanneer het object op het doel is geplaatst.

Na het toevoegen van de voorwaarde aan een object, verschijnt het volgende gedeelte in de inspector wanneer het betreffende object is geselecteerd. Naast de positie van de "Move Target", kunt u meerdere opties instellen.

![Voorwaarden: Verplaatsen](/img/cond_move.png)

**Alleen positie**: Geeft aan dat alleen de positie in aanmerking wordt genomen.

**Gevoeligheidsafstand**: Geeft de minimale afstand aan waarop het object zich van de "Move Target" moet bevinden om het doel te valideren.

**Gevoeligheidshoek**: Geeft de toegestane foutmarge voor de rotatie aan (alleen als Alleen Positie niet is aangevinkt).

**Move Family**: Geeft aan of het doel geactiveerd kan worden door andere objecten met het "Move"-component. Als de familie iets anders is dan "None", betekent dit dat het doel geactiveerd kan worden door elk ander object met dezelfde familie. Een mogelijke toepassing is het plaatsen van meerdere identieke objecten op meerdere identieke "Move Targets", op een uitwisselbare manier.

### Roterende

Voegt een "Rotate" type voorwaarde toe. Dit is een voorwaarde die vereist dat het object met dit component wordt uitgelijnd met de overeenkomstige "Rotate Target". De "Rotate Target" wordt gegenereerd volgens een vergelijkbaar principe als de "Move Target". Na toepassing van deze voorwaarde kan het object worden gedraaid (maar niet verplaatst) door de gebruiker, en de voorwaarde wordt gevalideerd wanneer het object is uitgelijnd
