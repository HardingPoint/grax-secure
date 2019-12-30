(this.webpackJsonpgraxreact=this.webpackJsonpgraxreact||[]).push([[19],{103:function(e,t,a){"use strict";var l=a(69),n=a.n(l);t.a=function(e){var t=e.inputValue,a=e.limit,l=void 0===a?10:a,i=e.options,s=e.selection,o=new RegExp(n()(t),"ig");return i.filter((function(e){var a=!!e.label&&e.label.match(o),l="separator"===e.type,n=!s.some((function(t){return t.id===e.id}));return(!t||l||a)&&n})).splice(0,l)}},106:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var l=a(9),n=a(10),i=a(13),s=a(11),o=a(12),r=a(1),c=a.n(r),u=a(8),d=a.n(u),p=a(123),h=a(50),g=Object(r.lazy)((function(){return Promise.all([a.e(1),a.e(21)]).then(a.bind(null,120))})),f=Object(r.lazy)((function(){return a.e(24).then(a.bind(null,121))})),m=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(29)]).then(a.bind(null,122))})),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).getComponentToRender=function(e){var t=e.label,l=e.type,n=e.defaultValue;return"combobox"===l?c.a.createElement(g,{key:a.id,id:a.id,label:t,setting:a.props.setting,onChange:function(e){return a.onChangeTrigger(e)},defaultValue:n}):"boolean"===l?c.a.createElement(f,{key:a.id,id:a.id,label:t,setting:a.props.setting,helpTextTooltip:a.getHelpTextTooltip(),onChange:function(e){return a.onChangeTrigger(e)},defaultValue:n}):c.a.createElement(m,{key:a.id,id:a.id,type:l,label:t,setting:a.props.setting,helpTextTooltip:a.getHelpTextTooltip(),onChange:function(e){return a.onChangeTrigger(e)},defaultValue:n})},a.props.id?a.id=a.props.id:a.id=Date.now().toString(),a.state={inputValue:"",selection:null,selectedOption:null},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"getLabelFromName",value:function(e){return d.a.startCase(d.a.camelCase(e))}},{key:"onChangeTrigger",value:function(e){(this.props.onChange||this.props.onBlur||function(){})(e)}},{key:"getType",value:function(){return this.props.setting.type||"text"}},{key:"getLabel",value:function(){return this.props.setting.label?this.props.setting.label:this.getLabelFromName(this.props.setting.name)}},{key:"getDefaultValue",value:function(){return this.props.setting.defaultValue||this.props.defaultValue}},{key:"getHelpTextTooltip",value:function(){return this.props.setting.helpText?c.a.createElement(p.a,{key:this.id+"-helptext",id:this.id+"-helptext",align:"top left",content:this.props.setting.helpText}):null}},{key:"render",value:function(){return null==this.props.setting||null==this.props.id?null:c.a.createElement(r.Suspense,{fallback:c.a.createElement(h.a,{size:"small",variant:"brand"})},this.getComponentToRender({label:this.getLabel(),type:this.getType(),defaultValue:this.getDefaultValue()}))}}]),t}(c.a.PureComponent)},151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var l=a(9),n=a(10),i=a(13),s=a(11),o=a(18),r=a(12),c=a(1),u=a.n(c),d=a(50),p=a(155),h=a(57),g=a(106),f=a(80),m=a(8),b=a.n(m),v=[{name:"GRAX_ESMAXBULK",type:"number",helpText:"Enter the maximum number of records to be processed per Bulk API Batch."},{name:"GRAX_OBJECT_TYPES_TO_RESTORE",type:"text",helpText:"Set the API Name of Object(s) to restore, separated by comma."},{name:"GRAX_MAX_RESTORE",type:"number",helpText:"# of records per batch to be restored"}],y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={isLoading:!0,error:null,globalConfigurations:{},title:null,configuration:{}},a.triggerConfigurationChange=a.triggerConfigurationChange.bind(Object(o.a)(a)),a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.globalConfigurations||{},t=this.props.configuration||{};console.log("configuration",t);var a=b.a.get(t,"dataSources",[]),l=b.a.map(a,(function(e){return{id:e.organizationId,label:e.name+" ("+e.organizationId+")"}})),n=b.a.get(e,"bulkRestoreSourceOrganizationId"),i=b.a.get(e,"bulkRestoreDestinationOrganizationId");console.log("bulkRestoreSourceOrganizationId",n),console.log("bulkRestoreDestinationOrganizationId",i),console.log("dataSourcesOptions",l);var s=b.a.filter(l,(function(e){return console.log("item",e),e.id===n})),o=b.a.filter(l,(function(e){return console.log("item",e),e.id===i}));console.log("destinationOrgSelection: ",o),this.setState({globalConfigurations:e,dataSourcesOptions:l,sourceOrgSelection:s,destinationOrgSelection:o,isLoading:!1})}},{key:"triggerConfigurationChange",value:function(){console.log(this.state.configuration),this.props.onChange&&this.props.onChange(this.state.title,this.state.configuration,this.state.globalConfigurations)}},{key:"render",value:function(){var e=this;return this.state.isLoading?u.a.createElement(d.a,{size:"large",variant:"brand"}):u.a.createElement("div",{className:"slds-p-around_medium"},u.a.createElement(h.a,{title:"Configuration"},u.a.createElement("div",{className:"slds-grid slds-gutters_direct slds-grid_vertical-align-center slds-p-bottom_medium"},u.a.createElement("div",{className:"slds-col"},u.a.createElement(p.a,{id:"grax-cloud-bulk-restore-name",label:"Configuration Name",defaultValue:b.a.get(this.state.configuration,"bulkRestore[0].name"),onBlur:function(t){var a=e.state.configuration;b.a.set(a,"bulkRestore[0].name",t.target.value),e.setState({configuration:a}),e.triggerConfigurationChange()}})))),u.a.createElement(h.a,{title:"Bulk Restore",className:"slds-p-top_large"},u.a.createElement("div",{className:"slds-form-element"},u.a.createElement("label",{className:"slds-form-element__label",htmlFor:"grax-cloud-bulk-process-sourceOrg"},"Source SF"),u.a.createElement("div",{className:"slds-form-element__control"},u.a.createElement(f.a,{placeholder:"Select Source SF",options:this.state.dataSourcesOptions,selection:this.state.sourceOrgSelection,variant:"readonly",onSelect:function(t,a){if(null!=a){var l=e.state.globalConfigurations;b.a.set(l,"bulkRestoreSourceOrganizationId",a[0]),e.setState({globalConfigurations:l}),e.triggerConfigurationChange()}}}))),u.a.createElement("div",{className:"slds-form-element"},u.a.createElement("label",{className:"slds-form-element__label",htmlFor:"grax-cloud-bulk-process-sourceOrg"},"Destination SF"),u.a.createElement("div",{className:"slds-form-element__control"},u.a.createElement(f.a,{placeholder:"Select Destination SF",options:this.state.dataSourcesOptions,selection:this.state.destinationOrgSelection,variant:"readonly",onSelect:function(t,a){if(null!=a){var l=e.state.globalConfigurations;b.a.set(l,"bulkRestoreDestinationOrganizationId",a[0]),e.setState({globalConfigurations:l}),e.triggerConfigurationChange()}}}))),b.a.map(v,(function(e,t){var a="grax-env-setting-"+(e.id||e.name);return u.a.createElement(g.a,{id:a,key:a,setting:e,onBlur:function(e){console.log(e)}})}))))}}]),t}(u.a.Component)},57:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(9),n=a(10),i=a(13),s=a(11),o=a(18),r=a(12),c=a(1),u=a.n(c),d=a(55),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={isOpen:!0===e.isOpen||void 0===e.isCollapsible},a.handleToggle=a.handleToggle.bind(Object(o.a)(a)),a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"handleToggle",value:function(e){var t=!this.state.isOpen;this.setState({isOpen:t}),this.props.onToggle&&this.props.onToggle(t),e.preventDefault()}},{key:"render",value:function(){var e=u.a.createElement("span",{className:"slds-truncate"+(this.props.isCollapsible?"":" slds-p-horizontal_small"),title:this.props.title},this.props.title);return u.a.createElement("div",{id:this.props.id||this.props.key,className:["slds-section",this.state.isOpen&&"slds-is-open",this.props.className].join(" ")},u.a.createElement("h3",{className:"slds-section__title slds-theme_shade"},this.props.isCollapsible?u.a.createElement("button",{className:"slds-button slds-section__title-action",onClick:this.handleToggle},u.a.createElement(d.a,{assistiveText:{label:this.props.title},category:"utility",name:"switch",size:"x-small",className:"slds-section__title-action-icon slds-button__icon slds-button__icon_left"}),e):e),this.state.isOpen&&u.a.createElement("div",{className:"slds-section__content"},this.props.children))}}]),t}(u.a.Component)},60:function(e,t,a){"use strict";function l(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return l}))},80:function(e,t,a){"use strict";var l=a(60),n=a(9),i=a(10),s=a(13),o=a(11),r=a(12),c=a(1),u=a.n(c),d=a(8),p=a.n(d),h=a(4),g=a.n(h),f=a(103),m=a(163),b=a(50),v=a(71),y=a(155),O=a(166),N=a(63),F=a(54),S=a(5),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={options:[],inputValue:"",selection:[],isLoaded:!1,error:null},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){F.a.ajax({type:"GET",url:F.c+"/grax-app/grax-data-lake/salesforce/sobjects/"+this.props.SObjectName+"/fields/"+this.props.fieldName+Object(F.b)({action:"load"}),data:{_select:"name,type,picklistValues"},success:function(e){this.setState({options:p.a.map(e.picklistValues||[],(function(e,t){return{id:e.value,label:e.label}})),isLoaded:!0}),this.props.onLoad&&this.props.onLoad(!0)}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({isLoaded:!0,error:a.toString()}),this.props.onLoad&&this.props.onLoad(!1,a)}.bind(this)})}},{key:"render",value:function(){var e=this;return this.state.error?u.a.createElement("div",null,"Error: ",this.state.error):this.state.isLoaded?null==this.state.options||0===this.state.options.length?(this.props.onElseComponent&&this.props.onRender(!1),this.props.elseComponent):(this.props.onLoad&&this.props.onRender(!0),u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{classNameMenu:"scrollable-GRAXSFieldCombobox",events:{onChange:function(t,a){var l=a.value;e.setState({inputValue:l}),e.props.onChange&&e.props.onChange(t,l)},onRequestRemoveSelectedOption:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)},onRequestClose:function(t,a){e.props.onSelect&&e.state.inputValue&&e.props.onSelect(t,[{id:e.state.inputValue,label:e.state.inputValue}])}},labels:{placeholder:"Select Option"},options:Object(S.e)({inputValue:this.state.inputValue,limit:1e3,options:this.state.options,selection:this.state.selection}),selection:this.state.selection,value:this.state.inputValue,variant:this.props.variant||"inline-listbox",multiple:this.props.multiple||!1,required:!0}))):u.a.createElement("div",{style:{position:"relative",height:"2rem"}},u.a.createElement(b.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component);a.d(t,"a",(function(){return V})),a.d(t,"b",(function(){return k}));var E=function(e){return e.replace(/[\*\+\-=~><\"\?^\${}\(\)\:\!\/[\]\\\s]/g,"\\$&").replace(/\|\|/g,"\\||").replace(/\&\&/g,"\\&&").replace(/AND/g,"\\A\\N\\D").replace(/OR/g,"\\O\\R").replace(/NOT/g,"\\N\\O\\T")},_={text:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"contains",label:"contains",isNegated:!1},{id:"contains",label:"not contains",isNegated:!0},{id:"in",label:"in",isNegated:!1},{id:"in",label:"not in",isNegated:!0},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],date:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],number:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],long:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],boolean:[{id:"eq",label:"==",isNegated:!1},{id:"exists",label:"exists",isNegated:!1}]},V=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e)))._isMounted=!1,a.state={inputValue:"",selection:[],isOpened:!1},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.props.selection&&(console.log(this.props.selection),this.setState({selection:this.props.selection}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"filterOptionsHandler",value:function(){var e=this.props.options||[];return this.props.filterOptionsHandler&&this.state.isOpened&&(e=this.props.filterOptionsHandler(e)),Object(f.a)({inputValue:this.state.inputValue,limit:1e3,options:e,selection:this.state.selection})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{classNameMenu:"scrollable-GRAXFilterableCombobox",events:{onChange:function(t,a){var l=a.value;e.setState({inputValue:l}),e.props.onChange&&e.props.onChange(t,l)},onRequestRemoveSelectedOption:function(t,a){e._isMounted&&e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e._isMounted&&e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)},onOpen:function(t,a){e._isMounted&&e.setState({isOpened:!0})},onClose:function(t,a){e._isMounted&&e.setState({isOpened:!1})}},labels:{placeholder:this.props.placeholder},options:this.filterOptionsHandler(),selection:this.state.selection,value:this.state.inputValue,variant:this.props.variant||"inline-listbox",required:!0,multiple:!1}))}}]),t}(u.a.Component),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={_filterValues:null,_error:null,_filterValuesFields:[]},a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"isLoaded",value:function(){return this.state._error||null!=this.props.filterableFieldOptions}},{key:"getFilterValueStruct",value:function(){return{id:null,value:null,operator:"eq",isNegated:!1,isActive:!0,selectedField:null}}},{key:"getFilterValuesList",value:function(e){var t=this;return p.a.map(e,(function(e,a){var l=t.getFilterValueStruct();return l.id=a,l.value=e.value,l.operator=e.operator,l.isNegated=e.isNegated,l.isActive=e.isActive,l.selectedField=p.a.filter(t.props.filterableFieldOptions,(function(e,t){return e&&e.id===a}))[0]||null,l}))}},{key:"componentDidMount",value:function(){var e=this.props.filterValues||{},t=Object.keys(e);this.setState({_filterValues:e,_filterValuesFields:t,_filterValuesList:this.getFilterValuesList(e)}),this.props.onFilterValueChangeHandler(this.getFilterFunction.bind(this),t,this.getFilterQuery.bind(this),this.state._filterValues)}},{key:"onFilterValueChangeHandler",value:function(e,t){var a=this.state._filterValues;if(t&&t.length>0){var l=t[0]||null;e.id=l.id,e.selectedField=l,a[e.id]={value:e.value,isActive:e.isActive,operator:e.operator,isNegated:e.isNegated,selectedField:l}}else delete a[e.id],e.id=null,e.selectedField=null;var n=Object.keys(a);this.setState({_filterValues:a,_filterValuesFields:n,_filterValuesList:this.state._filterValuesList}),this.props.onFilterValueChangeHandler&&this.props.onFilterValueChangeHandler(this.getFilterFunction.bind(this),n,this.getFilterQuery.bind(this),this.state._filterValues)}},{key:"addAnotherFieldHandler",value:function(){var e=this.state._filterValuesList;0!==e.length&&null==e[e.length-1].id||(e.push(this.getFilterValueStruct()),this.setState({_filterValuesList:e}))}},{key:"removeFieldHandler",value:function(e){var t=this.state._filterValues,a=this.state._filterValuesList;delete t[a[e].id],a.splice(e,1),this.setState({_filterValues:t,_filterValuesFields:Object.keys(t),_filterValuesList:a})}},{key:"getFilterFunction",value:function(e){var t=this;return p.a.filter(e,(function(e,a){var n=!0;return p.a.forEach(t.state._filterValues,(function(t,a){if(t.isActive){var i=t.operator,s=t.value;"in"!==i&&Array.isArray(s)?s=s.length>0?s[0]:null:"in"!==i||Array.isArray(s)||(s=s.split(" OR "));var o=t.isNegated,r=!1,c=e[a];"eq"!==i||""===s||Boolean(s)||(i="exists",o=!1),Array.isArray(s)&&"in"!==i&&(s=s.length>0?s[0]:null),"date"===t.selectedField.type&&((c=g()(c))&&(c=c.format("YYYY-MM-DD")),(s=g()(s))&&(s=s.format("YYYY-MM-DD"))),"boolean"!==t.selectedField.type||Boolean(s)||(s=!0,o=!0),r="exists"===i?Boolean(c)===Boolean(s):"contains"===i?String(c).toLowerCase().includes(s.toLowerCase()):"in"===i?s&&s.length>0&&p.a.includes.apply(p.a,[s].concat(Object(l.a)("string"===typeof c?[c]:c))):p.a[i](c,s),n&=o?!r:r}})),n}))||[]}},{key:"getFilterQuery",value:function(){var e={gt:">",gte:">=",lt:"<",lte:"<="},t=[];return p.a.forEach(this.state._filterValues,(function(a,l){var n=a.operator;if(a.isActive&&!n.startsWith("_")){var i=a.value;"in"!==n&&Array.isArray(i)?i=i.length>0?E(i[0]):null:"in"!==n||Array.isArray(i)||(i=p.a.map(i.split(" OR "),(function(e){return E(e)})));var s=a.isNegated;"eq"===n&&s&&!Boolean(i)&&(n="exists",i=s),"exists"===n&&(s=!Boolean(i));var o="(";if(s&&(o+="NOT "),o+="(","boolean"!==a.selectedField.type||Boolean(i)||(o+="NOT "),"in"===n){var r=[];p.a.each(i,(function(e,t){r.push('"'+e+'"')})),o+="doc."+l+":("+r.join(" OR ")+")"}else if("exists"===n)o+="_exists_:doc."+l;else if(o+="doc."+l+":","eq"===n)"boolean"===a.selectedField.type?o+="true":"number"===a.selectedField.type?o+=i?parseFloat(i):"":"date"===a.selectedField.type?o+=i?g()(i).format("YYYY-MM-DD"):"":o+='"'+i+'"';else if("contains"===n){var c=i?String(i):"";o+="(",o+='"'+E(i)+'"',o+=" OR ",o+=E(c.toLowerCase()),o+=" OR ",o+="*"+E(c.toLowerCase())+"*",o+=")"}else"date"===a.selectedField.type?o+=e[n]+(i?g()(i).format("YYYY-MM-DD"):""):o+=e[n]+(i?E(i):"");o+="))",t.push(o)}})),t.length>0?t.join(" AND "):null}},{key:"getSelectionValues",value:function(e){return e?p.a.reduce(e,(function(e,t){return e.push(t.id),e}),[]):null}},{key:"render",value:function(){var e=this;return this.state._error?u.a.createElement("div",null,"Error: ",this.state._error):this.isLoaded()?u.a.createElement(u.a.Fragment,null,u.a.createElement("table",{className:"slds-table slds-table_cell-buffer slds-table_bordered slds-no-row-hover"},u.a.createElement("thead",null,u.a.createElement("tr",{className:"slds-line-height_reset"},u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Field"},"Field")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Operator"},"Operator")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Filter Value"},"Filter Value")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Is Active?"},"Is Active?")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate"})))),u.a.createElement("tbody",null,p.a.map(this.state._filterValuesList,function(e,t){var a=this,l=e.id,n=e.selectedField||{};return u.a.createElement("tr",{className:"slds-hint-parent",key:"fieldName: "+(l||"")},u.a.createElement("td",{"data-label":"Field",style:{width:"30vw"}},l||u.a.createElement(V,{placeholder:"Select Field to filter",options:this.props.filterableFieldOptions||[],filterOptionsHandler:function(e){return p.a.filter(e,(function(e,t){return e&&-1===a.state._filterValuesFields.indexOf(e.id)}))||[]},selection:p.a.find(this.props.filterableFieldOptions,(function(e){return e&&e.id===l}))||[],onSelect:function(t,l){return a.onFilterValueChangeHandler(e,l)},onRequestRemoveSelectedOption:function(t,l){return a.onFilterValueChangeHandler(e,l)}})),u.a.createElement("td",{"data-label":"Operator",style:{width:"20vw"}},n&&("boolean"===n.type&&_[n.type].label||u.a.createElement(V,{placeholder:"Select Operator to Compare",options:_[n.type]||[],selection:[],variant:"readonly",onSelect:function(t,l){l[0].type=l[0].type||e.selectedField.type,e.operator=l[0].id,e.isNegated=l[0].isNegated,e.type!==l[0].type&&(e.value=null,"boolean"===l[0].type&&(e.value=!1),"text"===l[0].type&&(e.value=""),e.type=l[0].type),a.onFilterValueChangeHandler(e,[e.selectedField])}}))),u.a.createElement("td",{"data-label":"Filter Value",style:{width:"30vw"}},n&&(("boolean"===n.type||"exists"===e.operator)&&u.a.createElement(v.a,{defaultChecked:e.value,onChange:function(t){e.value=t,a.onFilterValueChangeHandler(e,[e.selectedField])}})||("text"===n.type||"number"===n.type||"long"===n.type)&&u.a.createElement(C,{SObjectName:this.props.SObjectType,fieldName:n.id,onSelect:function(t,l){e.value=a.getSelectionValues(l),a.onFilterValueChangeHandler(e,[e.selectedField])},onRequestRemoveSelectedOption:function(t,l){e.value=a.getSelectionValues(l),a.onFilterValueChangeHandler(e,[e.selectedField])},elseComponent:u.a.createElement(y.a,{defaultValue:e.value,assistiveText:{label:n.label},id:n.id,onBlur:function(t){e.value=t.target.value,a.onFilterValueChangeHandler(e,[e.selectedField])}}),onRender:function(e){},multiple:"in"===e.operator,variant:"in"===e.operator?"base":"inline-listbox"})||"date"===n.type&&u.a.createElement(O.a,{value:e.value,onChange:function(t,l){e.value=l.date,a.onFilterValueChangeHandler(e,[e.selectedField])},className:"inline-table",menuPosition:"relative",hasStaticAlignment:!0}))),u.a.createElement("td",{"data-label":"Is Active?",style:{width:"10vw"}},u.a.createElement(v.a,{defaultChecked:e.isActive,onChange:function(t){e.isActive=t,a.onFilterValueChangeHandler(e,[e.selectedField])}})),u.a.createElement("td",{"data-label":"Actions",style:{width:"10vw"}},u.a.createElement(N.a,{label:"Remove Filter",variant:"base",onClick:function(){a.removeFieldHandler(t)}})))}.bind(this)))),u.a.createElement("div",{className:"slds-p-top_medium"},u.a.createElement(N.a,{label:"Add Filter",variant:"brand",onClick:function(){e.addAnotherFieldHandler()},disabled:null==this.props.filterableFieldOptions||0===this.props.filterableFieldOptions.length||this.props.filterableFieldOptions.length===this.state._filterValuesFields.length}))):u.a.createElement("div",{style:{position:"relative",height:"5rem"}},u.a.createElement(b.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component)}}]);
//# sourceMappingURL=19.da4717c2.chunk.js.map