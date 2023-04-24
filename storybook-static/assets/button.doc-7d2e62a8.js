import{r as d}from"./index-2812c619.js";import{u as c}from"./index-657034b5.js";import"./_commonjsHelpers-725317a4.js";var n={},p={get exports(){return n},set exports(r){n=r}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=d,x=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,f=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function h(r,t,o){var e,s={},i=null,a=null;o!==void 0&&(i=""+o),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(e in t)j.call(t,e)&&!b.hasOwnProperty(e)&&(s[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)s[e]===void 0&&(s[e]=t[e]);return{$$typeof:x,type:r,key:i,ref:a,props:s,_owner:f.current}}l.Fragment=u;l.jsx=h;l.jsxs=h;(function(r){r.exports=l})(p);function _(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?n.jsx(t,Object.assign({},r,{children:n.jsx(o,{})})):o();function o(){const e=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",code:"code",a:"a",hr:"hr",ol:"ol",h4:"h4",pre:"pre",em:"em"},c(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"button--anchor",children:"Button & Anchor"}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The button component represent an control that should invoke an action or perform a navigation."}),`
`,n.jsx(e.h3,{id:"use-cases",children:"Use Cases"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Creating simple button or link elements"}),`
`]}),`
`,n.jsx(e.h3,{id:"non-goals",children:"Non-goals"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Complex or composite buttons (like split button)"}),`
`,n.jsxs(e.li,{children:['Inline "hypertext" anchor',`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'This component will expose a base class that a "hypertext" component can leverage, but the component itself is not in the scope of the button.'}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Can represent either a hyperlink or a button"}),`
`,n.jsxs(e.li,{children:['Appearances including "lightweight", "justified", "outline", "primary" and "stealth"',`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`I'm proposing dropping "justified" because this is a simple matter of removing starting padding.`}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"risks-and-challenges",children:"Risks and Challenges"}),`
`,n.jsxs(e.p,{children:["Prior implementations of button provide the opportunity to create a ",n.jsx(e.code,{children:"button"})," element or an ",n.jsx(e.code,{children:"a"})," element. The ",n.jsx(e.code,{children:"button"})," element is a form-associated element but the ",n.jsx(e.code,{children:"a"})," element is not. If we expose a single polymorphic button component that can represent both a ",n.jsx(e.code,{children:"button"})," and an ",n.jsx(e.code,{children:"a"})," - we need to figure out how to only form-associate the ",n.jsx(e.code,{children:"button"}),"."]}),`
`,n.jsx(e.p,{children:"Button also supports a number of appearance options. Ideally these using one of these appearances does not incur the debt of the others, including recipe registrations and CSS bloat."}),`
`,n.jsx(e.h3,{id:"prior-artexamples",children:"Prior Art/Examples"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/@microsoft/fast-components-react-msft",target:"_blank",rel:"nofollow noopener noreferrer",children:"FAST Button & FAST Anchor (React)"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://material-ui.com/components/buttons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Material UI"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.lightningdesignsystem.com/components/buttons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Lightning Design System"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.carbondesignsystem.com/components/button/code",target:"_blank",rel:"nofollow noopener noreferrer",children:"Carbon Design"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://ant.design/components/button/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Ant Design"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://atlaskit.atlassian.com/packages/core/button",target:"_blank",rel:"nofollow noopener noreferrer",children:"Atlassian"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developer.microsoft.com/en-us/fabric#/controls/web/button",target:"_blank",rel:"nofollow noopener noreferrer",children:"Office Fabric"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/buttons",target:"_blank",rel:"nofollow noopener noreferrer",children:"Windows (UWP)"})}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"design",children:"Design"}),`
`,n.jsx(e.p,{children:"The library would expose 2 custom element definitions:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"fast-button"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"fast-anchor"})}),`
`]}),`
`,n.jsxs(e.p,{children:['All "button" components will be form-associated and support all methods and attributes of the ',n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",target:"_blank",rel:"nofollow noopener noreferrer",children:"button"})," element."]}),`
`,n.jsxs(e.p,{children:['All "anchor" components will support all methods and attributes of the ',n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",target:"_blank",rel:"nofollow noopener noreferrer",children:"anchor"})," element."]}),`
`,n.jsx(e.h3,{id:"api",children:"API"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"%5Bbutton%5D(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)",children:"button"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",target:"_blank",rel:"nofollow noopener noreferrer",children:"anchor"})}),`
`,n.jsxs(e.li,{children:["appearance: ",n.jsx(e.code,{children:'"neutral"  | "outline" | "lightweight" | "stealth" | "primary"'})," (and ",n.jsx(e.code,{children:'"hypertext"'})," for anchor)"]}),`
`]}),`
`,n.jsx(e.h3,{id:"anatomy-and-appearance",children:"Anatomy and Appearance"}),`
`,n.jsx(e.h4,{id:"button",children:"Button"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<host>
  <button> <!-- focus deferred to this element -->
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
  </button>
</host>
`})}),`
`,n.jsx(e.h4,{id:"anchor",children:"Anchor"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<host>
  <a> <!-- focus deferred to this element -->
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
  </a>
</host>
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Slot Names"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"start: the content to place at the start of the primary content"}),`
`,n.jsx(e.li,{children:"default: the element's content"}),`
`,n.jsx(e.li,{children:"end: the content to place at the end of the the primary content"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["Both components create ",n.jsx(e.em,{children:"internal"})," native elements to which attributes will get reflected. Focus will also be deferred to these internal elements."]})]})}}export{_ as default};
//# sourceMappingURL=button.doc-7d2e62a8.js.map
