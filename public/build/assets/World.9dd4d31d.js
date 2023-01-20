import{a as h,B as f,T as w}from"./index.esm.e1c09f35.js";import{j as _,a as t,d as u,L as c,r as d,H as b}from"./app.81bb8d2d.js";import{G as p}from"./iconBase.292e5d42.js";function v(s){return p({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"}}]})(s)}function x({setTutorialWindow:s}){return _("section",{className:"world__navbar",children:[t("button",{onClick:()=>{u.Inertia.get(route("album.page"))},className:"world__navbar__buttons__album",children:t(h,{size:35})}),t("button",{onClick:()=>s(!0),className:"world__navbar__buttons__tutorial",children:t(f,{size:35})}),t("button",{onClick:()=>{u.Inertia.post(route("logout"))},className:"world__navbar__buttons__logout",children:t(v,{size:35})})]})}function N({level:s,assignmentId:i,className:e,assignmentStatus:l,currentIslandLevel:a}){return t("figure",{className:"island__figure",children:l=="1"&&a==!1?t("img",{className:"island__figure__image",src:"/images/world/island__finished.svg",alt:"island"}):l=="0"&&a==!0?t(c,{method:"get",href:`/level/${s}/${i}`,className:"island__figure__link",children:t("img",{className:"island__figure__image",src:"/images/world/island__current.svg",alt:"island"})}):l=="0"&&a==!1?t("img",{className:"island__figure__image",src:"/images/world/island__locked.svg",alt:"island"}):l=="-1"?t(c,{method:"get",href:`/level/${s}/${i}`,className:"island__figure__link",children:t("img",{className:"island__figure__image",src:"/images/world/island__declined.svg",alt:"island"})}):t("img",{className:"island__figure__image",src:"/images/world/island__current.svg",alt:"island"})})}function A({className:s,assignmentId:i,level:e=1,assignmentStatus:l=0,currentIslandLevel:a}){return t("section",{className:s,children:t(N,{level:e,assignmentId:i,className:"world__route__island",assignmentStatus:l,currentIslandLevel:a})})}function g(){const s=document.getElementsByClassName("world__route__island");let i={};for(let e=0;e<s.length;e++){const l=s[e];let a=l.offsetLeft+l.offsetWidth/2,o=l.offsetTop+l.offsetHeight/2;i[e]={x:a,y:o}}for(let e=0;e<Object.keys(i).length-1;e++){let l=!1;e%2==0&&(l=!0);const a=Math.abs(i[e].x-i[e+1].x),o=Math.abs(i[e].y-i[e+1].y);let r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),l?r.setAttribute("style",`position: absolute; top: ${i[e].y}px; left: ${i[e].x}px; z-index:1;`):r.setAttribute("style",`position: absolute; top: ${i[e+1].y}px; left: ${i[e].x}px; z-index:1;`),r.setAttribute("width",a),r.setAttribute("height",o),r.setAttribute("class","dashed-lines");let n=document.createElementNS("http://www.w3.org/2000/svg","line");n.setAttribute("id","line2"),n.setAttribute("x1",0),n.setAttribute("x2",a),l?(n.setAttribute("y1",0),n.setAttribute("y2",o)):(n.setAttribute("y1",o),n.setAttribute("y2",0)),n.setAttribute("stroke","white"),n.setAttribute("stroke-width","4"),n.setAttribute("stroke-dasharray","25,10,15,10,15,10"),r.append(n),document.getElementById("world").append(r)}}window.addEventListener("resize",function(){const s=document.getElementsByClassName("dashed-lines");for(;s.length>0;)s[0].parentNode.removeChild(s[0]);g()});function z(s){const i=s.world,e=s.assignments,[l,a]=d.exports.useState(0),[o,r]=d.exports.useState(!1);return d.exports.useEffect(()=>{e.length<=0&&r(!0)},[]),d.exports.useEffect(()=>{a(e.length>0?e[e.length-1].assignment_id:0),g()},[a]),_("article",{className:"world",children:[t(b,{title:"\u{1F30E} Wereld 1"}),t(x,{setTutorialWindow:r}),t("section",{className:"world__route",id:"world",children:i.map((n,m)=>t(A,{className:`world__route__island assignment_${n.id}`,currentIslandLevel:n.id==l+1,assignmentStatus:e[n.id-1]?e[n.id-1].status:"0",assignmentId:n.id},m))}),t("section",{onClick:()=>r(!1),children:o?t(w,{text:"ahoy, kan jij mij helpen om de schatkist\u{1F48E} te vinden? Het ligt op een van deze eilanden\u{1F3DD}\uFE0F. Klik op het eiland met het schip om te beginnen\u{1F6A2}."}):null})]})}export{z as default};
