(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,a,t){},170:function(e,a,t){"use strict";(function(e){var n=t(4),r=t(5),l=t(7),c=t(6),i=t(8),s=t(0),o=t.n(s),m=t(189),u=t(354),d=(t(204),t(205),t(190)),p=t(188),b=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(l.a)(this,Object(c.a)(a).call(this))).state={loading:!0,loaded:!1},e}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("load",(function(){e.setState({loading:!1}),setTimeout((function(){return e.setState({loaded:!0})}),500)}))}},{key:"render",value:function(){var e=this.state,a=e.loaded,t=e.loading;return o.a.createElement(u.a,null,o.a.createElement(p.a,null,!a&&o.a.createElement("div",{className:"load".concat(t?"":" loaded")},o.a.createElement("div",{className:"load__icon-wrap"},o.a.createElement("svg",{className:"load__icon"},o.a.createElement("path",{fill:"#4ce1b6",d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"})))),o.a.createElement("div",null,o.a.createElement(d.a,null))))}}]),a}(s.Component);a.a=Object(m.hot)(e)(b)}).call(this,t(203)(e))},188:function(e,a,t){"use strict";var n=t(4),r=t(5),l=t(7),c=t(6),i=t(8),s=t(0),o=t(355),m=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(s.PureComponent);a.a=Object(o.a)(m)},190:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(377),c=t(175),i=t(4),s=t(5),o=t(7),m=t(6),u=t(8),d=t(355),p=t(11),b=t.n(p),h=t(128),E="".concat("/dash-mash","/img/burger.svg"),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeMobileSidebarVisibility,t=e.changeSidebarVisibility;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"topbar__button topbar__button--desktop",onClick:t},r.a.createElement("img",{src:E,alt:"",className:"topbar__button-icon"})),r.a.createElement("button",{type:"button",className:"topbar__button topbar__button--mobile",onClick:a},r.a.createElement("img",{src:E,alt:"",className:"topbar__button-icon"})))}}]),a}(n.PureComponent),g=t(171),v=t.n(g),_=t(378),y=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.icon,n=e.path;return r.a.createElement(h.a,{className:"topbar__link",to:n},r.a.createElement("span",{className:"topbar__link-icon lnr lnr-".concat(t)}),r.a.createElement("p",{className:"topbar__link-title"},a))}}]),a}(n.PureComponent),N="".concat("/dash-mash","/img/ava.png"),k=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.state={collapse:!1},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.collapse;return r.a.createElement("div",{className:"topbar__profile"},r.a.createElement("button",{type:"button",className:"topbar__avatar",onClick:this.toggle},r.a.createElement("img",{className:"topbar__avatar-img",src:N,alt:"avatar"}),r.a.createElement("p",{className:"topbar__avatar-name"},"Anuj Agarwal"),r.a.createElement(v.a,{className:"topbar__icon"})),e&&r.a.createElement("button",{type:"button",className:"topbar__back",onClick:this.toggle}),r.a.createElement(_.a,{isOpen:e,className:"topbar__menu-wrap"},r.a.createElement("div",{className:"topbar__menu"},r.a.createElement(y,{title:"Page one",icon:"list",path:"/pages/one"}),r.a.createElement(y,{title:"Page two",icon:"inbox",path:"/pages/two"}),r.a.createElement("div",{className:"topbar__menu-divider"}),r.a.createElement(y,{title:"Log Out",icon:"exit",path:"/"}))))}}]),a}(n.PureComponent),C=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeMobileSidebarVisibility,t=e.changeSidebarVisibility;return r.a.createElement("div",{className:"topbar"},r.a.createElement("div",{className:"topbar__wrapper"},r.a.createElement("div",{className:"topbar__left"},r.a.createElement(f,{changeMobileSidebarVisibility:a,changeSidebarVisibility:t}),r.a.createElement(h.a,{className:"topbar__logo",to:"/dashboard_default"})),r.a.createElement("div",{className:"topbar__right"},r.a.createElement(k,null))))}}]),a}(n.PureComponent),O=t(173),j=t.n(O),w=t(366),x=t(365),S=function(e){var a=e.title,t=e.icon,n=e.newLink,l=e.route,c=e.onClick;return r.a.createElement(x.a,{to:l,onClick:c,activeClassName:"sidebar__link-active"},r.a.createElement("li",{className:"sidebar__link"},t?r.a.createElement("span",{className:"sidebar__link-icon lnr lnr-".concat(t)}):"",r.a.createElement("p",{className:"sidebar__link-title"},a,n?r.a.createElement(w.a,{className:"sidebar__link-badge"},r.a.createElement("span",null,"New")):"")))};S.defaultProps={icon:"",newLink:!1,route:"/",onClick:function(){}};var P=S,D=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.state={collapse:!1},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.icon,n=e.isNew,l=e.children,c=this.state.collapse,i=b()({"sidebar__category-wrap":!0,"sidebar__category-wrap--open":c});return r.a.createElement("div",{className:i},r.a.createElement("button",{type:"button",className:"sidebar__link sidebar__category",onClick:this.toggle},t?r.a.createElement("span",{className:"sidebar__link-icon lnr lnr-".concat(t)}):"",r.a.createElement("p",{className:"sidebar__link-title"},a,n&&r.a.createElement("span",{className:"sidebar__category-new"})),r.a.createElement("span",{className:"sidebar__category-icon lnr lnr-chevron-right"})),r.a.createElement(_.a,{isOpen:c,className:"sidebar__submenu-wrap"},r.a.createElement("ul",{className:"sidebar__submenu"},r.a.createElement("div",null,l))))}}]),a}(n.Component);D.defaultProps={icon:"",isNew:!1};var A=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).hideSidebar=function(){(0,t.props.onClick)()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar__content"},r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(P,{title:"Test",icon:"exit",route:"/pages/one",onClick:this.hideSidebar})),r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(P,{title:"Check",icon:"exit",route:"/pages/one",onClick:this.hideSidebar})),r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(P,{title:"Test2",icon:"exit",route:"/pages/two",onClick:this.hideSidebar})),r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(P,{title:"Test3",icon:"exit",route:"/pages/two",onClick:this.hideSidebar})),r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(P,{title:"Test4",icon:"exit",route:"/pages/two",onClick:this.hideSidebar})),r.a.createElement("ul",{className:"sidebar__block"},r.a.createElement(D,{title:"Example Pages",icon:"diamond"},r.a.createElement(P,{title:"Page one",route:"/pages/one",onClick:this.hideSidebar}),r.a.createElement(P,{title:"Page two",route:"/pages/two",onClick:this.hideSidebar}),r.a.createElement(P,{title:"Test",route:"/pages/two",onClick:this.hideSidebar}),r.a.createElement(P,{title:"Testt",route:"/pages/two",onClick:this.hideSidebar}),r.a.createElement(P,{title:"ABC",route:"/pages/two",onClick:this.hideSidebar}),r.a.createElement(P,{title:"Lorel Impsum",route:"/pages/two",onClick:this.hideSidebar}))))}}]),a}(n.Component),M=function(e){var a=e.changeMobileSidebarVisibility,t=e.sidebarShow,n=e.sidebarCollapse,l=b()({sidebar:!0,"sidebar--show":t,"sidebar--collapse":n});return r.a.createElement("div",{className:l},r.a.createElement("button",{type:"button",className:"sidebar__back",onClick:a}),r.a.createElement(j.a,{className:"sidebar__scroll scroll"},r.a.createElement("div",{className:"sidebar__wrapper sidebar__wrapper--desktop"},r.a.createElement(A,{onClick:function(){}})),r.a.createElement("div",{className:"sidebar__wrapper sidebar__wrapper--mobile"},r.a.createElement(A,{onClick:a}))))},V=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={sidebarShow:!1,sidebarCollapse:!1},t.changeSidebarVisibility=function(){t.setState((function(e){return{sidebarCollapse:!e.sidebarCollapse}}))},t.changeMobileSidebarVisibility=function(){t.setState((function(e){return{sidebarShow:!e.sidebarShow}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.sidebarShow,t=e.sidebarCollapse,n=b()({layout:!0,"layout--collapse":t});return r.a.createElement("div",{className:n},r.a.createElement(C,{changeMobileSidebarVisibility:this.changeMobileSidebarVisibility,changeSidebarVisibility:this.changeSidebarVisibility}),r.a.createElement(M,{sidebarShow:a,sidebarCollapse:t,changeMobileSidebarVisibility:this.changeMobileSidebarVisibility}))}}]),a}(n.Component),F=Object(d.a)(V),I=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"theme-light"},r.a.createElement("div",{className:"wrapper"},e))}}]),a}(n.PureComponent),T=t(178),R=t.n(T),z=t(179),B=t.n(z),L=t(180),$=t.n(L),W=t(181),Z=t.n(W),Y=t(182),U=t.n(Y),J=t(129),H=t.n(J),X=t(183),q=t.n(X),G=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.onChange)(e.defaultChecked)}},{key:"render",value:function(){var e=this.props,a=e.disabled,t=e.className,n=e.name,l=e.value,c=e.onChange,i=e.label,s=e.color,o=b()({"checkbox-btn":!0,disabled:a});return r.a.createElement("label",{className:"".concat(o," ").concat(t?" checkbox-btn--".concat(t):""),htmlFor:n},r.a.createElement("input",{className:"checkbox-btn__checkbox",type:"checkbox",id:n,name:n,onChange:c,checked:l,disabled:a}),r.a.createElement("span",{className:"checkbox-btn__checkbox-custom",style:s?{background:s,borderColor:s}:{}},r.a.createElement(H.a,null)),"button"===t?r.a.createElement("span",{className:"checkbox-btn__label-svg"},r.a.createElement(H.a,{className:"checkbox-btn__label-check"}),r.a.createElement(q.a,{className:"checkbox-btn__label-uncheck"})):"",r.a.createElement("span",{className:"checkbox-btn__label"},i))}}]),a}(n.PureComponent);G.defaultProps={label:"",defaultChecked:!1,disabled:!1,className:"",color:""};var K=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).showPassword=function(a){a.preventDefault(),e.setState((function(e){return{showPassword:!e.showPassword}}))},e.state={showPassword:!1},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.showPassword;return r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"form__form-group"},r.a.createElement("span",{className:"form__form-group-label"},"Username"),r.a.createElement("div",{className:"form__form-group-field"},r.a.createElement("div",{className:"form__form-group-icon"},r.a.createElement(U.a,null)),r.a.createElement("input",{name:"name",type:"text",placeholder:"Name"}))),r.a.createElement("div",{className:"form__form-group"},r.a.createElement("span",{className:"form__form-group-label"},"Password"),r.a.createElement("div",{className:"form__form-group-field"},r.a.createElement("div",{className:"form__form-group-icon"},r.a.createElement(Z.a,null)),r.a.createElement("input",{name:"password",type:a?"text":"password",placeholder:"Password"}),r.a.createElement("button",{className:"form__form-group-button".concat(a?" active":""),onClick:function(a){return e.showPassword(a)},type:"button"},r.a.createElement($.a,null))),r.a.createElement("div",{className:"account__forgot-password"},r.a.createElement("a",{href:"/"},"Forgot a password?"))),r.a.createElement("div",{className:"form__form-group"},r.a.createElement("div",{className:"form__form-group-field"},r.a.createElement(G,{name:"remember_me",label:"Remember me",value:"on",onChange:function(){}}))),r.a.createElement(h.a,{className:"btn btn-primary account__btn account__btn--small",to:"/pages/one"},"Sign In"),r.a.createElement(h.a,{className:"btn btn-outline-primary account__btn account__btn--small",to:"/Registration"},"Create Account"))}}]),a}(n.PureComponent),Q=function(){return r.a.createElement("div",{className:"account"},r.a.createElement("div",{className:"account__wrapper"},r.a.createElement("div",{className:"account__card"},r.a.createElement("div",{className:"account__head"},r.a.createElement("h3",{className:"account__title"},"Welcome to",r.a.createElement("span",{className:"account__logo"}," Dashboard",r.a.createElement("span",{className:"account__logo-accent"},"DEV"))),r.a.createElement("h4",{className:"account__subhead subhead"},"Start your business easily")),r.a.createElement(K,null),r.a.createElement("div",{className:"account__or"},r.a.createElement("p",null,"Or Easily Using")),r.a.createElement("div",{className:"account__social"},r.a.createElement(h.a,{className:"account__social-btn account__social-btn--facebook",to:"/pages/one"},r.a.createElement(R.a,null)),r.a.createElement(h.a,{className:"account__social-btn account__social-btn--google",to:"/pages/one"},r.a.createElement(B.a,null))))))},ee=t(184),ae=(t(153),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),t.props.nextStep()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.values,t=e.handleChange;return r.a.createElement("div",{id:"main-registration-container"},r.a.createElement("div",{id:"register"},r.a.createElement("form",null,r.a.createElement("h3",{padding:"10px",margin:"normal",fullWidth:"true"},"Registration page"),r.a.createElement("br",null),r.a.createElement("label",null,"First Name"),r.a.createElement("input",{placeholder:"Enter Your First Name",label:"First Name",onChange:t("firstName"),defaultValue:a.firstName,margin:"normal",fullWidth:"true"}),r.a.createElement("br",null),r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{placeholder:"Enter Your Last Name",label:"Last Name",onChange:t("lastName"),defaultValue:a.lastName,margin:"normal",fullWidth:"true"}),r.a.createElement("br",null),r.a.createElement("label",null,"Email"),r.a.createElement("input",{placeholder:"Enter Your Email",label:"Email",onChange:t("email"),defaultValue:a.email,margin:"normal",fullWidth:"true"}),r.a.createElement("br",null),r.a.createElement("button",{className:"button",onClick:this.continue},"Continue"))))}}]),a}(n.Component)),te=t(46),ne=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={fields:{},errors:{}},e.handleChange=e.handleChange.bind(Object(te.a)(Object(te.a)(e))),e.submituserRegistrationForm=e.submituserRegistrationForm.bind(Object(te.a)(Object(te.a)(e))),e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){var a=this.state.fields;a[e.target.name]=e.target.value,this.setState({fields:a})}},{key:"submituserRegistrationForm",value:function(e){if(e.preventDefault(),this.validateForm()){var a={participantcode:"",participantname:"",contactperson:"",emailid:"",mobileno:"",address:"",bankname:"",bankbranch:"",bankifsc:"",bankaccountno:"",pancard:"",officeadress:""};this.setState({fields:a}),alert("Form submitted")}}},{key:"validateForm",value:function(){var e=this.state.fields,a={},t=!0;(e.participantcode||(t=!1,a.participantcode="*Please enter your participant code."),"undefined"!==typeof e.participantcode&&(e.participantcode.match(/^[0-9]{10}$/)||(t=!1,a.participantcode="*Please enter valid participant code")),e.participantname||(t=!1,a.participantname="*Please enter your participant name."),"undefined"!==typeof e.participantname&&(e.participantname.match(/^[a-zA-Z ]*$/)||(t=!1,a.participantname="*Please enter alphabet characters only.")),e.contactperson||(t=!1,a.contactperson="*Please enter your contactperson."),"undefined"!==typeof e.contactperson&&(e.contactperson.match(/^[a-zA-Z ]*$/)||(t=!1,a.contactperson="*Please enter alphabet characters only.")),e.emailid||(t=!1,a.emailid="*Please enter your email-ID."),"undefined"!==typeof e.emailid)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.emailid)||(t=!1,a.emailid="*Please enter valid email-ID."));(e.mobileno||(t=!1,a.mobileno="*Please enter your mobile no."),"undefined"!==typeof e.mobileno&&(e.mobileno.match(/^[0-9]{10}$/)||(t=!1,a.mobileno="*Please enter valid mobile no.")),e.address||(t=!1,a.address="*Please enter your address."),"undefined"!==typeof e.address&&(e.address.match(/^[a-zA-Z ]*$/)||(t=!1,a.address="*Please enter alphabet characters only.")),e.bankname||(t=!1,a.bankname="*Please enter your bankname"),"undefined"!==typeof e.bankname&&(e.bankname.match(/^[a-zA-Z ]*$/)||(t=!1,a.bankname="*Please enter alphabet characters only.")),e.bankifsc||(t=!1,a.bankifsc="*Please enter your bankifsc"),"undefined"!==typeof e.bankifsc&&(e.bankifsc.match(/^[a-zA-Z ]*$/)||(t=!1,a.bankifsc="*Please enter alphabet characters only.")),e.bankaccountno||(t=!1,a.bankaccountno="*Please enter your bankaccountno"),"undefined"!==typeof e.bankaccountno&&(e.bankaccountno.match(/^[0-9]{10}$/)||(t=!1,a.bankaccountno="*Please enter bank account number only.")),e.pancard||(t=!1,a.pancard="*Please enter your email-ID."),"undefined"!==typeof e.pancard)&&(new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/).test(e.pancard)||(t=!1,a.pancard="*Please enter valid pancard"));(e.officeadress||(t=!1,a.officeadress="*officeadress"),"undefined"!==typeof e.officeadress)&&(new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/).test(e.officeadress)||(t=!1,a.officeadress="*Please enter valid address."));return this.setState({errors:a}),t}},{key:"render",value:function(){return r.a.createElement("div",{id:"main-registration-container"},r.a.createElement("div",{id:"register"},r.a.createElement("form",{method:"post",name:"userRegistrationForm",onSubmit:this.submituserRegistrationForm},r.a.createElement("label",null,"Participant code"),r.a.createElement("input",{type:"text",name:"participantcode",value:this.state.fields.participantcode,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.username)," ",r.a.createElement("label",null,"Participant Name"),r.a.createElement("input",{type:"text",name:"participantname",value:this.state.fields.username,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.participantname)," ",r.a.createElement("label",null,"Contact Person"),r.a.createElement("input",{type:"text",name:"contactperson",value:this.state.fields.contactperson,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.contactperson)," ",r.a.createElement("label",null,"Email ID:"),r.a.createElement("input",{type:"text",name:"emailid",value:this.state.fields.emailid,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.emailid),r.a.createElement("label",null,"Mobile No:"),r.a.createElement("input",{type:"text",name:"mobileno",value:this.state.fields.mobileno,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.mobileno),r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",name:"address",value:this.state.fields.address,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.address)," ",r.a.createElement("label",null,"Bank Name"),r.a.createElement("input",{type:"text",name:"bankname",value:this.state.fields.bankname,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.bankname)," ",r.a.createElement("label",null,"Bank branch"),r.a.createElement("input",{type:"text",name:"bankbranch",value:this.state.fields.bankbranch,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.bankbranch)," ",r.a.createElement("label",null,"Bank IFSC"),r.a.createElement("input",{type:"text",name:"bankifsc",value:this.state.fields.bankifsc,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.bankifsc),r.a.createElement("label",null,"Bank Account No."),r.a.createElement("input",{type:"text",name:"bankaccountno",value:this.state.fields.bankaccountno,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.bankaccountno),r.a.createElement("label",null,"PAN No."),r.a.createElement("input",{type:"text",name:"pancard",value:this.state.fields.pancard,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.pancard),r.a.createElement("label",null,"Office Address"),r.a.createElement("input",{type:"text",name:"officeaddress",value:this.state.fields.officeaddress,onChange:this.handleChange}),r.a.createElement("div",{className:"errorMsg"},this.state.errors.officeaddress)," ",r.a.createElement("input",{type:"submit",className:"button",value:"Register"}))))}}]),a}(r.a.Component),re=t(376),le=t(368),ce=t(85),ie=t.n(ce),se=t(369),oe=t(379),me=t(380),ue=t(370),de=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),t.props.nextStep()},t.back=function(e){e.preventDefault(),t.props.prevStep()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.values,a=e.firstName,t=e.lastName,n=e.email,l=e.occupation,c=e.city,i=e.bio;return r.a.createElement(ie.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{open:"true",fullWidth:"true",maxWidth:"sm"},r.a.createElement(le.a,{title:"Confirm User Data"}),r.a.createElement(se.a,null,r.a.createElement(oe.a,null,r.a.createElement(me.a,{primary:"First Name",secondary:a})),r.a.createElement(oe.a,null,r.a.createElement(me.a,{primary:"Last Name",secondary:t})),r.a.createElement(oe.a,null,r.a.createElement(me.a,{primary:"Email",secondary:n})),r.a.createElement(oe.a,null,r.a.createElement(me.a,{primary:"Occupation",secondary:l})),r.a.createElement(oe.a,null,r.a.createElement(me.a,{primary:"City",secondary:c})),r.a.createElement(oe.a,null,r.a.createElement(me.a,{primary:"Bio",secondary:i}))),r.a.createElement("br",null),r.a.createElement(ue.a,{color:"secondary",variant:"contained",onClick:this.back},"Back"),r.a.createElement(ue.a,{color:"primary",variant:"contained",onClick:this.continue},"Confirm & Continue"))))}}]),a}(n.Component),pe=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),t.props.nextStep()},t.back=function(e){e.preventDefault(),t.props.prevStep()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(ie.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{open:"true",fullWidth:"true",maxWidth:"sm"},r.a.createElement(le.a,{title:"Success"}),r.a.createElement("h1",null,"Thank You For Your Submission"),r.a.createElement("p",null,"You will get an email with further instructions"))))}}]),a}(n.Component),be=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},t.nextStep=function(){var e=t.state.step;t.setState({step:e+1})},t.prevStep=function(){var e=t.state.step;t.setState({step:e-1})},t.handleChange=function(e){return function(a){t.setState(Object(ee.a)({},e,a.target.value))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.step,a=this.state,t={firstName:a.firstName,lastName:a.lastName,email:a.email,occupation:a.occupation,city:a.city,bio:a.bio};switch(e){case 1:return r.a.createElement(ae,{nextStep:this.nextStep,handleChange:this.handleChange,values:t});case 2:return r.a.createElement(ne,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:t});case 3:return r.a.createElement(de,{nextStep:this.nextStep,prevStep:this.prevStep,values:t});case 4:return r.a.createElement(pe,null)}}}]),a}(n.Component),he=function(){return r.a.createElement("div",{className:"account"},r.a.createElement(be,null))},Ee=t(375),fe=t(371),ge=t(372),ve=t(373),_e=t(374),ye=t(68),Ne=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={chartData:e.chartData},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(fe.a,{className:"chart"},r.a.createElement(ge.a,{md:6,xx:4},r.a.createElement(ve.a,null,r.a.createElement(_e.a,null,r.a.createElement(ye.a,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Yearly Total Investment In"+this.props.location,fontSize:18},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))),r.a.createElement(ge.a,{md:6,xx:4},r.a.createElement(ve.a,null,r.a.createElement(_e.a,null,r.a.createElement(ye.c,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Total Investment In "+this.props.location,fontSize:18},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))),r.a.createElement(ge.a,{md:6,xx:4},r.a.createElement(ve.a,null,r.a.createElement(_e.a,null,r.a.createElement(ye.d,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Market Value In "+this.props.location,fontSize:18},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))),r.a.createElement(ge.a,{md:6,xx:4},r.a.createElement(ve.a,null,r.a.createElement(_e.a,null,r.a.createElement(ye.b,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Investment by Assets In "+this.props.location,fontSize:18},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))))}}]),a}(n.Component);Ne.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right",location:"City"};var ke=Ne,Ce=function(){return r.a.createElement("div",{className:"row",style:{marginBottom:30}},r.a.createElement("div",{className:"col-lg-4 col-xx-12"},r.a.createElement("div",{className:"card",style:{backgroundColor:"#008080",paddingBottom:0}},r.a.createElement("div",{className:"card-header"},"Total Invested Amount"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},"10000")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"card",style:{backgroundColor:"#008080",paddingBottom:0}},r.a.createElement("div",{className:"card-header"},"Number Of Investments"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"text-center card-title"},"2000")))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"card",style:{backgroundColor:"#008080",paddingBottom:0}},r.a.createElement("div",{className:"card-header"},"Rate Of return"),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"text-center card-title"},"8000")))))},Oe=(t(349),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={chartData:{}},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["Bitcoin","Ethereum","Bitcoin Cash","Bitcoin SV","XRP","Ethereum Classic"],datasets:[{label:"Investment",data:[617594,181045,153060,106519,105162,95072],backgroundColor:["rgba(0, 128, 128, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"header col-lg-12"},r.a.createElement(Ce,null),r.a.createElement(ge.a,{md:12},r.a.createElement("div",{className:"card__title"},r.a.createElement(ke,{chartData:this.state.chartData,location:"CryptoChart",legendPosition:"bottom"})),r.a.createElement("p",null,"Content....")))}}]),a}(n.Component)),je=function(){return r.a.createElement(Ee.a,{className:"dashboard"},r.a.createElement(fe.a,null,r.a.createElement(ge.a,{md:12},r.a.createElement("h3",{className:"page-title"},"Example Page One"))),r.a.createElement(fe.a,null,r.a.createElement(Oe,null)))},we=function(){return r.a.createElement(ge.a,{md:12},r.a.createElement(ve.a,null,r.a.createElement(_e.a,null,r.a.createElement("div",{className:"card__title"},r.a.createElement("h5",{className:"bold-text"},"Example title"),r.a.createElement("h5",{className:"subhead"},"Example subhead")),r.a.createElement("p",null,"Your content here"))))},xe=function(){return r.a.createElement(Ee.a,{className:"dashboard"},r.a.createElement(fe.a,null,r.a.createElement(ge.a,{md:12},r.a.createElement("h3",{className:"page-title"},"Example Page Two"))),r.a.createElement(fe.a,null,r.a.createElement(we,null)))},Se=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{path:"/pages/one",component:je}),r.a.createElement(c.a,{path:"/pages/two",component:xe}))},Pe=function(){return r.a.createElement(l.a,null,r.a.createElement(he,null))},De=function(){return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement("div",{className:"container__wrap"},r.a.createElement(c.a,{path:"/pages",component:Se})))};a.a=function(){return r.a.createElement(I,null,r.a.createElement("main",null,r.a.createElement(l.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:Q}),r.a.createElement(c.a,{exact:!0,path:"/Registration",component:he}),r.a.createElement(c.a,{path:"/",component:De}),r.a.createElement(c.a,{exact:!0,path:"/R",component:Pe}))))}},197:function(e,a,t){e.exports=t(198)},198:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t(170);Object(l.render)(r.a.createElement(c.a,null),document.getElementById("root"))},205:function(e,a,t){},349:function(e){e.exports={}}},[[197,1,2]]]);
//# sourceMappingURL=main.16849afd.chunk.js.map