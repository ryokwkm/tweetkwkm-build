(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},162:function(e,t,a){e.exports=a(227)},185:function(e,t,a){},194:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),l=a(246),o=a(108),c=a(17),u=a(13),p=a(23),m=a(24),h=a(25),d=a(14),g=a(99),f=a.n(g),E=a(124),v=a(154),y=a(110),b=a(125),w=a.n(b),k=a(127),j=a.n(k);function O(e){var t=e.children,a=e.isScrollDown;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(y.a,{appear:!1,direction:"down",in:!a},t),r.a.createElement(j.a,null))}var I=a(9),S=(a(185),{PRD:"https://ts.2chx.net/Api/get",DEV:"https://ts.2chx.net/Api/get"}),D={ent:{ja:"\u30a8\u30f3\u30bf\u30fc\u30c6\u30a4\u30e1\u30f3\u30c8",en:"Entertainment",es:"Entretenido"},sports:{ja:"\u30b9\u30dd\u30fc\u30c4",en:"Sports",es:"Deportes"},language:{en:"Language"}};function x(e){var t=L();return e=e.toLowerCase(),D[e][t]?D[e][t]:D[e].en}function N(e){var t=S["3001"===window.location.port?"DEV":"PRD"];return e?t+"/"+e:t}function C(){return window.location.pathname.split("/")}function L(){return C()[2]}function H(e){var t=JSON.parse(e.og_json);if(Array.isArray(t.Videos)&&t.Videos.length>0&&console.log(t.Videos),t.Twitter.Image)return t.Twitter.Image;if(Array.isArray(t.Images)&&t.Images.length>0){if(t.Images[0].Url)return t.Images[0].Url}else console.log(t);return e}var A=a(133),M=a.n(A),B=a(100),P=a.n(B),_=a(101),T=a.n(_),R=a(128),W=a.n(R),z=a(137),F=a.n(z),V=a(138),J=a.n(V),U=a(134),q=a.n(U),G=a(132),K=a.n(G),Y=a(80),Z=a.n(Y),$=a(129),Q=a.n($),X=a(139),ee=a.n(X),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={startIndex:a.props.startIndex,detailBody:""},a.handleClickSecondIcon=a.handleClickSecondIcon.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getArticleByIndex",value:function(){var e=this.props.items[this.props.startIndex],t=e.parent_id;0===Number(t)&&(t=e.id);var a,n=this.props.parents;return n&&n.forEach(function(e){e.id===t&&(a=e)}),a}},{key:"getArticleDetailByIndex",value:function(){var e=this.props.items[this.props.startIndex],t=e.parent_id;0===Number(t)&&(t=e.id);var a,n=this.props.items;return n&&n.forEach(function(e){"0"===e.user_id&&e.parent_id===t&&(a=e)}),a}},{key:"handleClickSecondIcon",value:function(){this.props.handleSetDetail()}},{key:"KeyboradArrowNode",value:function(){return this.props.isDetail?r.a.createElement(P.a,null):r.a.createElement(T.a,null)}},{key:"getHeaderDetail",value:function(e){if(!this.props.isDetail)return"";var t=this.getArticleDetailByIndex();return t?t.body:void 0}},{key:"render",value:function(){var e;if(this.props.items[this.props.startIndex]){var t=this.getArticleByIndex();if(t){var a=(e=new Date(t.created.replace(/-/g,"/")),"MM/dd HH:mm".replace(/yyyy/g,e.getFullYear()).replace(/MM/g,("0"+(e.getMonth()+1)).slice(-2)).replace(/dd/g,("0"+e.getDate()).slice(-2)).replace(/HH/g,("0"+e.getHours()).slice(-2)).replace(/mm/g,("0"+e.getMinutes()).slice(-2)).replace(/ss/g,("0"+e.getSeconds()).slice(-2)).replace(/SSS/g,("00"+e.getMilliseconds()).slice(-3))),n=this.getHeaderDetail(t.url),i="ArticleHeader";return 0!==this.props.startIndex&&(i+=" ArticleHeader-notMenu"),r.a.createElement(W.a,{className:i},r.a.createElement(Q.a,{onClick:this.handleClickSecondIcon},r.a.createElement(K.a,{avatar:r.a.createElement("a",{href:t.url,target:"_blank"},r.a.createElement(Z.a,{className:"avater"},r.a.createElement(M.a,null))),action:r.a.createElement(ae,{isDetail:this.props.isDetail}),title:t.head,subheader:a}),r.a.createElement(q.a,{in:this.props.isDetail,timeout:"auto",unmountOnExit:!0},r.a.createElement("div",{className:"ArticleHeader-Detail"},r.a.createElement(F.a,{className:"ArticleHeader-Body"},r.a.createElement(J.a,{paragraph:!0},n,"\u2026"," ",r.a.createElement("a",{href:t.url,target:"_blank",className:"link"},"\u7d9a\u304d\u3092\u8aad\u3080"))),r.a.createElement(ee.a,{className:"ArticleHeader-Image",image:H(t)})))))}}return null}}]),t}(r.a.Component);function ae(e){return e?r.a.createElement(T.a,null):r.a.createElement(P.a,null)}var ne=Object(I.a)(function(e){return{articleHeader:{width:"100%",height:30}}})(te),re=a(140),ie=a(141);function se(){var e=function(){var e=window,t=document,a=t.documentElement,n=t.getElementsByTagName("body")[0];return{width:e.innerWidth||a.clientWidth||n.clientWidth,height:e.innerHeight||a.clientHeight||n.clientHeight}}();if(e.width>600)return{width:e.width,height:e.height,listHeight:175};var t=(700-e.width/2)/4+50;return{width:e.width,height:e.height,listHeight:t}}a(194);var le=a(29),oe=a(142),ce=a(44),ue=a.n(ce),pe=a(148),me=a.n(pe),he=a(45),de=a.n(he),ge=a(85),fe=a.n(ge),Ee=a(146),ve=a.n(Ee),ye=a(147),be=a.n(ye);function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(a,!0).forEach(function(t){Object(le.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function je(){var e=Object(oe.a)(["\n  position: relative;\n  width: 100px;\n"]);return je=function(){return e},e}var Oe=a(143).a.div(je()),Ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).regBody=function(e){var t;return t=fe()(e,/(https?:\/\/\S+)/g,function(e,t){return r.a.createElement("a",{className:"link",key:e+t,href:e},e)}),t=fe()(t,/@(\w+)/g,function(e,t){return r.a.createElement("a",{className:"mention",key:e+t,href:"https://twitter.com/".concat(e)},"@",e)}),t=fe()(t,/#([A-Za-z0-9-_\u3041-\u30f6\u4e9c-\u9ed1\u30fc]+)/g,function(e,t){return r.a.createElement("a",{className:"hash",key:e+t,href:"https://twitter.com/hashtag/".concat(e)},"#",e)}),r.a.createElement("span",null,t)},a.state={items:[],parents:[],moreItemsLoading:!1,page:0,startIndex:0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"ListBodyNode",value:function(e){var t=this.props.items[e].user_id;0===Number(t)&&(t="1093499946609762305");var a=this.props.items[e].user_image,n=r.a.createElement("span",{className:"secondary"},r.a.createElement(ve.a,{className:"favorite",style:{fontSize:15}}),r.a.createElement("span",null,this.props.items[e].favorite),r.a.createElement(be.a,{className:"retweet",style:{fontSize:15}}),r.a.createElement("span",null,this.props.items[e].retweet));return r.a.createElement(ue.a,{alignItems:"center",button:!0,className:"InfiniteRow",style:ke({},this.props.style,{height:se().listHeight+"px"})},r.a.createElement(me.a,null,r.a.createElement("a",{href:"https://twitter.com/intent/user?user_id="+t,target:"_blank"},r.a.createElement(Z.a,{alt:"Cindy Baker",src:a}))),r.a.createElement(de.a,{className:"InfiniteRowBody",primary:this.regBody(this.props.items[e].body),secondary:n}))}},{key:"render",value:function(){return this.props.index>=this.props.items.length?r.a.createElement(Oe,{style:ke({},this.props.style,{backgroundColor:"grey"})}):this.ListBodyNode(this.props.index)}}]),t}(r.a.Component),Se=function(e){return{infinateList:{width:"100%",marginTop:0}}},De=function(e){var t=e.items,a=(e.moreItemsLoading,e.hasNextPage),n=e.loadMoreItems,i=e.handleScroll,s=e.isDetail,l=function(e){var a=e.index,n=e.style;return e.ref,r.a.createElement(Ie,{items:t,style:n,index:a})},o=a?t.length+1:t.length;return r.a.createElement(ie.a,{className:Se.infinateList,isItemLoaded:function(e){return e<t.length-1},itemCount:o,loadMoreItems:n,onScrollHandler:i},function(e){var t=e.onItemsRendered,a=e.ref,n=se().height-0;s&&(n=se().height-200);var i=se().listHeight;return r.a.createElement(re.a,{className:"InfiniteList",height:n,width:"100%",itemCount:o,itemSize:i,onItemsRendered:t,ref:a},l)})},xe=a(151),Ne=a.n(xe),Ce=a(243),Le=a(244),He=a(59),Ae=a.n(He),Me=a(153),Be=a.n(Me),Pe=a(245),_e=a(152),Te=a.n(_e),Re=a(26),We=a(58),ze=a.n(We),Fe=a(149),Ve=a.n(Fe),Je=a(150),Ue=a.n(Je),qe=(a(119),[{lang:"ja",name:"\u65e5\u672c\u8a9e"},{lang:"en",name:"English"},{lang:"es",name:"Spanish"}]),Ge=48;function Ke(){var e=r.a.useState(null),t=Object(Re.a)(e,2),a=t[0],n=t[1],i=Boolean(a);function s(e){n(e.currentTarget)}function l(e,t){console.log(t),e.lang,t.lang,n(null)}return r.a.createElement(at.Consumer,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{button:!0,key:e.lang,"aria-controls":"long-menu","aria-haspopup":"true",onClick:s,edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(ze.a,null,r.a.createElement(Ae.a,null)),r.a.createElement(de.a,{primary:x("language")})),r.a.createElement(Ve.a,{id:"long-menu",className:"langList",anchorEl:a,keepMounted:!0,open:i,onClose:l,PaperProps:{style:{maxHeight:4.5*Ge,width:200}}},qe.map(function(t){return r.a.createElement("a",{href:"/"+e.func+"/"+t.lang,key:t.lang},r.a.createElement(Ue.a,{className:"langText",key:t.lang,selected:t.lang===e.lang,onClick:function(){return l(t,e)}},t.name))})))})}var Ye=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggleDrawer",value:function(e,t){var a=this;return"left",function(e){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&a.setState({left:t})}}},{key:"drawerMenu",value:function(e){var t=L();return r.a.createElement("div",{className:"drawer",role:"presentation"},r.a.createElement(Ce.a,{className:"langList"},r.a.createElement("a",{href:"/ent/"+t},r.a.createElement(ue.a,{button:!0,key:"ent"},r.a.createElement(ze.a,null,r.a.createElement(Ae.a,null)),r.a.createElement(de.a,{className:"langText",primary:x("ent")}))),r.a.createElement("a",{href:"/sports/"+t},r.a.createElement(ue.a,{button:!0,key:"sports"},r.a.createElement(ze.a,null,r.a.createElement(Ae.a,null)),r.a.createElement(de.a,{className:"langText",primary:x("sports")})))),r.a.createElement(Le.a,null),r.a.createElement(Ce.a,null,r.a.createElement(Ke,null)))}},{key:"render",value:function(){return r.a.createElement(Ne.a,{className:"menuBar"},r.a.createElement("div",null,r.a.createElement(Pe.a,{edge:"start",color:"inherit","aria-label":"menu","aria-controls":"long-menu","aria-haspopup":"true",onClick:this.toggleDrawer("left",!0)},r.a.createElement(Te.a,null))),r.a.createElement(Be.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},this.drawerMenu("left")))}}]),t}(r.a.Component),Ze=Object(I.a)(function(e){return{menuButton:{marginRight:e.spacing(2)}}})(Ye),$e=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).handleScroll=function(e){a.state.startIndex<e&&a.setState({isScrollDown:!0}),a.state.startIndex>e&&a.setState({isScrollDown:!1}),a.setState({startIndex:e})},a.handleSetDetail=function(){a.setState({isDetail:!a.state.isDetail})},a.state={items:[],parents:[],moreItemsLoading:!1,page:0,startIndex:0,windowSize:{},isDetail:!0,isScrollDown:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"loadMoreItems",value:function(){var e=Object(E.a)(f.a.mark(function e(t,a){var n,r,i,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(23,!(0===this.state.appId||this.state.page>=23)){e.next=3;break}return e.abrupt("return");case 3:return this.setState({moreItemsLoading:!0}),e.next=6,fetch(N("?beforeDay=0&country="+this.state.page+"&v="+this.props.appId));case 6:return n=e.sent,e.next=9,n.json();case 9:r=e.sent,i=[],s=[],r.forEach(function(e){var t=Object.assign({},e.reactions);if(e.reactions=null,i.push(e),s.push(e),t)for(var a in t)i.push(t[a])}),console.log(i,s),this.setState({moreItemsLoading:!1,page:this.state.page+1,items:this.state.items.concat(i),parents:this.state.parents.concat(s),isScrollDown:!1});case 15:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return 0===this.props.appId?null:r.a.createElement("div",{className:e.root},r.a.createElement(O,this.state,r.a.createElement(Ze,null)),r.a.createElement(ne,{startIndex:this.state.startIndex,parents:this.state.parents,items:this.state.items,isDetail:this.state.isDetail,handleSetDetail:this.handleSetDetail,isScrollDown:this.state.isScrollDown}),r.a.createElement(De,{items:this.state.items,hasNextPage:!0,moreItemsLoading:this.state.moreItemsLoading,loadMoreItems:this.loadMoreItems.bind(this),handleScroll:this.handleScroll.bind(this),isDetail:this.state.isDetail}))}}]),t}(r.a.Component),Qe=Object(v.withStyles)(function(e){return{root:{width:"100%",height:"100%",maxWidth:768,backgroundColor:e.palette.background.paper,marginLeft:"auto",marginRight:"auto"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}})($e),Xe=a(157),et=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).props.location.pathname.split("/");return n[2]&&a.checkLang(n[2])||a.changeLangDefault(),a.setApplicationData(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"checkLang",value:function(e){var t=!1;return["ja","en","es"].forEach(function(a){e===a&&(t=!0)}),t}},{key:"setApplicationData",value:function(){var e=C()[1],t=L();"sports"===e?"ja"===t?this.props.self.setState({appId:1}):"en"===t?this.props.self.setState({appId:12}):"es"===t&&this.props.self.setState({appId:5}):"ent"===e?"ja"===t?this.props.self.setState({appId:8}):"en"===t?this.props.self.setState({appId:9}):"es"===t&&this.props.self.setState({appId:11}):"fate"===e&&this.props.self.setState({appId:7}),this.props.self.setState({lang:t,func:e})}},{key:"changeLangDefault",value:function(){this.props.history.push("/sports/ja/")}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),tt=Object(Xe.c)(et),at=r.a.createContext(),nt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).setLang.bind(Object(d.a)(a)),a.state={lang:"",func:"",appId:0,setLang:a.setLang},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"setLang",value:function(e){console.log("setlang",this),console.log(this.setState),this.setState({lang:e})}},{key:"render",value:function(){return r.a.createElement(at.Provider,{value:this.state},r.a.createElement("div",{className:this.props.parent},r.a.createElement(tt,{self:this},r.a.createElement(Qe,{appId:this.state.appId}))))}}]),t}(r.a.Component),rt=Object(I.a)(function(e){return{parent:{backgroundColor:e.palette.background.default}}})(nt),it=a(156),st=a.n(it),lt=a(47),ot=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={},console.log("props",a.props),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;lt.a.set({page:e}),lt.a.pageview(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"st-Container"},r.a.createElement(rt,null),r.a.createElement(st.a.Google,{client:"ca-pub-7387197978271555",className:"adsbygoogle",slot:"xxxx",format:"auto",style:{display:"block"}}))}}]),t}(r.a.Component),ct=a(84),ut=a(73),pt="mui-design",mt={type:"dark"};var ht=function(){var e=function(){var e=localStorage.getItem(pt);return null==e?mt:e}();return console.log(e.type),Object(ut.a)({palette:{type:e.type,primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ct.a.A400},background:{default:"#FFF"}},typography:{fontSize:11,fontWeight:700}})}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dt=a(37);lt.a.initialize("UA-15142129-4");var gt=Object(dt.a)();gt.listen(function(e){var t=e.pathname;lt.a.set({page:t}),lt.a.pageview(t)}),s.a.render(r.a.createElement(o.a,{theme:ht},r.a.createElement(l.a,null),r.a.createElement(Xe.b,{history:gt},r.a.createElement("div",null,r.a.createElement(Xe.a,{path:"/about",component:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"\u30d5\u30ec\u30f3\u30ba\u306b\u6295\u7968\u3059\u308b\u30da\u30fc\u30b8\u3067\u3059"))}}),r.a.createElement(Xe.a,{path:"/home",component:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home"),r.a.createElement("p",null,"Welcome to \u3088\u3046\u3053\u305d"))}}),r.a.createElement(Xe.a,{path:"/sports(/?)",component:ot}),r.a.createElement(Xe.a,{path:"/ent(/?)",component:ot}),r.a.createElement(Xe.a,{path:"/fate(/?)",component:ot}),r.a.createElement(Xe.a,{exact:!0,path:"/",component:ot})))),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[162,1,2]]]);
//# sourceMappingURL=main.abf2ca17.chunk.js.map