(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{151:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return _});var n=a(10),r=a(11),i=a(14),o=a(12),s=a(13),u=a(1),c=a.n(u),l=a(51),p=a(53),d=a(52),g=a(54),f=a(57),m=a.n(f),h=Object(u.lazy)(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(15)]).then(a.bind(null,144))}),b=Object(u.lazy)(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(5),a.e(16)]).then(a.bind(null,142))}),_=function(t){function e(t){var a;return Object(n.a)(this,e),(a=Object(i.a)(this,Object(o.a)(e).call(this,t))).state={isLoading:!0,error:null,customMapping:null},a}return Object(s.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){m.a.ajax({type:"GET",url:g.c+"/grax-app/grax-data-lake/getCustomMapping"+Object(g.b)({action:"load"}),data:{},success:function(t){var e=t;try{e=m.a.parseJSON(t)}catch(a){}this.setState({customMapping:e,isLoading:!1})}.bind(this),error:function(t,e,a){console.error(t,e,a),this.setState({error:404===t.status?null:a.toString(),customMapping:404===t.status?{}:null,isLoading:!1})}.bind(this)})}},{key:"render",value:function(){var t=this;return this.state.isLoading?c.a.createElement(l.a,{size:"large",variant:"brand"}):"mapping"===this.props.appName?c.a.createElement(u.Suspense,{fallback:c.a.createElement(l.a,{size:"large",variant:"brand"})},c.a.createElement(b,{customMapping:this.state.customMapping,onMappingChange:function(e){t.setState({customMapping:e})}})):c.a.createElement(p.a,{variant:this.props.variant,id:"grax-restore-tabs"},"restore"===this.props.appName?c.a.createElement(d.a,{label:"Restore"},c.a.createElement(u.Suspense,{fallback:c.a.createElement(l.a,{size:"large",variant:"brand"})},c.a.createElement(h,{customMapping:this.state.customMapping}))):null)}}]),e}(c.a.Component)},54:function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"g",function(){return s}),a.d(e,"e",function(){return c}),a.d(e,"f",function(){return l}),a.d(e,"b",function(){return p});var n=a(57),r=a.n(n);a.d(e,"a",function(){return r.a});var i=!1,o=i?"https://grax-datalake-demo2.herokuapp.com":"",s=window.__grax__.token,u=window.__grax__._csrf,c=window.__grax__.orgid,l=(window.__grax__.userid,window.__grax__.pageParams||{});function p(t){return null!==t&&void 0!==t||(t={}),null!==t.action&&void 0!==t.action&&""!==t.action||(t.action="load"),"?"+r.a.param(t)}r.a.ajaxSetup({beforeSend:function(t,e){var a;t.setRequestHeader("sfdcorgid",c),null!=l.authorization?t.setRequestHeader("Authorization",l.authorization):t.setRequestHeader("Authorization","Bearer "+s),a=e.type,/^(GET|HEAD|OPTIONS|TRACE)$/.test(a)||this.crossDomain||t.setRequestHeader("X-CSRFToken",u),t.withCredentials=!0,t.fail(function(t,e,a){console.error(t),404!==t.status&&"Not Found"!==a&&window.showError(t.statusText+": "+t.responseText)})}})}}]);
//# sourceMappingURL=20.917f4a04.chunk.js.map