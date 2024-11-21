---
sidebar_position: 2
---

# Installation

## Installation de l'éditeur

In order to use the Practice Editor, you should launch `PracticeEditorInstaller.exe` provided by Altheria. In most cases Microsoft Defender SmartScreen will block the installer has it is not yet recognized by Microsoft's database.

<img src="/img/install_1.png" alt="Windows SmartScreen" width="400"/>

To continue the installation process, press "More informations" and "Execute Anyway".

<img src="/img/install_2.png" alt="Windows SmartScreen Run Anyway" width="400"/>

Once the installer has started, you can choose a language (Note : this language is only applied to the installer. Not to Practice Editor).
<img src="/img/install_3.png" alt="language selection" width="300"/>

At the start of the installer, the terms of the license are presented. 
These have a full version found in the EULA signed by your organization.

<img src="/img/install_4.png" alt="EULA" width="500"/>

Vous pouvez modifier l'emplacement du logiciel.

<img src="/img/install_5.png" alt="EULA" width="500"/>

Creating a shortcut on the desktop will place it 
on the desktop of all users on the workstation.

<img src="/img/install_6.png" alt="EULA" width="500"/>

Once the options are selected, you can start the installation.

<img src="/img/install_7.png" alt="EULA" width="500"/>

The installation may take several minutes.

<img src="/img/install_9.png" alt="EULA" width="500"/>

The installation is now complete.

<img src="/img/install_8.png" alt="EULA" width="500"/>

You can choose to launch the application or simply close the window.

## VR headset setup

Practice is fully compatible with the OpenXR standard[^1], so you will be able to use a wide range of virtual reality headsets available on the market. 

[^1]: [OpenXR](https://en.wikipedia.org/wiki/OpenXR)

In order to connect the headset to Practice, you will need to use an intermediary known as a runtime. There are two main ones on Windows: SteamVR[^2] and Oculus[^3], but the choice of runtime depends on the headset you have. We recommend using the Oculus runtime for headsets developed by Meta and SteamVR for the others.

[^2]: [SteamVR](https://store.steampowered.com/steamvr)
[^3]: [Oculus](https://www.meta.com/be/quest/setup/)

### Oculus

The Oculus runtime is compatible with Meta headsets (Rift and all Quest variants). Quest headsets must be connected to the computer via a Link cable. 

For more information regarding the setup of your Oculus headset, we recommend following [Meta's officials informations'](https://www.meta.com/fr-fr/help/quest/articles/headsets-and-accessories/oculus-link/set-up-link/).

### SteamVR

The SteamVR runtime must be installed through the Steam distribution platform[^4]. Steam requires the creation of an account to use its services.

[^4]: [Steam](https://store.steampowered.com/)

The installation process is similar for all devices, with a few hardware-specific configuration differences. A non-exhaustive list for configuring devices with SteamVR:

- Valve Index: [guide](https://help.steampowered.com/fr/faqs/view/7F7D-77FB-8CAA-4329).
- HTC Vive: [guide](https://www.vive.com/fr/support/vive/category_howto/setting-up-for-the-first-time.html).

### Other

Other connected headsets are available on the market with proprietary applications, such as Varjo[^5] or Pico[^6]. However, these applications use a runtime like SteamVR to communicate with VR applications.


[^5]: [Varjo](https://varjo.com/use-center/get-started/varjo-headsets/setting-up-your-headset/setting-up-xr-4/)
[^6]: [Pico - Link](https://www.picoxr.com/global/software/pico-link)

---

Once the installation is complete and the headset is initialized, move on to the section [Project Management](editor_features_basic/project_management).

