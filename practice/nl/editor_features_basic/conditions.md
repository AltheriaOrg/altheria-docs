---
sidebar_position: 4
---

# Condities en Interacties

Het basisprincipe van Practice Editor is dat elke ervaring is opgedeeld in stappen (Steps), die kunnen worden gezien als de verschillende stadia van de procedure die u wilt simuleren. Om van de ene stap naar de andere te gaan, moeten er condities worden vervuld door de gebruiker (een actie uitvoeren, een object verplaatsen, ...). Practice Editor biedt een brede lijst van conditities die je kan gebruiken om verschillende processen te simuleren.

De conditities zijn dus van toepassing op:
* Een object (dat verplaatst, gedraaid, ... moet worden om de conditie te vervullen)
* Een Stap (om de criteria te definiëren voor de overgang naar de volgende Node)

U vindt de instellingen van de conditie in de inspector en je kan ze herkennen aan de hand van hun pictogram.

*Ter herinnering: Door op een pictogram van een behavior te klikken, kan een behavior aan een object worden toegewezen.*

**! LET OP ! Niet alle behaviors zijn condities, sommige behaviors zijn opties die op het object worden toegepast voor de geselecteerde stap!**

![Condities: Selecteer Condities Menu](/img/cond_selectmenu.png)

## Basiscondities

Door een conditie toe te voegen in de inspector, vult u de momenteel geselecteerde Condition Group. Eenmaal de ervaring gestart is, moeten de Condities door de gebruiker worden nageleefd om over te gaan naar de Node verbonden aan de uitgang van de Condition Group. U kunt meerdere condities aan een Node toevoegen; om over te gaan naar de volgende Node moeten deze allemaal zijn vervuld, zonder specifieke volgorde.

### Verplaatsen

Voegt een "Move" type conditie toe. Dit is een conditie die vereist dat het object met deze conditie wordt geplaatst op de overeenkomstige "Move Target". De "Move Target" is een kopie van het object dat wordt gegenereerd bij het toevoegen van deze conditie. Het moet worden geplaatst waar de gebruiker het object in de huidige ervaring verondersteld is te plaatsen. Na toepassing van deze conditie kan het object vrij worden verplaatst door de gebruiker, en de conditie wordt gevalideerd wanneer het object op het doel is geplaatst.

Na het toevoegen van de conditie aan een object verschinijnt in de inspector dit component dat je kan gebruiken om de "Move" te configureren. Vergeet niet de positie van "Move target" juist in te stellen.

![Condities: Verplaatsen](/img/cond_move.png)

**Only position**: Geeft aan dat alleen de positie in aanmerking wordt genomen.

**Sensitivity distance**: Geeft de minimale afstand aan waarop het object zich van de "Move Target" moet bevinden om het doel te valideren.

**Sensitivity angle**: Geeft de toegestane foutmarge voor de rotatie aan (alleen als Alleen Positie niet is aangevinkt).

**Move Family**: Geeft aan of het doel geactiveerd kan worden door andere objecten met het "Move"-component. Als de familie iets anders is dan "None", betekent dit dat het doel geactiveerd kan worden door elk ander object met dezelfde familie. Een mogelijke toepassing is het plaatsen van meerdere identieke objecten op meerdere identieke "Move Targets", op een uitwisselbare manier.

### Roteren

Voegt een "Rotate"-type conditie toe. Dit is een conditie die vereist dat het object met dit component uitgelijnd wordt met de overeenkomstige "Rotate Target". De "Rotate Target" wordt gegenereerd volgens een principe dat vergelijkbaar is met dat van de "Move Target". Nadat deze conditie is toegepast, kan het object vrij worden gedraaid (maar niet verplaatst) door de gebruiker, en de conditie wordt gevalideerd wanneer het object is uitgelijnd met het doel.

Na het toevoegen van de conditie aan een object, wordt de volgende sectie weergegeven in de inspector wanneer het betreffende object is geselecteerd.

![Condities: Roteren](/img/cond_rotate.png)

**Gevoeligheidshoek**: Geeft de toegestane foutmarge voor de rotatie aan.

**Herhalen**: Geeft aan dat de rotatie zo vaak moet worden herhaald als aangegeven in het tekstvak. Als "Omdraaien voor herhaling" niet is aangevinkt, worden de rotaties opgeteld: het object zal niet terugkeren naar zijn oorspronkelijke positie na elke rotatie.

**Reverse before repeat**: (Vereist een aantal herhalingen > 1): Zet het object terug naar zijn oorspronkelijke positie na elke rotatie.

### Schuiven

