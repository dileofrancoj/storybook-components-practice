import{u as o,j as t}from"./styled-components.browser.esm-D5HaCEKv.js";import"./index-BBhmMsIz.js";const i=[{value:"Home",href:"/home"},{value:"Some Page",href:"/home/some-page"}],g=o.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`,b=o.li`
  &:not(:last-child)::after {
    content: '>';
    margin: 0 0.5em;
  }
`,h=o.span`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
  &:not(:last-child)::after {
    color: #007bff;
  }
  &:hover {
    text-decoration: underline;
  }
`,I=o.span`
  color: black;
`,l=d=>{const{items:a,onItemClick:u}=d,p=(e,r)=>r===a.length-1||a.length===1?t.jsx(I,{children:e.value}):t.jsx(h,{onClick:()=>u(e),children:e.value});return t.jsx(g,{"data-testid":"breadcrumb",children:a.map((e,r)=>t.jsx(b,{children:p(e,r)},`${e.value} - ${r}`))})};l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ItemProps"}],raw:"ItemProps[]"},description:""},onItemClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: ItemProps) => ItemProps",signature:{arguments:[{type:{name:"ItemProps"},name:"item"}],return:{name:"ItemProps"}}},description:""}}};const x={title:"Molecules/Breadcrumb",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:i,onItemClick:{action:"breadcrum clicked"}}},n={args:{items:i}};var s,c,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    items: breadcrumb
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["Playground"];export{n as Playground,P as __namedExportsOrder,x as default};
