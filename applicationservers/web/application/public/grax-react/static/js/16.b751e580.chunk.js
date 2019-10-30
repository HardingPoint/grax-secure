(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{118:function(e,t,a){"use strict";var s=a(1),n=a.n(s),i=a(0),l=a.n(i),o=a(3),r=a.n(o),c=a(15),u=a.n(c),p=a(60),d=a.n(p),h=a(2);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function g(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O={assistiveText:l.a.shape({label:l.a.string}),children:l.a.node.isRequired,className:l.a.oneOfType([l.a.array,l.a.object,l.a.string]),labels:l.a.shape({error:l.a.string,label:l.a.string}),onChange:l.a.func,disabled:l.a.bool,required:l.a.bool,name:l.a.string,errorId:l.a.string,variant:l.a.oneOf(["base","button-group"])},_={assistiveText:{},labels:{},variant:"base"},y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,b(t).apply(this,arguments))}var a,s,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,n.a.Component),a=t,(s=[{key:"componentWillMount",value:function(){this.generatedName=u.a.generate(),this.generatedErrorId=u.a.generate()}},{key:"getErrorId",value:function(){if(this.hasError())return this.props.errorId||this.generatedErrorId}},{key:"getName",value:function(){return this.props.name||this.generatedName}},{key:"hasError",value:function(){return!!this.labels.error}},{key:"render",value:function(){var e=this;this.labels=this.props.labels?d()({},_.labels,this.props.labels):_.labels;var t=n.a.Children.map(this.props.children,function(t){return n.a.cloneElement(t,{name:e.getName(),onChange:e.props.onChange,"aria-describedby":e.getErrorId(),disabled:e.props.disabled})});return n.a.createElement("fieldset",{className:r()("slds-form-element",{"slds-has-error":this.labels.error})},n.a.createElement("legend",{className:r()("slds-form-element__legend","slds-form-element__label",this.props.assistiveText.label?"slds-assistive-text":"")},this.props.required?n.a.createElement("abbr",{className:"slds-required",title:"required"},"*"):null,this.props.assistiveText.label?this.props.assistiveText.label:this.labels.label),n.a.createElement("div",{className:r()("slds-form-element__control",this.props.className)},"button-group"===this.props.variant?n.a.createElement("div",{style:this.props.style,className:"slds-radio_button-group"},t):t,this.labels.error?n.a.createElement("div",{id:this.getErrorId(),className:"slds-form-element__help"},this.labels.error):null))}}])&&m(a.prototype,s),i&&m(a,i),t}();y.displayName=h.M,y.propTypes=O,y.defaultProps=_;var S=y;function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var k={assistiveText:l.a.shape({label:l.a.string}),children:l.a.node.isRequired,className:l.a.oneOfType([l.a.array,l.a.object,l.a.string]),labels:l.a.shape({error:l.a.string,label:l.a.string}),onChange:l.a.func,disabled:l.a.bool,required:l.a.bool,name:l.a.string,errorId:l.a.string},F=function(e){e.variant;var t=C(e,["variant"]);return n.a.createElement(S,E({variant:"button-group"},t))};F.displayName=h.L,F.propTypes=k,F.defaultProps={labels:{},assistiveText:{}};t.a=F},141:function(e,t,a){"use strict";a.r(t);var s=a(62),n=a(10),i=a(11),l=a(14),o=a(12),r=a(13),c=a(1),u=a.n(c),p=a(8),d=a.n(p),h=a(58),f=a(51),m=a(151),g=a(54),b=a(5),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={options:[],inputValue:"",selection:[],isLoaded:!1,error:null},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){g.a.ajax({type:"GET",url:g.c+"/grax-app/grax-data-lake/salesforce/describeGlobal/sobjects"+Object(g.b)({action:"load"}),data:{_bools:"createable,layoutable,triggerable",_select:"name,label"},success:function(e){var t=this;this.setState({options:d.a.map(e,function(e,t){return{id:e.name,label:e.label,index:"grax"+e.name.toLowerCase()+"index"}}),isLoaded:!0}),null!=this.props.selectionKeys&&this.setState({selection:d.a.filter(this.state.options,function(e){return-1!==t.props.selectionKeys.indexOf(e.index)||-1!==t.props.selectionKeys.indexOf(e.id)})}),this.props.onLoad&&this.props.onLoad(!0),this.props.onSelect&&null!=this.state.selection&&this.state.selection.length>0&&this.props.onSelect(null,this.state.selection)}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({isLoaded:!0,error:a.toString()}),this.props.onLoad&&this.props.onLoad(!1,a)}.bind(this)})}},{key:"render",value:function(){var e=this;return this.state.error?u.a.createElement("div",null,"Error: ",this.state.error):this.state.isLoaded?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{classNameMenu:"scrollable-GRAXSObjectCombobox",events:{onChange:function(t,a){var s=a.value;e.setState({inputValue:s}),e.props.onChange&&e.props.onChange(t,s)},onRequestRemoveSelectedOption:function(t,a){return!(!e.props.onRequestRemoveSelectedOption||!e.props.onRequestRemoveSelectedOption(t,a.selection))&&(e.setState({inputValue:"",selection:a.selection}),!0)},onSelect:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)}},labels:{placeholder:"Select Salesforce Object"},options:Object(b.e)({inputValue:this.state.inputValue,limit:1e3,options:this.state.options,selection:this.state.selection}),selection:this.state.selection,value:this.state.inputValue,variant:"inline-listbox",required:!0,menuItem:this.props.menuItem})):u.a.createElement("div",{style:{position:"relative",height:"2rem"}},u.a.createElement(f.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component),O=a(65),_=a(61),y=a(112),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={options:[],inputValue:"",selection:[],isLoaded:!1,error:null},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){g.a.ajax({type:"GET",url:g.c+"/grax-app/grax-data-lake/getOrgList"+Object(g.b)({action:"load"}),data:{},success:function(e){this.setState({options:d.a.map(e,function(e,t){return{id:e.id,label:e.id+" ("+e.label+")"}}),isLoaded:!0}),this.props.onLoad&&this.props.onLoad(!0)}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({isLoaded:!0,error:a.toString()}),this.props.onLoad&&this.props.onLoad(!1,a)}.bind(this)})}},{key:"render",value:function(){var e=this;return this.state.error?u.a.createElement("div",null,"Error: ",this.state.error):this.state.isLoaded?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{classNameMenu:"scrollable-GRAXOrgCombobox",events:{onChange:function(t,a){var s=a.value;e.setState({inputValue:s}),e.props.onChange&&e.props.onChange(t,s)},onRequestRemoveSelectedOption:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)}},labels:{placeholder:"Select Salesforce Org"},options:Object(b.e)({inputValue:this.state.inputValue,limit:1e3,options:this.state.options,selection:this.state.selection}),selection:this.state.selection,value:this.state.inputValue,variant:"inline-listbox",required:!0})):u.a.createElement("div",{style:{position:"relative",height:"2rem"}},u.a.createElement(f.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component),E=a(118),C=a(101),k=a(56),F="All fields",M=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={checked:F},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"onChangeHandler",value:function(e){console.log("onChangeHandler"),console.log(e),this.setState({checked:e}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=["Mapped Fields","Un-mapped fields",F];return u.a.createElement("div",{className:"slds-p-bottom_medium"},u.a.createElement(E.a,{onChange:function(t){return e.onChangeHandler(t.target.value)},disabled:this.props.disabled,required:this.props.required,name:this.props.name,errorId:this.props.errorId},d.a.map(t,function(e,t){return u.a.createElement(C.a,{key:"option"+t,id:e,label:e,value:e,checked:this.state.checked===e,variant:"button-group",deselectable:!0})}.bind(this))))}}]),t}(u.a.Component),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={inputValue:"",selection:[],isOpened:!1},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.selection&&this.setState({selection:this.props.selection})}},{key:"filterOptionsHandler",value:function(){var e=this.props.options;return this.props.filterOptionsHandler&&this.state.isOpened&&(e=this.props.filterOptionsHandler(e)),Object(b.e)({inputValue:this.state.inputValue,limit:1e3,options:e,selection:this.state.selection})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{classNameMenu:"scrollable-GRAXRestoreMappingDataLakeField",events:{onChange:function(t,a){var s=a.value;e.setState({inputValue:s}),e.props.onChange&&e.props.onChange(t,s)},onRequestRemoveSelectedOption:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)},onOpen:function(t,a){e.setState({isOpened:!0})},onClose:function(t,a){e.setState({isOpened:!1})}},labels:{placeholder:"Select DataLake Field"},options:this.filterOptionsHandler(),selection:this.state.selection,value:this.state.inputValue,required:!0,multiple:!0}))}}]),t}(u.a.Component),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={_graxFieldOptions:null,_graxFieldOptionsList:null,_sfFieldOptions:null,_sfFieldOptionsList:null,_sfMappedFields:null,_error:null,_filterSelection:F,isPreviouslyMapped:!1},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"isLoaded",value:function(){return this.state._error||null!=this.state._graxFieldOptions&&null!=this.state._sfFieldOptions}},{key:"componentDidMount",value:function(){var e=d.a.map(this.props.graxFieldOptions,function(e,t){return e.id}),t=this.props.sfMappedFields||{},a=this.props.sfFieldOptions;d.a.forEach(a,function(a,s){var n=d.a.reduce(t[a.id]||[a.id],function(t,a){return-1!==e.indexOf(a)&&t.push(a),t},[]);n.length>0&&(t[a.id]=n)}),this.setState({_graxFieldOptions:this.props.graxFieldOptions,_graxFieldOptionsList:e,_sfFieldOptions:a,_sfMappedFields:t,sfMappedFieldsList:Object.keys(t),graxMappedFieldsList:d.a.flatten(Object.values(t))})}},{key:"shouldComponentUpdate",value:function(e,t){return this.state._filterSelection!==t._filterSelection||this.props.objectName!==e.objectName||this.state._graxFieldOptions!==t._graxFieldOptions||this.state._sfFieldOptions!==t._sfFieldOptions||this.props.graxFieldOptions!==e.graxFieldOptions||this.props.sfFieldOptions!==e.sfFieldOptions||this.props.sfMappedFields!==e.sfMappedFields||this.props.renderKey!==e.renderKey}},{key:"onMappingChangeHandler",value:function(e,t){var a=d.a.map(t,function(e,t){return e.id}),s=this.state._sfMappedFields;t?s[e]=a:delete s[e],this.setState({_sfMappedFields:s,sfMappedFieldsList:Object.keys(s),graxMappedFieldsList:d.a.flatten(Object.values(s))}),this.props.onMappingChange&&this.props.onMappingChange(e,a)}},{key:"render",value:function(){var e=this;if(this.state._error)return u.a.createElement("div",null,"Error: ",this.state._error);if(this.isLoaded()){var t=this.state._sfFieldOptions;return"Mapped Fields"===this.state._filterSelection&&(t=d.a.filter(t,function(t,a){return null!=e.state._sfMappedFields&&-1!==e.state.sfMappedFieldsList.indexOf(t.id)&&0!==e.state._sfMappedFields[t.id].length})),"Un-mapped fields"===this.state._filterSelection&&(t=d.a.filter(t,function(t,a){return-1===e.state.sfMappedFieldsList.indexOf(t.id)||null==e.state._sfMappedFields[t.id]||0===e.state._sfMappedFields[t.id].length})),t=d.a.sortBy(t,["id"]),u.a.createElement(u.a.Fragment,null,u.a.createElement(M,{onChange:function(t){return e.setState({_filterSelection:t})}}),u.a.createElement("div",{className:"slds-scrollable_y",style:{maxHeight:"50vw"}},u.a.createElement("table",{className:"slds-table slds-table_cell-buffer slds-table_bordered slds-no-row-hover"},u.a.createElement("thead",null,u.a.createElement("tr",{className:"slds-line-height_reset"},this.state._filterSelection===F&&u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Is Mapped?"},"Is Mapped?")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Datalake Field"},"Datalake Field")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Salesforce Field"},"Salesforce Field")))),u.a.createElement("tbody",null,d.a.map(t,function(e,t){var a=this,s=e.id;return u.a.createElement("tr",{className:"slds-hint-parent",key:s},this.state._filterSelection===F&&u.a.createElement("td",{"data-label":"Is Mapped?",style:{width:"10vw"}},null!=this.state._sfMappedFields[s]&&this.state._sfMappedFields[s].length>0&&u.a.createElement(k.a,{category:"utility",color:"warning",name:"check",size:"x-small"})),u.a.createElement("td",{"data-label":"Salesforce Field",style:{width:"60vw"}},u.a.createElement(j,{options:this.state._graxFieldOptions,filterOptionsHandler:function(t){return d.a.filter(t,function(t,s){return-1===a.state.graxMappedFieldsList.indexOf(t.id)&&e.type===t.type})},selection:d.a.map(this.state._sfMappedFields[s],function(e,t){return{id:e,label:e}}),onSelect:function(e,t){return a.onMappingChangeHandler(s,t)},onRequestRemoveSelectedOption:function(e,t){return a.onMappingChangeHandler(s,t)}})),u.a.createElement("td",{"data-label":"Datalake Field",style:{width:"30vw"}},u.a.createElement("div",{className:"slds-truncate",title:e.id},e.id)))}.bind(this))))))}return u.a.createElement("div",{style:{position:"relative",height:"5rem"}},u.a.createElement(f.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component),V=a(117),D=a(142),N=a(155),R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e)))._isMounted=!1,a.state={inputValue:"",selection:[],isOpened:!1},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.props.selection&&this.setState({selection:this.props.selection})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"filterOptionsHandler",value:function(){var e=this.props.options;return this.props.filterOptionsHandler&&this.state.isOpened&&(e=this.props.filterOptionsHandler(e)),Object(b.e)({inputValue:this.state.inputValue,limit:1e3,options:e,selection:this.state.selection})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{classNameMenu:"scrollable-GRAXRestoreMappingSFField",events:{onChange:function(t,a){var s=a.value;e._isMounted&&e.setState({inputValue:s}),e.props.onChange&&e.props.onChange(t,s)},onRequestRemoveSelectedOption:function(t,a){e._isMounted&&e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e._isMounted&&e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)},onOpen:function(t,a){e._isMounted&&e.setState({isOpened:!0})},onClose:function(t,a){e._isMounted&&e.setState({isOpened:!1})}},labels:{placeholder:"Select SalesForce Field"},options:this.filterOptionsHandler(),selection:this.state.selection,value:this.state.inputValue,variant:"readonly",required:!0}))}}]),t}(u.a.Component),L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={_sfFieldOptions:null,_sfFieldOptionsList:null,_sfDefaultValues:null,_mappingOptions:[{id:"DEFAULT",label:"Default To"},{id:"MASK",label:"Mask"}],_maskOptionsString:[{id:"STRING",label:"Mask the last 4 with XXXX"},{id:"STRINGRND",label:"Randomize"}],_maskOptionsPhone:[{id:"PHONE",label:"Mask the last 4 with XXXX"},{id:"PHONERND",label:"Randomize"}],_maskOptionsEmail:[{id:"EMAIL",label:"Mask the domain with @maskeddomain.com"},{id:"EMAILRND",label:"Randomize"}],_maskOptionsDate:[{id:"DATE",label:"Mask the year with 2000"},{id:"DATERND",label:"Randomize"}],_error:null},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"isLoaded",value:function(){return this.state._error||null!=this.state._sfFieldOptions}},{key:"getDefaultValueStruct",value:function(){return{id:null,mapping:[this.state._mappingOptions[0]],masking:null,value:null,isOverride:!1,selectedField:null}}},{key:"getDefaultValuesList",value:function(e){var t=this;return d.a.map(e,function(e,a){var s=t.getDefaultValueStruct();s.id=a,s.mapping=d.a.filter(t.state._mappingOptions,function(t,a){return t.id===e.mapping}),s.mapping||(s.mapping=[t.state._mappingOptions[0]]);var n=[];return t.state._maskOptionsString.forEach(function(e){n.push(e)}),t.state._maskOptionsPhone.forEach(function(e){n.push(e)}),t.state._maskOptionsEmail.forEach(function(e){n.push(e)}),t.state._maskOptionsDate.forEach(function(e){n.push(e)}),s.masking=d.a.filter(n,function(t,a){return t.id===e.masking}),s.value=e.value,s.isOverride=e.override,s.selectedField=d.a.filter(t.state._sfFieldOptions||t.props.sfFieldOptions,function(e,t){return e.id===a})[0]||null,s})}},{key:"componentDidMount",value:function(){var e=this.props.sfDefaultValues||{};this.setState({_sfFieldOptions:this.props.sfFieldOptions,_sfDefaultValues:e,_sfDefaultValuesFields:Object.keys(e),_sfDefaultValuesList:this.getDefaultValuesList(e)})}},{key:"onDefaultValueChangeHandler",value:function(e,t){var a=this.state._sfDefaultValues;if(t){var s=t[0];e.id=s.id,e.selectedField=s,a[e.id]={mapping:e.mapping?e.mapping[0].id:"",masking:e.masking?e.masking[0].id:"",value:e.value,override:e.isOverride}}else delete a[e.id],e.id=null,e.selectedField=null;this.setState({_sfDefaultValues:a,_sfDefaultValuesFields:Object.keys(a),_sfDefaultValuesList:this.state._sfDefaultValuesList}),this.props.onDefaultValueChangeHandler&&this.props.onDefaultValueChangeHandler(e.selectedField,a)}},{key:"addAnotherFieldHandler",value:function(){var e=this.state._sfDefaultValuesList;0!==e.length&&null==e[e.length-1].id||(e.push(this.getDefaultValueStruct()),this.setState({_sfDefaultValuesList:e}))}},{key:"removeFieldHandler",value:function(e){var t=this.state._sfDefaultValues,a=this.state._sfDefaultValuesList;delete t[a[e].id],a.splice(e,1),this.setState({_sfDefaultValues:t,_sfDefaultValuesFields:Object.keys(t),_sfDefaultValuesList:a})}},{key:"render",value:function(){var e=this;return this.state._error?u.a.createElement("div",null,"Error: ",this.state._error):this.isLoaded()?u.a.createElement(u.a.Fragment,null,u.a.createElement("table",{className:"slds-table slds-table_cell-buffer slds-table_bordered slds-no-row-hover"},u.a.createElement("thead",null,u.a.createElement("tr",{className:"slds-line-height_reset"},u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Salesforce Field"},"Salesforce Field")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Option"},"Option",u.a.createElement("div",{style:{texttransform:"none",display:"inline"}},u.a.createElement(V.a,{align:"top left",position:"overflowBoundaryElement",content:'Default To - Set a value which will be used for this field on all records. Mask - Select one of the options from the "Value" picklist'},u.a.createElement("div",{style:{marginRight:"0.5rem",cursor:"pointer"}},u.a.createElement(k.a,{assistiveText:{label:"MAPPING"},category:"utility",name:"info",size:"x-small"})))))),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Value"},"Value")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Is Override?"},"Is Override?")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate"})))),u.a.createElement("tbody",null,d.a.map(this.state._sfDefaultValuesList,function(e,t){var a=this;console.log(e,t);var s=e.id,n=e.selectedField;return u.a.createElement("tr",{className:"slds-hint-parent",key:"sfFieldName: "+(s||"")},u.a.createElement("td",{"data-label":"Salesforce Field",style:{width:"35vw"}},s||u.a.createElement(R,{options:this.state._sfFieldOptions,filterOptionsHandler:function(e){return d.a.filter(e,function(e,t){return-1===a.state._sfDefaultValuesFields.indexOf(e.id)})},selection:[d.a.find(this.state._sfFieldOptions,function(e){return e.id===s})],onSelect:function(t,s){return a.onDefaultValueChangeHandler(e,s)},onRequestRemoveSelectedOption:function(t,s){return a.onDefaultValueChangeHandler(e,s)}})),u.a.createElement("td",{"data-label":"Value",style:{width:"20vw"}},n&&"text"!==n.type&&"date"!==n.type&&this.state._mappingOptions[0].label,n&&("text"===n.type||"date"===n.type)&&u.a.createElement(R,{options:this.state._mappingOptions,filterOptionsHandler:function(e){return a.state._mappingOptions},selection:e.mapping,onSelect:function(t,s){e.mapping=s,e.isOverride=!1,a.onDefaultValueChangeHandler(e,[e.selectedField])},onRequestRemoveSelectedOption:function(t,s){e.mapping=s,a.onDefaultValueChangeHandler(e,[e.selectedField])}})),u.a.createElement("td",{"data-label":"Value",style:{width:"35vw"}},n&&"DEFAULT"===e.mapping[0].id&&(("text"===n.type||"number"===n.type)&&u.a.createElement(D.a,{defaultValue:e.value,assistiveText:{label:n.label},id:n.id,onBlur:function(t){e.value=t.target.value,a.onDefaultValueChangeHandler(e,[e.selectedField])}})||"date"===n.type&&u.a.createElement(N.a,{value:e.value,onChange:function(t,s){e.value=s.date,a.onDefaultValueChangeHandler(e,[e.selectedField])}})||"boolean"===n.type&&u.a.createElement(O.a,{defaultChecked:e.value,onChange:function(t){e.value=t,a.onDefaultValueChangeHandler(e,[e.selectedField])}})),n&&"MASK"===e.mapping[0].id&&"sfType:"+n&&u.a.createElement(R,{options:"phone"===n.sfType?this.state._maskOptionsPhone:"email"===n.sfType?this.state._maskOptionsEmail:"date"===n.type?this.state._maskOptionsDate:this.state._maskOptionsString,filterOptionsHandler:function(e){return"phone"===n.sfType?a.state._maskOptionsPhone:"email"===n.sfType?a.state._maskOptionsEmail:"date"===n.type?a.state._maskOptionsDate:a.state._maskOptionsString},selection:e.masking,onSelect:function(t,s){e.masking=s,a.onDefaultValueChangeHandler(e,[e.selectedField])},onRequestRemoveSelectedOption:function(t,s){e.masking=s,a.onDefaultValueChangeHandler(e,[e.selectedField])}})),u.a.createElement("td",{"data-label":"Is Override?",style:{width:"10vw"}},null==e.mapping[0]||"MASK"!==e.mapping[0].id?u.a.createElement(O.a,{key:"checkbox_enabled",defaultChecked:e.isOverride,onChange:function(t){e.isOverride=t,a.onDefaultValueChangeHandler(e,[e.selectedField])}}):u.a.createElement(O.a,{key:"checkbox_disabled",value:!1,disabled:!0})),u.a.createElement("td",{"data-label":"Actions",style:{width:"10vw"}},u.a.createElement(_.a,{label:"Remove Field",variant:"base",onClick:function(){a.removeFieldHandler(t)}})))}.bind(this)))),u.a.createElement("div",{className:"slds-p-top_medium"},u.a.createElement(_.a,{label:"Add Field",variant:"brand",onClick:function(){e.addAnotherFieldHandler()}}))):u.a.createElement("div",{style:{position:"relative",height:"5rem"}},u.a.createElement(f.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component);function w(e){var t;switch(e){case"date":case"datetime":t="date";break;case"boolean":t="boolean";break;case"double":case"long":case"percent":case"currency":t="number";break;default:t="text"}return t}a.d(t,"default",function(){return H});var T="Some changes have not been saved, do you want to continue?",H=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={selectedSObject:null,_graxFieldOptions:null,_sfFieldOptions:null,_sfMappedFields:{},_sfDefaultValues:{},_error:null,isLoading:!0,_isCustomOrg:!1,_customOrg:null,customMapping:null,hasChanges:!1,isSaving:!1,resetConfirmIsOpen:!1,resetConfirmIsChecked:!1,resetConfirmCallback:function(){return{}},renderCounter:0},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"_onMappingChangeHandler",value:function(e,t){console.log(e,t);var a=this.state._sfMappedFields;a[e]=t,this.setState({_sfMappedFields:a,hasChanges:!0})}},{key:"_onOrgSelectionChangeHandler",value:function(e){console.log(e);var t=e[0]||null;this.state._customOrg===t||this.state.hasChanges&&!confirm(T)||(this.setState({_customOrg:t}),this.onMappingSettingsChange(this.state.selectedSObject,this.state.customMapping))}},{key:"_onOrgSelectionRemoveHandler",value:function(e){var t=e[0]||null;this.state._customOrg===t||this.state.hasChanges&&!confirm(T)||this.setState({_customOrg:t,_sfMappedFields:{},_sfDefaultValues:{}})}},{key:"isMapLoaded",value:function(){return this.state._error||null!=this.state.customMapping&&null!=this.state._graxFieldOptions&&null!=this.state._sfFieldOptions&&null!=this.state._sfDefaultValues}},{key:"componentDidMount",value:function(){this.setState({customMapping:this.props.customMapping})}},{key:"onMappingSettingsChange",value:function(e,t){var a=this.state.customMapping[e]||{};this.state._isCustomOrg&&this.state._customOrg&&(a=a[this.state._customOrg]||{});var s=a.fieldMap||{};this.setState({_sfFieldOptions:d.a.map(t,function(e,t){return{id:e.name,label:e.name,type:w(e.type),sfType:e.type}}),_sfMappedFields:d.a.omit(s,["__defaultValues__"])||{},_sfDefaultValues:s.__defaultValues__||{}})}},{key:"sObjectChangeHandler",value:function(e){g.a.ajax({type:"GET",url:g.c+"/grax-app/grax-data-lake/salesforce/sobjects/"+e+"/fields"+Object(g.b)({action:"load"}),data:{_bools:"createable",_select:"name,type"},success:function(t){this.onMappingSettingsChange(e,t)}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({_error:a.toString()})}.bind(this)}),g.a.ajax({type:"GET",url:g.c+"/grax-app/grax-data-lake/getDataTypeFields/grax"+e.toLowerCase()+"index"+Object(g.b)({action:"load"}),data:{},success:function(e){this.setState({_graxFieldOptions:d.a.map(e,function(e,t){return{id:t,label:t,type:w(e)}})})}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({_error:a.toString()})}.bind(this)})}},{key:"getCustomMappingToSave",value:function(){console.log("this.state.customMapping",this.state.customMapping);var e=this.state._sfMappedFields,t={fieldMap:d.a.reduce(e,function(e,t,a){return d.a.isArray(t)&&1===t.length&&t[0]===a||(e[a]=t),e},{})};return d.a.isEmpty(this.state._sfDefaultValues)||(t.fieldMap.__defaultValues__=this.state._sfDefaultValues),this.state._isCustomOrg&&this.state._customOrg&&(t=d.a.assign({},this.state.customMapping[this.state.selectedSObject.id]||{},Object(s.a)({},this.state._customOrg,t))),console.log("customMapping",t),d.a.assign({},this.state.customMapping,Object(s.a)({},this.state.selectedSObject.id,t))}},{key:"saveCustomMapping",value:function(e){console.log("customMappingToSave",e),this.setState({isSaving:!0}),g.a.ajax({type:"POST",url:g.c+"/grax-app/grax-data-lake/saveCustomMapping"+Object(g.b)({action:"save"}),contentType:"application/json; charset=utf-8",data:JSON.stringify(e),success:function(t){console.log(t),this.setState({customMapping:e,hasChanges:!1,isSaving:!1}),this.props.onMappingChange&&this.props.onMappingChange(e)}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({_error:a.toString(),isSaving:!1})}.bind(this)})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,this.state.isSaving&&u.a.createElement(f.a,{size:"large",variant:"brand"}),u.a.createElement(h.a,{isCollapsible:!0,isOpen:!0,title:"Select your Salesforce Object"},this.state._error||u.a.createElement(v,{menuItem:function(t){return e.state.customMapping[t.option.id]?u.a.createElement("b",null,t.option.id):t.option.id},onSelect:function(t,a){var s=a[0];e.setState({selectedSObject:s}),e.sObjectChangeHandler(s.id)},onRequestRemoveSelectedOption:function(t,a){return!(e.state.hasChanges&&!confirm(T))&&(e.setState({selectedSObject:null,_graxFieldOptions:null,_sfFieldOptions:null,hasChanges:!1}),!0)},onLoad:function(t,a){e.setState({isLoading:!1,_error:a?a.toString:null})},selectionKeys:null!=g.f.datalakeIndex?[g.f.datalakeIndex]:null}),!this.state.isLoading&&u.a.createElement(O.a,{className:"slds-p-top_medium",labels:{label:"Would you like to define a custom field Mapping for a source Organization?"},onChange:function(t){e.setState({_isCustomOrg:t})}}),this.state._isCustomOrg&&u.a.createElement("div",{style:{maxWidth:"50vw"}},u.a.createElement(S,{onSelect:function(t,a){return e._onOrgSelectionChangeHandler(a)},onRequestRemoveSelectedOption:function(t,a){return e._onOrgSelectionRemoveHandler(a)}})),u.a.createElement("div",{className:"slds-m-bottom_large"})),u.a.createElement(h.a,{isCollapsible:!0,isOpen:!0,title:"Map the fields to the appropriate Salesforce field"},this.state.selectedSObject&&(this.isMapLoaded()?u.a.createElement(x,{key:"GRAXRestoreMappingFields_"+this.state.renderCounter,renderKey:"GRAXRestoreMappingFields_"+this.state.renderCounter,objectName:this.state.selectedSObject.id,graxFieldOptions:this.state._graxFieldOptions,sfFieldOptions:this.state._sfFieldOptions,sfMappedFields:this.state._sfMappedFields,onMappingChange:this._onMappingChangeHandler.bind(this)}):u.a.createElement("div",{style:{position:"relative",height:"5rem"}},u.a.createElement(f.a,{size:"medium",variant:"brand"}))),u.a.createElement("div",{className:"slds-m-bottom_large"})),u.a.createElement(h.a,{isCollapsible:!0,isOpen:!0,title:"Set a default field value for fields on this object"},this.state.selectedSObject&&(this.isMapLoaded()?u.a.createElement(L,{key:"GRAXRestoreMappingDefaults_"+this.state.renderCounter,renderKey:"GRAXRestoreMappingDefaults_"+this.state.renderCounter,objectName:this.state.selectedSObject.id,sfFieldOptions:this.state._sfFieldOptions,sfDefaultValues:this.state._sfDefaultValues,onDefaultValueChange:function(t){console.log(t),e.setState({_sfDefaultValues:t,hasChanges:!0})}}):u.a.createElement("div",{style:{position:"relative",height:"5rem"}},u.a.createElement(f.a,{size:"medium",variant:"brand"}))),u.a.createElement("div",{className:"slds-m-bottom_large"})),u.a.createElement("div",null,this.state.selectedSObject&&this.isMapLoaded()&&u.a.createElement(u.a.Fragment,null,u.a.createElement(_.a,{label:"Save",variant:"brand",onClick:function(){var t=e.getCustomMappingToSave();e.saveCustomMapping(t)}}),this.state.customMapping&&this.state.customMapping[this.state.selectedSObject.id]&&u.a.createElement(_.a,{label:"Reset Mapping",variant:"destructive",onClick:function(){e.setState({resetConfirmIsOpen:!0,resetConfirmIsChecked:!1,resetConfirmCallback:function(){if(e.state.resetConfirmIsChecked&&confirm("Are you sure that you want to reset the selected mapping?")){e.setState({_sfMappedFields:{},_sfDefaultValues:{},renderCounter:e.state.renderCounter+1,resetConfirmIsOpen:!1,resetConfirmCallback:function(){}});var t=e.getCustomMappingToSave();t[e.state.selectedSObject.id]&&delete t[e.state.selectedSObject.id],e.saveCustomMapping(t)}}})}}))),this.state.selectedSObject&&this.isMapLoaded()&&u.a.createElement(y.a,{dismissible:!0,footer:[u.a.createElement("div",{key:"resetCheck",class:"slds-p-bottom_small"},u.a.createElement(O.a,{assistiveText:{label:"I understand the risks"},id:"reset-confirm",labels:{label:"I understand the risks"},onChange:function(t){e.setState({resetConfirmIsChecked:t})}})),u.a.createElement(_.a,{key:"cancelBtn",label:"Cancel",onClick:function(){e.setState({resetConfirmIsOpen:!1,resetConfirmIsChecked:!1})}}),u.a.createElement(_.a,{key:"resetBtn",label:"Reset",onClick:this.state.resetConfirmCallback,variant:"destructive",disabled:!this.state.resetConfirmIsChecked})],isOpen:this.state.resetConfirmIsOpen,onRequestClose:function(){e.setState({resetConfirmIsOpen:!1,resetConfirmIsChecked:!1})},prompt:"error",size:"medium",title:u.a.createElement("span",null,"Reset ",u.a.createElement("b",null,this.state.selectedSObject.id)," mapping?")},u.a.createElement("div",{className:"slds-m-around_medium"},"Removing the mapping will set the mapping back to the default values.",u.a.createElement("br",null),"Once a mapping has been reset, it cannot be restored.")))}}]),t}(u.a.Component)},58:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var s=a(10),n=a(11),i=a(14),l=a(12),o=a(19),r=a(13),c=a(1),u=a.n(c),p=a(56),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={isOpen:!0===e.isOpen||void 0===e.isCollapsible},a.handleToggle=a.handleToggle.bind(Object(o.a)(a)),a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"handleToggle",value:function(e){var t=!this.state.isOpen;this.setState({isOpen:t}),this.props.onToggle&&this.props.onToggle(t),e.preventDefault()}},{key:"render",value:function(){var e=u.a.createElement("span",{className:"slds-truncate"+(this.props.isCollapsible?"":" slds-p-horizontal_small"),title:this.props.title},this.props.title);return u.a.createElement("div",{id:this.props.id||this.props.key,className:["slds-section",this.state.isOpen&&"slds-is-open",this.props.className].join(" ")},u.a.createElement("h3",{className:"slds-section__title slds-theme_shade"},this.props.isCollapsible?u.a.createElement("button",{className:"slds-button slds-section__title-action",onClick:this.handleToggle},u.a.createElement(p.a,{assistiveText:{label:this.props.title},category:"utility",name:"switch",size:"x-small",className:"slds-section__title-action-icon slds-button__icon slds-button__icon_left"}),e):e),this.state.isOpen&&u.a.createElement("div",{className:"slds-section__content"},this.props.children))}}]),t}(u.a.Component)},62:function(e,t,a){"use strict";function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",function(){return s})},66:function(e,t,a){"use strict";var s=a(3),n=a.n(s);t.a=function(){var e=n.a.apply(void 0,arguments);return""===e?void 0:e}}}]);
//# sourceMappingURL=16.b751e580.chunk.js.map