---
sidebar_position: 7
---

# Media Library

This is the window showing all the imported objects that are ready to be used in the experience.

![Media Library 1](/img/UI_media_library_1.png)
![Media Library 2](/img/UI_media_library_2.png)
![Media Library 3](/img/UI_media_library_3.png)

By clicking on the *+* at the top left, it is possible to initialize an object import or create a folder in the Media Library.

    *Import Mesh*: Allows you to import a 3D object.*Compatible formats*: .3ds, .abc, .blend, .dae, .fbx, .gltf, .glfb, .obj, .ply, .stp, .stl, .wrl, .x3d.
    * Import Text DB*: Allows you to import a .csv file, enabling the linking of textual content with a language. Clicking on the imported textDB opens the SheetDataViewer window.


## SheetData Viewer

This window only opens after clicking on an imported text database (_TextDB_). It opens the Excel or .csv file and allows you to link cell rows with _text content_, for example, in a _Text object_.

![Sheet Data Viewer](/img/ImportCSV.png)


![Sheet Data Viewer](/img/UI_sheet.png)
![Sheet Data Viewer](/img/UI_sheet2.png)

For the .csv table to work, the first row (1) should be prepared starting from the second column (B), where you add the language that will appear in _Language_ on Logia/Practice.

You can then link a _text content_ by clicking the icon located to the left of the _text content_ box.

To add a new language, click on the icon next to the cell in the first row that contains the language name. You will then be able to select the language via the _Language_ button.

![Text Link 1](/img/UI_text_link_1.png)

The icon then switches to search mode.

![Text Link 2](/img/UI_text_link_2.png)
![Text Link Actions](/img/UI_text_link_actions.png)
![Text Link 3](/img/UI_text_link_3.png)

All that remains is to click the button in the _Connect_ column for the row to be linked to this text block. The text block will be automatically filled with the text corresponding to the intersection of the connected row and the language selected in _Language_.
You can also add an object with a _text content_ component by clicking on _New Text Object_ in the new column.



![Text Link Final](/img/UI_text_link_final.png)








