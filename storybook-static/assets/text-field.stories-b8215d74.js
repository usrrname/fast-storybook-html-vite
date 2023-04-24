import{F as v,b as $,_ as o,d as r,f as m,n as s,e as b,A as T,S as w,U as S,h as n,g as E,s as C,r as L,j as F,k as y}from"./helpers-9427b1f1.js";import"./_commonjsHelpers-725317a4.js";class I extends ${}class M extends v(I){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const g={email:"email",password:"password",tel:"tel",text:"text",url:"url"};class a extends M{constructor(){super(...arguments),this.type=g.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&S.enqueue(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}o([r({attribute:"readonly",mode:"boolean"})],a.prototype,"readOnly",void 0);o([r({mode:"boolean"})],a.prototype,"autofocus",void 0);o([r],a.prototype,"placeholder",void 0);o([r],a.prototype,"type",void 0);o([r],a.prototype,"list",void 0);o([r({converter:s})],a.prototype,"maxlength",void 0);o([r({converter:s})],a.prototype,"minlength",void 0);o([r],a.prototype,"pattern",void 0);o([r({converter:s})],a.prototype,"size",void 0);o([r({mode:"boolean"})],a.prototype,"spellcheck",void 0);o([b],a.prototype,"defaultSlottedNodes",void 0);class f{}m(f,T);m(a,w,f);const k=t=>{var e;return t.nodeType!==Node.TEXT_NODE||!!(!((e=t.nodeValue)===null||e===void 0)&&e.trim().length)};function A(t={}){return n`
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${E({property:"defaultSlottedNodes",filter:k})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${C(t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                name="${e=>e.name}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${L("control")}
            />
            ${F(t)}
        </div>
    `}class H extends a{}H.define({name:"fast-text-field",template:A()});const O=n`
    <fast-text-field
        id="${t=>t.id}"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        ?readonly="${t=>t.readOnly}"
        ?required="${t=>t.required}"
        ?spellcheck="${t=>t.spellcheck}"
        list="${t=>t.list}"
        maxlength="${t=>t.maxlength}"
        minlength="${t=>t.minlength}"
        name="${t=>t.name}"
        pattern="${t=>t.pattern}"
        placeholder="${t=>t.placeholder}"
        resize="${t=>t.resize}"
        size="${t=>t.size}"
        tabindex="${t=>t.disabled?null:"0"}"
        type="${t=>t.type}"
        value="${t=>t.value}"
    >
        ${t=>t.storyContent}
    </fast-text-field>
`,D={title:"Components/Text Field",args:{autofocus:!1,disabled:!1,readOnly:!1,required:!1,spellcheck:!1},argTypes:{autofocus:{control:"boolean"},disabled:{control:"boolean"},list:{control:"text"},maxlength:{control:"number"},minlength:{control:"number"},name:{control:"text"},pattern:{control:"text"},placeholder:{control:"text"},readOnly:{control:"boolean"},required:{control:"boolean"},size:{control:"number"},spellcheck:{control:"boolean"},type:{control:"select",options:Object.values(g)},value:{control:"text"},ariaAtomic:{control:"text"},ariaBusy:{control:"text"},ariaControls:{control:"text"},ariaCurrent:{control:"text"},ariaDescribedby:{control:"text"},ariaDetails:{control:"text"},ariaDisabled:{control:"text"},ariaErrormessage:{control:"text"},ariaFlowto:{control:"text"},ariaHaspopup:{control:"text"},ariaHidden:{control:"text"},ariaInvalid:{control:"text"},ariaKeyshortcuts:{control:"text"},ariaLabel:{control:"text"},ariaLabelledby:{control:"text"},ariaLive:{control:"text"},ariaOwns:{control:"text"},ariaRelevant:{control:"text"},ariaRoledescription:{control:"text"},storyContent:{table:{disable:!0}}},parameters:{docs:{format:"html"}}},l={name:"Text Field",args:{placeholder:"Enter Text"},render:y(O)},i={name:"With Slotted Start and End",render:y(n`<fast-text-field>
  <svg slot="start" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M10.35 3.15c.2.2.2.5 0 .7L6.21 8l4.14 4.15a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z"/></svg>
  <svg slot="end" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.65 3.15a.5.5 0 0 0 0 .7L9.79 8l-4.14 4.15a.5.5 0 0 0 .7.7l4.5-4.5a.5.5 0 0 0 0-.7l-4.5-4.5a.5.5 0 0 0-.7 0Z"/></svg>
</fast-text-field>`)};var d,c,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Text Field',
  args: {
    placeholder: 'Enter Text'
  },
  render: createStory(storyTemplate)
}`,...(p=(c=l.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var h,u,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'With Slotted Start and End',
  render: createStory(html\`<fast-text-field>
  <svg slot="start" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M10.35 3.15c.2.2.2.5 0 .7L6.21 8l4.14 4.15a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z"/></svg>
  <svg slot="end" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.65 3.15a.5.5 0 0 0 0 .7L9.79 8l-4.14 4.15a.5.5 0 0 0 .7.7l4.5-4.5a.5.5 0 0 0 0-.7l-4.5-4.5a.5.5 0 0 0-.7 0Z"/></svg>
</fast-text-field>\`)
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const q=["GenericStory","TextFieldWithSlottedStartEnd"];export{l as GenericStory,i as TextFieldWithSlottedStartEnd,q as __namedExportsOrder,D as default};
//# sourceMappingURL=text-field.stories-b8215d74.js.map
