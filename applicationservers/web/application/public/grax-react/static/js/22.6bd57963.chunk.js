(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return I});var n=a(10),r=a(11),s=a(14),o=a(12),i=a(19),l=a(13),c=a(1),d=a.n(c),u=a(51),g=a(142),m=a(118),f=a(101),S=a(61),h=a(58),p=a(115),v=a(54),E=a(8),C=a.n(E),b=[{name:"ANALYTICS_BATCH_SIZE",type:"number"},{name:"ANALYTICS_QUERY_FILE",type:"text"},{name:"MC_HOST",type:"text"},{name:"MC_PASSWORD",type:"password"},{name:"MC_PORT",type:"text"},{name:"MC_USERNAME",type:"text"}],I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={isLoading:!0,error:null,configuration:{},dataSourceIndex:0,isMetadataBackupEnabled:!1},a.triggerConfigurationChange=a.triggerConfigurationChange.bind(Object(i.a)(a)),a.loginHandler=a.loginHandler.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.configuration?C.a.cloneDeep(this.props.configuration):{};this.setState({dataSourceIndex:this.props.dataSourceIndex,configuration:e,isLoading:!1})}},{key:"triggerConfigurationChange",value:function(){var e=C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex]);this.props.onChange&&this.props.onChange(this.state.configuration,e)}},{key:"loginHandler",value:function(){this.props.onLogin&&this.props.onLogin(this.state.configuration,this.state.dataSource)}},{key:"getSFConnectionInfoHandler",value:function(){var e=C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex]);return null==e||0===e.length?alert("Incomplete data"):null==e.provider?alert("Provider required"):null==e.userName?alert("User Name required"):null==e.password?alert("Password required"):null==e.url?alert("Url required"):(this.setState({isLoading:!0}),void v.a.ajax({type:"POST",url:v.c+"/grax-app/grax-cloud/salesforce/login",contentType:"application/json; charset=utf-8",data:JSON.stringify(e),success:function(t){console.log(t),e.instanceUrl=null,e.organizationId=null;var a=this.state.configuration;C.a.set(a,["dataSources",this.state.dataSourceIndex],e),null!=t.accessToken?(e.instanceUrl=t.userInfo.instanceUrl,e.organizationId=t.userInfo.organizationId):alert(JSON.parse(t)),this.setState({configuration:a,isLoading:!1})}.bind(this),error:function(e,t,a){return console.error(e,t,a),this.setState({isLoading:!1}),alert("Error!"),!1}.bind(this)}))}},{key:"render",value:function(){var e=this;return this.state.isLoading?d.a.createElement(u.a,{size:"large",variant:"brand"}):d.a.createElement("div",{className:"slds-p-around_medium"},d.a.createElement(h.a,{title:"Salesforce Connection"},d.a.createElement("div",{className:"slds-grid slds-gutters_direct slds-grid_vertical-align-center slds-p-bottom_medium"},d.a.createElement("div",{className:"slds-col"},d.a.createElement(g.a,{id:"sf-connection-name",label:"Conection Name",defaultValue:C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"name"],"New Data Source"),onBlur:function(t){var a=e.state.configuration;C.a.set(a,["dataSources",e.state.dataSourceIndex,"name"],t.target.value),e.setState({configuration:a}),e.triggerConfigurationChange()}}),d.a.createElement(m.a,{labels:{label:"Authentication Type"},onChange:function(t){var a=e.state.configuration;console.log(t.target),C.a.set(a,["dataSources",e.state.dataSourceIndex,"provider"],t.target.value),e.setState({configuration:a}),e.triggerConfigurationChange()},className:"slds-m-top_small",disabled:!0},d.a.createElement(f.a,{id:"authentication-type-username-password",label:"Username / Password",value:"salesforce",checked:"salesforce"===C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"provider"],"salesforce"),variant:"button-group"}),d.a.createElement(f.a,{id:"authentication-type-oauth",label:"OAuth",value:"oauth",checked:"oauth"===C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"provider"]),variant:"button-group"})))),"oauth"===C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"provider"])?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"slds-grid slds-gutters_direct slds-grid_vertical-align-center"},d.a.createElement("div",{className:"slds-col"},d.a.createElement("div",{className:"slds-form-element"},d.a.createElement("label",{className:"slds-form-element__label",htmlFor:"sf-environment-type"},"Environment Type"),d.a.createElement("div",{className:"slds-form-element__control"},d.a.createElement("div",{className:"slds-select_container"},d.a.createElement("select",{className:"slds-select",id:"sf-environment-type"},d.a.createElement("option",{value:"Production"},"Production"),d.a.createElement("option",{value:"Developer"},"Developer"),d.a.createElement("option",{value:"Sandbox"},"Sandbox"))))))),d.a.createElement("div",{className:"slds-grid slds-gutters_direct slds-grid_vertical-align-center"},d.a.createElement("div",{className:"slds-col"},d.a.createElement("div",{className:"slds-p-top_medium"},d.a.createElement(S.a,{label:"Login with SalesForce",variant:"brand",onClick:function(t){e.loginHandler()}}))))):null),"salesforce"===C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"provider"],"salesforce")?d.a.createElement(h.a,{title:"Login Details"},d.a.createElement("div",{className:"slds-grid slds-gutters_direct slds-grid_vertical-align-center"},d.a.createElement("div",{className:"slds-col"},d.a.createElement(g.a,{id:"sfdc-username",label:"SFDC Username",defaultValue:C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"userName"]),onBlur:function(t){var a=e.state.configuration;C.a.set(a,["dataSources",e.state.dataSourceIndex,"userName"],t.target.value),e.setState({configuration:a}),e.triggerConfigurationChange()}}),d.a.createElement(g.a,{id:"sfdc-password",type:"password",label:"SFDC Password",defaultValue:C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"password"]),onBlur:function(t){var a=e.state.configuration;C.a.set(a,["dataSources",e.state.dataSourceIndex,"password"],t.target.value),e.setState({configuration:a}),e.triggerConfigurationChange()}}),d.a.createElement(g.a,{id:"sfdc-url",label:"SFDC URL",defaultValue:C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"url"]),onBlur:function(t){var a=e.state.configuration;C.a.set(a,["dataSources",e.state.dataSourceIndex,"url"],t.target.value),e.setState({configuration:a}),e.triggerConfigurationChange()}})),d.a.createElement("div",{className:"slds-col"},d.a.createElement(g.a,{id:"sfdc-token",label:"SFDC Security Token",defaultValue:C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"token"]),onBlur:function(t){var a=e.state.configuration;C.a.set(a,["dataSources",e.state.dataSourceIndex,"token"],t.target.value),e.setState({configuration:a}),e.triggerConfigurationChange()}}),d.a.createElement(g.a,{id:"sfdc-org-id",label:"SFDC Organization ID (18 Digit)",defaultValue:C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"organizationId"]),readOnly:!0}),d.a.createElement(g.a,{id:"sfdc-org-title",label:"SFDC Organization Title",defaultValue:C.a.get(this.state.configuration,["dataSources",this.state.dataSourceIndex,"name"]),readOnly:!0}))),d.a.createElement("div",{className:"slds-p-top_medium"},d.a.createElement(S.a,{label:"Connect to SFDC",variant:"brand",onClick:function(){e.getSFConnectionInfoHandler()}}))):null,d.a.createElement(h.a,{title:"Sync Analytics & Marketing Cloud",className:"slds-p-top_large"},C.a.map(b,function(e,t){var a="grax-env-setting-"+(e.id||e.name);return d.a.createElement(p.GRAXEnvSetting,{id:a,key:a,setting:e,onBlur:function(e){console.log(e)}})})))}}]),t}(d.a.Component)}}]);
//# sourceMappingURL=22.6bd57963.chunk.js.map