Voegt een "Slide"-type conditie toe. De functionaliteiten zijn identiek aan die van de "Move" conditie, maar het object kan alleen bewegen in de richting van zijn doel of in de tegenovergestelde richting. Na toepassing van deze conditie kan het object langs een vaste as worden verplaatst, en de conditie wordt gevalideerd wanneer het object op het doel is geplaatst.

Na het toevoegen van de conditie aan een object, wordt de volgende sectie weergegeven in de inspector wanneer het betreffende object is geselecteerd.

![Condities: Schuiven](/img/cond_slide.png)

**Sensitivity distance**: Geeft de afstand aan waarop het object zich van het doel moet bevinden om de conditie te valideren.

### Aanraken

Voegt een "Touch"-type conditie toe. Deze conditie wordt geactiveerd als het object wordt aangeraakt.

Na het toevoegen van de conditie aan een object, wordt de volgende sectie weergegeven in de inspector wanneer het betreffende object is geselecteerd.

![Condities: Aanraken](/img/cond_touch.png)

**Trigger**: Geeft aan of de gebruiker ook de trekker van zijn controller moet overhalen wanneer zijn hand in contact is met het object om de conditie te valideren.

**Minimale tijd**: Geeft de tijd van contact aan die nodig is om de conditie te valideren.

### Helper Tool

Voegt een "Debug"-type conditie toe. **Deze conditie zal worden geïmplementeerd in een toekomstige update.**

![Condities: Helper](/img/cond_helper.png)

### Smartboard

Het Smartboard is een paneel dat het mogelijk maakt om abstracte acties of acties die te complex zijn om in 3D te simuleren, na te bootsen. Dit object kan worden gezien als een vragenlijst.

Na het toevoegen van de voorwaarde aan een object, wordt een "Smartboard Item" geassocieerd met het object.

In VR verschijnt het Smartboard item met een titel/vraag (**Question**) en een lijst met mogelijke antwoorden. Elk morgelijk antwoord heet een **Item Name**. Wanneer een antwoord van de gebruiker wordt gevalideerd, zal een laadproces plaatsvinden dat enkele seconden kan duren (**Item Duration**). Een reactie op dit antwoord zal dan aan de gebruiker worden getoond (**Item Answer**).

Het volgende gedeelte wordt weergegeven in de inspector wanneer het genoemde object is geselecteerd.

![Condities: Smartboard](/img/cond_smartboard.png)

**Question** : De titel/vraag die aan de gebruiker zal worden getoond.

**Action** : Lijst van bestaande acties/antwoorden in de ervaring. Ze worden gedeeld met alle Smartboard Items (in het voorbeeld is er slechts één). De marker aan de linkerkant van de vraag geeft aan of het voorstel aanwezig zal zijn op het huidige Smartboard Item. De marker aan de rechterkant geeft aan of het antwoord als correct wordt beschouwd. Een voorstel moet verplicht correct zijn en aanwezig zijn om te voorkomen dat de gebruiker vastloopt in de ervaring. Door op "Actie toevoegen" te klikken verschijnt een nieuw creatieblok.

**Item Name** : Naam van het voorstel.

**Item Duration** : Laadtijd tussen de validatie van het voorstel en de weergave van de reactie.

**Item Answer** : Reactie op het antwoord. Dit kan bijvoorbeeld een uitleg zijn als het antwoord fout is of een felicitatiebericht. Door op “ok” te drukken voeg je het voorstel toe aan de lijst en ook aan het huidige Smartboard Item (de rechtermarker wordt aangevinkt).

**On wrong** : *Continue* valideert de Voorwaarde zelfs als het gekozen antwoord fout is. *Repeat* zal opnieuw vragen om te antwoorden en dus een voorstel te kiezen.

**Gescoord** : Geeft aan of dit slimme bord zal bijdragen aan de voorwaarde "conditionele activator" tijdens de ervaring. (Als Bij Fout in *Repeat* staat, wordt de score alleen geregistreerd voor het eerste gegeven antwoord).

*Alle tekstvakken beschikbaar in het Smartboard kunnen worden gekoppeld aan een TextDB*.

![Condities: Smartboard](/img/cond_smartboard2.png)


### Teleport

De Teleport Voorwaarde dwingt de gebruiker om zich naar een specifieke locatie te verplaatsen. Wanneer deze Voorwaarde aan een object wordt toegevoegd, wordt een marker ("Teleport Target") die de bestemming van de verplichte verplaatsing aangeeft, gecreëerd en geassocieerd met het de teleport conditie.

