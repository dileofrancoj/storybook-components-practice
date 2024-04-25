import{j as a}from"./styled-components.browser.esm-D5HaCEKv.js";import{B as g,L as v}from"./styled-xR1x3EYe.js";import"./index-BBhmMsIz.js";const l=({variant:u="primary",textColor:d,label:m,onButtonClick:p,...y})=>a.jsx(g,{onClick:p,variant:u,...y,children:a.jsx(v,{textColor:d,children:m})});l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:""},onButtonClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const x={title:"Atoms/Button",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:["primary","secondary","success","danger"],control:{type:"radio"},description:"The visual style of the button"},onButtonClick:{action:"On button click"}}},e={args:{variant:"primary",label:"Button"}},r={args:{variant:"secondary",label:"Button"}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    // Establecer el valor predeterminado aquí
    label: 'Button'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Button'
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const T=["Primary","Secondary"];export{e as Primary,r as Secondary,T as __namedExportsOrder,x as default};
