"use strict";(self.webpackChunkaltheria_docs=self.webpackChunkaltheria_docs||[]).push([[347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:i,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},a="Node Editor/Step Editor",d={unversionedId:"editor_features_basic/node_editor",id:"editor_features_basic/node_editor",title:"Node Editor/Step Editor",description:"Menu principal",source:"@site/practice/editor_features_basic/node_editor.md",sourceDirName:"editor_features_basic",slug:"/editor_features_basic/node_editor",permalink:"/practice/editor_features_basic/node_editor",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Logia/Practice : Vue d\u2019ensemble",permalink:"/practice/editor_features_basic/user_interface"},next:{title:"Conditions et Interactions",permalink:"/practice/editor_features_basic/conditions"}},l={},s=[{value:"Menu principal",id:"menu-principal",level:2},{value:"I. Nom de la Node/Step",id:"i-nom-de-la-nodestep",level:2},{value:"II. Condition Group",id:"ii-condition-group",level:2},{value:"III.\tMenu",id:"iiimenu",level:2},{value:"IV. Entr\xe9e",id:"iv-entr\xe9e",level:2},{value:"V. Sortie(s)",id:"v-sorties",level:2},{value:"VI. Add Condition Group",id:"vi-add-condition-group",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"node-editorstep-editor"},"Node Editor/Step Editor"),(0,i.kt)("h2",{id:"menu-principal"},"Menu principal"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Node Overview",src:n(565).Z,width:"1100",height:"619"})),(0,i.kt)("p",null,"Cette fen\xeatre montre la logique des \xe9tapes dans l'exp\xe9rience. Chaque Step/Node est represent\xe9 par un Node."),(0,i.kt)("p",null,"Pour se d\xe9placer dans cette vue, cliquez de mani\xe8re enfonc\xe9e et d\xe9placez la souris.\nPour zoomer et d\xe9zoomer sur les Nodes, utilisez la molette de la souris. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Node Detailed",src:n(3001).Z,width:"480",height:"311"})),(0,i.kt)("p",null,"Chaque Step/Node est compos\xe9 de plusieurs parties."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Node Detailed 2",src:n(9950).Z,width:"360",height:"293"})),(0,i.kt)("h2",{id:"i-nom-de-la-nodestep"},"I. Nom de la Node/Step"),(0,i.kt)("p",null,"Nom donn\xe9 \xe0 cette Node."),(0,i.kt)("h2",{id:"ii-condition-group"},"II. Condition Group"),(0,i.kt)("p",null,"Il s'agit de l'ensemble des ",(0,i.kt)("em",{parentName:"p"},"Conditions")," et ",(0,i.kt)("em",{parentName:"p"},"Behaviours")," n\xe9cessaires \xe0 la sortie de cette Node. Les ",(0,i.kt)("em",{parentName:"p"},"Conditions")," et ",(0,i.kt)("em",{parentName:"p"},"Behaviours")," sont des \xe9l\xe9ments n\xe9cessitant une manipulation de la part de l\u2019utilisateur en VR.\nLorsque toutes les manipulations d\u2019un ",(0,i.kt)("em",{parentName:"p"},"Condition Group")," sont r\xe9alis\xe9es, l'exp\xe9rience continue vers la Node reli\xe9e \xe0 la sortie de ce ",(0,i.kt)("em",{parentName:"p"},"Condition Group"),"."),(0,i.kt)("p",null,"Cliquer sur le ",(0,i.kt)("em",{parentName:"p"},"-")," \xe0 gauche du nom du groupe d\xe9truit ce ",(0,i.kt)("em",{parentName:"p"},"Condition Group"),"."),(0,i.kt)("h2",{id:"iiimenu"},"III.\tMenu"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Menu",src:n(9985).Z,width:"229",height:"237"})),(0,i.kt)("p",null,"Cliquer sur ",(0,i.kt)("em",{parentName:"p"},"...")," en haut \xe0 droite ouvre le menu. Vous pouvez acc\xe9der \xe0 diff\xe9rentes options :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Settings")," : Ouvre les options de Node dans l\u2019",(0,i.kt)("em",{parentName:"li"},"Inspector"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Delete stage node")," : Supprime la Node actuelle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Disconnect in")," : Supprime le lien de connection entre la Node pr\xe9c\xe9dente et l\u2019entr\xe9e de cette Node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Disconnect out")," : Supprime les liens de sortie vers les Nodes suivantes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Disconnect All")," : Supprime les liens d\u2019entr\xe9e et de sortie.")),(0,i.kt)("h2",{id:"iv-entr\xe9e"},"IV. Entr\xe9e"),(0,i.kt)("p",null,"L'entr\xe9e permet d'\xeatre reli\xe9e \xe0 la sortie de la Node pr\xe9c\xe9dente.\nPour connecter deux Nodes entre elles, cliquez sur une sortie de la Node, puis sur l\u2019entr\xe9e de la Node suivante. "),(0,i.kt)("h2",{id:"v-sorties"},"V. Sortie(s)"),(0,i.kt)("p",null,"Les sorties de Node/Step sont des liens vers d\u2019autre Node/Step si un ",(0,i.kt)("em",{parentName:"p"},"Condition Group")," est valid\xe9. Il y a une sortie par ",(0,i.kt)("em",{parentName:"p"},"Condition Group"),". Une Node/Step ne peut pas poss\xe9der moins d\u2019un ",(0,i.kt)("em",{parentName:"p"},"Condition Group"),"."),(0,i.kt)("h2",{id:"vi-add-condition-group"},"VI. Add Condition Group"),(0,i.kt)("p",null,"Ajoute un ",(0,i.kt)("em",{parentName:"p"},"Condition Group"),", ainsi que la sortie li\xe9e \xe0 celui-ci."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Condition",src:n(6670).Z,width:"1100",height:"330"})),(0,i.kt)("p",null,"Le ",(0,i.kt)("em",{parentName:"p"},"+")," en haut \xe0 droite de la fen\xeatre Node Editor permet de rajouter un Node/Step.\nLe ",(0,i.kt)("em",{parentName:"p"},"x")," en dessous permet de recentrer la vue du Node Editor."))}c.isMDXComponent=!0},6670:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node_condition-6ff9f5e23071bb6398d1804719c2d7bc.png"},3001:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node_detailed_1-29a5d4ffe0a86fa4da63cb1434c7c03d.png"},9950:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node_detailed_2-ec6e9d89ec1a3bb52560d90f5e2c36d2.png"},9985:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node_menu-b3ccdb739f05f052d437a3e016f1b512.png"},565:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/node_overview-51195c341c77953e45291856edba9df7.png"}}]);