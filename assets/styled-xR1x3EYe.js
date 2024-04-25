import{u as o,a as t}from"./styled-components.browser.esm-D5HaCEKv.js";const r=e=>{switch(e){case"primary":return"#007bff";case"secondary":return"#6c757d";case"success":return"#28a745";case"danger":return"#dc3545";default:return"#007bff"}},n=o.span`
  color: ${e=>e.textColor??"white"};
`,s=o.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${e=>t`
    color: #fff;
    background-color: ${r(e.variant??"primary")};
    border-color: ${r(e.variant??"primary")};
  `}

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:disabled,
  &:disabled:hover {
    opacity: 0.65;
  }
`;export{s as B,n as L};
