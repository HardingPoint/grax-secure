(this.webpackJsonpgraxreact=this.webpackJsonpgraxreact||[]).push([[7,14],{255:function(e,t,a){"use strict";a.r(t);var i=a(19),n=a(35),s=a(37),l=a(29),r=a(36),o=a(0),c=a.n(o),u=a(282),d=a(5),p=a(12),h=a(125),m=a(275),g=a(66),f=a(273),b=a(127),v=a(283),y=a(285),_=a(280),S=a(22),O=a(30),E=a.n(O),x=function(e){return e.split(/\\n/).join("<br/>").split(/\\\\/).join("\\")},F=function(e){var t=e.children,a=Object(p.a)(e,["children"]);return c.a.createElement(h.a,{title:t},t&&c.a.createElement("span",{style:{display:"inline-block",cursor:"pointer",whiteSpace:"normal",wordWrap:"break-word",wordBreak:"break-all"},onClick:function(){a.onClickHandler&&a.onClickHandler(t)},dangerouslySetInnerHTML:{__html:x(t.slice(0,255))+(t.length>255?"&hellip;":"")}}))};F.displayName=h.a.displayName;var k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={sortColumn:"CreatedDate",sortDirection:"desc",items:[],extraInfo:{},page:0,isLoaded:!1,isLoading:!1,isStackModalOpen:!1,stackModalHtml:null},a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.renderKey!==e.renderKey||this.state.items!==t.items||this.state.isLoaded!==t.isLoaded||this.state.isLoading!==t.isLoading||this.state.sortColumn!==t.sortColumn||this.state.sortDirection!==t.sortDirection||this.state.isStackModalOpen!==t.isStackModalOpen}},{key:"getDataHandler",value:function(e,t,a){this.setState({isLoading:!0,page:e,sortColumn:t,sortDirection:a}),_.a.ajax({type:"GET",url:_.c+"/grax-app/grax-data-lake"+Object(_.b)({action:"load",dataIndex:this.props.dataIndex,_select:E.a.union(this.props.columns,this.props.hiddenColumns).join(",")||"Id",_q:this.props.filterQuery,_limit:20,_from:20*e,_sort:t+" "+a,_sortType:this.getSortFieldType(t)}),success:function(e){var t=e.results;this.props.filterFunction&&(t=this.props.filterFunction(t)),t=E.a.map(t,(function(e,t){return E.a.forEach(e,(function(t,a){if("string"==typeof t&&S.c.test(t)){var i=Object(S.j)(t);i.isValid()&&(e[a]=i.tz(S.d).format(-1!==i._i.indexOf(":")?S.a:S.b))}})),Object(d.a)({},e,{},{id:t.toString()})})),this.setState({page:0,data:t,extraInfo:e.extraInfo||{total:0,size:20,totalRetrieved:0},items:t,isLoaded:!0,isLoading:!1})}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({isLoaded:!0,isLoading:!1,items:[],error:a.toString()})}.bind(this)})}},{key:"componentDidMount",value:function(){this.getDataHandler(0,this.state.sortColumn,this.state.sortDirection)}},{key:"handleSort",value:function(e){e.property&&this.getDataHandler(this.state.page,e.property,e.sortDirection)}},{key:"getSortFieldType",value:function(e){return this.props._graxFieldsSelection?(this.props._graxFieldsSelection.find((function(t){return t.id===e}))||{}).type:null}},{key:"render",value:function(){var e=this;return this.state.isLoaded?c.a.createElement("div",null,this.state.isStackModalOpen?c.a.createElement(m.a,{assistiveText:{dialogLabel:"Stack"},isOpen:this.state.isStackModalOpen,onRequestClose:function(){e.setState({isStackModalOpen:!1,stackModalHtml:null})},align:"top",size:"large"},c.a.createElement("section",{className:"slds-p-around_medium",style:{overflow:"auto"}},c.a.createElement("span",{style:{display:"inline-block",whiteSpace:"normal",wordWrap:"break-word",wordBreak:"break-all"},dangerouslySetInnerHTML:{__html:this.state.stackModalHtml}}))):null,c.a.createElement("div",{style:{position:"relative"}},this.state.isLoading&&c.a.createElement(g.a,{size:"large",variant:"brand"}),c.a.createElement(f.a,{assistiveText:{actionsHeader:"actions",columnSort:"sort this column",columnSortedAscending:"asc",columnSortedDescending:"desc",selectAllRows:"all rows",selectRow:"select this row"},fixedLayout:!0,items:this.state.items,id:"GRAXLoggingDataTable",onSort:this.handleSort.bind(this)},this.props.columns.map((function(t){return c.a.createElement(b.a,{key:"col"+t,id:t,isSorted:e.state.sortColumn===t,label:t.endsWith(".keyword")?t.match(/(.+)\.keyword/)[1]:t,property:t,sortable:!0,sortDirection:e.state.sortDirection,isSortable:null==e.props.sortableColumns||-1!==e.props.sortableColumns.indexOf(t)},"stack"===t||"error"===t||"description"===t?c.a.createElement(F,{onClickHandler:function(t){t&&e.setState({isStackModalOpen:!0,stackModalHtml:x(t.slice(1,-1)).split(/\s/g).join("&nbsp;")})}}):null)})))),c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-top_small"},c.a.createElement(v.a,{totalItems:this.state.items.length>0?this.state.extraInfo.total:0,pageSize:20,onChangePage:function(t,a){a||e.getDataHandler(t-1,e.state.sortColumn,e.state.sortDirection)}})),c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-top_medium"},c.a.createElement(y.a,{params:{source:"elastic",dataIndex:this.props.dataIndex,_select:E.a.union(this.props.columns,this.props.hiddenColumns).join(","),_q:this.props.filterQuery,_sort:this.state.sortColumn+" "+this.state.sortDirection,_sortType:this.getSortFieldType(this.state.sortColumn),columns:this.props.columns}}))):c.a.createElement("div",{style:{position:"relative",height:"2rem"}},c.a.createElement(g.a,{size:"medium",variant:"brand"}))}}]),t}(c.a.Component),N=a(284),C=a(286),j=a(17),D=a(6),V=a(277),L=a(267),M="L LT",R=7,T=25,A=[{key:"num-records",property:"total",label:"# of Records"},{key:"obj-type",property:"objectType",label:"Object Type"},{key:"queued",property:"statusQueued",label:"Queued"},{key:"done",property:"statusDone",label:"Done"},{key:"completed",property:"completed",label:"% Completed"},{key:"start-time",property:"strStartDate",label:"Start Time"},{key:"end-time",property:"strEndDate",label:"End Time"}],w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).onDataLoaded=function(e){Array.isArray(e)?(e.forEach((function(e){e.completed="".concat(Math.round(100*e.statusDone/e.total),"%");var t=e.startDate?Object(S.j)(e.startDate):void 0;e.strStartDate=t?t.format(M):"",e.unixStateDate=t?t.unix():Number.MAX_SAFE_INTEGER,t=e.endDate?Object(S.j)(e.endDate):void 0,e.strEndDate=t?t.format(M):"",e.unixEndDate=t?t.unix():Number.MAX_SAFE_INTEGER})),a.allItems=e,a.sortData("total","desc")):a.allItems=[]},a.onDataLoadError=function(e,t,i){a.setState({error:i.toString()})},a.loadData=function(){a.setState({pageNum:0,items:[],sortColumn:"total",sortColumnDirection:{total:"desc"}}),_.a.ajax({type:"GET",url:"".concat(_.c,"/grax-app/grax-data-lake/asyncQueue/status"),data:{days:R},success:a.onDataLoaded,error:a.onDataLoadError})},a.updatePage=function(e){a.setState({pageNum:e,items:a.allItems.slice(e*T,(e+1)*T)})},a.nextPage=function(){var e=a.state.pageNum;(e+1)*T<=a.allItems.length&&a.updatePage(e+1)},a.prevPage=function(){var e=a.state.pageNum;e>0&&a.updatePage(e-1)},a.sortData=function(e,t){a.allItems.sort((function(a,i){var n,s,l=e;"strStartDate"===e?l="unixStateDate":"strEndDate"===e&&(l="unixEndDate"),"completed"===l?(n=Math.round(100*a.statusDone/a.total),s=Math.round(100*i.statusDone/i.stotal)):(n=a[l],s=i[l]);var r=0;return n>s&&(r=1),n<s&&(r=-1),"desc"===t&&(r*=-1),r})),a.setState({sortColumn:e,sortColumnDirection:Object(D.a)({},e,t)}),a.updatePage(0)},a.handleSort=function(e){console.log("sort column = ".concat(e));var t=e.property,i=e.sortDirection;a.sortData(t,i)},a.state={pageNum:0,items:[],sortColumnDirection:{}},a.allItems=[],a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.error,i=e.pageNum,n=e.sortColumn,s=e.sortColumnDirection;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-bottom_large"},c.a.createElement(j.a,{label:"Retrieve",variant:"brand",onClick:this.loadData})),a&&c.a.createElement("div",{style:{clear:"both"}},c.a.createElement(V.a,{theme:"dark"},c.a.createElement("p",null,a))),t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{assistiveText:{actionsHeader:"actions",columnSort:"sort this column",columnSortedAscending:"asc",columnSortedDescending:"desc"},style:{marginBottom:"5px"},items:t,fixedLayout:!0,id:"testtable",onSort:this.handleSort},A.map((function(e){return c.a.createElement(b.a,{key:e.key,property:e.property,label:e.label,isSorted:n===e.property,sortable:!0,sortDirection:s[e.property]})}))),T<this.allItems.length&&c.a.createElement(L.a,null,c.a.createElement(j.a,{iconCategory:"utility",iconName:"chevronright",iconPosition:"right",variant:"neutral",disabled:0===i,label:"previous ".concat(T),onClick:this.prevPage}),c.a.createElement(j.a,{iconCategory:"utility",iconName:"left",iconPosition:"left",variant:"neutral",disabled:(i+1)*T>=this.allItems.length,label:"next ".concat(T),onClick:this.nextPage}))))}}]),t}(c.a.Component);a.d(t,"default",(function(){return H}));var P=["text","date","number"],H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e)))._isMounted=!1,a.state={retrieved:!1,retrievedCounter:0,_graxFields:null,_graxFieldsSelection:null,_graxFieldsSelectionList:a.props.columns||["Id"],_filterFunction:function(e){return e},_getFilterQuery:function(){},_filterValuesFields:[],_graxSortableFields:null},a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"getFilterQuery",value:function(e){var t='doc.attributes.type.keyword: "grax_logging';this.props.subtype&&(t+="+"+this.props.subtype),t+='"';var a=e();return a&&(t+=" AND ("+a+")"),t}},{key:"hasFieldSelected",value:function(){return null!=this.state._graxFields&&null!=this.state._graxFieldsSelectionList&&this.state._graxFieldsSelectionList.length>0}},{key:"componentDidMount",value:function(){this._isMounted=!0,_.a.ajax({type:"GET",url:_.c+"/grax-app/grax-data-lake/getDataTypeFields/graxgrax_loggingindex"+Object(_.b)({action:"load"}),data:{},success:function(e){this._isMounted&&this.setState({_graxFields:E.a.map(this.state._graxFieldsSelectionList,(function(t,a){return{id:t,label:t,type:e[t]}})),retrieved:!0})}.bind(this),error:function(e,t,a){console.error(e,t,a),this._isMounted&&this.setState({retrieved:!0,error:a.toString()})}.bind(this)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{style:{display:"none"}},c.a.createElement(C.default,{dataIndex:"graxgrax_loggingindex",onLoad:function(t,a,i,n){console.log("onLoad",a,n,i),e.setState({_graxFieldsSelection:a,_graxSortableFields:E.a.reduce(i,(function(e,t,a){return-1!==P.indexOf(t.type)&&e.push(t.id),e}),[])})},cookieSubfix:this.props.subtype||"logs"})),"restore"===this.props.subtype&&c.a.createElement(u.a,{isCollapsible:!0,isOpen:!0,title:"Restore Status"},c.a.createElement(w,null)),c.a.createElement(u.a,{isCollapsible:!0,isOpen:!0,title:"Filter Logs"},null!=this.state._graxFieldsSelectionList&&c.a.createElement(N.a,{filterableFieldOptions:this.state._graxFields,onFilterValueChangeHandler:function(t,a,i){e.setState({retrievedCounter:e.state.retrievedCounter,_filterFunction:t,_getFilterQuery:i,_graxFieldsSelection:e.state._graxFieldsSelection,_graxFieldsSelectionList:e.state._graxFieldsSelectionList,_filterValuesFields:a})}}),c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(u.a,{isCollapsible:!0,isOpen:!0,title:"GRAX Logs"},c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-bottom_large"},c.a.createElement(j.a,{label:"Retrieve",variant:"brand",onClick:function(){e.setState({retrievedCounter:e.state.retrievedCounter+1})}})),c.a.createElement(k,{key:"GRAXLoggingDataTable_"+this.state.retrievedCounter,renderKey:"GRAXLoggingDataTable_"+this.state.retrievedCounter,columns:this.state._graxFieldsSelectionList,_graxFieldsSelection:this.state._graxFieldsSelection,sortableColumns:this.state._graxSortableFields,hiddenColumns:this.state._filterValuesFields,dataIndex:"graxgrax_loggingindex",filterFunction:this.state._filterFunction,filterQuery:this.getFilterQuery(this.state._getFilterQuery)})))}}]),t}(c.a.Component)},280:function(e,t,a){"use strict";(function(e){a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return u}));var i=a(281),n=a.n(i);a.d(t,"a",(function(){return n.a}));var s="";e&&Object({NODE_ENV:"production",PUBLIC_URL:"/grax-app/assets",REACT_APP_BASIC_TOKEN:"c1ZiWTdHc3E2eTJxc3h5THRmTFVUdWM3cFBsMnRteTJQUWR5RWJiZjphNjcyM2JmY2ViNDZhODUwZjBlYmNkNGMzMzgzYWNjMzVjYWIxNWU1MDM2NTI3MWFjNDUzYTkxZjM2ZjA1NGEy",REACT_APP_ORGID:"00D6g000006wAo3EAE",REACT_APP_BASE_URL:""})&&!window.__grax__&&(window.__grax__={orgid:"00D6g000006wAo3EAE",pageParams:{authorization:"c1ZiWTdHc3E2eTJxc3h5THRmTFVUdWM3cFBsMnRteTJQUWR5RWJiZjphNjcyM2JmY2ViNDZhODUwZjBlYmNkNGMzMzgzYWNjMzVjYWIxNWU1MDM2NTI3MWFjNDUzYTkxZjM2ZjA1NGEy"}});var l=window.__grax__.token,r=window.__grax__._csrf,o=window.__grax__.orgid,c=(window.__grax__.userid,window.__grax__.pageParams||{});function u(e){return null!==e&&void 0!==e||(e={}),null!==e.action&&void 0!==e.action&&""!==e.action||(e.action="load"),"?"+n.a.param(e)}n.a.ajaxSetup({beforeSend:function(e,t){var a;e.setRequestHeader("sfdcorgid",o),null!=c.authorization?e.setRequestHeader("Authorization","Basic "+c.authorization):e.setRequestHeader("Authorization","Bearer "+l),a=t.type,/^(GET|HEAD|OPTIONS|TRACE)$/.test(a)||this.crossDomain||e.setRequestHeader("X-CSRFToken",r),e.withCredentials=!0,!0!==t.skipFail&&e.fail((function(e,t,a){console.error(e),404!==e.status&&"Not Found"!==a&&window.showError(e.statusText+": "+e.responseText)}))}})}).call(this,a(90))},282:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a(19),n=a(35),s=a(37),l=a(29),r=a(89),o=a(36),c=a(0),u=a.n(c),d=a(9),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={isOpen:!0===e.isOpen||void 0===e.isCollapsible},a.handleToggle=a.handleToggle.bind(Object(r.a)(a)),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"handleToggle",value:function(e){var t=!this.state.isOpen;this.setState({isOpen:t}),this.props.onToggle&&this.props.onToggle(t),e.preventDefault()}},{key:"render",value:function(){var e=u.a.createElement("span",{className:"slds-truncate"+(this.props.isCollapsible?"":" slds-p-horizontal_small"),title:this.props.title},this.props.title);return u.a.createElement("div",{id:this.props.id||this.props.key,className:["slds-section",this.state.isOpen&&"slds-is-open",this.props.className].join(" ")},u.a.createElement("h3",{className:"slds-section__title slds-theme_shade"},this.props.isCollapsible?u.a.createElement("button",{className:"slds-button slds-section__title-action",onClick:this.handleToggle},u.a.createElement(d.a,{assistiveText:{label:this.props.title},category:"utility",name:"switch",size:"x-small",className:"slds-section__title-action-icon slds-button__icon slds-button__icon_left"}),e):e),this.state.isOpen&&u.a.createElement("div",{className:"slds-section__content"},this.props.children))}}]),t}(u.a.Component)},283:function(e,t,a){"use strict";var i=a(88),n=a(19),s=a(35),l=a(37),r=a(29),o=a(36),c=a(0),u=a.n(c),d=a(267),p=a(17),h=a(59),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={pager:{}},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.totalItems&&this.setPage(this.props.currentPage,!0)}},{key:"setPage",value:function(e,t){var a=this.props,i=a.totalItems,n=a.pageSize,s=this.state.pager;e<1||e>s.totalPages||(s=this.getPager(i,e,n),this.setState({pager:s}),this.props.onChangePage(e,t))}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||10;var n=!1;e>1e4&&(e=1e4,n=!0);var s,l,r=Math.ceil(e/a);r<=10?(s=1,l=r):t<=6?(s=1,l=10):n&&t+3>=r?(s=r-8,l=r):t+4>=r?(s=r-9,l=r):(s=t-5,l=t+4);var o=(t-1)*a,c=Math.min(o+a-1,e-1),u=Object(i.a)(Array(l+1-s).keys()).map((function(e){return s+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:r,startPage:s,endPage:l,startIndex:o,endIndex:c,pages:u,isNarrow:n}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:u.a.createElement(d.a,null,u.a.createElement(p.a,{iconCategory:"utility",iconName:"left",iconPosition:"left",label:"First",variant:"neutral",onClick:function(){return e.setPage(1)},disabled:1===t.currentPage}),u.a.createElement(p.a,{iconCategory:"utility",iconName:"chevronleft",iconPosition:"left",variant:"neutral",onClick:function(){return e.setPage(t.currentPage-1)},disabled:1===t.currentPage}),t.pages.map((function(a,i){return u.a.createElement(p.a,{key:"SLDSPaginator"+Date.now()+i,label:a,variant:t.currentPage===a?"brand":"neutral",onClick:function(){return e.setPage(a)}})})),t.isNarrow&&t.currentPage>=t.totalPages-3&&u.a.createElement(h.a,{align:"top right",content:"The list is too long, try adding more filters to optimize the results."},u.a.createElement(p.a,{label:"\xb7\xb7\xb7",variant:"neutral"})),u.a.createElement(p.a,{iconCategory:"utility",iconName:"chevronright",iconPosition:"right",variant:"neutral",onClick:function(){return e.setPage(t.currentPage+1)},disabled:t.currentPage===t.totalPages}),u.a.createElement(p.a,{iconCategory:"utility",iconName:"right",iconPosition:"right",label:"Last",variant:"neutral",onClick:function(){return e.setPage(t.totalPages)},disabled:t.currentPage===t.totalPages}))}}]),t}(u.a.Component);m.defaultProps={currentPage:1,pageSize:10},t.a=m},284:function(e,t,a){"use strict";var i=a(88),n=a(19),s=a(35),l=a(37),r=a(29),o=a(36),c=a(0),u=a.n(c),d=a(30),p=a.n(d),h=a(25),m=a.n(h),g=a(270),f=a(269),b=a(66),v=a(76),y=a(254),_=a(297),S=a(17),O=a(280),E=a(22),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={options:[],inputValue:"",selection:[],isLoaded:!1,error:null},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){O.a.ajax({type:"GET",url:O.c+"/grax-app/grax-data-lake/salesforce/sobjects/"+this.props.SObjectName+"/fields/"+this.props.fieldName+Object(O.b)({action:"load"}),data:{_select:"name,type,picklistValues"},success:function(e){this.setState({options:p.a.map(e.picklistValues||[],(function(e,t){return{id:e.value,label:e.label}})),isLoaded:!0}),this.props.onLoad&&this.props.onLoad(!0)}.bind(this),error:function(e,t,a){console.error(e,t,a),this.setState({isLoaded:!0,error:a.toString()}),this.props.onLoad&&this.props.onLoad(!1,a)}.bind(this)})}},{key:"render",value:function(){var e=this;return this.state.error?u.a.createElement("div",null,"Error: ",this.state.error):this.state.isLoaded?null==this.state.options||0===this.state.options.length?(this.props.onElseComponent&&this.props.onRender(!1),this.props.elseComponent):(this.props.onLoad&&this.props.onRender(!0),u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{classNameMenu:"scrollable-GRAXSFieldCombobox",events:{onChange:function(t,a){var i=a.value;e.setState({inputValue:i}),e.props.onChange&&e.props.onChange(t,i)},onRequestRemoveSelectedOption:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)},onRequestClose:function(t,a){e.props.onSelect&&e.state.inputValue&&e.props.onSelect(t,[{id:e.state.inputValue,label:e.state.inputValue}])}},labels:{placeholder:"Select Option"},options:Object(E.e)({inputValue:this.state.inputValue,limit:1e3,options:this.state.options,selection:this.state.selection}),selection:this.state.selection,value:this.state.inputValue,variant:this.props.variant||"inline-listbox",multiple:this.props.multiple||!1,required:!0}))):u.a.createElement("div",{style:{position:"relative",height:"2rem"}},u.a.createElement(b.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component);a.d(t,"a",(function(){return C}));var F=function(e){return e.replace(/[\*\+\-=~><\"\?^\${}\(\)\:\!\/[\]\\\s]/g,"\\$&").replace(/\|\|/g,"\\||").replace(/\&\&/g,"\\&&").replace(/AND/g,"\\A\\N\\D").replace(/OR/g,"\\O\\R").replace(/NOT/g,"\\N\\O\\T")},k={text:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"contains",label:"contains",isNegated:!1},{id:"contains",label:"not contains",isNegated:!0},{id:"in",label:"in",isNegated:!1},{id:"in",label:"not in",isNegated:!0},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],date:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],number:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],long:[{id:"eq",label:"==",isNegated:!1},{id:"eq",label:"!=",isNegated:!0},{id:"gt",label:">",isNegated:!1},{id:"lt",label:"<",isNegated:!1},{id:"gte",label:">=",isNegated:!1},{id:"lte",label:"<=",isNegated:!1},{id:"exists",label:"exists",isNegated:!1,type:"boolean"}],boolean:[{id:"eq",label:"==",isNegated:!1},{id:"exists",label:"exists",isNegated:!1}]},N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e)))._isMounted=!1,a.state={inputValue:"",selection:[],isOpened:!1},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.props.selection&&(console.log(this.props.selection),this.setState({selection:this.props.selection}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"filterOptionsHandler",value:function(){var e=this.props.options||[];return this.props.filterOptionsHandler&&this.state.isOpened&&(e=this.props.filterOptionsHandler(e)),Object(g.a)({inputValue:this.state.inputValue,limit:1e3,options:e,selection:this.state.selection})}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a,{classNameMenu:"scrollable-GRAXFilterableCombobox",events:{onChange:function(t,a){var i=a.value;e.setState({inputValue:i}),e.props.onChange&&e.props.onChange(t,i)},onRequestRemoveSelectedOption:function(t,a){e._isMounted&&e.setState({inputValue:"",selection:a.selection}),e.props.onRequestRemoveSelectedOption&&e.props.onRequestRemoveSelectedOption(t,a.selection)},onSelect:function(t,a){e._isMounted&&e.setState({inputValue:"",selection:a.selection}),e.props.onSelect&&e.props.onSelect(t,a.selection)},onOpen:function(t,a){e._isMounted&&e.setState({isOpened:!0})},onClose:function(t,a){e._isMounted&&e.setState({isOpened:!1})}},labels:{placeholder:this.props.placeholder},options:this.filterOptionsHandler(),selection:this.state.selection,value:this.state.inputValue,variant:this.props.variant||"inline-listbox",required:!0,multiple:!1}))}}]),t}(u.a.Component),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={_filterValues:null,_error:null,_filterValuesFields:[]},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"isLoaded",value:function(){return this.state._error||null!=this.props.filterableFieldOptions}},{key:"getFilterValueStruct",value:function(){return{id:null,value:null,operator:"eq",isNegated:!1,isActive:!0,selectedField:null}}},{key:"getFilterValuesList",value:function(e){var t=this;return p.a.map(e,(function(e,a){var i=t.getFilterValueStruct();return i.id=a,i.value=e.value,i.operator=e.operator,i.isNegated=e.isNegated,i.isActive=e.isActive,i.selectedField=p.a.filter(t.props.filterableFieldOptions,(function(e,t){return e&&e.id===a}))[0]||null,i}))}},{key:"componentDidMount",value:function(){var e=this.props.filterValues||{},t=Object.keys(e);this.setState({_filterValues:e,_filterValuesFields:t,_filterValuesList:this.getFilterValuesList(e)}),this.props.onFilterValueChangeHandler(this.getFilterFunction.bind(this),t,this.getFilterQuery.bind(this),this.state._filterValues)}},{key:"onFilterValueChangeHandler",value:function(e,t){var a=this.state._filterValues;if(t&&t.length>0){var i=t[0]||null;e.id=i.id,e.selectedField=i,a[e.id]={value:e.value,isActive:e.isActive,operator:e.operator,isNegated:e.isNegated,selectedField:i}}else delete a[e.id],e.id=null,e.selectedField=null;var n=Object.keys(a);this.setState({_filterValues:a,_filterValuesFields:n,_filterValuesList:this.state._filterValuesList}),this.props.onFilterValueChangeHandler&&this.props.onFilterValueChangeHandler(this.getFilterFunction.bind(this),n,this.getFilterQuery.bind(this),this.state._filterValues)}},{key:"addAnotherFieldHandler",value:function(){var e=this.state._filterValuesList;0!==e.length&&null==e[e.length-1].id||(e.push(this.getFilterValueStruct()),this.setState({_filterValuesList:e}))}},{key:"removeFieldHandler",value:function(e){var t=this.state._filterValues,a=this.state._filterValuesList;delete t[a[e].id],a.splice(e,1),this.setState({_filterValues:t,_filterValuesFields:Object.keys(t),_filterValuesList:a})}},{key:"getFilterFunction",value:function(e){var t=this;return p.a.filter(e,(function(e,a){var n=!0;return p.a.forEach(t.state._filterValues,(function(t,a){if(t.isActive){var s=t.operator,l=t.value;"in"!==s&&Array.isArray(l)?l=l.length>0?l[0]:null:"in"!==s||Array.isArray(l)||(l=l.split(" OR "));var r=t.isNegated,o=!1,c=e[a];"eq"!==s||""===l||Boolean(l)||(s="exists",r=!1),Array.isArray(l)&&"in"!==s&&(l=l.length>0?l[0]:null),"date"===t.selectedField.type&&((c=m()(c))&&(c=c.format("YYYY-MM-DD")),(l=m()(l))&&(l=l.format("YYYY-MM-DD"))),"boolean"!==t.selectedField.type||Boolean(l)||(l=!0,r=!0),o="exists"===s?Boolean(c)===Boolean(l):"contains"===s?String(c).toLowerCase().includes(l.toLowerCase()):"in"===s?l&&l.length>0&&p.a.includes.apply(p.a,[l].concat(Object(i.a)("string"===typeof c?[c]:c))):p.a[s](c,l),n&=r?!o:o}})),n}))||[]}},{key:"getFilterQuery",value:function(){var e={gt:">",gte:">=",lt:"<",lte:"<="},t=[];return p.a.forEach(this.state._filterValues,(function(a,i){var n=a.operator;if(a.isActive&&!n.startsWith("_")){var s=a.value;"in"!==n&&Array.isArray(s)?s=s.length>0?F(s[0]):null:"in"!==n||Array.isArray(s)||(s=p.a.map(s.split(" OR "),(function(e){return F(e)})));var l=a.isNegated;"eq"===n&&l&&!Boolean(s)&&(n="exists",s=l),"exists"===n&&(l=!Boolean(s));var r="(";if(l&&(r+="NOT "),r+="(","boolean"!==a.selectedField.type||Boolean(s)||(r+="NOT "),"in"===n){var o=[];p.a.each(s,(function(e,t){o.push('"'+e+'"')})),r+="doc."+i+":("+o.join(" OR ")+")"}else if("exists"===n)r+="_exists_:doc."+i;else if(r+="doc."+i+":","eq"===n)"boolean"===a.selectedField.type?r+="true":"number"===a.selectedField.type?r+=s?parseFloat(s):"":"date"===a.selectedField.type?r+=s?m()(s).format("YYYY-MM-DD"):"":r+='"'+s+'"';else if("contains"===n){var c=s?String(s):"";r+="(",r+='"'+F(s)+'"',r+=" OR ",r+=F(c.toLowerCase()),r+=" OR ",r+="*"+F(c.toLowerCase())+"*",r+=")"}else"date"===a.selectedField.type?r+=e[n]+(s?m()(s).format("YYYY-MM-DD"):""):r+=e[n]+(s?F(s):"");r+="))",t.push(r)}})),t.length>0?t.join(" AND "):null}},{key:"getSelectionValues",value:function(e){return e?p.a.reduce(e,(function(e,t){return e.push(t.id),e}),[]):null}},{key:"render",value:function(){var e=this;return this.state._error?u.a.createElement("div",null,"Error: ",this.state._error):this.isLoaded()?u.a.createElement(u.a.Fragment,null,u.a.createElement("table",{className:"slds-table slds-table_cell-buffer slds-table_bordered slds-no-row-hover"},u.a.createElement("thead",null,u.a.createElement("tr",{className:"slds-line-height_reset"},u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Field"},"Field")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Operator"},"Operator")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Filter Value"},"Filter Value")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate",title:"Is Active?"},"Is Active?")),u.a.createElement("th",{className:"slds-text-title_caps",scope:"col"},u.a.createElement("div",{className:"slds-truncate"})))),u.a.createElement("tbody",null,p.a.map(this.state._filterValuesList,function(e,t){var a=this,i=e.id,n=e.selectedField||{};return u.a.createElement("tr",{className:"slds-hint-parent",key:"fieldName: "+(i||"")},u.a.createElement("td",{"data-label":"Field",style:{width:"30vw"}},i||u.a.createElement(N,{placeholder:"Select Field to filter",options:this.props.filterableFieldOptions||[],filterOptionsHandler:function(e){return p.a.filter(e,(function(e,t){return e&&-1===a.state._filterValuesFields.indexOf(e.id)}))||[]},selection:p.a.find(this.props.filterableFieldOptions,(function(e){return e&&e.id===i}))||[],onSelect:function(t,i){return a.onFilterValueChangeHandler(e,i)},onRequestRemoveSelectedOption:function(t,i){return a.onFilterValueChangeHandler(e,i)}})),u.a.createElement("td",{"data-label":"Operator",style:{width:"20vw"}},n&&("boolean"===n.type&&k[n.type].label||u.a.createElement(N,{placeholder:"Select Operator to Compare",options:k[n.type]||[],selection:[],variant:"readonly",onSelect:function(t,i){i[0].type=i[0].type||e.selectedField.type,e.operator=i[0].id,e.isNegated=i[0].isNegated,e.type!==i[0].type&&(e.value=null,"boolean"===i[0].type&&(e.value=!1),"text"===i[0].type&&(e.value=""),e.type=i[0].type),a.onFilterValueChangeHandler(e,[e.selectedField])}}))),u.a.createElement("td",{"data-label":"Filter Value",style:{width:"30vw"}},n&&(("boolean"===n.type||"exists"===e.operator)&&u.a.createElement(v.a,{defaultChecked:e.value,onChange:function(t){e.value=t.target.checked,a.onFilterValueChangeHandler(e,[e.selectedField])}})||("text"===n.type||"number"===n.type||"long"===n.type)&&u.a.createElement(x,{SObjectName:this.props.SObjectType,fieldName:n.id,onSelect:function(t,i){e.value=a.getSelectionValues(i),a.onFilterValueChangeHandler(e,[e.selectedField])},onRequestRemoveSelectedOption:function(t,i){e.value=a.getSelectionValues(i),a.onFilterValueChangeHandler(e,[e.selectedField])},elseComponent:u.a.createElement(y.a,{defaultValue:e.value,assistiveText:{label:n.label},id:n.id,onBlur:function(t){e.value=t.target.value,a.onFilterValueChangeHandler(e,[e.selectedField])}}),onRender:function(e){},multiple:"in"===e.operator,variant:"in"===e.operator?"base":"inline-listbox"})||"date"===n.type&&u.a.createElement(_.a,{value:e.value,onChange:function(t,i){e.value=i.date,a.onFilterValueChangeHandler(e,[e.selectedField])},className:"inline-table",menuPosition:"relative",hasStaticAlignment:!0}))),u.a.createElement("td",{"data-label":"Is Active?",style:{width:"10vw"}},u.a.createElement(v.a,{defaultChecked:e.isActive,onChange:function(t){e.isActive=t.target.checked,a.onFilterValueChangeHandler(e,[e.selectedField])}})),u.a.createElement("td",{"data-label":"Actions",style:{width:"10vw"}},u.a.createElement(S.a,{label:"Remove Filter",variant:"base",onClick:function(){a.removeFieldHandler(t)}})))}.bind(this)))),u.a.createElement("div",{className:"slds-p-top_medium"},u.a.createElement(S.a,{label:"Add Filter",variant:"brand",onClick:function(){e.addAnotherFieldHandler()},disabled:null==this.props.filterableFieldOptions||0===this.props.filterableFieldOptions.length||this.props.filterableFieldOptions.length===this.state._filterValuesFields.length}))):u.a.createElement("div",{style:{position:"relative",height:"5rem"}},u.a.createElement(b.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component)},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(19),n=a(35),s=a(37),l=a(29),r=a(36),o=a(0),c=a.n(o),u=a(13),d=a.n(u),p=a(30),h=a.n(p),m=a(280),g=document.getElementById("portals"),f=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).call(this,e))}return Object(r.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return d.a.createPortal(c.a.createElement("form",{id:this.props.formId,action:m.c+"/grax-app/grax-data-lake/export/"+this.props.params.source+"/csv"+Object(m.b)({action:"export",token:m.f,orgid:m.d}),target:"_blank",method:"POST",encType:"application/x-www-form-urlencoded",style:{margin:0,padding:0,border:0,display:"inline-block"}},h.a.map(this.props.params,(function(e,t){return c.a.createElement("input",{type:"hidden",key:String(Date.now())+t,name:t,value:e||""})}))),g)}}]),t}(c.a.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={formId:"csvExport"+Date.now()},a}return Object(r.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{formId:this.state.formId,params:this.props.params}),c.a.createElement("button",{className:"slds-button slds-button_neutral",type:"submit",form:this.state.formId},"Export to CSV"))}}]),t}(c.a.Component)},286:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var i,n=a(19),s=a(35),l=a(37),r=a(29),o=a(89),c=a(36),u=a(0),d=a.n(u),p=a(30),h=a.n(p),m=a(66),g=a(269),f=a(280),b=a(22),v="Fields",y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={options:[],inputValue:"",selection:[{id:"Id",label:"Id",type:"text"}],isLoaded:!1,error:null},a.getMappedFieldList=a.getMappedFieldList.bind(Object(o.a)(a)),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"getMappedFieldList",value:function(e){return h.a.map(e||this.state.selection,(function(e){return e.id}))}},{key:"onLoadHandler",value:function(e,t){var a=this.getMappedFieldList(t);this.props.onLoad&&this.props.onLoad(e,t,this.state.options,a)}},{key:"onChangeHandler",value:function(e,t){var a=this.getMappedFieldList(t);this.props.onChange&&this.props.onChange(e,t,this.state.options,a),Object(b.l)(i+v,JSON.stringify(a))}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,i=this.props.dataIndex,this.props.cookieSubfix&&(v+=this.props.cookieSubfix),f.a.ajax({type:"GET",url:f.c+"/grax-app/grax-data-lake/getDataTypeFields/"+i+Object(f.b)({action:"load"}),data:{},success:function(t){if(e._isMounted){var a=h.a.map(t,(function(e,t){return{id:t,label:t,type:e}}));e.setState({options:a,isLoaded:!0});var n=Object(b.f)(i+v);n.startsWith("[")||(n="[]");var s=JSON.parse(n);e.setState({selection:s.length>0?h.a.sortBy(h.a.reduce(a,(function(e,t){return-1!==s.indexOf(t.id)&&e.push(t),e}),[]),(function(e){return s.indexOf(e.id)})):e.state.selection})}e.onLoadHandler(null,e.state.selection)},error:function(t,a,i){console.error(t,a,i),e._isMounted&&e.setState({isLoaded:!0,error:i.toString()})}})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return this.state.error?d.a.createElement("div",null,"Error: ",this.state.error):this.state.isLoaded?d.a.createElement(d.a.Fragment,null,d.a.createElement(g.a,{classNameMenu:"scrollable-GRAXFieldsCombobox",events:{onChange:function(t,a){var i=a.value;e.setState({inputValue:i})},onRequestRemoveSelectedOption:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.onChangeHandler(t,a.selection)},onSelect:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.onChangeHandler(t,a.selection)},onRequestClose:function(t,a){if(e.props.onSelect&&e.state.inputValue){var i=e.getMappedFieldList(a.selection);e.props.onSelect(t,[{id:e.state.inputValue,label:e.state.inputValue}],e.state.options,i)}}},labels:{placeholder:"Select Option"},options:Object(b.e)({inputValue:this.state.inputValue,limit:1e3,options:this.state.options,selection:this.state.selection}),selection:this.state.selection,value:this.state.inputValue,required:!0,multiple:!0})):d.a.createElement("div",{style:{position:"relative",height:"2rem"}},d.a.createElement(m.a,{size:"small",variant:"base"}))}}]),t}(d.a.Component)}}]);
//# sourceMappingURL=7.0f5890ab.chunk.js.map