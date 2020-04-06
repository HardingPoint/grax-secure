(this.webpackJsonpgraxreact=this.webpackJsonpgraxreact||[]).push([[12],{285:function(e){e.exports=JSON.parse('{"component":"alert","status":"prod","display-name":"Alerts","classKey":"Alert","last-accessibility-review":{"date-iso-8601":"2018/01/18","commit-sha":"ad6b6c6523ee21cada11be5f7ea4d99abc530726"},"SLDS-component-path":"/components/alert","dependencies":[{"component":"container","classKey":"AlertContainer"}],"site-stories":[{"heading":"Informational","path":"/__examples__/info.jsx"},{"heading":"Warning","path":"/__examples__/warning.jsx"},{"heading":"System Status","path":"/__examples__/offline.jsx"},{"heading":"Error","path":"/__examples__/error.jsx"},{"heading":"Dismissable","path":"/__examples__/dismissable.jsx"}],"url-slug":"alerts"}')},290:function(e,t,a){"use strict";a.r(t);var s=a(36),n=a(45),r=a(47),i=a(37),l=a(46),o=a(0),c=a.n(o),d=a(27),u=a.n(d),m=a(276),p=a(283),f=a(279),h=a(291),g=a(144),b=a(53),v=a(10),y=a(72),_=a(1),E=a.n(_),x=a(20),O=a.n(x),S=a(29),C=a(16);var N=function(){},R=a(285),j=a(4),k=a(31);function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A={assistiveText:E.a.shape({closeButton:E.a.oneOfType([E.a.string,E.a.node])}),className:E.a.oneOfType([E.a.array,E.a.object,E.a.string]),dismissible:E.a.bool,icon:E.a.node,labels:E.a.shape({heading:E.a.oneOfType([E.a.string,E.a.node]),headingLink:E.a.oneOfType([E.a.string,E.a.node])}),onClickHeadingLink:E.a.func,onRequestClose:E.a.func,style:E.a.object,variant:E.a.oneOf(["error","info","offline","warning"]).isRequired},D={assistiveText:{closeButton:"Close"},labels:{},variant:"info"},q=function(e){function t(e){var a,s,n,r,i,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s=this,n=T(t).call(this,e),a=!n||"object"!==w(n)&&"function"!==typeof n?I(s):n,r=I(a),l=function(e){a.closeButton=e,a.state.isInitialRender&&(k.a.storeActiveElement(),a.closeButton&&a.closeButton.focus(),a.setState({isInitialRender:!1}))},(i="saveButtonRef")in r?Object.defineProperty(r,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[i]=l,a.state={isInitialRender:!0},N(j.a,e,R),a}var a,s,n;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),a=t,(s=[{key:"componentWillUnmount",value:function(){k.a.returnFocusToStoredElement()}},{key:"render",value:function(){var e=O()({},D.assistiveText,this.props.assistiveText),t=O()({},D.labels,this.props.labels),a=t.heading||this.props.content,s=this.props.onRequestClose||this.props.onDismiss,n={info:c.a.createElement(v.a,{category:"utility",name:"info"}),offline:c.a.createElement(v.a,{category:"utility",name:"offline"}),warning:c.a.createElement(v.a,{category:"utility",name:"warning"}),error:c.a.createElement(v.a,{category:"utility",name:"error"})},r=this.props.icon?this.props.icon:n[this.props.variant];this.props.iconName&&this.props.iconCategory&&(r=c.a.createElement(v.a,{category:this.props.iconCategory,name:this.props.iconName}));var i=c.a.cloneElement(r,{containerClassName:"slds-m-right_x-small",inverse:!0,size:"x-small"});return c.a.createElement("div",{className:Object(S.a)("slds-notify slds-notify_alert slds-theme_alert-texture",{"slds-theme_info":"info"===this.props.variant,"slds-theme_warning":"warning"===this.props.variant,"slds-theme_error":"error"===this.props.variant,"slds-theme_offline":"offline"===this.props.variant},this.props.className),role:"alert",style:this.props.style},c.a.createElement("span",{className:"slds-assistive-text"},{info:"info",warning:"warning",error:"error",offline:"offline"}[this.props.variant]),i,c.a.createElement("h2",null,a," ",t.headingLink?c.a.createElement("a",{onClick:this.props.onClickHeadingLink,href:"javascript:void(0);"},t.headingLink):null),this.props.dismissible?c.a.createElement(C.a,{assistiveText:{icon:e.closeButton},buttonRef:this.saveButtonRef,className:"slds-notify__close",iconCategory:"utility",iconName:"close",iconSize:"medium",inverse:!0,onClick:s,title:e.closeButton,variant:"icon"}):null)}}])&&F(a.prototype,s),n&&F(a,n),t}(c.a.Component);q.defaultProps=D,q.displayName=j.a,q.propTypes=A;var P=q,U=a(62),L=a(274);a.d(t,"default",(function(){return M}));var H=Object(o.lazy)((function(){return a.e(15).then(a.bind(null,281))})),Q=Object(o.lazy)((function(){return a.e(9).then(a.bind(null,292))})),X=["text","date","number"],B="Both",G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={checked:B},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"onChangeHandler",value:function(e){this.setState({checked:e}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=["Backed Up","Archived",B];return c.a.createElement("div",{className:"slds-p-bottom_medium"},c.a.createElement("div",{className:"slds-clearfix"},c.a.createElement("div",{className:"slds-float_left slds-p-right_xx-small"},c.a.createElement(h.a,{onChange:function(t){return e.onChangeHandler(t.target.value)},required:this.props.required,name:this.props.name,errorId:this.props.errorId,disabled:!0===this.props.disabled},u.a.map(t,function(e,t){return c.a.createElement(g.a,{key:"option"+t,id:"option"+t,label:e,value:e,checked:this.state.checked===e,variant:"button-group"})}.bind(this)))),c.a.createElement("div",{className:"slds-float_left",style:{margin:"0.41rem"}},c.a.createElement(b.a,{align:"top left",content:'Select one of the options, "Backed Up", "Archived", or "Both", below to display these records.',variant:"learnMore"}))))}}]),t}(c.a.Component),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={selectedDataIndex:null,retrieved:!1,retrievedCounter:0,_sfRequestsDisabled:!0,_restoreChildrens:!1,_checkIsUserActive:!0,_useGRAXHistoryOnly:!1,_updateRecordIfExist:!1,_sendNotification:!1,_currentOrgRecords:!0,_graxFields:null,_graxFieldsSelection:null,_graxFieldsSelectionList:null,_filterFunction:function(e){return e},_getFilterQuery:function(){return null},_filterValuesFields:[],_graxSortableFields:null,objectHasCustomMapping:!1,_archiveFilterQuery:null},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"hasFieldSelected",value:function(){return null!=this.state._graxFields&&null!=this.state._graxFieldsSelectionList&&this.state._graxFieldsSelectionList.length>0}},{key:"getFilterQuery",value:function(){var e=u.a.concat(this.state._getFilterQuery(),this.state._archiveFilterQuery);return this.state._currentOrgRecords&&e.push('(doc.graxorgid.keyword: "'+L.d+'")'),(e=u.a.remove(e,(function(e){return null!=e})))&&e.length>0?e.join(" AND "):null}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(m.a,{isCollapsible:!0,isOpen:!0,title:"Disclaimers"},c.a.createElement("ol",null,c.a.createElement("li",null,"When restoring records in an environment please confirm that the following is true:"),c.a.createElement("ol",{className:"slds-list_ordered"},c.a.createElement("li",null,"Ensure that the destination environment has the same customizations and metadata as the source environment"),c.a.createElement("li",null,"Ensure that all workflows, APEX triggers, validation rules, process builders, duplication rules, etc. are disabled in the destination environment"),c.a.createElement("li",null,"If restoring in a partial or developer Sandbox, ensure that there is ample storage space for the data you are intending to restore in the destination environment"),c.a.createElement("li",null,'Ensure that your user has "modify all data" permission in the destination environment'),c.a.createElement("li",null,'If you are attempting to restore records where the owner is inactive, ensure that your user has the permission "Update records with inactive owners" set to true in the destination environment'))),c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(m.a,{isCollapsible:!0,isOpen:!0,title:"Settings"},c.a.createElement("div",{className:"slds-grid slds-wrap"},c.a.createElement("div",{className:"slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},c.a.createElement("div",{className:"slds-p-bottom_small"},c.a.createElement(b.a,{align:"top left",content:"When disabled, only the parent record will be restored. When enabled, the parent and all related children will be enabled."},c.a.createElement("a",{href:"javascript:void(0)",style:{marginRight:"0.5rem"}},c.a.createElement(v.a,{assistiveText:{label:"Restore Child Records?"},category:"utility",name:"info",size:"x-small"}))),c.a.createElement(y.a,{className:"inline-block",defaultChecked:this.state._restoreChildrens,onChange:function(t){e.setState({_restoreChildrens:t})},assistiveText:{label:"Restore Child Records?"},variant:"toggle",labels:{toggleDisabled:"Restore Parent Record Only",toggleEnabled:"Restore Child Records"}}))),c.a.createElement("div",{className:"slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},c.a.createElement("div",{className:"slds-p-bottom_small"},c.a.createElement(b.a,{align:"top left",content:"When disabled, the restore process queries your storage facility to determine if this record exists already in this SF environment. When enabled the process queries SF to see if this record already exists and will not create a duplicate."},c.a.createElement("a",{href:"javascript:void(0)",style:{marginRight:"0.5rem"}},c.a.createElement(v.a,{assistiveText:{label:"Skip Salesforce Queries?"},category:"utility",name:"info",size:"x-small"}))),c.a.createElement(y.a,{className:"inline-block",defaultChecked:!this.state._sfRequestsDisabled,onChange:function(t){e.setState({_sfRequestsDisabled:!t})},assistiveText:{label:"Skip Salesforce Queries?"},variant:"toggle",labels:{toggleDisabled:"Query storage facility",toggleEnabled:"Query Salesforce"}}))),c.a.createElement("div",{className:"slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},c.a.createElement("div",{className:"slds-p-bottom_small"},c.a.createElement(b.a,{align:"top left",content:'When enabled, the user must have the setting "Update Records with Inactive Owners" set to true otherwise records assigned to an inactive user will NOT be created.'},c.a.createElement("a",{href:"javascript:void(0)",style:{marginRight:"0.5rem"}},c.a.createElement(v.a,{assistiveText:{label:"Assign Records to Inactive Users?"},category:"utility",name:"info",size:"x-small"}))),c.a.createElement(y.a,{className:"inline-block",defaultChecked:!this.state._checkIsUserActive,onChange:function(t){e.setState({_checkIsUserActive:!t})},assistiveText:{label:"Assign Records to Inactive Users?"},variant:"toggle",labels:{toggleDisabled:"Assign records only to Active Users",toggleEnabled:"Assign records to Active or Inactive Users"}}))),c.a.createElement("div",{className:"slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},c.a.createElement("div",{className:"slds-p-bottom_small"},c.a.createElement(b.a,{align:"top left",content:"Set it to TRUE if you don't want to double check that the restored records still exist in the destination Org."},c.a.createElement("a",{href:"javascript:void(0)",style:{marginRight:"0.5rem"}},c.a.createElement(v.a,{assistiveText:{label:"Use GRAXHistory only?"},category:"utility",name:"info",size:"x-small"}))),c.a.createElement(y.a,{className:"inline-block",defaultChecked:this.state._useGRAXHistoryOnly,onChange:function(t){e.setState({_useGRAXHistoryOnly:t})},assistiveText:{label:"Use GRAXHistory only?"},variant:"toggle",labels:{toggleDisabled:"Query SFDC to confirm record exists",toggleEnabled:"Query only GRAX History"}}))),c.a.createElement("div",{className:"slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},c.a.createElement("div",{className:"slds-p-bottom_small"},c.a.createElement(b.a,{align:"top left",content:"Set it to TRUE if you want to update the previously restored records in the destination Org."},c.a.createElement("a",{href:"javascript:void(0)",style:{marginRight:"0.5rem"}},c.a.createElement(v.a,{assistiveText:{label:"Update records?"},category:"utility",name:"info",size:"x-small"}))),c.a.createElement(y.a,{className:"inline-block",defaultChecked:this.state._updateRecordIfExist,onChange:function(t){e.setState({_updateRecordIfExist:t})},assistiveText:{label:"Update records?"},variant:"toggle",labels:{toggleDisabled:"Only insert records",toggleEnabled:"Update records if exists"}}))),c.a.createElement("div",{className:"slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},c.a.createElement("div",{className:"slds-p-bottom_small"},c.a.createElement(b.a,{align:"top left",content:"Notify User via Email when Process Completes"},c.a.createElement("a",{href:"javascript:void(0)",style:{marginRight:"0.5rem"}},c.a.createElement(v.a,{assistiveText:{label:"Send Notification?"},category:"utility",name:"info",size:"x-small"}))),c.a.createElement(y.a,{className:"inline-block",defaultChecked:this.state._sendNotification,onChange:function(t){e.setState({_sendNotification:t})},assistiveText:{label:"Send Notification?"},variant:"toggle",labels:{toggleDisabled:"Don't Send Notification",toggleEnabled:"Send Notification"}}))),c.a.createElement("div",{className:"slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},c.a.createElement("div",{className:"slds-p-bottom_small"},c.a.createElement(b.a,{align:"top left",content:"Show records only from the current environment or all environments."},c.a.createElement("a",{href:"javascript:void(0)",style:{marginRight:"0.5rem"}},c.a.createElement(v.a,{assistiveText:{label:"Filter records?"},category:"utility",name:"info",size:"x-small"}))),c.a.createElement(y.a,{className:"inline-block",defaultChecked:!this.state._currentOrgRecords,onChange:function(t){e.setState({_currentOrgRecords:!t,retrievedCounter:e.state.retrievedCounter+1})},assistiveText:{label:"Show records from all environments?"},variant:"toggle",labels:{toggleDisabled:"Current Environment",toggleEnabled:"All connected SF environments"}})))),c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(m.a,{isCollapsible:!0,isOpen:!0,title:"Select the GRAX Table"},c.a.createElement(p.a,{onSelect:function(t,a){var s=!1,n=a[0];console.log(e.props.customMapping,n);var r=n.label;if(null!=e.props.customMapping){var i=e.props.customMapping[Object.keys(e.props.customMapping).find((function(e){return e.toLowerCase()===r.toLowerCase()}))];i&&Object.keys(i).length>0&&(s=!0)}e.setState({selectedDataIndex:n,objectHasCustomMapping:s})},excludeIds:["graxgrax_loggingindex"],onRequestRemoveSelectedOption:function(t,a){e.setState({retrieved:!1,selectedDataIndex:null,_graxFieldsSelection:null,_graxFieldsSelectionList:null,objectHasCustomMapping:!1})}}),this.state.objectHasCustomMapping?c.a.createElement("div",null,c.a.createElement(P,{dismissible:!0,labels:{heading:'The selected object has a custom mapping defined. To review this custom mapping, click on the "Restore Mapping" tab and then select the object.'},onRequestClose:function(){e.setState({objectHasCustomMapping:!1})}})):null,c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(m.a,{isCollapsible:!0,isOpen:!0,title:"Search GRAX Table"},null!=this.state.selectedDataIndex?c.a.createElement(o.Suspense,{fallback:c.a.createElement("div",{style:{position:"relative",height:"2rem"}},c.a.createElement(U.a,{size:"small",variant:"base"}))},c.a.createElement(H,{dataIndex:this.state.selectedDataIndex.id,onLoad:function(t,a,s,n){console.log("onLoad",a,n,s),e.setState({_graxFields:s,_graxFieldsSelection:a,_graxFieldsSelectionList:n,_graxSortableFields:u.a.reduce(s,(function(e,t,a){return-1!==X.indexOf(t.type)&&e.push(t.id),e}),[])})},onChange:function(t,a,s,n){console.log("onChange",a,n);var r=e.state.retrievedCounter;n.length>e.state._graxFieldsSelectionList.length&&r++,e.setState({retrievedCounter:r,_graxFieldsSelection:a,_graxFieldsSelectionList:n})}})):"No GRAX Table selected...",c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(m.a,{isCollapsible:!0,isOpen:!0,title:"Filter Records"},c.a.createElement(G,{onChange:function(t){var a;t===B&&(a=null),"Backed Up"===t&&(a="(NOT doc.IsDeleted:true)"),"Archived"===t&&(a="(doc.IsDeleted:true)"),e.setState({_archiveFilterQuery:a,retrievedCounter:e.state.retrievedCounter+1})}}),null!=this.state._graxFieldsSelectionList&&c.a.createElement(f.a,{SObjectType:this.state.selectedDataIndex.label,filterableFieldOptions:this.state._graxFields,onFilterValueChangeHandler:function(t,a,s){e.setState({retrievedCounter:e.state.retrievedCounter,_filterFunction:t,_getFilterQuery:s,_graxFieldsSelectionList:e.state._graxFieldsSelectionList,_filterValuesFields:a})}}),c.a.createElement("div",{className:"slds-m-bottom_large"})),c.a.createElement(m.a,{isCollapsible:!0,isOpen:!0,title:"GRAX Stored Records"},c.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-bottom_small"},c.a.createElement(C.a,{label:"Retrieve",variant:"brand",onClick:function(){e.setState({retrieved:null!=e.state.selectedDataIndex,retrievedCounter:e.state.retrievedCounter+1})},disabled:!this.hasFieldSelected()})),this.state.retrieved&&this.state._graxFieldsSelectionList&&c.a.createElement(o.Suspense,{fallback:c.a.createElement("div",{style:{position:"relative",height:"2rem"}},c.a.createElement(U.a,{size:"small",variant:"base"}))},c.a.createElement(Q,{key:"GRAXRestoreDataTable_"+this.state.retrievedCounter,renderKey:"GRAXRestoreDataTable_"+this.state.retrievedCounter,columns:this.state._graxFieldsSelectionList,_graxFieldsSelection:this.state._graxFieldsSelection,hiddenColumns:this.state._filterValuesFields,dataIndex:this.state.selectedDataIndex.id,sfRequestsDisabled:this.state._sfRequestsDisabled,restoreChildrens:this.state._restoreChildrens,checkIsUserActive:this.state._checkIsUserActive,useGRAXHistoryOnly:this.state._useGRAXHistoryOnly,updateRecordIfExist:this.state._updateRecordIfExist,sendNotification:this.state._sendNotification,filterFunction:this.state._filterFunction,filterQuery:this.getFilterQuery(),sortableColumns:this.state._graxSortableFields}))))}}]),t}(c.a.Component)},291:function(e,t,a){"use strict";var s=a(0),n=a.n(s),r=a(1),i=a.n(r),l=a(2),o=a.n(l),c=a(11),d=a.n(c),u=a(20),m=a.n(u),p=a(4);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function b(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _={assistiveText:i.a.shape({label:i.a.string,required:i.a.string}),children:i.a.node.isRequired,className:i.a.oneOfType([i.a.array,i.a.object,i.a.string]),labels:i.a.shape({error:i.a.string,label:i.a.string}),onChange:i.a.func,disabled:i.a.bool,required:i.a.bool,name:i.a.string,errorId:i.a.string,variant:i.a.oneOf(["base","button-group"])},E={assistiveText:{required:"Required"},labels:{},variant:"base"},x=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=b(this,v(t).call(this,e))).generatedName=d.a.generate(),a.generatedErrorId=d.a.generate(),a}var a,s,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),a=t,(s=[{key:"getErrorId",value:function(){if(this.hasError())return this.props.errorId||this.generatedErrorId}},{key:"getName",value:function(){return this.props.name||this.generatedName}},{key:"hasError",value:function(){return!!this.labels.error}},{key:"render",value:function(){var e=this;this.labels=this.props.labels?m()({},E.labels,this.props.labels):E.labels;var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(t){h(e,t,a[t])}))}return e}({},E.assistiveText,this.props.assistiveText),a=n.a.Children.map(this.props.children,(function(t){return n.a.cloneElement(t,{name:e.getName(),onChange:e.props.onChange,"aria-describedby":e.getErrorId(),disabled:e.props.disabled})}));return n.a.createElement("fieldset",{className:o()("slds-form-element",{"slds-has-error":this.labels.error})},n.a.createElement("legend",{className:o()("slds-form-element__legend","slds-form-element__label",t.label?"slds-assistive-text":"")},this.props.required?n.a.createElement("abbr",{className:"slds-required",title:"required"},"*",n.a.createElement("div",{className:"slds-assistive-text"},t.required," ")):null,t.label?t.label:this.labels.label),n.a.createElement("div",{className:o()("slds-form-element__control",this.props.className)},"button-group"===this.props.variant?n.a.createElement("div",{style:this.props.style,className:"slds-radio_button-group"},a):a,this.labels.error?n.a.createElement("div",{id:this.getErrorId(),className:"slds-form-element__help"},this.labels.error):null))}}])&&g(a.prototype,s),r&&g(a,r),t}(n.a.Component);x.displayName=p.P,x.propTypes=_,x.defaultProps=E;var O=x;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var N={assistiveText:i.a.shape({label:i.a.string}),children:i.a.node.isRequired,className:i.a.oneOfType([i.a.array,i.a.object,i.a.string]),labels:i.a.shape({error:i.a.string,label:i.a.string}),onChange:i.a.func,disabled:i.a.bool,required:i.a.bool,name:i.a.string,errorId:i.a.string},R=function(e){e.variant;var t=C(e,["variant"]);return n.a.createElement(O,S({variant:"button-group"},t))};R.displayName=p.O,R.propTypes=N,R.defaultProps={labels:{},assistiveText:{}};t.a=R}}]);
//# sourceMappingURL=12.52251bd1.chunk.js.map