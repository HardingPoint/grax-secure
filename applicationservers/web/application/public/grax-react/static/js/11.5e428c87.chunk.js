(this.webpackJsonpgraxreact=this.webpackJsonpgraxreact||[]).push([[11,15],{254:function(e,t,a){"use strict";a.r(t);var n=a(36),i=a(46),s=a(48),r=a(37),o=a(47),l=a(0),c=a.n(l),d=a(30),u=a.n(d),h=a(279),p=a(286),m=a(284),g=a(5),f=a(73),b=a(271),v=a(119),C=a(15),x=a(273),S=a(70),_=a(280),y=a(277),k=a(21),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={sortColumn:"Id",sortDirection:"asc",chunks:[],items:[],extraInfo:{},page:0,selection:[],isLoaded:!1,isLoading:!1,deleteConfirmIsOpen:!1,deleteConfirmIsChecked:!1,deleteConfirmCallback:function(){},deleteConfirmTotal:0},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.renderKey!==e.renderKey||this.state.items!==t.items||this.state.selection!==t.selection||this.state.isLoaded!==t.isLoaded||this.state.isLoading!==t.isLoading||this.state.sortColumn!==t.sortColumn||this.state.sortDirection!==t.sortDirection||this.state.deleteConfirmIsOpen!==t.deleteConfirmIsOpen||this.state.deleteConfirmIsChecked!==t.deleteConfirmIsChecked}},{key:"getDataHandler",value:function(e,t,a){var n=this,i=t+" "+a;this.setState({isLoading:!0,page:e,sortColumn:t,sortDirection:a}),y.a.ajax({type:"GET",url:y.c+"/grax-app/grax-data-lake"+Object(y.b)({action:"load",dataIndex:this.props.dataIndex,_select:u.a.union(this.props.columns,this.props.hiddenColumns,["Id","graxorgid","attributes.type"]).join(",")||"Id",_q:this.props.filterQuery,_limit:100,_from:100*e,_sort:i,_includeMetadata:!0}),success:function(e){var t=e.results;n.props.filterFunction&&(t=n.props.filterFunction(t)),t=u.a.map(t,(function(e,t){return u.a.forEach(e,(function(t,a){if("string"==typeof t&&k.c.test(t)){var n=k.l.utc(t);n.isValid()&&(e[a]=n.tz(k.d).format(-1!==n._i.indexOf(":")?k.a:k.b))}"boolean"==typeof t&&(e[a]=t?"true":"false")})),Object(g.a)({},e,{},{id:t.toString()})})),n.setState({page:0,data:t,extraInfo:e.extraInfo||{total:0,size:100,totalRetrieved:0},items:t,isLoaded:!0,isLoading:!1})},error:function(e,t,a){console.error(e,t,a),n.setState({isLoaded:!0,isLoading:!1,items:[],error:a.toString()})}})}},{key:"componentDidMount",value:function(){this.getDataHandler(0,this.state.sortColumn,this.state.sortDirection)}},{key:"handleChanged",value:function(e,t){this.setState({selection:t.selection.slice(0,10)}),console.log(e,t)}},{key:"handleSort",value:function(e){e.property&&this.getDataHandler(this.state.page,e.property,e.sortDirection)}},{key:"render",value:function(){var e=this;return this.state.isLoaded?c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative"}},this.state.isLoading&&c.a.createElement(f.a,{size:"large",variant:"brand"}),c.a.createElement(b.a,{assistiveText:{actionsHeader:"actions",columnSort:"sort this column",columnSortedAscending:"asc",columnSortedDescending:"desc",selectAllRows:"all rows",selectRow:"select this row"},fixedLayout:!0,items:this.state.items,id:"GRAXDeleteDataTable",onRowChange:this.handleChanged.bind(this),onSort:this.handleSort.bind(this),selection:this.state.selection,selectRows:!0},this.props.columns.map((function(t){return c.a.createElement(v.a,{key:"col"+t,id:t,isSorted:e.state.sortColumn===t,label:t,property:t,sortable:null==e.props.sortableColumns||-1!==e.props.sortableColumns.indexOf(t),sortDirection:e.state.sortDirection})})))),c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-top_small"},c.a.createElement(_.a,{totalItems:this.state.items.length>0?this.state.extraInfo.total:0,pageSize:100,onChangePage:function(t,a){a||e.getDataHandler(t-1,e.state.sortColumn,e.state.sortDirection)}})),c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-top_medium"},c.a.createElement(C.a,{label:"Delete Selection",disabled:this.state.selection.length<1||this.state.isLoading,onClick:function(){e.setState({deleteConfirmIsOpen:!0,deleteConfirmIsChecked:!1,deleteConfirmTotal:e.state.selection.length,deleteConfirmCallback:function(){e.state.deleteConfirmIsChecked&&confirm("Are you sure that you want to delete the selected records?")&&(y.a.ajax({type:"POST",url:y.c+"/grax-app/grax-data-lake/deleteAPI"+Object(y.b)({action:"delete"}),contentType:"application/json; charset=utf-8",data:JSON.stringify(u.a.map(e.state.selection,(function(e){return u.a.pick(e,["Id","graxorgid","_id","_type","_index","attributes.type"])}))),success:function(e){alert(e.state)}}),e.setState({selection:[],deleteConfirmIsOpen:!1,deleteConfirmCallback:function(){},deleteConfirmTotal:0}))}})}})),c.a.createElement(x.a,{dismissible:!0,footer:[c.a.createElement("div",{key:"agree",className:"slds-p-bottom_small"},c.a.createElement(S.a,{assistiveText:{label:"I understand the risks"},id:"delete-confirm",labels:{label:"I understand the risks"},onChange:function(t){e.setState({deleteConfirmIsChecked:t.target.checked})}})),c.a.createElement(C.a,{key:"cancelBtn",label:"Cancel",onClick:function(){e.setState({deleteConfirmIsOpen:!1,deleteConfirmIsChecked:!1})}}),c.a.createElement(C.a,{key:"deleteBtn",label:"Delete",onClick:this.state.deleteConfirmCallback,variant:"destructive",disabled:!this.state.deleteConfirmIsChecked})],isOpen:this.state.deleteConfirmIsOpen,onRequestClose:function(){e.setState({deleteConfirmIsOpen:!1,deleteConfirmIsChecked:!1})},prompt:"error",size:"medium",align:"top",dismissOnClickOutside:!1,title:c.a.createElement("span",null,"Delete ",c.a.createElement("b",null,this.state.deleteConfirmTotal)," record(s)")},c.a.createElement("div",{className:"slds-m-around_medium"},"Please confirm that you want to delete these record(s) from your GRAX Datalake.",c.a.createElement("br",null),"After you confirm deletion, these records are NOT recoverable."))):c.a.createElement("div",{style:{position:"relative",height:"2rem"}},c.a.createElement(f.a,{size:"medium",variant:"brand"}))}}]),t}(c.a.Component),E=a(282);a.d(t,"default",(function(){return I}));var F=["text","date","number"],I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={selectedDataIndex:null,retrieved:!1,retrievedCounter:0,_graxFields:null,_graxFieldsSelection:null,_graxFieldsSelectionList:null,_filterFunction:function(e){return e},_getFilterQuery:function(){return null},_filterValuesFields:[],_graxSortableFields:null},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"hasFieldSelected",value:function(){return null!=this.state._graxFields&&null!=this.state._graxFieldsSelectionList&&this.state._graxFieldsSelectionList.length>0}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(h.a,{isCollapsible:!0,isOpen:!0,title:"Select the GRAX Table"},c.a.createElement(p.a,{onSelect:function(t,a){e.setState({selectedDataIndex:a[0]})},excludeIds:["graxgrax_loggingindex"],onRequestRemoveSelectedOption:function(t,a){e.setState({retrieved:!1,selectedDataIndex:null,_graxFieldsSelection:null,_graxFieldsSelectionList:null})}}),c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(h.a,{isCollapsible:!0,isOpen:!0,title:"Search GRAX Table"},null!=this.state.selectedDataIndex?c.a.createElement(m.default,{dataIndex:this.state.selectedDataIndex.id,onLoad:function(t,a,n,i){console.log("onLoad",a,i,n),e.setState({_graxFields:n,_graxFieldsSelection:a,_graxFieldsSelectionList:i,_graxSortableFields:u.a.reduce(n,(function(e,t,a){return-1!==F.indexOf(t.type)&&e.push(t.id),e}),[])})},onChange:function(t,a,n,i){console.log("onChange",a,i);var s=e.state.retrievedCounter;i.length>e.state._graxFieldsSelectionList.length&&s++,e.setState({retrievedCounter:s,_graxFieldsSelection:a,_graxFieldsSelectionList:i})}}):"No GRAX Table selected...",c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(h.a,{isCollapsible:!0,isOpen:!0,title:"Filter Records"},null!=this.state._graxFieldsSelectionList&&c.a.createElement(E.a,{SObjectType:this.state.selectedDataIndex.label,filterableFieldOptions:this.state._graxFields,onFilterValueChangeHandler:function(t,a,n){e.setState({retrievedCounter:e.state.retrievedCounter,_filterFunction:t,_getFilterQuery:n,_graxFieldsSelectionList:e.state._graxFieldsSelectionList,_filterValuesFields:a})}}),c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(h.a,{isCollapsible:!0,isOpen:!0,title:"GRAX Stored Records"},c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-bottom_large"},c.a.createElement(C.a,{label:"Retrieve",variant:"brand",onClick:function(){e.setState({retrieved:null!=e.state.selectedDataIndex,retrievedCounter:e.state.retrievedCounter+1})},disabled:!this.hasFieldSelected()})),this.state.retrieved&&this.state._graxFieldsSelectionList&&c.a.createElement(O,{key:"GRAXDeleteDataTable_"+this.state.retrievedCounter,renderKey:"GRAXDeleteDataTable_"+this.state.retrievedCounter,columns:this.state._graxFieldsSelectionList,hiddenColumns:this.state._filterValuesFields,dataIndex:this.state.selectedDataIndex.id,filterFunction:this.state._filterFunction,filterQuery:this.state._getFilterQuery(),sortableColumns:this.state._graxSortableFields})))}}]),t}(c.a.Component)},277:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a(278),i=a.n(n);a.d(t,"a",(function(){return i.a}));var s="",r=window.__grax__.token,o=window.__grax__._csrf,l=window.__grax__.orgid,c=(window.__grax__.userid,window.__grax__.pageParams||{});function d(e){return null!==e&&void 0!==e||(e={}),null!==e.action&&void 0!==e.action&&""!==e.action||(e.action="load"),"?"+i.a.param(e)}i.a.ajaxSetup({beforeSend:function(e,t){var a;e.setRequestHeader("sfdcorgid",l),null!=c.authorization?e.setRequestHeader("Authorization","Basic "+c.authorization):e.setRequestHeader("Authorization","Bearer "+r),a=t.type,/^(GET|HEAD|OPTIONS|TRACE)$/.test(a)||this.crossDomain||e.setRequestHeader("X-CSRFToken",o),e.withCredentials=!0,!0!==t.skipFail&&e.fail((function(e,t,a){console.error(e),404!==e.status&&"Not Found"!==a&&window.showError(e.statusText+": "+e.responseText)}))}})},280:function(e,t,a){"use strict";var n=a(36),i=a(46),s=a(48),r=a(37),o=a(47),l=a(43),c=a(0),d=a.n(c),u=a(264),h=a(15),p=a(54),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(r.a)(t).call(this,e))).state={pager:{}},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.totalItems,a=e.currentPage;t&&this.setPage(a,!0)}},{key:"setPage",value:function(e,t){var a=this.props,n=a.totalItems,i=a.pageSize,s=this.state.pager;e<1||e>s.totalPages||(s=function(e,t,a){t=t||1,a=a||10;var n=!1;e>1e4&&(e=1e4,n=!0);var i,s,r=Math.ceil(e/a);r<=10?(i=1,s=r):t<=6?(i=1,s=10):n&&t+3>=r?(i=r-8,s=r):t+4>=r?(i=r-9,s=r):(i=t-5,s=t+4);var o=(t-1)*a,c=Math.min(o+a-1,e-1),d=Object(l.a)(Array(s+1-i).keys()).map((function(e){return i+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:r,startPage:i,endPage:s,startIndex:o,endIndex:c,pages:d,isNarrow:n}}(n,e,i),this.setState({pager:s}),this.props.onChangePage(e,t))}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:d.a.createElement(u.a,null,d.a.createElement(h.a,{iconCategory:"utility",iconName:"left",iconPosition:"left",label:"First",variant:"neutral",onClick:function(){return e.setPage(1)},disabled:1===t.currentPage}),d.a.createElement(h.a,{iconCategory:"utility",iconName:"chevronleft",iconPosition:"left",variant:"neutral",onClick:function(){return e.setPage(t.currentPage-1)},disabled:1===t.currentPage}),t.pages.map((function(a,n){return d.a.createElement(h.a,{key:"SLDSPaginator".concat(Date.now()).concat(n),label:a,variant:t.currentPage===a?"brand":"neutral",onClick:function(){return e.setPage(a)}})})),t.isNarrow&&t.currentPage>=t.totalPages-3&&d.a.createElement(p.a,{align:"top right",content:"The list is too long, try adding more filters to optimize the results."},d.a.createElement(h.a,{label:"\xb7\xb7\xb7",variant:"neutral"})),d.a.createElement(h.a,{iconCategory:"utility",iconName:"chevronright",iconPosition:"right",variant:"neutral",onClick:function(){return e.setPage(t.currentPage+1)},disabled:t.currentPage===t.totalPages}),d.a.createElement(h.a,{iconCategory:"utility",iconName:"right",iconPosition:"right",label:"Last",variant:"neutral",onClick:function(){return e.setPage(t.totalPages)},disabled:t.currentPage===t.totalPages}))}}]),t}(d.a.Component);m.defaultProps={currentPage:1,pageSize:10},t.a=m},284:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n,i=a(36),s=a(46),r=a(48),o=a(37),l=a(84),c=a(47),d=a(0),u=a.n(d),h=a(30),p=a.n(h),m=a(73),g=a(266),f=a(277),b=a(21),v="Fields",C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={options:[],inputValue:"",selection:[{id:"Id",label:"Id",type:"text"}],isLoaded:!1,error:null},a.getMappedFieldList=a.getMappedFieldList.bind(Object(l.a)(a)),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"getMappedFieldList",value:function(e){return p.a.map(e||this.state.selection,(function(e){return e.id}))}},{key:"onLoadHandler",value:function(e,t){var a=this.getMappedFieldList(t);this.props.onLoad&&this.props.onLoad(e,t,this.state.options,a)}},{key:"onChangeHandler",value:function(e,t){var a=this.getMappedFieldList(t);this.props.onChange&&this.props.onChange(e,t,this.state.options,a),Object(b.n)(n+v,JSON.stringify(a))}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,n=this.props.dataIndex,this.props.cookieSubfix&&(v+=this.props.cookieSubfix),f.a.ajax({type:"GET",url:f.c+"/grax-app/grax-data-lake/getDataTypeFields/"+n+Object(f.b)({action:"load"}),data:{},success:function(t){if(e._isMounted){var a=p.a.map(t,(function(e,t){return{id:t,label:t,type:e}}));e.setState({options:a,isLoaded:!0});var i=Object(b.h)(n+v);i.startsWith("[")||(i="[]");var s=JSON.parse(i);e.setState({selection:s.length>0?p.a.sortBy(p.a.reduce(a,(function(e,t){return-1!==s.indexOf(t.id)&&e.push(t),e}),[]),(function(e){return s.indexOf(e.id)})):e.state.selection})}e.onLoadHandler(null,e.state.selection)},error:function(t,a,n){console.error(t,a,n),e._isMounted&&e.setState({isLoaded:!0,error:n.toString()})}})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return this.state.error?u.a.createElement("div",null,"Error: ",this.state.error):this.state.isLoaded?u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{classNameMenu:"scrollable-GRAXFieldsCombobox",events:{onChange:function(t,a){var n=a.value;e.setState({inputValue:n})},onRequestRemoveSelectedOption:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.onChangeHandler(t,a.selection)},onSelect:function(t,a){e.setState({inputValue:"",selection:a.selection}),e.onChangeHandler(t,a.selection)},onRequestClose:function(t,a){if(e.props.onSelect&&e.state.inputValue){var n=e.getMappedFieldList(a.selection);e.props.onSelect(t,[{id:e.state.inputValue,label:e.state.inputValue}],e.state.options,n)}}},labels:{placeholder:"Select Option"},options:Object(b.e)({inputValue:this.state.inputValue,limit:1e3,options:this.state.options,selection:this.state.selection}),selection:this.state.selection,value:this.state.inputValue,required:!0,multiple:!0})):u.a.createElement("div",{style:{position:"relative",height:"2rem"}},u.a.createElement(m.a,{size:"small",variant:"base"}))}}]),t}(u.a.Component)}}]);
//# sourceMappingURL=11.5e428c87.chunk.js.map