(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var a=n(10),o=n(11),i=n(14),r=n(12),c=n(13),s=n(1),l=n.n(s),u=n(50),d=n(52),p=n(51),m=n(53),h=n(54),g=n.n(h),b=Object(s.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(13)]).then(n.bind(null,134))}),f=Object(s.lazy)(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(15)]).then(n.bind(null,132))}),w=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={isLoading:!0,error:null,customMapping:null},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){g.a.ajax({type:"GET",url:m.b+"/grax-app/grax-data-lake/getCustomMapping"+Object(m.a)({action:"load"}),data:{},success:function(e){var t=e;try{t=g.a.parseJSON(e)}catch(n){}this.setState({customMapping:t,isLoading:!1})}.bind(this),error:function(e,t,n){console.error(e,t,n),this.setState({error:404===e.status?null:n.toString(),customMapping:404===e.status?{}:null,isLoading:!1})}.bind(this)})}},{key:"render",value:function(){var e=this;return this.state.isLoading?l.a.createElement(u.a,{size:"large",variant:"brand"}):l.a.createElement(d.a,{variant:this.props.variant,id:"grax-restore-tabs"},l.a.createElement(p.a,{label:"Restore"},l.a.createElement(s.Suspense,{fallback:l.a.createElement(u.a,{size:"large",variant:"brand"})},l.a.createElement(b,{customMapping:this.state.customMapping}))),l.a.createElement(p.a,{label:"Restore Mapping"},l.a.createElement(s.Suspense,{fallback:l.a.createElement(u.a,{size:"large",variant:"brand"})},l.a.createElement(f,{customMapping:this.state.customMapping,onMappingChange:function(t){e.setState({customMapping:t})}}))))}}]),t}(l.a.Component)},53:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return p}),n.d(t,"a",function(){return b});var a=n(54),o=n.n(a),i="3000"===window.location.port?"https://grax-dev-dave.herokuapp.com":"",r=window.location.search.match(/[\?&]token\=([^&]+)/),c=window.location.search.match(/[\?&]orgid\=([^&]+)/),s=window.location.search.match(/[\?&]userid\=([^&]+)/),l=window.location.search.match(/[\?&]sessionid\=([^&]+)/),u=window.location.search.match(/[\?&]endpoint\=([^&]+)/),d=r?decodeURIComponent(r[1]):null,p=c?decodeURIComponent(c[1]):null,m=s?decodeURIComponent(s[1]):null,h=l?decodeURIComponent(l[1]):null,g=u?decodeURIComponent(u[1]):null;function b(e){return null!==e&&void 0!==e||(e={}),null!==e.action&&void 0!==e.action&&""!==e.action||(e.action="load"),"?"+o.a.param(e)+(d?"&token="+d:"")+(p?"&orgid="+p:"")+(m?"&userid="+m:"")+(h?"&sessionid="+h:"")+(g?"&endpoint="+g:"")}}}]);