Na het toevoegen van de voorwaarde aan een object, wordt het volgende gedeelte weergegeven in de inspector wanneer het betreffende object is geselecteerd.

![Condities: Teleport](/img/cond_teleport.png)

**Modus** : *To Point* vraagt de gebruiker om dichter bij de marker te komen. *Away* vraagt om zich van de marker te verwijderen.

**Spot Marker Radius** : Geeft de afstand aan waarop de gebruiker zich moet bevinden / verwijderen van het punt in meters. Het is raadzaam om een foutmarge voor de gebruiker te laten als hij dichterbij moet komen.


### Timer

![Condities: Conditionele Activator](/img/cond_timer.png)

Beëindigt de stap aan het einde van de ingestelde tijd.

**Digit Display** : Projecteert een digitale klok met een aftelling.

**Time Left Visual** : Projecteert een visuele klok met een aftelling.

**Time** : De tijd die overblijft voordat de volgende stap begint.



### Sensor

Dit gedrag maakt het mogelijk om een psysiek element van uw VR-installatie te selecteren dat een voorwaarde zal activeren in the VR ervaring.

**Sensor Selection** : Selecteert een element van uw aangesloten installatie dat de voorwaarde zal activeren.

![Condities: animeer](/img/UI_Sensors.JPG)

## Overige behaviours:

De onderstaande "behaviours" activeren geen condities.
Ze worden voornamelijk gebruikt om de staat van objecten in de geselecteerde stap te wijzigen.

### Voorwaardelijke Activator

Dit object biedt de mogelijkheid om een object te tonen of te verbergen afhankelijk van de Score behaald met alle Slim Bord Items die tot nu toe in de ervaring zijn tegengekomen en die de eigenschap "Gescoord" hebben.

Na het toevoegen van de voorwaarde aan een object, wordt het volgende gedeelte weergegeven in de inspecteur wanneer het betreffende object is geselecteerd.

![Condities: Voorwaardelijke Activator](/img/cond_condav.png)

**Mode** : *Verbergen* zal dit object verbergen als het de scorevoorwaarde valideert. *Tonen* zal het object tonen als het de scorevoorwaarde valideert.

**Perform inverse** : De score moet onder de gevraagde score liggen.

**Min%** : Als de score boven dit percentage ligt, wordt de eerste voorwaarde gevalideerd. (Als uitvoeren omgekeerd uit staat).

**Max%** : Als de score onder dit percentage ligt, wordt de tweede voorwaarde gevalideerd. (Als uitvoeren omgekeerd uit staat).

*Min en max kunnen niet hetzelfde nummer zijn, Min kan niet groter zijn dan Max en Max kan niet kleiner zijn dan Min*

### Animate

![Condities: animeren](/img/UI_Animate.JPG)

**Modus**:   
-*Spline* : In deze modus zullen de objecten de waypoint keten volgen.

-*Nav* : In deze modus zullen de objecten de waypoint keten als gids volgen maar zich op de grond verplaatsen, obstakels vermijdend tot het eindpunt.

**Waypoint chain**:     
 Selecteer de waypoint keten die het object zal volgen.

**Delay**:      
 De animate zal even wachten voordat die begint.

**Easing**:     
 Kies welk type animatie u wenst.

**Measure**:  
-*Speed* : Kies in m/s de snelheid waarmee het object zich zal verplaatsen.

-*Time* : Kies in seconden de duur van de animatie.

**Start from position**:    
-*Current* : De animatie begint met de positie van het object in de actieve stap.

-*Waypoint* : De animatie begint met de positie van het object direct bij het eerste punt van de Waypoint keten.

**Starting Point**: 
Selecteer welk punt van de Waypoint het begin van de animatie zal zijn.

**Path Type**: 
-*Straight* : Het object volgt de waypoint keten identiek.

-*Rounded* : Buigt de waypoint keten om de animatie "gebogener" te maken als het object van punt naar punt gaat.

**Loop Type**:  
Kies of u wilt dat de animatie loopt en welk type effect u wenst.

**Y offset**:   
Maakt het mogelijk om een hoogteverschuiving toe te voegen voor de animatie van het object.

### Actuator

Actuators maken het mogelijk om de staat van echte componenten van uw VR-installatie te veranderen. 
Zoals de kleur van uw lampen.

![Condities: Actuators](/img/UI_Actuators.JPG)    
*Met de bovenstaande opties zal, wanneer de trainee deze Stap bereikt, de actuator de kleur van uw aangesloten lamp veranderen in groen. Dit kan bijvoorbeeld aangeven aan de Trainer dat hij een stap succesvol heeft voltooid.*