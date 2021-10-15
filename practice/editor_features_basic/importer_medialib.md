---
sidebar_position: 5
---

# Media Library

Il s'agit ici de la fenêtre  montrant tous les objet importés et prêts à être utilisés dans l'expérience.

![Media Library 1](/img/UI_media_library_1.png)
![Media Library 2](/img/UI_media_library_2.png)
![Media Library 3](/img/UI_media_library_3.png)

En cliquant sur le *+* en haut à gauche, il est possible d'initialiser un import d’objet ou de créer un dossier dans la _Media Library_.
- _Import Mesh_ : Permet d'importer un objet 3D. *Formats compatibles* : .3ds, .abc, .blend, .dae, .fbx, .gltf, .glfb, .obj, .ply, .stp, .stl, .wrl, .x3d. 
 - _Import Text DB_ : Permet d'importer un fichier .csv, permettant de lier des contenus textuels avec une langue. Cliquer sur le textDB importé, ouvre la fenêtre SheetDataViewer.

## SheetData Viewer

Cette fenêtre ne s’ouvre qu'après avoir cliqué sur une base de donnée textuelle importée (_TextDB_). Ceci ouvre le fichier excel ou .csv et permet de lier des lignes de cellules avec des _text content_, par exemple dans un objet _Text_.

![Sheet Data Viewer](/img/UI_sheet.png)

Pour que le tableau .csv fonctionne, il faut préparer la première ligne (1) en commençant par la deuxième colonne (B), et y ajouter la langue qui s’affichera dans _Language_ sur Logia/Practice.
Il est ainsi possible de lier un _text content_ en cliquant sur l’icône situé à gauche de la boîte de _text content_.
Pour ajouter une nouvelle langue, vous pouvez cliquer sur l'icone à coté de la cellule de la première ligne contenant le le nom de la langue. Il sera désormais possible de sélectionner la langue via le bouton _Language_ .

![Text Link 1](/img/UI_text_link_1.png)

L’icône passe alors en mode de recherche.

![Text Link 2](/img/UI_text_link_2.png)
![Text Link Actions](/img/UI_text_link_actions.png)
![Text Link 3](/img/UI_text_link_3.png)

Il ne reste plus qu’à cliquer sur le bouton dans la colonne _Action_ au niveau de la ligne à lier à ce bloc de texte, sélectionner _Connect_. Le bloc de texte sera pré-rempli avec le texte correspondant au croisement de la ligne connecté, et à la langue sélectionnée dans _Language_.
Vous pouvez aussi ajouter un object avec un composant _text content_ en cliquant sur _New Text Object_ dans la colonne _Action_.

![Text Link Final](/img/UI_text_link_final.png)








