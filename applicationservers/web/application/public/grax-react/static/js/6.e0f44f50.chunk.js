(this.webpackJsonpgraxreact=this.webpackJsonpgraxreact||[]).push([[6],{198:function(t,e,n){"use strict";var r=n(71),o=n(48),i=n(49),a=n(52),s=n(50),c=n(51),l=n(1),u=n.n(l),p=n(185),f=n(15),d=n(46),g=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(a.a)(this,Object(s.a)(e).call(this,t))).state={pager:{}},n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"componentWillMount",value:function(){this.props.totalItems&&this.setPage(this.props.currentPage,!0)}},{key:"setPage",value:function(t,e){var n=this.props,r=n.totalItems,o=n.pageSize,i=this.state.pager;t<1||t>i.totalPages||(i=this.getPager(r,t,o),this.setState({pager:i}),this.props.onChangePage(t,e))}},{key:"getPager",value:function(t,e,n){e=e||1,n=n||10;var o=!1;t>1e4&&(t=1e4,o=!0);var i,a,s=Math.ceil(t/n);s<=10?(i=1,a=s):e<=6?(i=1,a=10):o&&e+3>=s?(i=s-8,a=s):e+4>=s?(i=s-9,a=s):(i=e-5,a=e+4);var c=(e-1)*n,l=Math.min(c+n-1,t-1),u=Object(r.a)(Array(a+1-i).keys()).map((function(t){return i+t}));return{totalItems:t,currentPage:e,pageSize:n,totalPages:s,startPage:i,endPage:a,startIndex:c,endIndex:l,pages:u,isNarrow:o}}},{key:"render",value:function(){var t=this,e=this.state.pager;return!e.pages||e.pages.length<=1?null:u.a.createElement(p.a,null,u.a.createElement(f.a,{iconCategory:"utility",iconName:"left",iconPosition:"left",label:"First",variant:"neutral",onClick:function(){return t.setPage(1)},disabled:1===e.currentPage}),u.a.createElement(f.a,{iconCategory:"utility",iconName:"chevronleft",iconPosition:"left",variant:"neutral",onClick:function(){return t.setPage(e.currentPage-1)},disabled:1===e.currentPage}),e.pages.map((function(n,r){return u.a.createElement(f.a,{key:"SLDSPaginator"+Date.now()+r,label:n,variant:e.currentPage===n?"brand":"neutral",onClick:function(){return t.setPage(n)}})})),e.isNarrow&&e.currentPage>=e.totalPages-3&&u.a.createElement(d.a,{align:"top right",content:"The list is too long, try adding more filters to optimize the results."},u.a.createElement(f.a,{label:"\xb7\xb7\xb7",variant:"neutral"})),u.a.createElement(f.a,{iconCategory:"utility",iconName:"chevronright",iconPosition:"right",variant:"neutral",onClick:function(){return t.setPage(e.currentPage+1)},disabled:e.currentPage===e.totalPages}),u.a.createElement(f.a,{iconCategory:"utility",iconName:"right",iconPosition:"right",label:"Last",variant:"neutral",onClick:function(){return t.setPage(e.totalPages)},disabled:e.currentPage===e.totalPages}))}}]),e}(u.a.Component);g.defaultProps={currentPage:1,pageSize:10},e.a=g},199:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(48),o=n(49),i=n(52),a=n(50),s=n(51),c=n(1),l=n.n(c),u=n(14),p=n.n(u),f=n(35),d=n.n(f),g=n(53),h=document.getElementById("portals"),y=function(t){function e(t){return Object(r.a)(this,e),Object(i.a)(this,Object(a.a)(e).call(this,t))}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return p.a.createPortal(l.a.createElement("form",{id:this.props.formId,action:g.c+"/grax-app/grax-data-lake/export/"+this.props.params.source+"/csv"+Object(g.b)({action:"export",token:g.g,orgid:g.e}),target:"_blank",method:"POST",encType:"application/x-www-form-urlencoded",style:{margin:0,padding:0,border:0,display:"inline-block"}},d.a.map(this.props.params,(function(t,e){return l.a.createElement("input",{type:"hidden",key:String(Date.now())+e,name:e,value:t||""})}))),h)}}]),e}(l.a.Component),m=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(i.a)(this,Object(a.a)(e).call(this,t))).state={formId:"csvExport"+Date.now()},n}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{formId:this.state.formId,params:this.props.params}),l.a.createElement("button",{className:"slds-button slds-button_neutral",type:"submit",form:this.state.formId},"Export to CSV"))}}]),e}(l.a.Component)},209:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!m(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(s(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}})),c=r[n];n<i;c=r[++n])h(c)||!O(c)?a+=" "+c:a+=" "+s(c);return a},e.deprecate=function(n,r){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,a={};function s(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&e._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,t,r.depth)}function c(t,e){var n=s.styles[e];return n?"\x1b["+s.colors[n][0]+"m"+t+"\x1b["+s.colors[n][1]+"m":t}function l(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&S(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return m(o)||(o=u(t,o,r)),o}var i=function(t,e){if(b(e))return t.stylize("undefined","undefined");if(m(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(y(e))return t.stylize(""+e,"number");if(g(e))return t.stylize(""+e,"boolean");if(h(e))return t.stylize("null","null")}(t,n);if(i)return i;var a=Object.keys(n),s=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),x(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return p(n);if(0===a.length){if(S(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(v(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return p(n)}var l,O="",E=!1,P=["{","}"];(d(n)&&(E=!0,P=["[","]"]),S(n))&&(O=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(O=" "+RegExp.prototype.toString.call(n)),j(n)&&(O=" "+Date.prototype.toUTCString.call(n)),x(n)&&(O=" "+p(n)),0!==a.length||E&&0!=n.length?r<0?v(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=E?function(t,e,n,r,o){for(var i=[],a=0,s=e.length;a<s;++a)k(e,String(a))?i.push(f(t,e,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(f(t,e,n,r,o,!0))})),i}(t,n,r,s,a):a.map((function(e){return f(t,n,r,s,e,E)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,O,P)):P[0]+O+P[1]}function p(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,r,o,i){var a,s,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?s=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(s=t.stylize("[Setter]","special")),k(r,o)||(a="["+o+"]"),s||(t.seen.indexOf(c.value)<0?(s=h(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+s.split("\n").map((function(t){return"   "+t})).join("\n")):s=t.stylize("[Circular]","special")),b(a)){if(i&&o.match(/^\d+$/))return s;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function d(t){return Array.isArray(t)}function g(t){return"boolean"===typeof t}function h(t){return null===t}function y(t){return"number"===typeof t}function m(t){return"string"===typeof t}function b(t){return void 0===t}function v(t){return O(t)&&"[object RegExp]"===E(t)}function O(t){return"object"===typeof t&&null!==t}function j(t){return O(t)&&"[object Date]"===E(t)}function x(t){return O(t)&&("[object Error]"===E(t)||t instanceof Error)}function S(t){return"function"===typeof t}function E(t){return Object.prototype.toString.call(t)}function P(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(b(i)&&(i=Object({NODE_ENV:"production",PUBLIC_URL:"."}).NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;a[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else a[n]=function(){};return a[n]},e.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=g,e.isNull=h,e.isNullOrUndefined=function(t){return null==t},e.isNumber=y,e.isString=m,e.isSymbol=function(t){return"symbol"===typeof t},e.isUndefined=b,e.isRegExp=v,e.isObject=O,e.isDate=j,e.isError=x,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t},e.isBuffer=n(210);var w=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function C(){var t=new Date,e=[P(t.getHours()),P(t.getMinutes()),P(t.getSeconds())].join(":");return[t.getDate(),w[t.getMonth()],e].join(" ")}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",C(),e.format.apply(e,arguments))},e.inherits=n(211),e._extend=function(t,e){if(!e||!O(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var D="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function I(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(D&&t[D]){var e;if("function"!==typeof(e=t[D]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(a){n(a)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),D&&Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=D,e.callbackify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};e.apply(this,n).then((function(e){t.nextTick(a,null,e)}),(function(e){t.nextTick(I,e,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n(118))},210:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},211:function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},222:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n(8),o=n(48),i=n(49),a=n(52),s=n(50),c=n(51),l=n(1),u=n.n(l),p=n(70),f=n(190),d=n(99),g=n(15),h=n(198),y=n(199),m=n(53),b=n(11),v=n(35),O=n.n(v),j=n(209),x=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(a.a)(this,Object(s.a)(e).call(this,t))).state={sortColumn:"Id",sortDirection:"asc",chunks:[],items:[],extraInfo:{},page:0,selection:[],isLoaded:!1,isLoading:!1},n}return Object(c.a)(e,t),Object(i.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.props.renderKey!==t.renderKey||this.state.items!==e.items||this.state.selection!==e.selection||this.state.isLoaded!==e.isLoaded||this.state.isLoading!==e.isLoading||this.state.sortColumn!==e.sortColumn||this.state.sortDirection!==e.sortDirection||this.props.columns!==t.columns}},{key:"getDataHandler",value:function(t,e,n){this.setState({isLoading:!0,page:t,sortColumn:e,sortDirection:n}),m.a.ajax({type:"GET",url:m.c+"/grax-app/grax-data-lake"+Object(m.b)({action:"load",dataIndex:this.props.dataIndex,_select:O.a.union(this.props.columns,this.props.hiddenColumns).join(",")||"Id",_q:this.props.filterQuery,_limit:100,_from:100*t,_sort:e+" "+n,_sortType:this.getSortFieldType(e)}),success:function(t){var e=t.results;this.props.filterFunction&&(e=this.props.filterFunction(e)),e=O.a.map(e,(function(t,e){return O.a.forEach(t,(function(e,n){if("string"==typeof e&&b.c.test(e)){var r=Object(b.j)(e);r.isValid()&&(t[n]=r.tz(b.d).format(-1!==r._i.indexOf(":")?b.a:b.b))}Object(j.isArray)(e)&&(t[n]=e.join(", ")),"boolean"==typeof e&&(t[n]=e?"true":"false")})),Object(r.a)({},t,{},{id:e.toString()})})),this.setState({page:0,data:e,extraInfo:t.extraInfo||{total:0,size:100,totalRetrieved:0},items:e,isLoaded:!0,isLoading:!1})}.bind(this),error:function(t,e,n){console.error(t,e,n),this.setState({isLoaded:!0,isLoading:!1,items:[],error:n.toString()})}.bind(this)})}},{key:"componentDidMount",value:function(){this.getDataHandler(0,this.state.sortColumn,this.state.sortDirection)}},{key:"handleChanged",value:function(t,e){this.setState({selection:e.selection}),console.log(t,e)}},{key:"handleSort",value:function(t){t.property&&this.getDataHandler(this.state.page,t.property,t.sortDirection)}},{key:"getSortFieldType",value:function(t){return this.props._graxFieldsSelection?(this.props._graxFieldsSelection.find((function(e){return e.id===t}))||{}).type:null}},{key:"render",value:function(){var t=this;return this.state.isLoaded?u.a.createElement("div",null,u.a.createElement("div",{style:{position:"relative"}},this.state.isLoading&&u.a.createElement(p.a,{size:"large",variant:"brand"}),u.a.createElement(f.a,{assistiveText:{actionsHeader:"actions",columnSort:"sort this column",columnSortedAscending:"asc",columnSortedDescending:"desc",selectAllRows:"all rows",selectRow:"select this row"},fixedLayout:!0,items:this.state.items,id:"GRAXRestoreDataTable",onRowChange:this.handleChanged.bind(this),onSort:this.handleSort.bind(this),selection:this.state.selection,selectRows:!0},this.props.columns.map((function(e){return u.a.createElement(d.a,{key:"col"+e,id:e,isSorted:t.state.sortColumn===e,label:e,property:e,sortable:null==t.props.sortableColumns||-1!==t.props.sortableColumns.indexOf(e),sortDirection:t.state.sortDirection})})))),u.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-top_small"},u.a.createElement(h.a,{totalItems:this.state.items.length>0?this.state.extraInfo.total:0,pageSize:100,onChangePage:function(e,n){n||t.getDataHandler(e-1,t.state.sortColumn,t.state.sortDirection)}})),u.a.createElement("div",{className:"-x-small-buttons--horizontal slds-p-top_medium"},u.a.createElement(g.a,{label:"Restore Selection",disabled:this.state.selection.length<1||this.state.isLoading,onClick:function(){confirm("Are you sure that you want to re-create the selected records?")&&(m.a.ajax({type:"POST",url:m.c+"/grax-app/grax-data-lake"+Object(m.b)({action:"restore",restoreChildrens:t.props.restoreChildrens,sfRequestsDisabled:t.props.sfRequestsDisabled,checkIsUserActive:t.props.checkIsUserActive,useGRAXHistoryOnly:t.props.useGRAXHistoryOnly,updateRecordIfExist:t.props.updateRecordIfExist,sendNotification:t.props.sendNotification}),contentType:"application/json; charset=utf-8",data:JSON.stringify(O.a.map(t.state.selection,(function(t){return O.a.omit(t,["id"])}))),success:function(t){alert(t.state)}}),t.setState({selection:[]}))}}),u.a.createElement(g.a,{label:"Restore All",disabled:this.state.isLoading,onClick:function(){confirm("Are you sure that you want to re-create the filtered records?")&&(m.a.ajax({type:"POST",url:m.c+"/grax-app/grax-data-lake/restoreAll"+Object(m.b)({action:"restore",restoreChildrens:t.props.restoreChildrens,sfRequestsDisabled:t.props.sfRequestsDisabled,checkIsUserActive:t.props.checkIsUserActive,useGRAXHistoryOnly:t.props.useGRAXHistoryOnly,updateRecordIfExist:t.props.updateRecordIfExist,sendNotification:t.props.sendNotification}),contentType:"application/json; charset=utf-8",data:JSON.stringify({dataIndex:t.props.dataIndex,_q:t.props.filterQuery,_sort:t.state.sortColumn+" "+t.state.sortDirection,_sortType:t.getSortFieldType(t.state.sortColumn)}),success:function(t){alert(t.state)}}),t.setState({selection:[]}))}}),u.a.createElement(y.a,{params:{source:"elastic",dataIndex:this.props.dataIndex,_select:O.a.union(this.props.columns,this.props.hiddenColumns).join(","),_q:this.props.filterQuery,_sort:this.state.sortColumn+" "+this.state.sortDirection,_sortType:this.getSortFieldType(this.state.sortColumn),columns:this.props.columns}}))):u.a.createElement("div",{style:{position:"relative",height:"2rem"}},u.a.createElement(p.a,{size:"medium",variant:"brand"}))}}]),e}(u.a.Component)}}]);
//# sourceMappingURL=6.e0f44f50.chunk.js.map