(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={header:"Header_header__1Sy4T",nav:"Header_nav__ynJfN",link:"Header_link__1F37F",activeLink:"Header_activeLink__AZd9z",toggleNav:"Header_toggleNav__1hxeO"}},function(e,t,n){e.exports={messageContainer:"Message_messageContainer__1XJsN",avatarImage:"Message_avatarImage__x3gjM",angle:"Message_angle__IYVKM",text:"Message_text__25lpk",personName:"Message_personName__3xaDD",message:"Message_message__23Rom",time:"Message_time__1yQE8"}},,,function(e,t,n){e.exports={affairsContainer:"Affairs_affairsContainer__3ElTJ",affairs:"Affairs_affairs__1LjS2",button:"Affairs_button__2uk1T"}},function(e,t,n){e.exports={input:"Greeting_input__1qy-x",button:"Greeting_button__2tMTy",count:"Greeting_count__1yaxC",error:"Greeting_error__3M0nF",errorDiv:"Greeting_errorDiv__2v4MT"}},,,function(e,t,n){e.exports={affair:"Affair_affair__2TnNv",priority:"Affair_priority__13NuM",low:"Affair_low__1hxZR",middle:"Affair_middle__ODBXs",high:"Affair_high__3S4fr",deleteButton:"Affair_deleteButton__2Lli9"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__Mox6O",errorInput:"SuperInputText_errorInput__1SzSo",error:"SuperInputText_error__yVT9i"}},,,function(e,t,n){e.exports={container:"HW2_container__3fCEx",affairs:"HW2_affairs__2yZEJ"}},function(e,t,n){e.exports={blue:"HW4_blue__1FU4X",column:"HW4_column__1nQkW",testSpanError:"HW4_testSpanError__1fcN6"}},function(e,t,n){e.exports={default:"SuperButton_default__1JLly",red:"SuperButton_red__zEORr"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1Jy22",spanClassName:"SuperCheckbox_spanClassName__1p5BT"}},function(e,t,n){e.exports={container:"Error404_container__1yBNE",angryCat:"Error404_angryCat__1Rf93"}},,,,,function(e,t,n){e.exports={App:"App_App__DMFH_"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__3Cv3g"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(32),s=n.n(c),i=(n(40),n(33)),o=n.n(i),j=n(10),l=n.n(j),u=n(12),b=n(2),d=n(11),h=n.n(d),O=n(0);var x=function(e){return Object(O.jsxs)("div",{className:h.a.messageContainer,children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{className:h.a.avatarImage,src:e.avatar})}),Object(O.jsx)("div",{className:h.a.angle}),Object(O.jsxs)("div",{className:h.a.text,children:[Object(O.jsx)("div",{className:h.a.personName,children:Object(O.jsx)("h3",{children:e.name})}),Object(O.jsx)("p",{className:h.a.message,children:e.message}),Object(O.jsx)("p",{className:h.a.time,children:e.time})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="test message name",p="test message",_="22:00";var v=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homework 1",Object(O.jsx)(x,{avatar:f,name:m,message:p,time:_}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},g=n(3),C=n(18),N=n.n(C);var k=function(e){return Object(O.jsxs)("div",{className:N.a.affair,children:[Object(O.jsx)("div",{children:e.affair.name}),Object(O.jsx)("div",{className:"".concat(N.a.priority," ").concat(N.a[e.affair.priority]),children:e.affair.priority}),Object(O.jsx)("button",{className:N.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},y=n(14),S=n.n(y);var w=function(e){var t=e.data.map((function(t){return Object(O.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(O.jsxs)("div",{className:S.a.affairsContainer,children:[Object(O.jsx)("div",{className:S.a.affairs,children:t}),Object(O.jsx)("button",{className:S.a.button,onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{className:S.a.button,onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)("button",{className:S.a.button,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{className:S.a.button,onClick:function(){e.setFilter("low")},children:"Low"})]})},T=n(24),A=n.n(T),E=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(a.useState)(E),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(g.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(O.jsx)("div",{className:A.a.container,children:Object(O.jsxs)("div",{className:A.a.affairs,children:[Object(O.jsx)("hr",{}),"homework 2",Object(O.jsx)(w,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(O.jsx)("hr",{})]})})},M=n(20),I=n(15),J=n.n(I),B=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s="".concat(J.a.input," ").concat(r?J.a.error:"");return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:t,onChange:n,className:s}),Object(O.jsx)("button",{className:J.a.button,onClick:a,children:"add"}),Object(O.jsx)("span",{className:J.a.count,children:c}),Object(O.jsx)("div",{className:J.a.errorDiv,children:r})]})},H=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(g.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(g.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(O.jsx)(B,{name:s,setNameCallback:function(e){e.currentTarget.value.trim()?(i(e.currentTarget.value),l&&u("")):i("")},addUser:function(){s?(n(s),i(""),alert("Hello  ".concat(s,"!"))):u("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043c\u044f")},error:l,totalUsers:b})},P=n(49);var D=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homework 3",Object(O.jsx)(H,{users:n,addUserCallback:function(e){r([].concat(Object(M.a)(n),[function(e){return{_id:Object(P.a)(),name:e}}(e)]))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},W=n(6),L=n(5),U=n(21),G=n.n(U),R=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],X=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(L.a)(e,R),j="".concat(G.a.error," ").concat(i||""),l="".concat(G.a.superInput," ").concat(c?G.a.errorInput:""," ").concat(s);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(W.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(O.jsx)("span",{className:j,children:c})]})},z=n(25),K=n.n(z),Z=n(26),q=n.n(Z),Q=["red","className"],V=function(e){var t=e.red,n=e.className,a=Object(L.a)(e,Q),r="".concat(t?q.a.red:q.a.default," ").concat(n);return Object(O.jsx)("button",Object(W.a)({className:r},a))},Y=n(27),$=n.n(Y),ee=["type","onChange","onChangeChecked","className","spanClassName","children"],te=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(L.a)(e,ee),s="".concat($.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(W.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(O.jsx)("span",{className:$.a.spanClassName,children:r})]})};var ne=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(g.a)(i,2),j=o[0],l=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homework 4",Object(O.jsxs)("div",{className:K.a.column,children:[Object(O.jsx)(X,{value:n,onChangeText:r,onEnter:s,error:c}),Object(O.jsx)(X,{className:K.a.blue}),Object(O.jsx)(V,{children:"default"}),Object(O.jsx)(V,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(V,{disabled:!0,children:"disabled"}),Object(O.jsx)(te,{checked:j,onChangeChecked:l,children:"some text "}),Object(O.jsx)(te,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},ae=n(34),re=n.n(ae),ce=["autoFocus","onBlur","onEnter","spanProps"],se=["children","onDoubleClick","className"],ie=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(L.a)(e,ce),s=Object(a.useState)(!1),i=Object(g.a)(s,2),o=i[0],j=i[1],l=r||{},u=l.children,b=l.onDoubleClick,d=l.className,h=Object(L.a)(l,se),x="".concat(re.a.span," ").concat(d);return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(X,Object(W.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(O.jsxs)("span",Object(W.a)(Object(W.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:["\u270e",u||c.value]}))})};function oe(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function je(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}oe("test",{x:"A",y:1});je("test",{x:"",y:0});var le=function(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(ie,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(V,{onClick:function(){oe("editable-span-value",n)},children:"save"}),Object(O.jsx)(V,{onClick:function(){r(je("editable-span-value",n))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ue=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(v,{}),Object(O.jsx)(F,{}),Object(O.jsx)(D,{}),Object(O.jsx)(ne,{}),Object(O.jsx)(le,{})]})},be=["options","onChange","onChangeOption"],de=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(L.a)(e,be),c=null===t||void 0===t?void 0:t.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}));return Object(O.jsx)("select",Object(W.a)(Object(W.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},he=["type","name","options","value","onChange","onChangeOption"],Oe=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(L.a)(e,he),function(e){r&&r(e),c&&c(e.currentTarget.name)}),i=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:e,checked:a===e,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:i})},xe=["x","y","z"];var fe=function(){var e=Object(a.useState)(xe[0]),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(de,{options:xe,value:n,onChangeOption:r})}),Object(O.jsx)("div",{children:Object(O.jsx)(Oe,{name:"radio",options:xe,value:n,onChangeOption:r})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},me=function(e,t){switch(t.type){case"sort":var n=Object(M.a)(e);switch(t.payload){case"up":n.sort((function(e,t){return e.name>t.name?1:-1}));break;case"down":n.sort((function(e,t){return e.name>t.name?-1:1}))}return n;case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},pe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var _e=function(){var e=Object(a.useState)(pe),t=Object(g.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(O.jsxs)("div",{children:[e.name," ",e.age]},e._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 8",c,Object(O.jsx)("div",{children:Object(O.jsx)(V,{onClick:function(){return r(me(pe,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(O.jsx)("div",{children:Object(O.jsx)(V,{onClick:function(){return r(me(pe,{type:"sort",payload:"down"}))},children:"sort down"})}),"check 18",Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ve=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(fe,{}),Object(O.jsx)(_e,{})]})};var ge=function(){return Object(O.jsx)("div",{children:"Junior +"})},Ce=n(28),Ne=n.n(Ce);var ke=function(){return Object(O.jsxs)("div",{className:Ne.a.container,children:[Object(O.jsx)("h1",{children:"404"}),Object(O.jsx)("h2",{children:"Page not found!"}),Object(O.jsx)("div",{className:Ne.a.angryCat,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ye="/pre-junior",Se="/junior",we="/up-junior";var Te=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(b.a,{to:Se})}}),Object(O.jsx)(b.b,{path:ye,render:function(){return Object(O.jsx)(ue,{})}}),Object(O.jsx)(b.b,{path:Se,render:function(){return Object(O.jsx)(ve,{})}}),Object(O.jsx)(b.b,{path:we,render:function(){return Object(O.jsx)(ge,{})}}),Object(O.jsx)(b.b,{render:function(){return Object(O.jsx)(ke,{})}})]})})};var Ae=function(){return Object(O.jsx)("div",{className:l.a.header,children:Object(O.jsxs)("div",{className:l.a.nav,children:[Object(O.jsx)(u.b,{className:l.a.link,activeClassName:l.a.activeLink,to:ye,children:"To preJunior Page"}),Object(O.jsx)(u.b,{className:l.a.link,activeClassName:l.a.activeLink,to:Se,children:"To Junior Page"}),Object(O.jsx)(u.b,{className:l.a.link,activeClassName:l.a.activeLink,to:we,children:"To upper Junior Page"}),Object(O.jsx)("div",{className:l.a.toggleNav})]})})};var Ee=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(Ae,{}),Object(O.jsx)(Te,{})]})})};var Fe=function(){return Object(O.jsxs)("div",{className:o.a.App,children:["react homeworks",Object(O.jsx)(Ee,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Fe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.eaab93b7.chunk.js.map