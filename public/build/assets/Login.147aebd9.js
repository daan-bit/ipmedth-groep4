import{b as r,a as s,j as c,I as i}from"./app.81bb8d2d.js";import{S as l}from"./StudentCardItem.cefd8207.js";const o=()=>{const{students:t}=r().props;return s("main",{className:"background",children:c("article",{className:"students",children:[s("section",{className:"students__header",children:s("h1",{className:"students__title",children:"Kies je naam"})}),s("section",{className:"students__list",children:t.map(({id:e,first_name:a,user_id:n})=>s(i,{href:route("student.login",e),className:"student__item__link",children:s(l,{id:e,first_name:a,user_id:n})},e))})]})})};export{o as default};
