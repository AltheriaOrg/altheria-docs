---
sidebar_position: 2
---

# Installatie

## Installatie van de editor

Om de Practice-editor te installeren, moet u het bestand `PracticeEditorInstaller.exe` uitvoeren. In de meeste gevallen zal Microsoft Defender SmartScreen de installatie blokkeren omdat het niet herkend wordt in the Microsoft Microsoft-database.

<img src="/img/install_1.png" alt="Windows SmartScreen" width="400"/>

Om de installatie voort te zetten, klik op "Meer informatie" en "Toch uitvoeren".

<img src="/img/install_2.png" alt="Windows SmartScreen Toch Uitvoeren" width="400"/>

Bij het starten van de installatie kunt u de taal kiezen (NB: deze taal is alleen van toepassing op de installateur, niet op Practice).
<img src="/img/install_3.png" alt="Taal selectie" width="300"/>

Bij het starten van de installatie worden de licentievoorwaarden gepresenteerd. U moet de EULA bevestigen om voort te gaan.

<img src="/img/install_4.png" alt="EULA" width="500"/>

Het aanmaken van een pictogram op het bureaublad zal deze op het bureaublad van alle gebruikers van de computer plaatsen.

<img src="/img/install_5.png" alt="EULA" width="500"/>

Het aanmaken van een pictogram op het bureaublad zal deze op het bureaublad van alle gebruikers van de computer plaatsen.

<img src="/img/install_6.png" alt="EULA" width="500"/>

Zodra u de opties heeft geselecteerd, kunt u de installatie starten.

<img src="/img/install_7.png" alt="EULA" width="500"/>

De installatie kan enkele minuten duren.

<img src="/img/install_9.png" alt="EULA" width="500"/>

De installatie is nu voltooid.

<img src="/img/install_8.png" alt="EULA" width="500"/>

U kunt besluiten de applicatie te starten of gewoon het venster te sluiten.

## Configuratie van de VR-headset

Practice is volledig compatibel met de OpenXR-standaard[^1], dus u kunt veel verschillende VR-headsets op de markt gebruiken.

[^1]: [OpenXR](https://fr.wikipedia.org/wiki/OpenXR)

Om de headset aan te sluiten op Practice, moet u een tussenpersoon gebruiken, ook wel een *runtime* genoemd. Er zijn twee belangrijke runtimes op Windows: SteamVR[^2] en Oculus[^3], maar de keuze van de runtime hangt af van de beschikbare headset. Wij adviseren de Oculus-runtime voor headsets ontwikkeld door Meta en SteamVR voor de rest.

[^2]: [SteamVR](https://store.steampowered.com/steamvr)
[^3]: [Oculus](https://www.meta.com/be/quest/setup/)

### Oculus

De Oculus-runtime is compatibel met Meta-headsets (Rift en alle Quest-varianten). Quest-headsets moeten via een Link-kabel met de computer worden verbonden.

Voor meer informatie over het configureren van uw Oculus-headset raden wij u aan de [officiële instructies van Meta](https://www.meta.com/fr-fr/help/quest/articles/headsets-and-accessories/oculus-link/set-up-link/) te volgen.

### SteamVR

De SteamVR-runtime moet geïnstalleerd worden via het Steam-distributieplatform[^4]. Voor het gebruik van Steam is het aanmaken van een account noodzakelijk.

[^4]: [Steam](https://store.steampowered.com/)

De installatieprocedure is vergelijkbaar voor alle apparaten, met enkele specifieke hardwareconfiguratie verschillen. Een niet-uitputtende lijst voor het instellen van apparaten met SteamVR:

- Valve Index: [gids](https://help.steampowered.com/fr/faqs/view/7F7D-77FB-8CAA-4329).
- HTC Vive: [gids](https://www.vive.com/fr/support/vive/category_howto/setting-up-for-the-first-time.html).

### Overige

Er zijn andere verbonden headsets op de markt met eigen applicaties, zoals Varjo[^5] of Pico[^6]. Echter, deze applicaties gebruiken een runtime zoals SteamVR om te communiceren met VR-applicaties. 


[^5]: [Varjo](https://varjo.com/use-center/get-started/varjo-headsets/setting-up-your-headset/setting-up-xr-4/)
[^6]: [Pico - Link](https://www.picoxr.com/global/software/pico-link)

---

Zodra de installatie is voltooid en de headset is geïnitialiseerd, ga naar de sectie [Beheer van uw project](editor_features_basic/project_management).
