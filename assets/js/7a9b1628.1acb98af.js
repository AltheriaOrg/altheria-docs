"use strict";(self.webpackChunkaltheria_docs=self.webpackChunkaltheria_docs||[]).push([[229],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=r,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(8168),r=(a(6540),a(5680));const i={sidebar_position:2},o="Installation",l={unversionedId:"en/install",id:"en/install",title:"Installation",description:"Installation de l'\xe9diteur",source:"@site/practice/en/install.md",sourceDirName:"en",slug:"/en/install",permalink:"/practice/en/install",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/practice/en/introduction"},next:{title:"Project Management",permalink:"/practice/en/editor_features_basic/project_management"}},s={},c=[{value:"Installation de l&#39;\xe9diteur",id:"installation-de-l\xe9diteur",level:2},{value:"VR headset setup",id:"vr-headset-setup",level:2},{value:"Oculus",id:"oculus",level:3},{value:"SteamVR",id:"steamvr",level:3},{value:"Other",id:"other",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"installation"},"Installation"),(0,r.yg)("h2",{id:"installation-de-l\xe9diteur"},"Installation de l'\xe9diteur"),(0,r.yg)("p",null,"In order to use the Practice Editor, you should launch ",(0,r.yg)("inlineCode",{parentName:"p"},"PracticeEditorInstaller.exe")," provided by Altheria. In most cases Microsoft Defender SmartScreen will block the installer has it is not yet recognized by Microsoft's database."),(0,r.yg)("img",{src:"/img/install_1.png",alt:"Windows SmartScreen",width:"400"}),(0,r.yg)("p",null,'To continue the installation process, press "More informations" and "Execute Anyway".'),(0,r.yg)("img",{src:"/img/install_2.png",alt:"Windows SmartScreen Run Anyway",width:"400"}),(0,r.yg)("p",null,"Once the installer has started, you can choose a language (Note : this language is only applied to the installer. Not to Practice Editor)."),(0,r.yg)("img",{src:"/img/install_3.png",alt:"language selection",width:"300"}),(0,r.yg)("p",null,"At the start of the installer, the terms of the license are presented.\nThese have a full version found in the EULA signed by your organization."),(0,r.yg)("img",{src:"/img/install_4.png",alt:"EULA",width:"500"}),(0,r.yg)("p",null,"Vous pouvez modifier l'emplacement du logiciel."),(0,r.yg)("img",{src:"/img/install_5.png",alt:"EULA",width:"500"}),(0,r.yg)("p",null,"Creating a shortcut on the desktop will place it\non the desktop of all users on the workstation."),(0,r.yg)("img",{src:"/img/install_6.png",alt:"EULA",width:"500"}),(0,r.yg)("p",null,"Once the options are selected, you can start the installation."),(0,r.yg)("img",{src:"/img/install_7.png",alt:"EULA",width:"500"}),(0,r.yg)("p",null,"The installation may take several minutes."),(0,r.yg)("img",{src:"/img/install_9.png",alt:"EULA",width:"500"}),(0,r.yg)("p",null,"The installation is now complete."),(0,r.yg)("img",{src:"/img/install_8.png",alt:"EULA",width:"500"}),(0,r.yg)("p",null,"You can choose to launch the application or simply close the window."),(0,r.yg)("h2",{id:"vr-headset-setup"},"VR headset setup"),(0,r.yg)("p",null,"Practice is fully compatible with the OpenXR standard",(0,r.yg)("sup",{parentName:"p",id:"fnref-1"},(0,r.yg)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", so you will be able to use a wide range of virtual reality headsets available on the market. "),(0,r.yg)("p",null,"In order to connect the headset to Practice, you will need to use an intermediary known as a runtime. There are two main ones on Windows: SteamVR",(0,r.yg)("sup",{parentName:"p",id:"fnref-2"},(0,r.yg)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," and Oculus",(0,r.yg)("sup",{parentName:"p",id:"fnref-3"},(0,r.yg)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),", but the choice of runtime depends on the headset you have. We recommend using the Oculus runtime for headsets developed by Meta and SteamVR for the others."),(0,r.yg)("h3",{id:"oculus"},"Oculus"),(0,r.yg)("p",null,"The Oculus runtime is compatible with Meta headsets (Rift and all Quest variants). Quest headsets must be connected to the computer via a Link cable. "),(0,r.yg)("p",null,"For more information regarding the setup of your Oculus headset, we recommend following ",(0,r.yg)("a",{parentName:"p",href:"https://www.meta.com/fr-fr/help/quest/articles/headsets-and-accessories/oculus-link/set-up-link/"},"Meta's officials informations'"),"."),(0,r.yg)("h3",{id:"steamvr"},"SteamVR"),(0,r.yg)("p",null,"The SteamVR runtime must be installed through the Steam distribution platform",(0,r.yg)("sup",{parentName:"p",id:"fnref-4"},(0,r.yg)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),". Steam requires the creation of an account to use its services."),(0,r.yg)("p",null,"The installation process is similar for all devices, with a few hardware-specific configuration differences. A non-exhaustive list for configuring devices with SteamVR:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Valve Index: ",(0,r.yg)("a",{parentName:"li",href:"https://help.steampowered.com/fr/faqs/view/7F7D-77FB-8CAA-4329"},"guide"),"."),(0,r.yg)("li",{parentName:"ul"},"HTC Vive: ",(0,r.yg)("a",{parentName:"li",href:"https://www.vive.com/fr/support/vive/category_howto/setting-up-for-the-first-time.html"},"guide"),".")),(0,r.yg)("h3",{id:"other"},"Other"),(0,r.yg)("p",null,"Other connected headsets are available on the market with proprietary applications, such as Varjo",(0,r.yg)("sup",{parentName:"p",id:"fnref-5"},(0,r.yg)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))," or Pico",(0,r.yg)("sup",{parentName:"p",id:"fnref-6"},(0,r.yg)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")),". However, these applications use a runtime like SteamVR to communicate with VR applications."),(0,r.yg)("hr",null),(0,r.yg)("p",null,"Once the installation is complete and the headset is initialized, move on to the section ",(0,r.yg)("a",{parentName:"p",href:"editor_features_basic/project_management"},"Project Management"),"."),(0,r.yg)("div",{className:"footnotes"},(0,r.yg)("hr",{parentName:"div"}),(0,r.yg)("ol",{parentName:"div"},(0,r.yg)("li",{parentName:"ol",id:"fn-1"},(0,r.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/OpenXR"},"OpenXR"),(0,r.yg)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.yg)("li",{parentName:"ol",id:"fn-2"},(0,r.yg)("a",{parentName:"li",href:"https://store.steampowered.com/steamvr"},"SteamVR"),(0,r.yg)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.yg)("li",{parentName:"ol",id:"fn-3"},(0,r.yg)("a",{parentName:"li",href:"https://www.meta.com/be/quest/setup/"},"Oculus"),(0,r.yg)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.yg)("li",{parentName:"ol",id:"fn-4"},(0,r.yg)("a",{parentName:"li",href:"https://store.steampowered.com/"},"Steam"),(0,r.yg)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.yg)("li",{parentName:"ol",id:"fn-5"},(0,r.yg)("a",{parentName:"li",href:"https://varjo.com/use-center/get-started/varjo-headsets/setting-up-your-headset/setting-up-xr-4/"},"Varjo"),(0,r.yg)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,r.yg)("li",{parentName:"ol",id:"fn-6"},(0,r.yg)("a",{parentName:"li",href:"https://www.picoxr.com/global/software/pico-link"},"Pico - Link"),(0,r.yg)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);