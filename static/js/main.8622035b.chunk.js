(this["webpackJsonpthunk-redux"]=this["webpackJsonpthunk-redux"]||[]).push([[0],{30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(15),c=r.n(a),s=(r(30),r(31),r(3)),u=r(12),i=(r(32),r(1)),o=[{to:"/cursor.edu-hw-thunk-redux/",label:"Home Page"},{to:"/cursor.edu-hw-thunk-redux/adduser",label:"Add user"},{to:"/cursor.edu-hw-thunk-redux/users",label:"Users"}],d=function(){return Object(i.jsx)("nav",{className:"navigation",children:Object(i.jsx)("ul",{className:"navigation__menu",children:o.map((function(e){return Object(i.jsx)("li",{className:"navigation__item",children:Object(i.jsx)(u.b,{to:e.to,children:e.label})},e.to)}))})})},l=function(){return Object(i.jsx)("div",{className:"wrapper__home",children:Object(i.jsxs)("div",{className:"general",children:[Object(i.jsx)("div",{className:"general__greetings",children:Object(i.jsx)("h1",{children:"Welcome"})}),Object(i.jsxs)("div",{className:"general__text",children:[Object(i.jsx)("h2",{children:"Thunk Redux homework"}),Object(i.jsx)("p",{children:"Some text is here"})]})]})})},j=r(17),b=r(4),h=r(25),p=r(8),m="GET_USERS_REQUEST",O="GET_USERS_SUCCESS",f="GET_USERS_ERROR",x="ADD_USER_VALUE",v="ADD_USER_REQUEST",g="ADD_USER_SUCCESS",_="ADD_USER_ERROR",y=r(11),S=r.n(y),R=r(18),w=function(e){return function(){var t=Object(R.a)(S.a.mark((function t(r,n){var a,c,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e,t.next=3,fetch("http://domer.tech:9999/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return c=t.sent,t.next=6,c.json();case 6:if(s=t.sent,r({type:v,payload:s}),c.ok){t.next=11;break}return r({type:_,payload:s}),t.abrupt("return");case 11:r({type:g,payload:s});case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},E=(r(40),function(e){var t=Object(n.useState)({name:Object(p.c)((function(e){return e.addUserReducer.user.name})),username:Object(p.c)((function(e){return e.addUserReducer.user.username})),avatar:Object(p.c)((function(e){return e.addUserReducer.user.avatar}))}),r=Object(h.a)(t,2),a=r[0],c=r[1],s=Object(p.b)();Object(n.useEffect)((function(){var e;s({type:x,payload:e}),s(w())}),[s]);var u=function(e){c(Object(b.a)(Object(b.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("form",{className:"user-form",onSubmit:function(e){e.preventDefault(),s(w(a)),e.target.reset()},children:[Object(i.jsx)("h2",{children:"Please enter values to create a new user "}),Object(i.jsx)("input",{className:"user-form__avatar",type:"url",name:"avatar",id:"avatar",size:"50",placeholder:"Add a link to the user avatar",pattern:"https?://.+",title:"Link must includes http://",onChange:u}),Object(i.jsx)("input",{className:"user-form__name",type:"text",name:"name",id:"name",size:"50",placeholder:"Enter the user name",onChange:u}),Object(i.jsx)("input",{className:"user-form__username",type:"text",name:"username",id:"username",size:"50",placeholder:"Enter the username",pattern:"^@\\w+$",title:"Username must starts from @",onChange:u}),Object(i.jsx)("button",{className:"user-form__button-confirm",type:"submit",value:"Submit",children:"Confirm"})]})})}),U=(r(41),function(){var e=Object(p.c)((function(e){return e.getUsersReducer.users})),t=Object(p.c)((function(e){return e.getUsersReducer.loading})),r=Object(p.c)((function(e){return e.getUsersReducer.error})),a=Object(p.b)();return Object(n.useEffect)((function(){a(function(){var e=Object(R.a)(S.a.mark((function e(t,r){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m}),e.next=3,fetch("http://domer.tech:9999/users");case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,n.ok){e.next=10;break}return t({type:f,payload:a.data}),e.abrupt("return");case 10:t({type:O,payload:a.data});case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())}),[a]),Object(i.jsxs)("div",{className:"wrapper",children:[t&&Object(i.jsx)("div",{children:"Please wait. Loading carries on..."}),!t&&r&&Object(i.jsx)("div",{children:"Oops! Something went wrong..."}),e.map((function(e){return Object(i.jsxs)("div",{className:"user-card",children:[Object(i.jsx)("div",{className:"user-card__avatar",children:Object(i.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(i.jsxs)("div",{className:"user-card__name",children:["Name: ",e.name]}),Object(i.jsxs)("div",{className:"user-card__username",children:["Username: ",e.username]})]},e.id)}))]})});var N=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)(d,{})}),Object(i.jsx)("main",{children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{path:"/cursor.edu-hw-thunk-redux/",component:l,exact:!0}),Object(i.jsx)(s.a,{path:"/cursor.edu-hw-thunk-redux/adduser",component:E}),Object(i.jsx)(s.a,{path:"/cursor.edu-hw-thunk-redux/users",component:U,exact:!0})]})})]})},k=r(23),C=r(14),D=r(24),T={users:[],loading:!1,error:null},A={user:{},loading:!1,error:null},P={},L=Object(C.combineReducers)({getUsersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case O:return Object(b.a)(Object(b.a)({},e),{},{users:t.payload,loading:!1});case f:return Object(b.a)(Object(b.a)({},e),{},{users:[],loading:!1,error:t.payload});default:return e}},userInputValueReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload});default:return e}},addUserReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload,loading:!0});case g:return Object(b.a)(Object(b.a)({},e),{},{user:t.payload,loading:!1});case _:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload});default:return e}}}),F=Object(C.createStore)(L,Object(D.composeWithDevTools)(Object(C.applyMiddleware)(k.a))),z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,43)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};c.a.render(Object(i.jsx)(p.a,{store:F,children:Object(i.jsx)(u.a,{children:Object(i.jsx)(N,{})})}),document.getElementById("root")),z()}},[[42,1,2]]]);
//# sourceMappingURL=main.8622035b.chunk.js.map