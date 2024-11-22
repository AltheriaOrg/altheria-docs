"use strict";(self.webpackChunkaltheria_docs=self.webpackChunkaltheria_docs||[]).push([[861],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var A=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,A,i=function(e,t){if(null==e)return{};var n,A,i={},o=Object.keys(e);for(A=0;A<o.length;A++)n=o[A],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)n=o[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=A.createContext({}),p=function(e){var t=A.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return A.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},u=A.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),l=p(n),u=i,h=l["".concat(s,".").concat(u)]||l[u]||d[u]||o;return n?A.createElement(h,a(a({ref:t},c),{},{components:n})):A.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[l]="string"==typeof e?e:i,a[1]=r;for(var p=2;p<o;p++)a[p]=n[p];return A.createElement.apply(null,a)}return A.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var A=n(8168),i=(n(6540),n(5680));const o={sidebar_position:4},a="Step Flow",r={unversionedId:"en/editor_features_basic/node_editor",id:"en/editor_features_basic/node_editor",title:"Step Flow",description:"Step Overview",source:"@site/practice/en/editor_features_basic/node_editor.md",sourceDirName:"en/editor_features_basic",slug:"/en/editor_features_basic/node_editor",permalink:"/practice/en/editor_features_basic/node_editor",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Objects",permalink:"/practice/en/editor_features_basic/objects"},next:{title:"Conditions and Interactions",permalink:"/practice/en/editor_features_basic/conditions"}},s={},p=[{value:"1 Condition Group",id:"1-condition-group",level:3},{value:"2 Menu",id:"2-menu",level:3},{value:"3 Entr\xe9e",id:"3-entr\xe9e",level:3},{value:"4 Sortie(s)",id:"4-sorties",level:3},{value:"5 Add Condition Group",id:"5-add-condition-group",level:3},{value:"Add steps",id:"add-steps",level:2},{value:"Step Options",id:"step-options",level:2}],c={toc:p},l="wrapper";function d(e){let{components:t,...o}=e;return(0,i.yg)(l,(0,A.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"step-flow"},"Step Flow"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Step Overview",src:n(2401).A,width:"2033",height:"1102"})),(0,i.yg)("p",null,"This window shows the logic of the steps in the experience. Each Step is represented by this figure:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Step Detailed",src:n(2491).A,width:"376",height:"221"})),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"To navigate in this view, click and hold the mouse button while moving the mouse. To zoom in and out on the Steps, use the mouse wheel.")),(0,i.yg)("p",null,"Each Step consists of several parts."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Step Detailed 2",src:n(7456).A,width:"341",height:"299"})),(0,i.yg)("h3",{id:"1-condition-group"},"1 Condition Group"),(0,i.yg)("p",null,"A ",(0,i.yg)("em",{parentName:"p"},"Condition Group")," is a set of ",(0,i.yg)("em",{parentName:"p"},"Conditions"),". Each ",(0,i.yg)("em",{parentName:"p"},"Condition")," is applied to an object in the scene. All conditions within a group must be met in order to transition to the Step connected to the output of this group. For more details on Conditions, visit the section ",(0,i.yg)("a",{parentName:"p",href:"/practice/en/editor_features_basic/conditions"},"Conditions & Behaviours"),"."),(0,i.yg)("p",null,"Clicking on the ",(0,i.yg)("em",{parentName:"p"},"-")," to the left of the group name will destroy the ",(0,i.yg)("em",{parentName:"p"},"Condition Group"),"."),(0,i.yg)("h3",{id:"2-menu"},"2 Menu"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Menu",src:n(6586).A,width:"252",height:"232"})),(0,i.yg)("p",null,"You can access the menu by clicking on the ",(0,i.yg)("em",{parentName:"p"},"...")," at the top right of the Step. Different options will be available:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"*Settings*: Opens the Step options in the Inspector.\n*Delete step*: Deletes the current Step.\n*Disconnect in*: Removes the connection link between the previous Step and the input of this Step.\n")),(0,i.yg)("p",null,"   ",(0,i.yg)("em",{parentName:"p"},"Disconnect out"),": Removes the output links to the following Steps.\n",(0,i.yg)("em",{parentName:"p"},"Disconnect all"),": Removes both the input and output links."),(0,i.yg)("h3",{id:"3-entr\xe9e"},"3 Entr\xe9e"),(0,i.yg)("p",null,"The input allows it to be linked to the output of the previous Step.\nTo connect two Steps, click on an output of a Condition Group from a previous Step, then click on the input of the next Step."),(0,i.yg)("h3",{id:"4-sorties"},"4 Sortie(s)"),(0,i.yg)("p",null,"The outputs of the Step are links to other Steps if a Condition Group is validated. There is one output per Condition Group. A Step cannot have fewer than one Condition Group."),(0,i.yg)("h3",{id:"5-add-condition-group"},"5 Add Condition Group"),(0,i.yg)("p",null,"Add a Condition Group, along with the associated output linked to it."),(0,i.yg)("h2",{id:"add-steps"},"Add steps"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Condition",src:n(1488).A,width:"829",height:"455"})),(0,i.yg)("p",null,"On the right side of the Step Flow, you will also find the Settings as well as a few buttons to add/remove a Step, along with a button to recenter the view on the Step Flow."),(0,i.yg)("h2",{id:"step-options"},"Step Options"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Step Options",src:n(4126).A,width:"225",height:"534"})),(0,i.yg)("p",null,"The Step options are available when a Step is selected."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'Step Name: The name of the Step.\nFree Teleportation: Allows or disallows teleportation in the current Step.\nVR Module Position and Rotation: With the "Stay" option, the character will maintain the same position in the next Step.\nShow Step Validation: Indicates whether an animation for validation will appear at the end of the Step or not.\nType of Step: Default indicates that this is a regular Step. FirstStep indicates that the Step will be the first to launch when the Reader starts (only one Step of this type can exist). LastStep indicates that this is the end of the experience.\nFade In: Will trigger a fade to black when the Step ends.\nFade Out: Will trigger a fade to black when the Step begins.\n')),(0,i.yg)("p",null,"Last Step: Indicates that this Step will end the Reader playback (when the experience is launched via Practice Reader)."))}d.isMDXComponent=!0},4126:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/UI_node_options-c1b7229b7f327dc5fbc4aa16c5e0348a.png"},2401:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/UI_overview3-7de5c6c682b079e86336fc5d80a8c6c4.png"},1488:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/node_condition-cfdd1af08ea4b1624c12f052b8ed937c.png"},2491:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAADdCAYAAACxO2lPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABzaSURBVHhe7d0HlBRltgdw3x73uLvPkYfyAGGUsJJUhEUJw5BEEMMKgjCAgOQchiWo5Jx0MQsYEEEQhT0GhCeoQxRQUUAQMUsQyZJzuK9vTX/DV9W3w/RMzVdF/+85v0PX/b7qajv8u7q6erziiqSCBAAAlyGxCQAA/ic2AQDA/8QmAAD4n9gEAAD/E5sAAOB/YhMAAPxPbAIAgP+JTQAA8D+xCQAA/ic2AQDA/8QmAAD4n9gEAAD/E5sAAOB/YhMAAPxPbAIAgP+JTQAA8D+xCQAA/ic2AQDA/8QmAAD4n9gEAAD/E5sAAOB/YhMAAPxPbAIAgP+JTQAA8D+xCQAA/ic2AQDA/8QmAAD4n9j0k/zJdF3JOyitYQMa1qcDvfNsD9o0rwvtXtyOTq5sSRfWNiP67CEAgBDn1zSjw0tb0S8LOtHq17vSiyO6UPc2TSmlWnVKKlIqkDGFQjPHT8SmT/x34b9TlWp1qWeXHrRiRh86EnigLq5tKj6QAADRcOD//H4nenl8X2rZtCkll65IV1xTRMwfXxCbPpCvaCm6q0Fjen70QNr/0SOBPXUEOwDkjotrH6L1c3tQ946dqdQtlQOZUzQkg3xBbHrclYVL0d33NqZ5z/ajs6ubiw8QAEBObV/YkYakd6EyVsjLeeRpYtPL8iVTndp1aeaT/a2PU9KDAgCQG/iQ77YPOlL/Lq2pcLHyciZ5mdj0sFLlq9LI/j3oUEZr8QEBAMhNfPh3/dzu1KXlPwMZlBySSZ4mNj3qLwVvoj7tGtOP73a2jpFJDwYAQG47uzqN5kxsT3VrpojZ5Fli06Pq1Uql1yd0tu5s6UEAAHDLT++1p0Fd7hOzybPEpkf1a1eftszvKN75koOftKHv3ulKG+d1z/Q2ACSsQAZsCtocxOe/8+9lpPxwOvNpGs0alyZmk2eJTY96st8DdHxF9AfjyLJWtHxGOj07ZggNeWwEDRwwEgCAHh2Y6bGgEYOH06zJj1s7glKWOH0+8+GsPPrz/5ampOQaWa4uXM6WV54gNj1qzvjMb7WlO145vao5LZjSn7qnj6K67cZRahsAgPAe7DSWnh49hL6PIeS3LcgM+MxQrxmqeJ2Q3DJKbHpUxtQWdH4N/9osvE3zulL//iMotfVYc4QnEQB4V6NAyL80YTCdXNlCDHblcEZzurpYRTnclWIe+iJWbHrQlfmTad2sNDq/unFEb0weSE06jaLUVmMMQ9AD+EnvvqPo5/c7i8GunFvdTA51pwIeOZ1SbHrQX4qUow1zogf8hGFDqE4bKXANEJ5EAOBNnXuNpnVv9hSDXScGulPBG8Ucy3Ni04P+VrhMTAE/evBQOWxNEJ5EAOBNCHiD+BANAh4A3NIxEPBfzOkthrpODHQnHKLJPgS8v41++k06euwEnTt/njZt+Umc42XO6j3iZXFeJFJJ8yDvccB/Njt6wP+1aAU51LNUE/PLCLHpURvmNBFDXYeA955o9VCvp0LWua/LkzRvwbKQvknOijYn2rgqaR7kvVgDnrMoqXhVIdgDitekK5OuD8kuY8RmHtqyZQudD+zROaW1uPSDAmXD7JwH/N0dJtALr71Ha7/cTDt+20N79x+k/Qf+CDiUDTz/kt/37Kfvf9pOHy3/ggaMnU71A9uwtic8iRKNXidOngrsxc+h9JGv0OdfbQl2Myvces6+SaqksZfeWBgcvVTSPOXs2XPBWQh4r8hOwFuuKRoI9ZSAWpR0Q3W66tritrzyBLGZR86dOyeGu5KRkWGbn9OAr9N2HE2duYA2bv6ejhw9Jm4zXqdPn7HC/5MV62j4v2dlblN4EiUaVW/85+OI49t27s7qtX/0hWCXqOvgKdR24PO2dZSmgT3/xUs/p1fmLBLHJSOfmk2LPl5L9TpOFMcjURVp7O33lgYvIeD9JtsB7wdiMw8MHT5CDEonfZ2cBnynx1+wwv3o0ePitnID79G/s2hFIHwmi0+iRKPqrfcyxHGJVPr4F+u/DXZDS5/HVB08dCR4yV7O+ZGoCjemX+bSx50Q8N6DgM9FUjhKDh06lLVOTgN+yuvvW4dkpO3kpi83bqURk98Qn0SJxlmNuv9bnKebNuuD4GyyLk8JfOpSYz2GTguOkPWpiXtTZ16az6XmMme9/vZi+mj5uuBSZunzI1EljelUSWMKAl62Y9ee4L1yqXoOf8k258LFi8GRS1XjkfG2OVLp4xIEfC6SgjEctU5OA35J4OP8ocNHxW3kpp9+3Ukz5y0Wn0SJKFJJ85mqcP0zZ8+GHZN6XHpfH3P2w1EljelUSWMKAj7U2GfnBu+R0FJz9u7/I9gJLTUnUqk5EgR8LpKCMRy1Tk4D/oMln9IfgY/q0jZy09YffqVp2l4njKPGPScHX2JyOeerCtffvfcA/fb7PhtVj46fETKfS78efYw/FTjHJKqkMZ0qaUxBwIeKVN/9uD3qnKa9M8/GilT69pwQ8LlICkbJzp07s9bJacBPevEt2rlrb+DFdVbcVm7gwwaffraR/jXqFfFJBJk6PPZi8CWXWXx+vD6uSu/p/Ui1ZNnn4nz9evSx+QuWh4xJVEljOlXSmIKADxWpDh85FnXOk1PnR52jb88JAZ+L/lagqBiQTvo6OQ34pr0n08q1G+nAwUPitnKKf8CzY+du6zgvn44pPYnATi+pr/f0fq2248OS5nPpfX0s1rNwVEljOlXSmIKAD6XfJ87iU2t5TqRS1xOp1BwJAj6X7du3TwxK5dYKlWzzcxrwtdqMpdFPz6a16zZbh2pOnTod9VTNaM6dO09nzpyl48dP0N59B+k/C5dTH/6FI29TeBIlEr2kcaaX1Nd7en/D5h9CxlQI6PQKN+bsh6NKGtOpksYUBLwsXKnxuu0nBjv2OnnydNYcPkQnVcaqL7PmSBDwLujctZsYnNLcnAY8q9F6LPUa/hLNffcT2rb9dzp+4iSdPnMmbqdOn7bOf/9q41aaNOVtSuvzlLUNa3vCkyjR6OUc+3jFpbNZftm+yzamSu+xEydOBUfsYzPe+jDYtff10vsbA28QqvR+JKqksfu7PplFld5zzkfAh8evSVXrN30vzuGMUMVnWjnH72w/ITiaWV0GTwmZ44SANyw3Aj5PCU+iROM8JTFcOddzVqQxvb7Y8G3Mc7n4zVmfH4mqSGPhauM3P9rmI+C9BwFvGALev44cORaMM3vV7zhJnM99vZzj/GchnOWcwyKVM3SjURVpLFypMzwUBLz3IOANQ8BDdukljWeHKmksuxDw3oOANwwBD9mllzSeHaqksexCwHsPAt4wBDxkl17SeHY4q49w1k40UknzIO8h4A3zVcALTyDIe1t/2GaF6LRZC8Xx7HCWNCca/jtFev34y05xHuQ9BLxhm95sKt7hujFDh4kPHgBAJAh4wxDwAOAWBLxhCHgAcAsC3jAEPAC4BQFvGAIeANyCgDcMAQ8AbkHAG4aABwC3IOANQ8ADgFsQ8IYh4AHALQh4wxDwAOAWBLxhCHgAcAsC3jAEPAC4BQFvGAIeANyCgDcMAQ8AbkHAG4aABwC3IOANQ8ADgFsQ8IYh4AHALQh4wxDwAOAWBLxhMQX8kGFUPfBgAQBkRwcr4HuJuaKTssmzxKZHxRLwd9asQ0lJyQAA2VL25hSamH6/mCs6KZs8S2x6FAIeANyCgDcMAQ8AbkHAG4aABwC3IOANQ8ADgFsQ8IYh4AHALQh4wxDwAOAWBLxhCHgAcAsC3jAEPAC4BQFvGAIeANyCgDcMAQ8AbkHAG+ZmwKeltaQ//viDVJ09e5YmTpxEhQqVFOdHkp7ejw4dOhS8JqIzZ87Q8OEjxbkA4A0c8ON730PnVjeOSMomzxKbHuVmwO/ZszcYx5fq4sWL9Nxzz4vzw2ncuCmdPn06eA2X6sSJE+J8APAGBLxhbgZ8uDp//jzNnj1HXMepb99+YrirktYBAG9AwBtmIuC5zp07R3PnviWup4wePTZiuHNJ6wGANyDgDXMz4H/++ZdgDMvFe/KvvTaDChX6e8i6Y8eOixru+/btC1kPALwDAW+YmwFfv/69ti9GpeJj8tOnv0aFC18K+YEDH7W+RI1UHP6DBg2xbQ8AvAUBb5ibAc9SUmoH9rT3B2NZLg75efPm0TXX3EB9+qRbZ9tEK54nbc+07t170oQJk6hYsbLiuFv4i2sutcz1zDPP2ubouKS+m0qVKk9Tp06jtm07iONw+UHAG+Z2wLOHHmpOO3f+ZoVKuOLDNV9//XXUcOczZ7p16yFux6RwlZGxVJyf25wB/+GHH1LLlm2yln/66eesy2pcX3ZTpJLme5Gq6dNniOMgQ8AblhcBz5o3fzhqyEerw4cP04ABj4rXb5IqZ3/atJes/vjxE0LGcpsz4J0ijbmJP52F27YqacxLuF58car1r9cDPn/+YlSmTAXr8GiXLt1o6NDhNGnSE/TEE09m26RJduPHT6R+/QYEXsutqEKFylS8eDlre9LtUBDwhuVVwLN77vkn7dmzx3qhZLeOHj3qyXDns4G4pDHGb0rOngo9Lv7koo/xfycXX9ZLn8P27r30G4MdO3aIh2gmT34667KqCxcuZPXUXEWvkydPimNlytwWvJRZ+hwJV6FCJcQxVqJEOdsyl/qXS/X50JdeX331VdaYmt+kSZqtd+7ceauvz+F/9S/vMzIyssYlrVo9knWZy8sBz4GbklKLZs6cRevXr6fff/+dDh48SIcOHbaehznF36ft378/8GnwJ1q5ciWNGjWGKldOpYIFw/9wMTcC/s56d1uvM6cHGxv6BazY9Ki8DHjGx6Z3795tvVhiLf7ClfdGpOszjevUqdPimIRr9+49tmUutfzbb7uCHXswcallftFy5ct3o7Xcq1e6Fdxc+jrqGHyBAiWs5WuvLZ61Dpeaq5b5Rasvc6llfiNSFW6OE7/xRBqXcHEw8W2pXr221Zsx43Wrf9ttlW3zuPTlpk1bZC0z6T7hqlKlhrXcunVba3nIkGFZcyLh8nLA9+rVh+bNm0/fffcdHTlyxDrcKQVjTvFh0v37D9CaNWvphRdepKpVM+9PSU4DfuPGjeJtUDZs2CCu5yqx6VF5HfAsNbUObdu23XrBRCvek2zZ8mHxeryASwVGNLwnxeXsc/XvP9C6rAJemqNfXrNmTcg4l76sf8nKpS47l1Xp46qvLquA18fbtGkX0tOpksbC4eI3dGdv27Zttl7ZshWtvj4nloDn4NPnqNJ74XB5NeDr1bsncNteo507d9KxY8fEMMxtBw4coM8++zyw89VdvE0sJwH/X/kKidt1+nP+68X1XSM2PcpEwLO3337besFEK34H10+h9BquSpWqiWNOqqQ+H7bhy7EGvD7GVqxYYetzZSfgeW9PH1f9b775xrosBbya4+wpqsL19dLH+FCec/6tt95u66m+fjmWgK9YsaptDu+Fcum9cLi8GvCDBg2mZcuWubbXHs6OHTutM6Ok28RyEvDS9iT83yyt7xqx6VF5HfB8KiTvaUQ7W0YVB9+SJR9RyZK3iNdnGtevv/4qjjlxnTp1Suxz8eV4A/7551+09bmyE/Dff/+9bVz1+XAQX44n4PmHaJHGmSp9+dpr7V/ccenLUp8rloDXx9lbb2XuaDj7Ei6vBvzLL78S2BnKPAtNCkG38GP80Ucfi7eJ5UXAM2l914hNj8rLgC9QoDg9++zztuO5sdaHHy72ZMirksYYn42gLqvSx1WfP1bz5XgDfuvWrbY+V24colm6dJl1OZ6AZ7GMc+nLUsDzl4d6T/X1y86AV6Uvly9/h23O119vsvp6LxwurwY870Xz8ei8Dng+aWLRokXibWIIeMPyKuB5z/2pp56xnUGS3VqxYmVcf2rYbVzOs070sS1bvrUuf/HFOmtZmnPvvQ9Yl2MN+F27doWMc+nLsQb88ePHbcuK3stJwHNJY0yVviwFPJfe40+Beo/rk0/sZ8So0pf5LKVIcyLh8mrAP/74IOu/n5+HeRXyfDYSf3qN9NdhEfCG5VXAz5r1RtZH5niL3xw4JKOde5vXhgwZGryFRF9++SXNmDEzuBR6bFsVX+a9SVVqPJaA5x+EcXGA8znPXKtXr7H+1ec7A57PeOjUqWvWshpTyxzifJnPoValxuMNeKaK7wt+k3///QXBTmY55zoDXvUXL15iXR4+fIS1zIfu1LjaceDfW9Socad12fnGxcWHyN58801rmX+ExqXGJXyb+b9d/fdzqWVpvil8Jgv/7oKPiefVl6x8+I6/w0hLC38SRE4CvnKVFHG7Tm3athfXd43Y9Ci3Az5fvhusU7f4gYhUfOog/2ngb7/NPNQQrviFzN/c88/epe2ZpD7uczn3FHX8q1JVCxfaP96uXbvWCnm9x5w9PtdZFf8+gF/g+hy+3LnzpVNLeU+LS73hSNvQf6MwZcpU2xif9RTL7Qqndu27rG2r2r59uzgv0vXpOwjlylUMGdd/G8DL69ats12f6n/wwULrMleFClWyxiV8qidfh0Sabwq/KXbs2IlefXU6/fLLL9Z9zZxhmBv4evlMJ96pmDjxiYgnGcQT8EkFA+teFxD4V9q+k75unhCbHuVmwBcpUiqwtzTXtvcjFf+PQdTfJ+Fznbdu/S44Er5WrVolvsgBwuGS+pcLDtomTZoFPrk9Zx2u4Tcn3tGQQjG7ONT5kAz/0GnTpk3W347iT64NGtxH119/k3h7WLYC/rqilJRcPaCmpjr9+OOP4m3iH1w58yxPiE2P2jTXvYDnn3dHO+bOv45r2LCJbT0+BKO+NIxUK1eusq0HEAmX1L/c8C9LS5S42ToEyKHPvzbNDXfcUZ0qVqxi/QahaNFSdN11xcXt67IT8PZgt7sq8AkluURpSqlRi5JLlg7JsTwlNj1q09wWYqjr4g34aHvuBw4ctH5eLa3Le/+bNm0OzpSL3zykdQEkXFIf3BNrwCclVwsJdbtUMb+MEJselFTwJlcDPlLxWSD33ddQXE/hX4iuX78huIZc0noA4A2xB7wU6g4FbxRzLM+JTQ/6S5FyRgKejw02b95SXMeJP2Ju2LAxuGZoSesAgDcg4A1KKvh3VwN+/vz/hJwayXvujRrZj7lHd4O4J89/MU+eDwBegIA3zM2AZ/yDFD79jo+3r1r1adhj7rHg/0k3/4EjtmjR/4lzAMA7cAzeMDfPogGAxMYBPzH9fjFXdJxFcrBnuuraEiHZZYzY9Ki8/Fs0AJBYshPwLCk5xRHuKXRl/qK2zDJObHoUAh4A3JLdgGf8C9YrCgb/1fqeITY9CgEPAG6JJ+A9T2x6FAIeANyCgDcMAQ8AbkHAG4aABwC3IOANQ8ADgFsQ8IbFEvB1a9Wla/KXAADIlrK3ptLEvgh4Y2IJ+DFDh1Fqm3EAANnSsddo+mx2bzFXdFI2eZbY9CgEPAC4BQFvGAIeANyCgDcMAQ8AbkHAG4aABwC3IOANQ8ADgFsQ8IYh4AHALQh4wxDwAOAWBLxhCHgAcAsC3jAEPAC4BQFvGAIeANyCgDcMAQ8AbkHAG4aABwC3IOANQ8ADgFsQ8IYh4AHALQh4wxDwAOAWBLxhCHgAcAsC3jAEPAC4BQFvGAIeANyCgDcMAQ8AbkHAG4aABwC3IOANQ8ADgFsQ8IYh4AHALQh4wxDwiatK08fpH/f38ITbG6aLtxH8DQFvGAI+8dzesC+VLH2bN5X5h3ibwZ8Q8IYh4BNLysMj5WD1kjIVxNsO/oOANwwBn1hK3nyHHKpxuLlaQ0ptPSZgbOBTQZ9Ar0LInHhJtx38BwFvGAI+sUhhGp+KVLXZINt1l6lyrzAvPpUb/ct23eBPCHjDEPCJRQrTuJSrRFWbD7Vdd5mUB+S5cfjHA71s1w3+hIA3DAGfWKQwjQsCHmKAgDcMAZ9YpDCNCwIeYoCANwwBn1ikMI0LAh5igIA3DAGfWKQwjQsCHmKAgDcMAZ9YpDCNCwIeYoCANwwBn1ikMI0LAh5igIA3DAGfWKQwjQsCHmKAgDcMAZ9YpDCNCwIeYoCANwwBn1ikMLUpdzvdnNqEytdrSxXv7hBeg06U0nKk7bor/bOnPFdTvu4jdFP5WvK2NQj4ywMC3jAEfGKRwlRX6f4e4nq5qXqrUeK2dQj4ywMC3jAEfGKRwlRXxfH3ZdwibVuHgL88IOANQ8AnFilMdZXyIFirtx4rbluHgL88IOANQ8AnFilMbcreTjfXfIhuvatVFK1DjsFXvLerMM+hTksqXamuvG0NAv7ygIA3DAGfWKQwjYt0Fk2V++W5cUDAXx4Q8IYh4BOLFKZxwWmSEAMEvGEI+MQihWlcEPAQAwS8YQj4xCKFaVwQ8BADBLxhCPjEIoVpXBDwEAMEvGEI+MQihWlcEPAQAwS8YQj4xCKFaVwQ8BADBLxhCPjEIoVpXBDwEAMEvGEI+MQihWl8KlCVhx61XXfp2+sL8+JTpenjtusGf0LAG4aATyxlcjGES1eqb/3tmpQWw6nC3R3EOfGSbjv4DwLeMAR84pEC1Usq3ddNvN3gPwh4wzbNjR7w44Yh4C83JW+pIoaraXc0HiDeXvCnToGA/2JOLzFXdFI2eZbY9KivY9iDf2HcYLqn/VjxAQQACKdH+ij67p2uYq4oF9Yi4F3z6avRA37VzHTqHnigpAcQAEByZ7txNGbIMDq2/GExV5Rjy9LEbPIsselR704OBHzgHVS645VTK1vQyxMHUcOOY6nmI/KDCQCg1A7kRN9+I2ntG9GPv+9a1PJSJl2TTEnJ1bNcUaC4La88QWx61POPP0inVzUX73jdHxltaPZTj9HD3cZQ3baBBxAAwOHOAM6Hf/UfGdOXq2zLvIetLMoM9ZqhitcOyS2jxKZHDerajLYtaC/e8bqLgb38M5+m0c5FHawHLmN6XwAAm+Uz0mnz/O50KKM1nV8T+fAvZwp77+kW9Lfk8nK4KzdUE/PLCLHpQVfmT6YHGjSid57pJj4AkguBB+3c6mZ0dnUaAECI82uaBYI7+nd7HO67Fz9C49MbyqHuVCBZzLE8JzY96K8FS1PJW+6mIT3b047Anrn0IAAAuIEDfsFznejBBrXlQHcqeKOYY3lObHrQX4qUC9xxtaneXU3o9Ul9rXde6YEAAMhtP7zbkQZ1a0bFb+IcEgLdCQGfPXyIhu+4G8rVp9Yt2lHG9N7Wu6r0YAAA5IQ65s72LWlLzw3rQtWqVKWk/NeHhrkEh2iyLym5hnXnla3QgHp36U6fze6JkAeAXJcZ7k2tcJ8xsSc1qNeAriiYeRpk0o0V7WHuVDwlJLuMEZseddW1gb34YqnWnVjmtrupX/eetOTldDq8tLX1YEgPFABAdnHA/7qgI00b25fq16tPVxe2H3JJKpYSGuyseB360/8Uts01Smx6XFLyrQGpVKz0nZTWvAO9/kR/2jy/K51Y0RJ79AAQNz7zbvfidrT8td7078Hd6baKgb3xfPLhlj/lL2XlUGa4p9LVhcqI84wSmz5zXdkUGtqnI81/Jp3WvdmTti/sQEeWtrJOg0LgA0A4F9Y2oxMrW9D+j9rSD+92poxXe9O0MT2o+YMNKV/hImLe+IrY9KMCRSn/9cWoVcPaNLJHI5oy5EGaNaYRzR3fiN6aAAAQas64RvTq8EY0eUAjGtD+HkqtfEcgS4oFMqVoaMb4kdgEAAD/E5sAAOB/YhMAAPxPbAIAgP+JTQAA8D+xCQAA/ic2AQDA/8QmAAD4n9gEAAD/E5sAAOB/YhMAAPxPbAIAgP+JTQAA8D+xCQAA/ic2AQDA/8QmAAD4n9gEAAD/E5sAAOB/YhMAAPxPbAIAgP+JTQAA8D+xCQAA/ic2AQDA/8QmAAD4n9gEAAD/E5sAAOB/YhMAAHyuIP0/WX01LZU9n8kAAAAASUVORK5CYII="},7456:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/node_detailed_2-70ec81d781154127df831c3f4e253e14.png"},6586:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/node_menu-a0a21387080eaac4acfedeaa15987672.png"}}]);