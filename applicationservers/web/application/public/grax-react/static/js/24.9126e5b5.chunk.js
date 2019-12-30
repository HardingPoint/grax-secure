(this.webpackJsonpgraxreact=this.webpackJsonpgraxreact||[]).push([[24],{105:function(e){e.exports=JSON.parse('{"component":"checkbox","status":"prod","display-name":"Checkboxes","classKey":"Checkbox","last-accessibility-review":{"date-iso-8601":"2018/01/18","commit-sha":"ad6b6c6523ee21cada11be5f7ea4d99abc530726"},"SLDS-component-path":"/components/checkbox","site-stories":[{"heading":"Default","path":"/__examples__/default.jsx"},{"heading":"Error State","path":"/__examples__/error.jsx"},{"heading":"Toggle","path":"/__examples__/toggle.jsx"},{"heading":"Grouped with Tri-State","path":"/__examples__/grouped-with-tristate.jsx"}],"url-slug":"checkboxes"}')},121:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var r=t(9),n=t(10),s=t(13),l=t(11),o=t(12),i=t(1),c=t.n(i),d=t(71),u=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"slds-form-element"},c.a.createElement("label",{className:"slds-form-element__label",htmlFor:this.props.id},this.props.label),this.props.helpTextTooltip,c.a.createElement("div",{className:"slds-form-element__control"},c.a.createElement(d.a,{key:this.props.id,assistiveText:{label:this.props.label},id:this.props.id,variant:"toggle",defaultChecked:this.props.defaultValue,onChange:function(a){a.persist(),e.props.onChange(a.target.checked)}})))}}]),a}(c.a.PureComponent)},71:function(e,a,t){"use strict";var r=t(1),n=t.n(r),s=t(0),l=t.n(s),o=t(3),i=t.n(o),c=t(14),d=t.n(c),u=t(6),p=t(16);var b=function(){},m=t(105),h=t(2),f=t(55),g=t(66);function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){C(e,a,t[a])}))}return e}function k(){return(k=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,a){return(N=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function C(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var O={"aria-controls":l.a.string,"aria-describedby":l.a.string,"aria-labelledby":l.a.string,"aria-owns":l.a.string,"aria-required":l.a.bool,assistiveText:l.a.shape({heading:l.a.string,label:l.a.string}),checked:l.a.bool,defaultChecked:l.a.bool,className:l.a.oneOfType([l.a.array,l.a.object,l.a.string]),disabled:l.a.bool,errorText:l.a.string,id:l.a.string,indeterminate:l.a.bool,labels:l.a.shape({heading:l.a.string,label:l.a.string,toggleDisabled:l.a.string,toggleEnabled:l.a.string}),name:l.a.string,onBlur:l.a.func,onChange:l.a.func,onFocus:l.a.func,onKeyDown:l.a.func,onKeyPress:l.a.func,onKeyUp:l.a.func,readOnly:l.a.bool,required:l.a.bool,role:l.a.string,variant:l.a.oneOf(["base","toggle","button-group","visual-picker"]),coverable:l.a.bool,vertical:l.a.bool,onRenderVisualPicker:l.a.func,onRenderVisualPickerSelected:l.a.func,onRenderVisualPickerNotSelected:l.a.func,size:l.a.oneOf(["medium","large"])},P={assistiveText:{},labels:{toggleDisabled:"Disabled",toggleEnabled:"Enabled"},variant:"base"},w=function(e){function a(e){var t,r,s;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),r=this,s=x(a).call(this,e),t=!s||"object"!==y(s)&&"function"!==typeof s?E(r):s,C(E(t),"getId",(function(){return t.props.id||t.generatedId})),C(E(t),"getErrorId",(function(){return t.props.errorText?"".concat(t.getId(),"-error-text"):void 0})),C(E(t),"getAriaDescribedBy",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.idArray,r=void 0===a?[]:a;return r.concat(t.props["aria-describedby"],t.getErrorId()).filter(Boolean).join(" ")||void 0})),C(E(t),"handleChange",(function(e){var a=t.props,r=a.checked,n=a.indeterminate,s=a.onChange;"function"===typeof s&&(t.props.oldEventParameterOrder?s(e.target.checked,e,{checked:!!n||!r,indeterminate:!1}):s(e,{checked:!!n||!r,indeterminate:!1}))})),C(E(t),"handleKeyDown",(function(e){e.keyCode&&(e.keyCode!==u.a.ENTER&&e.keyCode!==u.a.SPACE||(p.a.trapImmediate(e),t.handleChange(e)))})),C(E(t),"renderButtonGroupVariant",(function(e,a,r,s){return n.a.createElement("span",{className:"slds-button slds-checkbox_button"},n.a.createElement("input",k({disabled:e.disabled},void 0!==e.checked?{checked:e.checked}:{defaultChecked:e.defaultChecked},{id:t.getId(),name:e.name,onBlur:e.onBlur,onChange:t.handleChange,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onKeyPress:e.onKeyPress,onKeyUp:e.onKeyUp,ref:function(e){t.input=e},role:e.role,required:e.required,type:"checkbox"},a,{"aria-describedby":t.getAriaDescribedBy()})),n.a.createElement("label",{className:"slds-checkbox_button__label",htmlFor:t.getId()},n.a.createElement("span",{className:"slds-checkbox_faux"},s.label),r.label?n.a.createElement("span",{className:"slds-assistive-text"},r.label):null))})),C(E(t),"renderBaseVariant",(function(e,a,r,s){return n.a.createElement("div",{className:i()("slds-form-element",{"is-required":e.required,"slds-has-error":e.errorText},e.className)},n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("span",{className:"slds-checkbox"},e.required?n.a.createElement("abbr",{className:"slds-required",title:"required"},"*"):null,n.a.createElement("input",k({disabled:e.disabled},void 0!==e.checked?{checked:e.checked}:{defaultChecked:e.defaultChecked},{id:t.getId(),name:e.name,onBlur:e.onBlur,onChange:t.handleChange,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onKeyPress:e.onKeyPress,onKeyUp:e.onKeyUp,ref:function(a){a&&(a.indeterminate=e.indeterminate),t.input=a},role:e.role,required:e.required,type:"checkbox"},a,{"aria-describedby":t.getAriaDescribedBy()})),n.a.createElement("label",{className:"slds-checkbox__label",htmlFor:t.getId(),id:e.labelId},n.a.createElement("span",{className:"slds-checkbox_faux"}),s.label?n.a.createElement("span",{className:"slds-form-element__label"},s.label):null,r.label?n.a.createElement("span",{className:"slds-assistive-text"},r.label):null))),e.errorText?n.a.createElement("div",{className:"slds-form-element__help",id:t.getErrorId()},e.errorText):null)})),C(E(t),"renderToggleVariant",(function(e,a,r,s){return n.a.createElement("div",{className:i()("slds-form-element",{"is-required":e.required,"slds-has-error":e.errorText},e.className)},n.a.createElement("label",{className:"slds-checkbox_toggle slds-grid",htmlFor:t.getId()},e.required?n.a.createElement("abbr",{className:"slds-required",title:"required"},"*"):null,s.label?n.a.createElement("span",{className:"slds-form-element__label slds-m-bottom_none"},s.label):null,r.label?n.a.createElement("span",{className:"slds-assistive-text"},r.label):null,n.a.createElement("input",k({disabled:e.disabled,id:t.getId()},void 0!==e.checked?{checked:e.checked}:{defaultChecked:e.defaultChecked},{name:e.name,onBlur:e.onBlur,onChange:t.handleChange,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onKeyPress:e.onKeyPress,onKeyUp:e.onKeyUp,ref:function(e){t.input=e},role:e.role,required:e.required,type:"checkbox"},a,{"aria-describedby":t.getAriaDescribedBy({idArray:["".concat(t.getId(),"-desc")]})})),n.a.createElement("span",{id:"".concat(t.getId(),"-desc"),className:"slds-checkbox_faux_container","aria-live":"assertive"},n.a.createElement("span",{className:"slds-checkbox_faux"}),n.a.createElement("span",{className:"slds-checkbox_on"},s.toggleEnabled),n.a.createElement("span",{className:"slds-checkbox_off"},s.toggleDisabled))),e.errorText?n.a.createElement("div",{className:"slds-form-element__help",id:t.getErrorId()},e.errorText):null)})),C(E(t),"renderVisualPickerVariant",(function(e,a,r){return n.a.createElement("span",{className:i()("slds-visual-picker","slds-visual-picker_".concat(t.props.size),t.props.vertical?"slds-visual-picker_vertical":null)},n.a.createElement("input",k({disabled:e.disabled},void 0!==e.checked?{checked:e.checked}:{defaultChecked:e.defaultChecked},{id:t.getId(),name:e.name,onBlur:e.onBlur,onChange:t.handleChange,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onKeyPress:e.onKeyPress,onKeyUp:e.onKeyUp,ref:function(e){t.input=e},role:e.role,required:e.required,type:"checkbox"},a,{"aria-describedby":t.getAriaDescribedBy()})),n.a.createElement("label",{className:"slds-checkbox_button__label",htmlFor:t.getId()},t.props.coverable?n.a.createElement("div",{className:"slds-visual-picker__figure slds-visual-picker__icon slds-align_absolute-center"},n.a.createElement("span",{className:"slds-is-selected"},t.props.onRenderVisualPickerSelected()),n.a.createElement("span",{className:"slds-is-not-selected"},t.props.onRenderVisualPickerNotSelected())):n.a.createElement("span",{className:"slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-center"},t.props.onRenderVisualPicker()),t.props.vertical?null:n.a.createElement("span",{className:"slds-visual-picker__body"},t.props.labels.heading?n.a.createElement("span",{className:"slds-text-heading_small"},t.props.labels.heading):null,n.a.createElement("span",{className:"slds-text-title"},t.props.labels.label),r.label||r.heading?n.a.createElement("span",{className:"slds-assistive-text"},r.label||r.heading):null),t.props.coverable?null:n.a.createElement("span",{className:"slds-icon_container slds-visual-picker__text-check"},n.a.createElement(f.a,{assistiveText:t.props.assistiveText,category:"utility",name:"check",colorVariant:"base",size:"x-small"}))))})),b(h.l,t.props,m),t.generatedId=d.a.generate(),t}var t,r,s;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&N(e,a)}(a,e),t=a,(r=[{key:"render",value:function(){var e=Object(g.a)(this.props);"toggle"===this.props.variant&&(e["aria-describedby"]="".concat(this.getId(),"-desc"));var a=v({},P.assistiveText,"string"===typeof this.props.assistiveText?{label:this.props.assistiveText}:{},"object"===y(this.props.assistiveText)?this.props.assistiveText:{}),t=v({},P.labels,this.props.label?{label:this.props.label}:{},this.props.labels),r={base:this.renderBaseVariant,"button-group":this.renderButtonGroupVariant,toggle:this.renderToggleVariant,"visual-picker":this.renderVisualPickerVariant};return r[this.props.variant]?r[this.props.variant](this.props,e,a,t):r.base(this.props,e,a,t)}}])&&_(t.prototype,r),s&&_(t,s),a}(n.a.Component);w.displayName=h.l,w.propTypes=O,w.defaultProps=P;a.a=w}}]);
//# sourceMappingURL=24.9126e5b5.chunk.js.map