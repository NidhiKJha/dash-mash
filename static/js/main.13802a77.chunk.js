(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,a,t){"use strict";(function(e){var n=t(3),l=t(4),c=t(6),r=t(5),s=t(7),i=t(0),o=t.n(i),m=t(140),u=t(295),d=(t(149),t(150),t(141)),b=t(139),p=function(e){function a(){var e;return Object(n.a)(this,a),(e=Object(c.a)(this,Object(r.a)(a).call(this))).state={loading:!0,loaded:!1},e}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("load",(function(){e.setState({loading:!1}),setTimeout((function(){return e.setState({loaded:!0})}),500)}))}},{key:"render",value:function(){var e=this.state,a=e.loaded,t=e.loading;return o.a.createElement(u.a,null,o.a.createElement(b.a,null,!a&&o.a.createElement("div",{className:"load".concat(t?"":" loaded")},o.a.createElement("div",{className:"load__icon-wrap"},o.a.createElement("svg",{className:"load__icon"},o.a.createElement("path",{fill:"#4ce1b6",d:"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"})))),o.a.createElement("div",null,o.a.createElement(d.a,null))))}}]),a}(i.Component);a.a=Object(m.hot)(e)(p)}).call(this,t(148)(e))},139:function(e,a,t){"use strict";var n=t(3),l=t(4),c=t(6),r=t(5),s=t(7),i=t(0),o=t(296),m=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(i.PureComponent);a.a=Object(o.a)(m)},141:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(306),r=t(128),s=t(3),i=t(4),o=t(6),m=t(5),u=t(7),d=t(296),b=t(8),p=t.n(b),h=t(84),E="".concat("/dash-mash","/img/burger.svg"),_=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeMobileSidebarVisibility,t=e.changeSidebarVisibility;return l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"topbar__button topbar__button--desktop",onClick:t},l.a.createElement("img",{src:E,alt:"",className:"topbar__button-icon"})),l.a.createElement("button",{type:"button",className:"topbar__button topbar__button--mobile",onClick:a},l.a.createElement("img",{src:E,alt:"",className:"topbar__button-icon"})))}}]),a}(n.PureComponent),g=t(124),f=t.n(g),v=t(305),N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.icon,n=e.path;return l.a.createElement(h.a,{className:"topbar__link",to:n},l.a.createElement("span",{className:"topbar__link-icon lnr lnr-".concat(t)}),l.a.createElement("p",{className:"topbar__link-title"},a))}}]),a}(n.PureComponent),y="".concat("/dash-mash","/img/ava.png"),k=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.state={collapse:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.collapse;return l.a.createElement("div",{className:"topbar__profile"},l.a.createElement("button",{type:"button",className:"topbar__avatar",onClick:this.toggle},l.a.createElement("img",{className:"topbar__avatar-img",src:y,alt:"avatar"}),l.a.createElement("p",{className:"topbar__avatar-name"},"Anuj Agarwal"),l.a.createElement(f.a,{className:"topbar__icon"})),e&&l.a.createElement("button",{type:"button",className:"topbar__back",onClick:this.toggle}),l.a.createElement(v.a,{isOpen:e,className:"topbar__menu-wrap"},l.a.createElement("div",{className:"topbar__menu"},l.a.createElement(N,{title:"Page one",icon:"list",path:"/pages/one"}),l.a.createElement(N,{title:"Page two",icon:"inbox",path:"/pages/two"}),l.a.createElement("div",{className:"topbar__menu-divider"}),l.a.createElement(N,{title:"Log Out",icon:"exit",path:"/"}))))}}]),a}(n.PureComponent),O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.changeMobileSidebarVisibility,t=e.changeSidebarVisibility;return l.a.createElement("div",{className:"topbar"},l.a.createElement("div",{className:"topbar__wrapper"},l.a.createElement("div",{className:"topbar__left"},l.a.createElement(_,{changeMobileSidebarVisibility:a,changeSidebarVisibility:t}),l.a.createElement(h.a,{className:"topbar__logo",to:"/dashboard_default"})),l.a.createElement("div",{className:"topbar__right"},l.a.createElement(k,null))))}}]),a}(n.PureComponent),j=t(126),w=t.n(j),C=t(299),S=t(298),x=function(e){var a=e.title,t=e.icon,n=e.newLink,c=e.route,r=e.onClick;return l.a.createElement(S.a,{to:c,onClick:r,activeClassName:"sidebar__link-active"},l.a.createElement("li",{className:"sidebar__link"},t?l.a.createElement("span",{className:"sidebar__link-icon lnr lnr-".concat(t)}):"",l.a.createElement("p",{className:"sidebar__link-title"},a,n?l.a.createElement(C.a,{className:"sidebar__link-badge"},l.a.createElement("span",null,"New")):"")))};x.defaultProps={icon:"",newLink:!1,route:"/",onClick:function(){}};var P=x,V=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.state={collapse:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.icon,n=e.isNew,c=e.children,r=this.state.collapse,s=p()({"sidebar__category-wrap":!0,"sidebar__category-wrap--open":r});return l.a.createElement("div",{className:s},l.a.createElement("button",{type:"button",className:"sidebar__link sidebar__category",onClick:this.toggle},t?l.a.createElement("span",{className:"sidebar__link-icon lnr lnr-".concat(t)}):"",l.a.createElement("p",{className:"sidebar__link-title"},a,n&&l.a.createElement("span",{className:"sidebar__category-new"})),l.a.createElement("span",{className:"sidebar__category-icon lnr lnr-chevron-right"})),l.a.createElement(v.a,{isOpen:r,className:"sidebar__submenu-wrap"},l.a.createElement("ul",{className:"sidebar__submenu"},l.a.createElement("div",null,c))))}}]),a}(n.Component);V.defaultProps={icon:"",isNew:!1};var D=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).hideSidebar=function(){(0,t.props.onClick)()},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"sidebar__content"},l.a.createElement("ul",{className:"sidebar__block"},l.a.createElement(P,{title:"Test",icon:"exit",route:"/pages/one",onClick:this.hideSidebar})),l.a.createElement("ul",{className:"sidebar__block"},l.a.createElement(P,{title:"Check",icon:"exit",route:"/pages/one",onClick:this.hideSidebar})),l.a.createElement("ul",{className:"sidebar__block"},l.a.createElement(P,{title:"Test2",icon:"exit",route:"/pages/two",onClick:this.hideSidebar})),l.a.createElement("ul",{className:"sidebar__block"},l.a.createElement(P,{title:"Test3",icon:"exit",route:"/pages/two",onClick:this.hideSidebar})),l.a.createElement("ul",{className:"sidebar__block"},l.a.createElement(P,{title:"Test4",icon:"exit",route:"/pages/two",onClick:this.hideSidebar})),l.a.createElement("ul",{className:"sidebar__block"},l.a.createElement(V,{title:"Example Pages",icon:"diamond"},l.a.createElement(P,{title:"Page one",route:"/pages/one",onClick:this.hideSidebar}),l.a.createElement(P,{title:"Page two",route:"/pages/two",onClick:this.hideSidebar}),l.a.createElement(P,{title:"Test",route:"/pages/two",onClick:this.hideSidebar}),l.a.createElement(P,{title:"Testt",route:"/pages/two",onClick:this.hideSidebar}),l.a.createElement(P,{title:"ABC",route:"/pages/two",onClick:this.hideSidebar}),l.a.createElement(P,{title:"Lorel Impsum",route:"/pages/two",onClick:this.hideSidebar}))))}}]),a}(n.Component),T=function(e){var a=e.changeMobileSidebarVisibility,t=e.sidebarShow,n=e.sidebarCollapse,c=p()({sidebar:!0,"sidebar--show":t,"sidebar--collapse":n});return l.a.createElement("div",{className:c},l.a.createElement("button",{type:"button",className:"sidebar__back",onClick:a}),l.a.createElement(w.a,{className:"sidebar__scroll scroll"},l.a.createElement("div",{className:"sidebar__wrapper sidebar__wrapper--desktop"},l.a.createElement(D,{onClick:function(){}})),l.a.createElement("div",{className:"sidebar__wrapper sidebar__wrapper--mobile"},l.a.createElement(D,{onClick:a}))))},M=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={sidebarShow:!1,sidebarCollapse:!1},t.changeSidebarVisibility=function(){t.setState((function(e){return{sidebarCollapse:!e.sidebarCollapse}}))},t.changeMobileSidebarVisibility=function(){t.setState((function(e){return{sidebarShow:!e.sidebarShow}}))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.sidebarShow,t=e.sidebarCollapse,n=p()({layout:!0,"layout--collapse":t});return l.a.createElement("div",{className:n},l.a.createElement(O,{changeMobileSidebarVisibility:this.changeMobileSidebarVisibility,changeSidebarVisibility:this.changeSidebarVisibility}),l.a.createElement(T,{sidebarShow:a,sidebarCollapse:t,changeMobileSidebarVisibility:this.changeMobileSidebarVisibility}))}}]),a}(n.Component),I=Object(d.a)(M),B=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.children;return l.a.createElement("div",{className:"theme-light"},l.a.createElement("div",{className:"wrapper"},e))}}]),a}(n.PureComponent),A=t(131),L=t.n(A),F=t(132),z=t.n(F),R=t(133),U=t.n(R),J=t(134),W=t.n(J),Y=t(135),H=t.n(Y),X=t(85),Z=t.n(X),q=t(136),G=t.n(q),K=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.onChange)(e.defaultChecked)}},{key:"render",value:function(){var e=this.props,a=e.disabled,t=e.className,n=e.name,c=e.value,r=e.onChange,s=e.label,i=e.color,o=p()({"checkbox-btn":!0,disabled:a});return l.a.createElement("label",{className:"".concat(o," ").concat(t?" checkbox-btn--".concat(t):""),htmlFor:n},l.a.createElement("input",{className:"checkbox-btn__checkbox",type:"checkbox",id:n,name:n,onChange:r,checked:c,disabled:a}),l.a.createElement("span",{className:"checkbox-btn__checkbox-custom",style:i?{background:i,borderColor:i}:{}},l.a.createElement(Z.a,null)),"button"===t?l.a.createElement("span",{className:"checkbox-btn__label-svg"},l.a.createElement(Z.a,{className:"checkbox-btn__label-check"}),l.a.createElement(G.a,{className:"checkbox-btn__label-uncheck"})):"",l.a.createElement("span",{className:"checkbox-btn__label"},s))}}]),a}(n.PureComponent);K.defaultProps={label:"",defaultChecked:!1,disabled:!1,className:"",color:""};var Q=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).showPassword=function(a){a.preventDefault(),e.setState((function(e){return{showPassword:!e.showPassword}}))},e.state={showPassword:!1},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state.showPassword;return l.a.createElement("form",{className:"form"},l.a.createElement("div",{className:"form__form-group"},l.a.createElement("span",{className:"form__form-group-label"},"Username"),l.a.createElement("div",{className:"form__form-group-field"},l.a.createElement("div",{className:"form__form-group-icon"},l.a.createElement(H.a,null)),l.a.createElement("input",{name:"name",type:"text",placeholder:"Name"}))),l.a.createElement("div",{className:"form__form-group"},l.a.createElement("span",{className:"form__form-group-label"},"Password"),l.a.createElement("div",{className:"form__form-group-field"},l.a.createElement("div",{className:"form__form-group-icon"},l.a.createElement(W.a,null)),l.a.createElement("input",{name:"password",type:a?"text":"password",placeholder:"Password"}),l.a.createElement("button",{className:"form__form-group-button".concat(a?" active":""),onClick:function(a){return e.showPassword(a)},type:"button"},l.a.createElement(U.a,null))),l.a.createElement("div",{className:"account__forgot-password"},l.a.createElement("a",{href:"/"},"Forgot a password?"))),l.a.createElement("div",{className:"form__form-group"},l.a.createElement("div",{className:"form__form-group-field"},l.a.createElement(K,{name:"remember_me",label:"Remember me",value:"on",onChange:function(){}}))),l.a.createElement(h.a,{className:"btn btn-primary account__btn account__btn--small",to:"/pages/one"},"Sign In"),l.a.createElement(h.a,{className:"btn btn-outline-primary account__btn account__btn--small",to:"/log_in"},"Create Account"))}}]),a}(n.PureComponent),$=function(){return l.a.createElement("div",{className:"account"},l.a.createElement("div",{className:"account__wrapper"},l.a.createElement("div",{className:"account__card"},l.a.createElement("div",{className:"account__head"},l.a.createElement("h3",{className:"account__title"},"Welcome to",l.a.createElement("span",{className:"account__logo"}," Dashboard",l.a.createElement("span",{className:"account__logo-accent"},"DEV"))),l.a.createElement("h4",{className:"account__subhead subhead"},"Start your business easily")),l.a.createElement(Q,null),l.a.createElement("div",{className:"account__or"},l.a.createElement("p",null,"Or Easily Using")),l.a.createElement("div",{className:"account__social"},l.a.createElement(h.a,{className:"account__social-btn account__social-btn--facebook",to:"/pages/one"},l.a.createElement(L.a,null)),l.a.createElement(h.a,{className:"account__social-btn account__social-btn--google",to:"/pages/one"},l.a.createElement(z.a,null))))))},ee=t(304),ae=t(300),te=t(301),ne=t(302),le=t(303),ce=t(38),re=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={chartData:e.chartData},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(ae.a,{className:"chart"},l.a.createElement(te.a,{md:6},l.a.createElement(ne.a,null,l.a.createElement(le.a,null,l.a.createElement(ce.a,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Yearly Total Investment In"+this.props.location,fontSize:18},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))),l.a.createElement(te.a,{md:6},l.a.createElement(ne.a,null,l.a.createElement(le.a,null,l.a.createElement(ce.c,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Total Investment In "+this.props.location,fontSize:18},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))),l.a.createElement(te.a,{md:6},l.a.createElement(ne.a,null,l.a.createElement(le.a,null,l.a.createElement(ce.d,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Market Value In "+this.props.location,fontSize:18},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))),l.a.createElement(te.a,{md:6},l.a.createElement(ne.a,null,l.a.createElement(le.a,null,l.a.createElement(ce.b,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Investment by Assets In "+this.props.location,fontSize:18},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))))}}]),a}(n.Component);re.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right",location:"City"};var se=re,ie=function(){return l.a.createElement("div",{className:"row",style:{marginBottom:30}},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"card",style:{backgroundColor:"#FFB6C1",paddingBottom:0}},l.a.createElement("div",{className:"card-header"},"Total Invested Amount"),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"10000")))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"card",style:{backgroundColor:"#FFB6C1",paddingBottom:0}},l.a.createElement("div",{className:"card-header"},"Number Of Investments"),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"text-center card-title"},"2000")))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"card",style:{backgroundColor:"#FFB6C1",paddingBottom:0}},l.a.createElement("div",{className:"card-header"},"Rate Of return"),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"text-center card-title"},"8000")))))},oe=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={chartData:{}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["Bitcoin","Ethereum","Bitcoin Cash","Bitcoin SV","XRP","Ethereum Classic"],datasets:[{label:"Investment",data:[617594,181045,153060,106519,105162,95072],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"header col-lg-12"},l.a.createElement(ie,null),l.a.createElement(te.a,{md:12},l.a.createElement("div",{className:"card__title"},l.a.createElement(se,{chartData:this.state.chartData,location:"CryptoChart",legendPosition:"bottom"})),l.a.createElement("p",null,"Content....")))}}]),a}(n.Component),me=function(){return l.a.createElement(ee.a,{className:"dashboard"},l.a.createElement(ae.a,null,l.a.createElement(te.a,{md:12},l.a.createElement("h3",{className:"page-title"},"Example Page One"))),l.a.createElement(ae.a,null,l.a.createElement(oe,null)))},ue=function(){return l.a.createElement(te.a,{md:12},l.a.createElement(ne.a,null,l.a.createElement(le.a,null,l.a.createElement("div",{className:"card__title"},l.a.createElement("h5",{className:"bold-text"},"Example title"),l.a.createElement("h5",{className:"subhead"},"Example subhead")),l.a.createElement("p",null,"Your content here"))))},de=function(){return l.a.createElement(ee.a,{className:"dashboard"},l.a.createElement(ae.a,null,l.a.createElement(te.a,{md:12},l.a.createElement("h3",{className:"page-title"},"Example Page Two"))),l.a.createElement(ae.a,null,l.a.createElement(ue,null)))},be=function(){return l.a.createElement(c.a,null,l.a.createElement(r.a,{path:"/pages/one",component:me}),l.a.createElement(r.a,{path:"/pages/two",component:de}))},pe=function(){return l.a.createElement("div",null,l.a.createElement(I,null),l.a.createElement("div",{className:"container__wrap"},l.a.createElement(r.a,{path:"/pages",component:be})))};a.a=function(){return l.a.createElement(B,null,l.a.createElement("main",null,l.a.createElement(c.a,null,l.a.createElement(r.a,{exact:!0,path:"/",component:$}),l.a.createElement(r.a,{exact:!0,path:"/log_in",component:$}),l.a.createElement(r.a,{path:"/",component:pe}))))}},142:function(e,a,t){e.exports=t(143)},143:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(51),r=t(123);Object(c.render)(l.a.createElement(r.a,null),document.getElementById("root"))},150:function(e,a,t){}},[[142,1,2]]]);
//# sourceMappingURL=main.13802a77.chunk.js.map