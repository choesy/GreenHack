(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],v=0,p=[];v<c.length;v++)i=c[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},6914:function(t,e,n){},"9c1c":function(t,e,n){"use strict";n("6914")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TopToolbar"),n("v-main",[n("router-view")],1),n("BottomNav")],1)},o=[],i=n("d4ec"),c=n("262e"),s=n("2caf"),l=n("9ab4"),u=n("1b40"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{app:"",fixed:""},model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:t.doNothing}},[n("v-list-item-action",[n("v-icon",[t._v("settings")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Settings")])],1)],1),n("v-list-item",{on:{click:t.doNothing}},[n("v-list-item-action",[n("v-icon",[t._v("help")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Help")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"",fixed:"",dark:"",color:"primary"}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleMenu(e)}}}),n("v-toolbar-title",[t._v(t._s(t.title))])],1)],1)},p=[],f=n("bee2"),b=n("4bb5"),d=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.showMenu=!1,t}return Object(f["a"])(n,[{key:"toggleMenu",value:function(){this.showMenu=!this.showMenu}},{key:"doNothing",value:function(){console.info("Not doing anything!")}}]),n}(u["c"]);Object(l["a"])([Object(b["a"])("title",{namespace:"topToolbar"})],d.prototype,"title",void 0),d=Object(l["a"])([u["a"]],d);var h=d,m=h,g=n("2877"),O=n("6544"),y=n.n(O),j=n("40dc"),w=n("5bc1"),_=n("132d"),x=n("8860"),T=n("da13"),A=n("1800"),k=n("5d23"),V=n("f774"),I=n("2a7f"),N=Object(g["a"])(m,v,p,!1,null,null,null),S=N.exports;y()(N,{VAppBar:j["a"],VAppBarNavIcon:w["a"],VIcon:_["a"],VList:x["a"],VListItem:T["a"],VListItemAction:A["a"],VListItemContent:k["a"],VListItemTitle:k["b"],VNavigationDrawer:V["a"],VToolbarTitle:I["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{app:"",fixed:"",grow:"",color:"primary"},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[n("v-btn",{attrs:{value:"top",to:{path:"/"}}},[n("span",[t._v("Home")]),n("v-icon",[t._v("thumb_up")])],1),n("v-btn",{attrs:{value:"code",to:{name:"code-examples"}}},[n("span",[t._v("Recent routes")]),n("v-icon",[t._v("code")])],1),n("v-btn",{attrs:{value:"favorites",to:{name:"my-favorites"}}},[n("span",[t._v("Challenges")]),n("v-icon",[t._v("favorite")])],1)],1)},E=[],L=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.activeItem="top",t}return n}(u["c"]);L=Object(l["a"])([u["a"]],L);var M=L,B=M,P=(n("9c1c"),n("b81c")),H=n("8336"),$=Object(g["a"])(B,C,E,!1,null,"5859d3ff",null),F=$.exports;y()($,{VBottomNavigation:P["a"],VBtn:H["a"],VIcon:_["a"]});var D=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);D=Object(l["a"])([Object(u["a"])({components:{TopToolbar:S,BottomNav:F},data:function(){return{backgroundColor:"#f6dadb",screenBackgroundColor:"#fefefe",screenLightShadow:"-31px -31px 62px #FAE0E0",screenDarkShadow:"31px 31px 62px #EAB6BE",isRounded:!1}}})],D);var R=D,q=R,G=n("7496"),J=n("f6c4"),X=Object(g["a"])(q,r,o,!1,null,null,null),Y=X.exports;y()(X,{VApp:G["a"],VMain:J["a"]});var z=n("8c4f"),K=n("2f62"),Q={title:"Top Stories"},U={title:function(t){return t.title}},W={setTitle:function(t,e){t.title=e}},Z={changeTitle:function(t,e){var n=t.commit;n("setTitle",e)}},tt={namespaced:!0,state:Q,getters:U,mutations:W,actions:Z};a["a"].use(K["a"]);var et={modules:{topToolbar:tt}},nt=new K["a"].Store(et),at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("GChart",{attrs:{type:"PieChart",data:t.chartData,options:t.chartOptions}})],1)},rt=[],ot=(n("d3b7"),n("d81d"),n("4de4"),"/data/articles.json"),it=function(){function t(){Object(i["a"])(this,t)}return Object(f["a"])(t,[{key:"getArticlesByType",value:function(e){return fetch(ot).then((function(t){return t.json()})).then((function(n){var a=n.filter((function(t){return t.articleType===e})).map(t.map);return a})).catch((function(t){console.error("An error occurred retrieving the news articles from "+ot,t)}))}},{key:"getFavorites",value:function(){return fetch(ot).then((function(t){return t.json()})).then((function(e){var n=e.filter((function(t){return!0===t.isFavourite})).map(t.map);return n})).catch((function(t){console.error("An error occurred retrieving the news articles from "+ot,t)}))}}],[{key:"map",value:function(t){return{id:t.id,title:t.title,content:t.content,dateString:t.dateString,baseImageName:t.baseImageName,articleType:t.articleType,isFavourite:t.isFavourite}}}]),t}(),ct=new it,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.newsArticles,(function(e){return n("v-flex",{key:e.id,attrs:{xs12:""}},[n("v-card",[n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:{path:"/"},"active-class":"","exact-path-active-class":"","exact-active-class":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs7:""}},[n("div",[n("div",{staticClass:"subheading font-weight-medium"},[t._v(" "+t._s(e.title)+" ")]),n("div",[t._v(t._s(e.dateString))])])]),n("v-flex",{attrs:{xs2:""}},[n("div",{staticClass:"subheading font-weight-small"},[e.content?[n("strong",[t._v(t._s(e.content)+" kg C0"),n("small",[t._v("2")])])]:t._e()],2)]),n("v-flex",{attrs:{xs3:""}},[n("v-img",{attrs:{contain:"",src:"/thumbnails/"+e.baseImageName+".png",srcset:"/thumbnails/"+e.baseImageName+".png 1x,\n                           /thumbnails/"+e.baseImageName+"@2x.png 2x",height:"72px",transition:"false"}})],1)],1)],1)],1)],1)],1)})),1)],1),n("v-layout",{attrs:{row:"",wrap:""}})],1)},lt=[],ut=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);Object(l["a"])([Object(u["b"])({type:Array,required:!0})],ut.prototype,"newsArticles",void 0),ut=Object(l["a"])([u["a"]],ut);var vt,pt=ut,ft=pt,bt=n("b0af"),dt=n("a523"),ht=n("0e8f"),mt=n("adda"),gt=n("a722"),Ot=Object(g["a"])(ft,st,lt,!1,null,null,null),yt=Ot.exports;y()(Ot,{VCard:bt["a"],VContainer:dt["a"],VFlex:ht["a"],VImg:mt["a"],VLayout:gt["a"]}),function(t){t["TopStory"]="TOP_STORY",t["CodeExample"]="CODE_EXAMPLE"}(vt||(vt={}));var jt=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.newsArticles=[],t}return Object(f["a"])(n,[{key:"data",value:function(){return{chartData:[["Task","Hours per Day"],["CO2 saved",8],["Gray",2],["Transparent",2]],chartOptions:{title:"Co2 Statistics",pieHole:.8,legend:"none",slices:{0:{color:"green"},1:{color:"gray"},2:{color:"transparent"}},pieStartAngle:210}}}},{key:"mounted",value:function(){var t=this;ct.getArticlesByType(vt.TopStory).then((function(e){t.newsArticles=e}))}}]),n}(u["c"]);jt=Object(l["a"])([Object(u["a"])({components:{NewsList:yt}})],jt);var wt=jt,_t=wt,xt=Object(g["a"])(_t,at,rt,!1,null,null,null),Tt=xt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NewsList",{attrs:{newsArticles:t.newsArticles}})],1)},kt=[],Vt=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.newsArticles=[],t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this;ct.getArticlesByType(vt.CodeExample).then((function(e){t.newsArticles=e}))}}]),n}(u["c"]);Vt=Object(l["a"])([Object(u["a"])({components:{NewsList:yt}})],Vt);var It=Vt,Nt=It,St=Object(g["a"])(Nt,At,kt,!1,null,null,null),Ct=St.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NewsList",{attrs:{newsArticles:t.newsArticles}})],1)},Lt=[],Mt=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.newsArticles=[],t}return Object(f["a"])(n,[{key:"mounted",value:function(){var t=this;ct.getFavorites().then((function(e){t.newsArticles=e}))}}]),n}(u["c"]);Mt=Object(l["a"])([Object(u["a"])({components:{NewsList:yt}})],Mt);var Bt=Mt,Pt=Bt,Ht=Object(g["a"])(Pt,Et,Lt,!1,null,null,null),$t=Ht.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("h1",[t._v("HIHIHIHI")])])],1)],1)},Dt=[],Rt=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);Object(l["a"])([Object(u["b"])({type:Array,required:!0})],Rt.prototype,"newsArticles",void 0),Rt=Object(l["a"])([u["a"]],Rt);var qt=Rt,Gt=qt,Jt=Object(g["a"])(Gt,Ft,Dt,!1,null,null,null),Xt=Jt.exports;y()(Jt,{VContainer:dt["a"],VLayout:gt["a"]}),a["a"].use(z["a"]);var Yt=function t(e){var n=e.title;Object(i["a"])(this,t),this.title=n},zt=new z["a"]({mode:"history",base:"/",routes:[{path:"/",name:"top-stories",component:Tt,meta:new Yt({title:"Home"})},{path:"/code-examples",name:"code-examples",component:Ct,meta:new Yt({title:"Routes"})},{path:"/my-favorites",name:"my-favorites",component:$t,meta:new Yt({title:"Challenges"})},{path:"/route",name:"route",component:Xt,meta:new Yt({title:"Route"})}]});zt.beforeEach((function(t,e,n){var a=t.meta;nt.dispatch("topToolbar/changeTitle",a.title),n()}));var Kt=zt,Qt=n("f309");n("d1e78");a["a"].use(Qt["a"]);var Ut=new Qt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Kt,store:nt,vuetify:Ut,render:function(t){return t(Y)}}).$mount("#app")}});
//# sourceMappingURL=app.ccf4b5be.js.map