(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{99:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return L});var i,a=n(10),s=n(11),o=n(14),l=n(12),r=n(19),u=n(13),c=n(1),p=n.n(c),d=n(54),h=n.n(d),f=n(8),v=n.n(f),b=n(51),g=n(153),m=n(55),O=n(5),S="Fields",L=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={options:[],inputValue:"",selection:[{id:"Id",label:"Id",type:"text"}],isLoaded:!1,error:null},n.getMappedFieldList=n.getMappedFieldList.bind(Object(r.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getMappedFieldList",value:function(e){return v.a.map(e||this.state.selection,function(e){return e.id})}},{key:"onLoadHandler",value:function(e,t){var n=this.getMappedFieldList(t);this.props.onLoad&&this.props.onLoad(e,t,this.state.options,n)}},{key:"onChangeHandler",value:function(e,t){var n=this.getMappedFieldList(t);this.props.onChange&&this.props.onChange(e,t,this.state.options,n),Object(O.j)(i+S,JSON.stringify(n))}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,i=this.props.dataIndex,this.props.cookieSubfix&&(S+=this.props.cookieSubfix),h.a.ajax({type:"GET",url:m.b+"/grax-app/grax-data-lake/getDataTypeFields/"+i+Object(m.a)({action:"load"}),data:{},success:function(t){if(e._isMounted){var n=v.a.map(t,function(e,t){return{id:t,label:t,type:e}});e.setState({options:n,isLoaded:!0});var a=Object(O.f)(i+S);a.startsWith("[")||(a="[]");var s=JSON.parse(a);e.setState({selection:s.length>0?v.a.sortBy(v.a.reduce(n,function(e,t){return-1!==s.indexOf(t.id)&&e.push(t),e},[]),function(e){return s.indexOf(e.id)}):e.state.selection})}e.onLoadHandler(null,e.state.selection)},error:function(t,n,i){console.error(t,n,i),e._isMounted&&e.setState({isLoaded:!0,error:i.toString()})}})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return this.state.error?p.a.createElement("div",null,"Error: ",this.state.error):this.state.isLoaded?p.a.createElement(p.a.Fragment,null,p.a.createElement(g.a,{classNameMenu:"scrollable-GRAXFieldsCombobox",events:{onChange:function(t,n){var i=n.value;e.setState({inputValue:i})},onRequestRemoveSelectedOption:function(t,n){e.setState({inputValue:"",selection:n.selection}),e.onChangeHandler(t,n.selection)},onSelect:function(t,n){e.setState({inputValue:"",selection:n.selection}),e.onChangeHandler(t,n.selection)},onRequestClose:function(t,n){if(e.props.onSelect&&e.state.inputValue){var i=e.getMappedFieldList(n.selection);e.props.onSelect(t,[{id:e.state.inputValue,label:e.state.inputValue}],e.state.options,i)}}},labels:{placeholder:"Select Option"},options:Object(O.e)({inputValue:this.state.inputValue,limit:1e3,options:this.state.options,selection:this.state.selection}),selection:this.state.selection,value:this.state.inputValue,required:!0,multiple:!0})):p.a.createElement("div",{style:{position:"relative",height:"2rem"}},p.a.createElement(b.a,{size:"small",variant:"base"}))}}]),t}(p.a.Component)}}]);