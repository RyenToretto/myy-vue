webpackJsonp([0],{"/oZe":function(t,e){},DlYx:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"root"}},[e("h1",[this._v("vue-router")]),e("hr"),this._v(" "),e("div",[e("div",{staticClass:"left_nav"},[e("router-link",{attrs:{to:"/home"}},[this._v("Home")]),this._v(" "),e("router-link",{attrs:{to:"/about"}},[this._v("About")])],1),this._v(" "),e("div",{staticClass:"right_content"},[e("keep-alive",[e("router-view",{attrs:{msg:"abc"}})],1)],1)])])},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(t){n("pmG0")},"data-v-5d7e31e5",null).exports,a=n("/ocq"),o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"about"},[this._v("\n  关于\n")])},staticRenderFns:[]};var u=n("VU/8")({name:"About"},o,!1,function(t){n("/oZe")},"data-v-10135b34",null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("h3",{staticClass:"content_title"},[e("router-link",{attrs:{to:"/home/news"}},[this._v("News")]),this._v(" "),e("router-link",{attrs:{to:"/home/messages"}},[this._v("Messages")])],1),this._v(" "),e("hr"),this._v(" "),e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var l=n("VU/8")({name:"Home"},c,!1,function(t){n("iYgo")},"data-v-3a1d501b",null).exports,d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"News"},[this._v("\n  新闻\n")])},staticRenderFns:[]};var v=n("VU/8")({name:"News"},d,!1,function(t){n("wwXf")},"data-v-31cfa520",null).exports,m={name:"Messages",data:function(){return{messages:[]}},mounted:function(){var t=this;setTimeout(function(){t.messages=[{id:1,title:"Time is running!",content:"时间紧迫啊！"},{id:3,title:"You gota working harder!",content:"更努力才行！"},{id:5,title:"Life is hard.",content:"生活不易！"}]},1e3)}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"messages clearfix"},[n("ul",t._l(t.messages,function(e,s){return n("li",{key:e.id},[n("router-link",{attrs:{to:"/home/messages/message/"+e.id}},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),n("div",[n("button",{on:{click:function(n){return t.$router.push("/home/messages/message/"+e.id)}}},[t._v("\n          Push 查看\n        ")]),t._v(" "),n("button",{on:{click:function(n){return t.$router.replace("/home/messages/message/"+e.id)}}},[t._v("\n          Replace 查看\n        ")])])],1)}),0),t._v(" "),n("button",{on:{click:function(e){return t.$router.back()}}},[t._v("回退 👈")]),t._v("    \n  "),n("button",{on:{click:function(e){return t.$router.go(1)}}},[t._v("前进 👉")]),n("hr"),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var _=n("VU/8")(m,h,!1,function(t){n("kgRH")},"data-v-64c2d72f",null).exports,f=[{id:1,title:"Time is running!",content:"时间紧迫啊！"},{id:3,title:"You gota working harder!",content:"更努力才行！"},{id:5,title:"Life is hard.",content:"生活不易！"}],p={name:"Header",data:function(){return{message:{}}},mounted:function(){var t=1*this.$route.params.id;this.message=f.find(function(e){return e.id===t})},watch:{$route:function(t){var e=1*t.params.id;this.detail=f.find(function(t){return t.id===e})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"message_detail"},[n("li",[t._v(t._s(t.$route.params.id))]),t._v(" "),n("li",[t._v(t._s(t.message.title))]),t._v(" "),n("li",[t._v(t._s(t.message.content))])])},staticRenderFns:[]};var w=n("VU/8")(p,g,!1,function(t){n("DlYx")},"data-v-4d48dea0",null).exports;s.a.use(a.a);var k=new a.a({mode:"history",routes:[{path:"/about",component:u},{path:"/home",component:l,children:[{path:"/home/news",component:v},{path:"/home/messages",component:_,children:[{path:"/home/messages/message/:id",component:w}]},{path:"",redirect:"/home/news"}]},{path:"",redirect:"/about"}]});new s.a({el:"#root",components:{App:r},template:"<App/>",router:k})},iYgo:function(t,e){},kgRH:function(t,e){},pmG0:function(t,e){},wwXf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ce2bcbad0a12ee8fe218.js.map