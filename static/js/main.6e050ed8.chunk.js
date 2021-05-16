(this["webpackJsonpthunk-redux"]=this["webpackJsonpthunk-redux"]||[]).push([[0],{30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(15),c=r.n(n),s=(r(30),r(31),r(3)),u=r(12),o=(r(32),r(1)),i=[{to:"/cursor.edu-hw-thunk-redux/",label:"Home Page"},{to:"/cursor.edu-hw-thunk-redux/adduser",label:"Add user"},{to:"/cursor.edu-hw-thunk-redux/users",label:"Users"}],d=function(){return Object(o.jsx)("nav",{className:"navigation",children:Object(o.jsx)("ul",{className:"navigation__menu",children:i.map((function(e){return Object(o.jsx)("li",{className:"navigation__item",children:Object(o.jsx)(u.b,{to:e.to,children:e.label})},e.to)}))})})},l=function(){return Object(o.jsx)("div",{className:"wrapper__home",children:Object(o.jsxs)("div",{className:"general",children:[Object(o.jsx)("div",{className:"general__greetings",children:Object(o.jsx)("h1",{children:"Welcome"})}),Object(o.jsxs)("div",{className:"general__text",children:[Object(o.jsx)("h2",{children:"Thunk Redux homework"}),Object(o.jsxs)("p",{children:["\u0423\u0412\u0410\u0413\u0410! \u0412 \u0437\u0432'\u044f\u0437\u043a\u0443 \u0437 \u0442\u0438\u043c, \u0449\u043e github pages \u0431\u043b\u043e\u043a\u0443\u0454 http \u0437\u0430\u043f\u0438\u0442\u0438, \u0430 REST API \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u0431\u0435\u0437\u043f\u0435\u0447\u043d\u0435 \u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f https \u0431\u0443\u0432 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u0438\u0439 CORS API.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"\u041f\u0456\u0441\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0412\u0438 \u0437\u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438 \u0456 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0442\u0438 \u0434\u0430\u043d\u0456 \u043d\u0430 domer.tech:9999.",Object(o.jsx)("br",{}),"\u0414\u044f\u043a\u0443\u044e \u0437\u0430 \u0440\u043e\u0437\u0443\u043c\u0456\u043d\u043d\u044f."]})]})]})})},j=r(17),h=r(4),b=r(25),p=r(8),m="GET_USERS_REQUEST",O="GET_USERS_SUCCESS",f="GET_USERS_ERROR",x="ADD_USER_VALUE",v="ADD_USER_REQUEST",g="ADD_USER_SUCCESS",_="ADD_USER_ERROR",y=r(11),R=r.n(y),S=r(18),w=function(e){return function(){var t=Object(S.a)(R.a.mark((function t(r,a){var n,c,s;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,fetch("https://cors-anywhere.herokuapp.com/http://domer.tech:9999/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return c=t.sent,t.next=6,c.json();case 6:if(s=t.sent,r({type:v,payload:s}),c.ok){t.next=11;break}return r({type:_,payload:s}),t.abrupt("return");case 11:r({type:g,payload:s});case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},E=(r(40),function(e){var t=Object(a.useState)({name:Object(p.c)((function(e){return e.addUserReducer.user.name})),username:Object(p.c)((function(e){return e.addUserReducer.user.username})),avatar:Object(p.c)((function(e){return e.addUserReducer.user.avatar}))}),r=Object(b.a)(t,2),n=r[0],c=r[1],s=Object(p.b)();Object(a.useEffect)((function(){var e;s({type:x,payload:e}),s(w())}),[s]);var u=function(e){c(Object(h.a)(Object(h.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("form",{className:"user-form",onSubmit:function(e){e.preventDefault(),s(w(n)),e.target.reset()},children:[Object(o.jsx)("h2",{children:"Please enter values to create a new user "}),Object(o.jsx)("input",{className:"user-form__avatar",type:"url",name:"avatar",id:"avatar",size:"50",placeholder:"Add a link to the user avatar",pattern:"https?://.+",title:"Link must includes http://",onChange:u}),Object(o.jsx)("input",{className:"user-form__name",type:"text",name:"name",id:"name",size:"50",placeholder:"Enter the user name",onChange:u}),Object(o.jsx)("input",{className:"user-form__username",type:"text",name:"username",id:"username",size:"50",placeholder:"Enter the username",pattern:"^@\\w+$",title:"Username must starts from @",onChange:u}),Object(o.jsx)("button",{className:"user-form__button-confirm",type:"submit",value:"Submit",children:"Confirm"})]})})}),U=(r(41),function(){var e=Object(p.c)((function(e){return e.getUsersReducer.users})),t=Object(p.c)((function(e){return e.getUsersReducer.loading})),r=Object(p.c)((function(e){return e.getUsersReducer.error})),n=Object(p.b)();return Object(a.useEffect)((function(){n(function(){var e=Object(S.a)(R.a.mark((function e(t,r){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m}),e.next=3,fetch("https://cors-anywhere.herokuapp.com/http://domer.tech:9999/users");case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,a.ok){e.next=10;break}return t({type:f,payload:n.data}),e.abrupt("return");case 10:t({type:O,payload:n.data});case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())}),[n]),Object(o.jsxs)("div",{className:"wrapper",children:[t&&Object(o.jsx)("div",{children:"Please wait. Loading carries on..."}),!t&&r&&Object(o.jsx)("div",{children:"Oops! Something went wrong..."}),e.map((function(e){return Object(o.jsxs)("div",{className:"user-card",children:[Object(o.jsx)("div",{className:"user-card__avatar",children:Object(o.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(o.jsxs)("div",{className:"user-card__name",children:["Name: ",e.name]}),Object(o.jsxs)("div",{className:"user-card__username",children:["Username: ",e.username]})]},e.id)}))]})});var k=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)(d,{})}),Object(o.jsx)("main",{children:Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{path:"/cursor.edu-hw-thunk-redux/",component:l,exact:!0}),Object(o.jsx)(s.a,{path:"/cursor.edu-hw-thunk-redux/adduser",component:E}),Object(o.jsx)(s.a,{path:"/cursor.edu-hw-thunk-redux/users",component:U})]})})]})},N=r(23),C=r(14),T=r(24),D={users:[],loading:!1,error:null},A={user:{},loading:!1,error:null},P={},I=Object(C.combineReducers)({getUsersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case O:return Object(h.a)(Object(h.a)({},e),{},{users:t.payload,loading:!1});case f:return Object(h.a)(Object(h.a)({},e),{},{users:[],loading:!1,error:t.payload});default:return e}},userInputValueReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(h.a)(Object(h.a)({},e),{},{user:t.payload});default:return e}},addUserReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(h.a)(Object(h.a)({},e),{},{user:t.payload,loading:!0});case g:return Object(h.a)(Object(h.a)({},e),{},{user:t.payload,loading:!1});case _:return Object(h.a)(Object(h.a)({},e),{},{loading:!1,error:t.payload});default:return e}}}),L=Object(C.createStore)(I,Object(T.composeWithDevTools)(Object(C.applyMiddleware)(N.a))),F=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,43)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};c.a.render(Object(o.jsx)(p.a,{store:L,children:Object(o.jsx)(u.a,{children:Object(o.jsx)(k,{})})}),document.getElementById("root")),F()}},[[42,1,2]]]);
//# sourceMappingURL=main.6e050ed8.chunk.js.map