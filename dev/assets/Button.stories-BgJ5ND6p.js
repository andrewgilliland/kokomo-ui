import{B as o}from"./button-BWjWSBVO.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BDkldWH9.js";import"./preload-helper-D9Z9MdNV.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,u={title:"Example/Button",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:s()}},r={args:{children:"Primary Button"}},e={args:{children:"Secondary Button"}},a={args:{children:"Large Button"}},t={args:{children:"Small Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Primary Button"
    // primary: true,
    // label: 'Button',
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button"
    // label: 'Button',
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Large Button"
    // size: 'large',
    // label: 'Button',
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Small Button"
    // size: 'small',
    // label: 'Button',
  }
}`,...t.parameters?.docs?.source}}};const d=["Primary","Secondary","Large","Small"];export{a as Large,r as Primary,e as Secondary,t as Small,d as __namedExportsOrder,u as default};
