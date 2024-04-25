import{u as n,j as s}from"./styled-components.browser.esm-D5HaCEKv.js";import"./index-BBhmMsIz.js";const o={primary:"#007bff",error:"#dc3545",border:"#ced4da"},g=n.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({error:r})=>r===!0?"#dc3545":"#ced4da"};
  border-radius: 0.35rem;
  width: 100%;
  margin-bottom: 1rem;
  transition:
    border-color: 0.15s ease-in-out,
    box-shadow: 0.15s ease-in-out;
  
  border: 1px solid ${({error:r})=>r!==null?o.error:o.border};
  &:focus {
    border-color: ${({error:r})=>r!==null?o.error:o.primary};
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`,f=n.div`
  margin-bottom: 1rem;
`,h=n.label`
  display: block;
  margin-bottom: 0.25rem;
  font-weight: bold;
`,l=({label:r,error:p,placeholder:c,onChange:m,value:u,name:e,...b})=>s.jsxs(f,{children:[r!==null&&s.jsx(h,{htmlFor:e,children:r}),s.jsx(g,{id:e,name:e,error:!!p,placeholder:c,onChange:m,value:u,"aria-labelledby":e,...b})]});l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""}},composes:["InputHTMLAttributes"]};const I={title:"Atoms/Input",component:l,tags:["autodocs"],parameters:{docs:{description:{component:'import {Input} from "@..."'}},layout:"centered"},argTypes:{placeholder:{description:"Input placeholder",type:"string",defaultValue:"placeholder"}}},t={args:{placeholder:"Nombre",label:"Nombre",required:!1}};var a,d,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    placeholder: 'Nombre',
    label: 'Nombre',
    required: false
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const q=["Playground"];export{t as Playground,q as __namedExportsOrder,I as default};
