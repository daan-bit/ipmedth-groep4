import{a as e,R as c,j as s,b as i,r as o,d as x,H as A}from"./app.b6cd464c.js";import{M as d}from"./Modal.d7c4e319.js";import{A as C,u as M,s as z,g as f}from"./AICanvas.c6dc803a.js";import{A as _,a as G}from"./index.esm.bc103bd5.js";/* empty css               */import{G as k}from"./iconBase.4b4d43ff.js";import"./index.afa41a1c.js";function j({modelState:t=!1,setModelState:n=!1,updateDrawing:a}){return e(d,{content:e(c.Fragment,{children:s("section",{"data-status":"good",className:"wrapper",children:[e("h2",{children:"Goed gedaan"}),e(_,{size:100,color:"#06D6A0"}),e("section",{className:"button_wrapper",children:e("button",{className:"button button-primary",onClick:()=>a(),children:"Volgende"})})]})}),modelState:t,setModelState:n})}function D({modelState:t=!1,setModelState:n=!1,updateDrawing:a}){return e(d,{content:e(c.Fragment,{children:s("section",{"data-status":"wrong",className:"wrapper",children:[e("h2",{children:"Aaah jammer"}),e(G,{size:100,color:"#DB3069"}),e("p",{children:"Als de computer fout geraden heeft kan je de juffvrouw/meester om hulp vragen"}),s("section",{className:"button_wrapper",children:[e("button",{className:"button button-primary",onClick:()=>n(!1),children:"Opnieuw"}),e("button",{className:"button button-primary",onClick:()=>a(),children:"Volgende"})]})]})}),modelState:t,setModelState:n})}function E(t){return k({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"}}]})(t)}function O(){const{level:t}=i().props,{student:n}=i().props,{images:a}=i().props,[r,b]=o.exports.useState({image:"",assignment_id:t.id,student_id:n.id,AIGuessPercentage:0}),[N,p]=o.exports.useState(!0),[u,l]=o.exports.useState(!1),[v,m]=o.exports.useState(!1);function g(){const h=z(),w=f();b({...r,image:h,AIGuessPercentage:w})}function S(){f()>=50?m(!0):m(!1),l(!0)}return o.exports.useEffect(()=>{r.image&&x.Inertia.post("/level/insert-drawing",r)},[r]),s("article",{className:"level__container",children:[e(A,{title:t.name}),e("h3",{className:"level__description u__z_index2",children:t.description}),e("section",{className:"canvas__container",children:e(C,{id:"canvas",mode:"level",prompt:t.prompt})}),s("section",{className:"button_container",children:[e("button",{className:"level__button u__z_index2",onClick:M,"data-bgcolor":"red",children:e(E,{size:50,color:"#202020"})}),e("button",{onClick:S,className:"level__button u__z_index2","data-bgcolor":"green",children:e(_,{size:50,color:"#202020"})})]}),e(d,{content:e(c.Fragment,{children:s("section",{className:"popup",children:[e("h2",{className:"popup_titel",children:t.description}),e("h3",{className:"popup_subtitel",children:t.name}),s("section",{className:"popup_figure_holder",children:[e("figure",{className:"popup_figure",children:e("img",{src:a[0].image,alt:t.prompt})}),e("figure",{className:"popup_figure",children:e("img",{src:a[1].image,alt:t.prompt})}),e("figure",{className:"popup_figure",children:e("img",{src:a[2].image,alt:t.prompt})})]}),e("button",{className:"button button-primary popup_start",onClick:()=>p(!1),children:"START"})]})}),modelState:N,setModelState:p,bgClosePopUp:!1}),v?e(j,{modelState:u,setModelState:l,updateDrawing:g}):e(D,{modelState:u,setModelState:l,updateDrawing:g})]})}export{O as default};