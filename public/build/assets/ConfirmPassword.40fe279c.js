import{u as l,r as c,j as a,a as s,H as p}from"./app.b6cd464c.js";import{I as u}from"./InputError.649dd925.js";import{I as f}from"./InputLabel.71c505dd.js";import{P as w}from"./PrimaryButton.abdfebea.js";import{T as h}from"./TextInput.5774271b.js";/* empty css               */function y(){const{data:e,setData:t,post:o,processing:m,errors:n,reset:i}=l({password:""});c.exports.useEffect(()=>()=>{i("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a("div",{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(f,{forInput:"password",value:"Password"}),s(h,{type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(u,{message:n.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(w,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{y as default};