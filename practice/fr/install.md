---
sidebar_position: 2
---

# Installation

## Installation de l'éditeur

Afin de pouvoir utiliser l'éditeur de Practice, vous dévrez exécuter le fichier `PracticeEditorInstaller.exe` fourni par Altheria. Dans la plupart des cas Microsoft Defender SmartScreen bloquera l'installeur parce qu'il n'est pas reconnu par la base de données de Microsoft.

<img src="/img/install_1.png" alt="Windows SmartScreen" width="400"/>

Afin de continuer l'installation, appuyez sur "Plus d'informations" et "Exécuter quand même".

<img src="/img/install_2.png" alt="Windows SmartScreen Run Anyway" width="400"/>

Au démarrage de l'installeur vous pouvez choisir la langue (NB: cette langue ne s'applique qu'à l'installeur, pas à Practice).
<img src="/img/install_3.png" alt="Sélection de langue" width="300"/>

Au démarrage de l’installeur sont présentés les termes de la licence. Ceux-ci disposent d’une
version complète se trouvant dans l’EULA signé par votre organisation.

<img src="/img/install_4.png" alt="EULA" width="500"/>

La création d’une icône sur le bureau placera celle-ci sur le bureau de tous les utilisateurs du
poste de travail.

<img src="/img/install_5.png" alt="EULA" width="500"/>

La création d’une icône sur le bureau placera celle-ci sur le bureau de tous les utilisateurs du
poste de travail.

<img src="/img/install_6.png" alt="EULA" width="500"/>

Une fois les options sélectionnées, vous pouvez lancer l’installation.

<img src="/img/install_7.png" alt="EULA" width="500"/>

L’installation peut prendre plusieurs minutes.

<img src="/img/install_9.png" alt="EULA" width="500"/>

L’installation est maintenant finie. 

<img src="/img/install_8.png" alt="EULA" width="500"/>

Vous pouvez décider de lancer l’application ou de fermer simplement la fenêtre.

## Paramétrage du casque VR

Practice est entièrement compatible avec le standard OpenXR[^1], vous pourrez donc y utiliser une grande partie des casques de réalité virtuelle se trouvant dans le marché. 

[^1]: [OpenXR](https://fr.wikipedia.org/wiki/OpenXR)

Afin de connecter le casque à Practice, il faudra utiliser un intermédiaire aussi appelé *runtime*. Il en existe deux principaux sur Windows: SteamVR[^2] et Oculus[^3], mais le choix de runtime dépend du casque à votre disposition. Nous vous conseillons d'utiliser le runtime Oculus pour les casques développés par Meta et SteamVR pour le reste.

[^2]: [SteamVR](https://store.steampowered.com/steamvr)
[^3]: [Oculus](https://www.meta.com/be/quest/setup/)

### Oculus

Le runtime Oculus est compatible avec les casques Meta (Rift et toutes les variantes Quest). Les casques Quest devront être connectés à l'ordinateur par cable Link. 

Pour plus d'information par rapport au paramétrage de votre casque Oculus, nous vous conseillons de suivre les [instructions officielles de Meta](https://www.meta.com/fr-fr/help/quest/articles/headsets-and-accessories/oculus-link/set-up-link/).

### SteamVR

Le runtime SteamVR doit être installé à travers de la plateforme de distribution Steam[^4]. Steam nécessite la création d'un compte pour utiliser ses services.

[^4]: [Steam](https://store.steampowered.com/)

La procédure d'installation est similaire à tous les appareils est similaire, à part quelques différences de paramétrage spécifiques au hardware. Une liste non-exhaustive pour paramétrer les appareils avec SteamVR:

- Valve Index: [guide](https://help.steampowered.com/fr/faqs/view/7F7D-77FB-8CAA-4329).
- HTC Vive: [guide](https://www.vive.com/fr/support/vive/category_howto/setting-up-for-the-first-time.html).

### Autres

D'autres casques connectés existent sur le marché avec des applications propriétaires, tels que Varjo[^5] ou Pico[^6]. Par contre, ces applications se servent d'un runtime comme SteamVR pour communiquer avec des applications VR. 


[^5]: [Varjo](https://varjo.com/use-center/get-started/varjo-headsets/setting-up-your-headset/setting-up-xr-4/)
[^6]: [Pico - Link](https://www.picoxr.com/global/software/pico-link)

---

Une fois l'installation finie, et le casque initialisé, passez à la séction [Gestion de votre projet](editor_features_basic/project_management).

