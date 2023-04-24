import{c as R,E as v,i as _,o as P,B as O,a as j,F as V,b as q,_ as i,d as l,e as z,f as I,A as K,S as G,h as k,r as N,s as W,g as J,j as Q,k as F}from"./helpers-9427b1f1.js";import"./_commonjsHelpers-725317a4.js";const y=R(),x=Object.freeze({getForInstance:y.getForInstance,getByType:y.getByType,define(e){return y.register({type:e}),e}});function b(e,t,o){t.source.style.setProperty(e.targetAspect,o.bind(t))}class g{constructor(t,o){this.dataBinding=t,this.targetAspect=o}createCSS(t){return t(this),`var(${this.targetAspect})`}addedCallback(t){var o;const a=t.source;if(!a.$cssBindings){a.$cssBindings=new Map;const c=a.setAttribute;a.setAttribute=(d,f)=>{c.call(a,d,f),d==="style"&&a.$cssBindings.forEach((r,M)=>b(M,r.controller,r.observer))}}const s=(o=t[this.targetAspect])!==null&&o!==void 0?o:t[this.targetAspect]=this.dataBinding.createObserver(this,this);s.controller=t,t.source.$cssBindings.set(this,{controller:t,observer:s})}connectedCallback(t){b(this,t,t[this.targetAspect])}removedCallback(t){t.source.$cssBindings&&t.source.$cssBindings.delete(this)}handleChange(t,o){b(this,o.controller,o)}}x.define(g);const U=`${Math.random().toString(36).substring(2,8)}`;let X=0;const $=()=>`--v${U}${++X}`;function w(e,t){const o=[];let a="";const s=[],c=d=>{s.push(d)};for(let d=0,f=e.length-1;d<f;++d){a+=e[d];let r=t[d];_(r)?r=new g(P(r),$()).createCSS(c):r instanceof O?r=new g(r,$()).createCSS(c):x.getForInstance(r)!==void 0&&(r=r.createCSS(c)),r instanceof v||r instanceof CSSStyleSheet?(a.trim()!==""&&(o.push(a),a=""),o.push(r)):a+=r}return a+=e[e.length-1],a.trim()!==""&&o.push(a),{styles:o,behaviors:s}}const L=(e,...t)=>{const{styles:o,behaviors:a}=w(e,t),s=new v(o);return a.length?s.withBehaviors(...a):s};class D{constructor(t,o){this.behaviors=o,this.css="";const a=t.reduce((s,c)=>(j(c)?this.css+=c:s.push(c),s),[]);a.length&&(this.styles=new v(a))}createCSS(t){return this.behaviors.forEach(t),this.styles&&t(this),this.css}addedCallback(t){t.addStyles(this.styles)}removedCallback(t){t.removeStyles(this.styles)}}x.define(D);L.partial=(e,...t)=>{const{styles:o,behaviors:a}=w(e,t);return new D(o,a)};class Y extends q{}class Z extends V(Y){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const p={submit:"submit",reset:"reset",button:"button"};class n extends Z{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,o){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),o===p.submit&&this.addEventListener("click",this.handleSubmission),t===p.submit&&this.removeEventListener("click",this.handleSubmission),o===p.reset&&this.addEventListener("click",this.handleFormReset),t===p.reset&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type)}}i([l({mode:"boolean"})],n.prototype,"autofocus",void 0);i([l({attribute:"form"})],n.prototype,"formId",void 0);i([l],n.prototype,"formaction",void 0);i([l],n.prototype,"formenctype",void 0);i([l],n.prototype,"formmethod",void 0);i([l({mode:"boolean"})],n.prototype,"formnovalidate",void 0);i([l],n.prototype,"formtarget",void 0);i([l],n.prototype,"type",void 0);i([z],n.prototype,"defaultSlottedContent",void 0);class h{}i([l({attribute:"aria-expanded"})],h.prototype,"ariaExpanded",void 0);i([l({attribute:"aria-pressed"})],h.prototype,"ariaPressed",void 0);I(h,K);I(n,G,h);function tt(e={}){return k`
        <button
            class="control"
            part="control"
            ?autofocus="${t=>t.autofocus}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.formId}"
            formaction="${t=>t.formaction}"
            formenctype="${t=>t.formenctype}"
            formmethod="${t=>t.formmethod}"
            ?formnovalidate="${t=>t.formnovalidate}"
            formtarget="${t=>t.formtarget}"
            name="${t=>t.name}"
            type="${t=>t.type}"
            value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-pressed="${t=>t.ariaPressed}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            ${N("control")}
        >
            ${W(e)}
            <span class="content" part="content">
                <slot ${J("defaultSlottedContent")}></slot>
            </span>
            ${Q(e)}
        </button>
    `}class et extends n{}const ot=L`
    :host(button){
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    :host(button:hover) {
      border-color: #646cff;
      cursor: pointer;
    }
    :host(button:focus),
    :host(button:focus-visible) {
      outline: 4px auto -webkit-focus-ring-color;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="content"]),
    ::slotted([slot="end"]),
    .content {
        display: flex;
    }

    .control.icon-only {
        line-height: 0;
        padding: 0;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 11px;
    }
`;et.define({name:"fast-button",template:tt(),styles:ot,shadowOptions:{mode:"open",delegatesFocus:!0}});const H=k`
    <fast-button
        id="${e=>e.id}"
        autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        ?formnovalidate="${e=>e.formnovalidate}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
    >
        ${e=>e.storyContent}
    </fast-button>
`,st={title:"Components/Button",args:{autofocus:!1,disabled:!1,storyContent:"Button"},argTypes:{autofocus:{control:"boolean"},disabled:{control:"boolean"},formaction:{control:"text"},formenctype:{control:"text"},formId:{control:"text"},formmethod:{control:"text"},formnovalidate:{control:"boolean"},formtarget:{control:"text"},inputValue:{table:{disable:!0}},name:{control:"text"},type:{control:"select",options:Object.values(p)},value:{control:"text"},ariaAtomic:{control:"text"},ariaBusy:{control:"text"},ariaControls:{control:"text"},ariaCurrent:{control:"text"},ariaDescribedby:{control:"text"},ariaDetails:{control:"text"},ariaDisabled:{control:"text"},ariaErrormessage:{control:"text"},ariaExpanded:{control:"text"},ariaFlowto:{control:"text"},ariaHaspopup:{control:"text"},ariaHidden:{control:"text"},ariaInvalid:{control:"text"},ariaKeyshortcuts:{control:"text"},ariaLabel:{control:"text"},ariaLabelledby:{control:"text"},ariaLive:{control:"text"},ariaOwns:{control:"text"},ariaPressed:{control:"text"},ariaRelevant:{control:"text"},ariaRoledescription:{control:"text"},storyContent:{table:{disable:!0}}},parameters:{docs:{}}},m={name:"Button",render:F(H)},u={name:"Disabled",args:{disabled:!0},render:F(H)};var S,C,B;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Button",
  render: createStory(storyTemplate)
}`,...(B=(C=m.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var E,A,T;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Disabled",
  args: {
    disabled: true
  },
  render: createStory(storyTemplate)
}`,...(T=(A=u.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const it=["FirstStory","Disabled"];export{u as Disabled,m as FirstStory,it as __namedExportsOrder,st as default};
//# sourceMappingURL=button.stories-229c8159.js.map
