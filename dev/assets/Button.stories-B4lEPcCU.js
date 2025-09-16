import{j as _}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-D68I4CP1.js";import{c as V,S as O,a as C}from"./utils-CYUdlUxM.js";import"./preload-helper-D9Z9MdNV.js";const h=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,f=V,N=(t,a)=>e=>{var i;if(a?.variants==null)return f(t,e?.class,e?.className);const{variants:l,defaultVariants:s}=a,x=Object.keys(l).map(r=>{const n=e?.[r],d=s?.[r];if(n===null)return null;const o=h(n)||h(d);return l[r][o]}),p=e&&Object.entries(e).reduce((r,n)=>{let[d,o]=n;return o===void 0||(r[d]=o),r},{}),S=a==null||(i=a.compoundVariants)===null||i===void 0?void 0:i.reduce((r,n)=>{let{class:d,className:o,...B}=n;return Object.entries(B).every(k=>{let[b,g]=k;return Array.isArray(g)?g.includes({...s,...p}[b]):{...s,...p}[b]===g})?[...r,d,o]:r},[]);return f(t,x,S,e?.class,e?.className)},j=N("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function y({className:t,variant:a,size:e,asChild:i=!1,...l}){const s=i?O:"button";return _.jsx(s,{"data-slot":"button",className:C(j({variant:a,size:e,className:t})),...l})}y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{fn:w}=__STORYBOOK_MODULE_TEST__,L={title:"Example/Button",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:w()}},c={args:{children:"Primary Button"}},u={args:{children:"Secondary Button"}},m={args:{children:"Large Button"}},v={args:{children:"Small Button"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Primary Button"
    // primary: true,
    // label: 'Button',
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button"
    // label: 'Button',
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Large Button"
    // size: 'large',
    // label: 'Button',
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Small Button"
    // size: 'small',
    // label: 'Button',
  }
}`,...v.parameters?.docs?.source}}};const A=["Primary","Secondary","Large","Small"];export{m as Large,c as Primary,u as Secondary,v as Small,A as __namedExportsOrder,L as default};
