(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(1),s=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(l.a)(a,2),i=c[0],s=c[1],o=function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i]})),s(""))};return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",{class:"input-group mb-3"},r.a.createElement("input",{type:"text",value:i,onChange:function(e){s(e.target.value)},className:"form-control",placeholder:"Write for search...","aria-label":"Write for search...e","aria-describedby":"button-addon2"}),r.a.createElement("button",{onClick:o,className:"btn btn-success",type:"button",id:"button-addon2"},"Search")))},o=a(2),u=a.n(o),m=a(5),d=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n,r,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=9m3M3LGVlTSihu4761MWxhbgHN3K9oLQ"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"col-md-4 col-lg-3 col-xl-2 pb-3"},r.a.createElement("div",{className:"card text-white bg-dark animate__animated animate__fadeIn shadow-sm rounded-3"},r.a.createElement("img",{src:a,alt:t,className:"card-img-top img-grid"}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("p",{className:"card-title img-my-title text-capitalize text-truncate"},t),r.a.createElement("a",{href:"#",className:"btn btn-success btn-sm"},"Select"))))},f=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",{className:"animate__animated animate__fadeIn pb-2"},"Results for: ",t," "),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid row"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},b=function(){var e=Object(n.useState)(["Vegeta"]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"fw-bold"},"GifExpertApp"),r.a.createElement("pre",null,"Created By: Alfredo Medina with React"),r.a.createElement(s,{setCategories:c}),r.a.createElement("hr",null),a.map((function(e){return r.a.createElement(f,{key:e,category:e})})))};a(12);i.a.render(r.a.createElement(b,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.360696d0.chunk.js.map