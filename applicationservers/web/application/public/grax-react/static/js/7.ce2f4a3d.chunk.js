(this.webpackJsonpgraxreact=this.webpackJsonpgraxreact||[]).push([[7],{196:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a(48),l=a(49),s=a(52),n=a(50),r=a(54),o=a(51),c=a(1),d=a.n(c),u=a(7),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(n.a)(t).call(this,e))).state={isOpen:!0===e.isOpen||void 0===e.isCollapsible},a.handleToggle=a.handleToggle.bind(Object(r.a)(a)),a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"handleToggle",value:function(e){var t=!this.state.isOpen;this.setState({isOpen:t}),this.props.onToggle&&this.props.onToggle(t),e.preventDefault()}},{key:"render",value:function(){var e=d.a.createElement("span",{className:"slds-truncate"+(this.props.isCollapsible?"":" slds-p-horizontal_small"),title:this.props.title},this.props.title);return d.a.createElement("div",{id:this.props.id||this.props.key,className:["slds-section",this.state.isOpen&&"slds-is-open",this.props.className].join(" ")},d.a.createElement("h3",{className:"slds-section__title slds-theme_shade"},this.props.isCollapsible?d.a.createElement("button",{className:"slds-button slds-section__title-action",onClick:this.handleToggle},d.a.createElement(u.a,{assistiveText:{label:this.props.title},category:"utility",name:"switch",size:"x-small",className:"slds-section__title-action-icon slds-button__icon slds-button__icon_left"}),e):e),this.state.isOpen&&d.a.createElement("div",{className:"slds-section__content"},this.props.children))}}]),t}(d.a.Component)},197:function(e,t,a){"use strict";var i=a(71),l=a(48),s=a(49),n=a(52),r=a(50),o=a(51),c=a(1),d=a.n(c),u=a(35),p=a.n(u),h=a(20),m=a.n(h),g=a(187),f=a(173),b=a(70),v=a(63),y=a(174),O=a(223),F=a(15),_=a(53),j=a(11),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(n.a)(this,Object(r.a)(t).call(this,e))).state={options:[],inputValue:"",selection:[],isLoaded:!1,error:null},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){_.a.ajax({type:"GET",url:_.c+"/grax-app/grax-data-lake/salesforce/sobjects/"+this.props.SObjectName+"/fields/"+this.props.fieldName+Object(_.b)({action:"load"}),data:{_select:"name,type,picklistValues"},success:function(e){this.setState({options:p.a.map(e.picklistValues||[],(function(e,t){return{id:e.value,label:e.label}})),isLoaded:!0}),this.props.onLoad&&this.props.onLoad(!0)}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({isLoaded:!0,error:a.toString()}),this.props.onLoad&&this.props.onLoad(!1,a)}.bind(this)})}},{key:"render",value:function(){var e=this;return this.state.error?d.a.createElement("div",null,"Error: ",this.state.error):this.state.isLoaded?null==this.state.options||0===this.state.options.length?(this.props.onElseComponent&&this.props.onRender(!1),this.props.elseComponent):(this.props.onLoad&&this.props.onRender(!0),d.a.createElement(d.a.Fragment,null,d.a.createElement(f.a,{classNameMenu:"scrollable-GRAXSFieldCombobox",events:{onChange:function(t,a){var i=a.value;e.setState({inputValue:i}),e.props.onChange&&e.props.onChange(t,i)},onRequestRemoveSelectedOption:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)},onRequestClose:function(t,a){e.props.onSelect&&e.state.inputValue&&e.props.onSelect(t,[{id:e.state.inputValue,label:e.state.inputValue}])}},labels:{placeholder:"Select Option"},options:Object(j.e)({inputValue:this.state.inputValue,limit:1e3,options:this.state.options,selection:this.state.selection}),selection:this.state.selection,value:this.state.inputValue,variant:this.props.variant||"inline-listbox",multiple:this.props.multiple||!1,required:!0}))):d.a.createElement("div",{style:{position:"relative",height:"2rem"}},d.a.createElement(b.a,{size:"small",variant:"base"}))}}]),t}(d.a.Component);a.d(t,"a",(function(){return C})),a.d(t,"b",(function(){return S}));var N=function(e){return e.replace(/[\*\+\-=~><\"\?^\${}\(\)\:\!\/[\]\\\s]/g,"\\$&").replace(/\|\|/g,"\\||").replace(/\&\&/g,"\\&&").replace(/AND/g,"\\A\\N\\D").replace(/OR/g,"\\O\\R").replace(/NOT/g,"\\N\\O\\T")},V={text:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"contains",label:"contains",isNegated:!1},{id:"contains",label:"not contains",isNegated:!0},{id:"in",label:"in",isNegated:!1},{id:"in",label:"not in",isNegated:!0},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],date:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],number:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],long:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],boolean:[{id:"eq",label:"==",isNegated:!1},{id:"exists",label:"exists",isNegated:!1}]},C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(n.a)(this,Object(r.a)(t).call(this,e)))._isMounted=!1,a.state={inputValue:"",selection:[],isOpened:!1},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.props.selection&&(console.log(this.props.selection),this.setState({selection:this.props.selection}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"filterOptionsHandler",value:function(){var e=this.props.options||[];return this.props.filterOptionsHandler&&this.state.isOpened&&(e=this.props.filterOptionsHandler(e)),Object(g.a)({inputValue:this.state.inputValue,limit:1e3,options:e,selection:this.state.selection})}},{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(f.a,{classNameMenu:"scrollable-GRAXFilterableCombobox",events:{onChange:function(t,a){var i=a.value;e.setState({inputValue:i}),e.props.onChange&&e.props.onChange(t,i)},onRequestRemoveSelectedOption:function(t,a){e._isMounted&&e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e._isMounted&&e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)},onOpen:function(t,a){e._isMounted&&e.setState({isOpened:!0})},onClose:function(t,a){e._isMounted&&e.setState({isOpened:!1})}},labels:{placeholder:this.props.placeholder},options:this.filterOptionsHandler(),selection:this.state.selection,value:this.state.inputValue,variant:this.props.variant||"inline-listbox",required:!0,multiple:!1}))}}]),t}(d.a.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(n.a)(this,Object(r.a)(t).call(this,e))).state={_filterValues:null,_error:null,_filterValuesFields:[]},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"isLoaded",value:function(){return this.state._error||null!=this.props.filterableFieldOptions}},{key:"getFilterValueStruct",value:function(){return{id:null,value:null,operator:"eq",isNegated:!1,isActive:!0,selectedField:null}}},{key:"getFilterValuesList",value:function(e){var t=this;return p.a.map(e,(function(e,a){var i=t.getFilterValueStruct();return i.id=a,i.value=e.value,i.operator=e.operator,i.isNegated=e.isNegated,i.isActive=e.isActive,i.selectedField=p.a.filter(t.props.filterableFieldOptions,(function(e,t){return e&&e.id===a}))[0]||null,i}))}},{key:"componentDidMount",value:function(){var e=this.props.filterValues||{},t=Object.keys(e);this.setState({_filterValues:e,_filterValuesFields:t,_filterValuesList:this.getFilterValuesList(e)}),this.props.onFilterValueChangeHandler(this.getFilterFunction.bind(this),t,this.getFilterQuery.bind(this),this.state._filterValues)}},{key:"onFilterValueChangeHandler",value:function(e,t){var a=this.state._filterValues;if(t&&t.length>0){var i=t[0]||null;e.id=i.id,e.selectedField=i,a[e.id]={value:e.value,isActive:e.isActive,operator:e.operator,isNegated:e.isNegated,selectedField:i}}else delete a[e.id],e.id=null,e.selectedField=null;var l=Object.keys(a);this.setState({_filterValues:a,_filterValuesFields:l,_filterValuesList:this.state._filterValuesList}),this.props.onFilterValueChangeHandler&&this.props.onFilterValueChangeHandler(this.getFilterFunction.bind(this),l,this.getFilterQuery.bind(this),this.state._filterValues)}},{key:"addAnotherFieldHandler",value:function(){var e=this.state._filterValuesList;0!==e.length&&null==e[e.length-1].id||(e.push(this.getFilterValueStruct()),this.setState({_filterValuesList:e}))}},{key:"removeFieldHandler",value:function(e){var t=this.state._filterValues,a=this.state._filterValuesList;delete t[a[e].id],a.splice(e,1),this.setState({_filterValues:t,_filterValuesFields:Object.keys(t),_filterValuesList:a})}},{key:"getFilterFunction",value:function(e){var t=this;return p.a.filter(e,(function(e,a){var l=!0;return p.a.forEach(t.state._filterValues,(function(t,a){if(t.isActive){var s=t.operator,n=t.value;"in"!==s&&Array.isArray(n)?n=n.length>0?n[0]:null:"in"!==s||Array.isArray(n)||(n=n.split(" OR "));var r=t.isNegated,o=!1,c=e[a];"eq"!==s||""===n||Boolean(n)||(s="exists",r=!1),Array.isArray(n)&&"in"!==s&&(n=n.length>0?n[0]:null),"date"===t.selectedField.type&&((c=m()(c))&&(c=c.format("YYYY-MM-DD")),(n=m()(n))&&(n=n.format("YYYY-MM-DD"))),"boolean"!==t.selectedField.type||Boolean(n)||(n=!0,r=!0),o="exists"===s?Boolean(c)===Boolean(n):"contains"===s?String(c).toLowerCase().includes(n.toLowerCase()):"in"===s?n&&n.length>0&&p.a.includes.apply(p.a,[n].concat(Object(i.a)("string"===typeof c?[c]:c))):p.a[s](c,n),l&=r?!o:o}})),l}))||[]}},{key:"getFilterQuery",value:function(){var e={gt:">",gte:">=",lt:"<",lte:"<="},t=[];return p.a.forEach(this.state._filterValues,(function(a,i){var l=a.operator;if(a.isActive&&!l.startsWith("_")){var s=a.value;"in"!==l&&Array.isArray(s)?s=s.length>0?N(s[0]):null:"in"!==l||Array.isArray(s)||(s=p.a.map(s.split(" OR "),(function(e){return N(e)})));var n=a.isNegated;"eq"===l&&n&&!Boolean(s)&&(l="exists",s=n),"exists"===l&&(n=!Boolean(s));var r="(";if(n&&(r+="NOT "),r+="(","boolean"!==a.selectedField.type||Boolean(s)||(r+="NOT "),"in"===l){var o=[];p.a.each(s,(function(e,t){o.push('"'+e+'"')})),r+="doc."+i+":("+o.join(" OR ")+")"}else if("exists"===l)r+="_exists_:doc."+i;else if(r+="doc."+i+":","eq"===l)"boolean"===a.selectedField.type?r+="true":"number"===a.selectedField.type?r+=s?parseFloat(s):"":"date"===a.selectedField.type?r+=s?m()(s).format("YYYY-MM-DD"):"":r+='"'+s+'"';else if("contains"===l){var c=s?String(s):"";r+="(",r+='"'+N(s)+'"',r+=" OR ",r+=N(c.toLowerCase()),r+=" OR ",r+="*"+N(c.toLowerCase())+"*",r+=")"}else"date"===a.selectedField.type?r+=e[l]+(s?m()(s).format("YYYY-MM-DD"):""):r+=e[l]+(s?N(s):"");r+="))",t.push(r)}})),t.length>0?t.join(" AND "):null}},{key:"getSelectionValues",value:function(e){return e?p.a.reduce(e,(function(e,t){return e.push(t.id),e}),[]):null}},{key:"render",value:function(){var e=this;return this.state._error?d.a.createElement("div",null,"Error: ",this.state._error):this.isLoaded()?d.a.createElement(d.a.Fragment,null,d.a.createElement("table",{className:"slds-table slds-table_cell-buffer slds-table_bordered slds-no-row-hover"},d.a.createElement("thead",null,d.a.createElement("tr",{className:"slds-line-height_reset"},d.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},d.a.createElement("div",{className:"slds-truncate",title:"Field"},"Field")),d.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},d.a.createElement("div",{className:"slds-truncate",title:"Operator"},"Operator")),d.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},d.a.createElement("div",{className:"slds-truncate",title:"Filter Value"},"Filter Value")),d.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},d.a.createElement("div",{className:"slds-truncate",title:"Is Active?"},"Is Active?")),d.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},d.a.createElement("div",{className:"slds-truncate"})))),d.a.createElement("tbody",null,p.a.map(this.state._filterValuesList,function(e,t){var a=this,i=e.id,l=e.selectedField||{};return d.a.createElement("tr",{className:"slds-hint-parent",key:"fieldName: "+(i||"")},d.a.createElement("td",{"data-label":"Field",style:{width:"30vw"}},i||d.a.createElement(C,{placeholder:"Select Field to filter",options:this.props.filterableFieldOptions||[],filterOptionsHandler:function(e){return p.a.filter(e,(function(e,t){return e&&-1===a.state._filterValuesFields.indexOf(e.id)}))||[]},selection:p.a.find(this.props.filterableFieldOptions,(function(e){return e&&e.id===i}))||[],onSelect:function(t,i){return a.onFilterValueChangeHandler(e,i)},onRequestRemoveSelectedOption:function(t,i){return a.onFilterValueChangeHandler(e,i)}})),d.a.createElement("td",{"data-label":"Operator",style:{width:"20vw"}},l&&("boolean"===l.type&&V[l.type].label||d.a.createElement(C,{placeholder:"Select Operator to Compare",options:V[l.type]||[],selection:[],variant:"readonly",onSelect:function(t,i){i[0].type=i[0].type||e.selectedField.type,e.operator=i[0].id,e.isNegated=i[0].isNegated,e.type!==i[0].type&&(e.value=null,"boolean"===i[0].type&&(e.value=!1),"text"===i[0].type&&(e.value=""),e.type=i[0].type),a.onFilterValueChangeHandler(e,[e.selectedField])}}))),d.a.createElement("td",{"data-label":"Filter Value",style:{width:"30vw"}},l&&(("boolean"===l.type||"exists"===e.operator)&&d.a.createElement(v.a,{defaultChecked:e.value,onChange:function(t){e.value=t.target.checked,a.onFilterValueChangeHandler(e,[e.selectedField])}})||("text"===l.type||"number"===l.type||"long"===l.type)&&d.a.createElement(E,{SObjectName:this.props.SObjectType,fieldName:l.id,onSelect:function(t,i){e.value=a.getSelectionValues(i),a.onFilterValueChangeHandler(e,[e.selectedField])},onRequestRemoveSelectedOption:function(t,i){e.value=a.getSelectionValues(i),a.onFilterValueChangeHandler(e,[e.selectedField])},elseComponent:d.a.createElement(y.a,{defaultValue:e.value,assistiveText:{label:l.label},id:l.id,onBlur:function(t){e.value=t.target.value,a.onFilterValueChangeHandler(e,[e.selectedField])}}),onRender:function(e){},multiple:"in"===e.operator,variant:"in"===e.operator?"base":"inline-listbox"})||"date"===l.type&&d.a.createElement(O.a,{value:e.value,onChange:function(t,i){e.value=i.date,a.onFilterValueChangeHandler(e,[e.selectedField])},className:"inline-table",menuPosition:"relative",hasStaticAlignment:!0}))),d.a.createElement("td",{"data-label":"Is Active?",style:{width:"10vw"}},d.a.createElement(v.a,{defaultChecked:e.isActive,onChange:function(t){e.isActive=t.target.checked,a.onFilterValueChangeHandler(e,[e.selectedField])}})),d.a.createElement("td",{"data-label":"Actions",style:{width:"10vw"}},d.a.createElement(F.a,{label:"Remove Filter",variant:"base",onClick:function(){a.removeFieldHandler(t)}})))}.bind(this)))),d.a.createElement("div",{className:"slds-p-top_medium"},d.a.createElement(F.a,{label:"Add Filter",variant:"brand",onClick:function(){e.addAnotherFieldHandler()},disabled:null==this.props.filterableFieldOptions||0===this.props.filterableFieldOptions.length||this.props.filterableFieldOptions.length===this.state._filterValuesFields.length}))):d.a.createElement("div",{style:{position:"relative",height:"5rem"}},d.a.createElement(b.a,{size:"small",variant:"base"}))}}]),t}(d.a.Component)},198:function(e,t,a){"use strict";var i=a(71),l=a(48),s=a(49),n=a(52),r=a(50),o=a(51),c=a(1),d=a.n(c),u=a(185),p=a(15),h=a(46),m=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(n.a)(this,Object(r.a)(t).call(this,e))).state={pager:{}},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.totalItems&&this.setPage(this.props.currentPage,!0)}},{key:"setPage",value:function(e,t){var a=this.props,i=a.totalItems,l=a.pageSize,s=this.state.pager;e<1||e>s.totalPages||(s=this.getPager(i,e,l),this.setState({pager:s}),this.props.onChangePage(e,t))}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||10;var l=!1;e>1e4&&(e=1e4,l=!0);var s,n,r=Math.ceil(e/a);r<=10?(s=1,n=r):t<=6?(s=1,n=10):l&&t+3>=r?(s=r-8,n=r):t+4>=r?(s=r-9,n=r):(s=t-5,n=t+4);var o=(t-1)*a,c=Math.min(o+a-1,e-1),d=Object(i.a)(Array(n+1-s).keys()).map((function(e){return s+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:r,startPage:s,endPage:n,startIndex:o,endIndex:c,pages:d,isNarrow:l}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:d.a.createElement(u.a,null,d.a.createElement(p.a,{iconCategory:"utility",iconName:"left",iconPosition:"left",label:"First",variant:"neutral",onClick:function(){return e.setPage(1)},disabled:1===t.currentPage}),d.a.createElement(p.a,{iconCategory:"utility",iconName:"chevronleft",iconPosition:"left",variant:"neutral",onClick:function(){return e.setPage(t.currentPage-1)},disabled:1===t.currentPage}),t.pages.map((function(a,i){return d.a.createElement(p.a,{key:"SLDSPaginator"+Date.now()+i,label:a,variant:t.currentPage===a?"brand":"neutral",onClick:function(){return e.setPage(a)}})})),t.isNarrow&&t.currentPage>=t.totalPages-3&&d.a.createElement(h.a,{align:"top right",content:"The list is too long, try adding more filters to optimize the results."},d.a.createElement(p.a,{label:"\xb7\xb7\xb7",variant:"neutral"})),d.a.createElement(p.a,{iconCategory:"utility",iconName:"chevronright",iconPosition:"right",variant:"neutral",onClick:function(){return e.setPage(t.currentPage+1)},disabled:t.currentPage===t.totalPages}),d.a.createElement(p.a,{iconCategory:"utility",iconName:"right",iconPosition:"right",label:"Last",variant:"neutral",onClick:function(){return e.setPage(t.totalPages)},disabled:t.currentPage===t.totalPages}))}}]),t}(d.a.Component);m.defaultProps={currentPage:1,pageSize:10},t.a=m},199:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(48),l=a(49),s=a(52),n=a(50),r=a(51),o=a(1),c=a.n(o),d=a(14),u=a.n(d),p=a(35),h=a.n(p),m=a(53),g=document.getElementById("portals"),f=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(n.a)(t).call(this,e))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createPortal(c.a.createElement("form",{id:this.props.formId,action:m.c+"/grax-app/grax-data-lake/export/"+this.props.params.source+"/csv"+Object(m.b)({action:"export",token:m.g,orgid:m.e}),target:"_blank",method:"POST",encType:"application/x-www-form-urlencoded",style:{margin:0,padding:0,border:0,display:"inline-block"}},h.a.map(this.props.params,(function(e,t){return c.a.createElement("input",{type:"hidden",key:String(Date.now())+t,name:t,value:e||""})}))),g)}}]),t}(c.a.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(n.a)(t).call(this,e))).state={formId:"csvExport"+Date.now()},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{formId:this.state.formId,params:this.props.params}),c.a.createElement("button",{className:"slds-button slds-button_neutral",type:"submit",form:this.state.formId},"Export to CSV"))}}]),t}(c.a.Component)},226:function(e,t,a){"use strict";a.r(t);var i=a(48),l=a(49),s=a(52),n=a(50),r=a(51),o=a(1),c=a.n(o),d=a(196),u=a(72),p=a(8),h=a(70),m=a(190),g=a(99),f=a(198),b=a(199),v=a(53),y=a(11),O=a(35),F=a.n(O),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(n.a)(t).call(this,e))).state={items:[],extraInfo:{},page:0,isLoaded:!1,isLoading:!1,filterValues:[]},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.renderKey!==e.renderKey||this.state.items!==t.items||this.state.isLoaded!==t.isLoaded||this.state.isLoading!==t.isLoading}},{key:"getDataHandler",value:function(e,t){this.setState({isLoading:!0,page:e,filterValues:t}),v.a.ajax({type:"POST",url:v.c+"/grax-app/grax-data-lake/getTimeMachineVersions"+Object(v.b)({}),contentType:"application/json; charset=utf-8",data:JSON.stringify({objectType:this.props.objectType,objectId:this.props.objectId,orgid:this.props.orgid,_select:F.a.union(this.props.columns,this.props.hiddenColumns).join(",")||"Id",_limit:25,_from:25*e,_filterValues:t}),success:function(e){var t=e.results;this.props.filterFunction&&(t=this.props.filterFunction(t)),t=F.a.map(t,(function(e,t){return F.a.forEach(e,(function(t,a){if(a.startsWith("_")){if("string"==typeof t&&y.c.test(t)){var i=Object(y.j)(t);i.isValid()&&(e[a]=i.tz(y.d).format(-1!==i._i.indexOf(":")?y.a:y.b))}"boolean"==typeof t&&(e[a]=t?"true":"false")}})),Object(p.a)({},e,{},{id:t.toString()})})),this.setState({page:0,data:t,extraInfo:e.extraInfo||{total:0,size:25,totalRetrieved:0},items:t,isLoaded:!0,isLoading:!1})}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({isLoaded:!0,isLoading:!1,items:[],error:a.toString()})}.bind(this)})}},{key:"componentDidMount",value:function(){this.getDataHandler(0,this.props.filterValues)}},{key:"render",value:function(){var e=this;return this.state.isLoaded?c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative"}},this.state.isLoading&&c.a.createElement(h.a,{size:"large",variant:"brand"}),c.a.createElement(m.a,{assistiveText:{actionsHeader:"actions",columnSort:"sort this column",columnSortedAscending:"asc",columnSortedDescending:"desc",selectAllRows:"all rows",selectRow:"select this row"},fixedLayout:!0,items:this.state.items,id:"GRAXHistoryDataTable"},this.props.columns.map((function(e){return c.a.createElement(g.a,{key:"col"+e,id:e,label:e,property:e,sortable:!1})})))),c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-top_small"},c.a.createElement(f.a,{totalItems:this.state.items.length>0?this.state.extraInfo.total:0,pageSize:25,onChangePage:function(t,a){a||e.getDataHandler(t-1,e.props.filterValues)}})),c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-top_medium"},c.a.createElement(b.a,{params:{source:"s3",objecttype:this.props.objectType,objectid:this.props.objectId,orgid:this.props.orgid,_select:F.a.union(this.props.columns,this.props.hiddenColumns).join(","),_filterValues:this.state.filterValues,columns:this.props.columns}}))):c.a.createElement("div",{style:{position:"relative",height:"2rem"}},c.a.createElement(h.a,{size:"medium",variant:"brand"}))}}]),t}(c.a.Component),j=a(197),E=a(15);a.d(t,"default",(function(){return N}));var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(n.a)(t).call(this,e))).state={paramsCompleted:!1,orgid:null,objectType:null,objectId:null,_extraFields:[],_graxFields:null,_filterFunction:null,_filterValuesFields:null,_filterValues:null,retrieved:!1,retrievedCounter:0},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=v.f.objectType||window.location.search.match(/[\?&]objecttype\=([^&]+)/)[1],t=v.f.objectId||window.location.search.match(/[\?&]objectid\=([^&]+)/)[1];v.e&&e&&t&&this.setState({paramsCompleted:!0,orgid:v.e,objectType:e,objectId:t})}},{key:"render",value:function(){var e=this;return this.state.paramsCompleted?c.a.createElement("div",null,c.a.createElement(d.a,{isCollapsible:!0,isOpen:!0,title:"Select Fields"},c.a.createElement(u.default,{dataIndex:"grax"+this.state.objectType.toLowerCase()+"index",onLoad:function(t,a,i,l){console.log("onLoad",a,l,i),e.setState({_graxFields:i,_extraFields:l})},onChange:function(t,a,i,l){console.log("onChange",a,l),e.setState({_extraFields:l})}}),c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(d.a,{isCollapsible:!0,isOpen:!0,title:"Filter Backups"},c.a.createElement(j.b,{SObjectType:this.state.objectType,filterableFieldOptions:this.state._graxFields,onFilterValueChangeHandler:function(t,a,i,l){e.setState({_filterFunction:t,_filterValuesFields:a,_filterValues:l})},extraOperators:[{id:"_fieldChanged",label:"Field Changed",isNegated:!1}]}),c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(d.a,{isCollapsible:!0,isOpen:!0,title:"GRAX Stored Records"},c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-bottom_large"},c.a.createElement(E.a,{label:"Retrieve",variant:"brand",onClick:function(){e.setState({retrieved:!0,retrievedCounter:e.state.retrievedCounter+1})}})),this.state.retrieved&&c.a.createElement(_,{key:"GRAXHistoryDataTable"+this.state.retrievedCounter,renderKey:"GRAXHistoryDataTable"+this.state.retrievedCounter,columns:this.state._extraFields||"LastModified",hiddenColumns:this.state._filterValuesFields,objectType:this.state.objectType,objectId:this.state.objectId,orgid:this.state.orgid,filterFunction:this.state._filterFunction,filterValues:this.state._filterValues}))):"Bad params."}}]),t}(c.a.Component)}}]);
//# sourceMappingURL=7.ce2f4a3d.chunk.js.map