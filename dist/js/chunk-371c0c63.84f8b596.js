(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-371c0c63"],{"00ec":function(t,a,s){"use strict";var i=s("961e"),n=s.n(i);n.a},"11c4":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post-bottom"},[s("div",{staticClass:"post-bottom-main flex-between"},[s("div",{staticClass:"left"},[t._m(0),s("Blogroll"),s("p",{staticClass:"copyright"},[t._v("© 2013-2019 少数派 | 粤ICP备09128966号-4 | CC BY-NC 4.0")])],1),t._m(1)])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"left-logo"},[s("span",{staticClass:"logo-icon"}),s("span",{staticClass:"logo-title"},[t._v("少数派")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"right"},[s("div",{staticClass:"link-box"},[s("a",{attrs:{href:"javascript:0"}},[t._v("关于我们")]),s("a",{attrs:{href:"javascript:0"}},[t._v("联系我们")])]),s("div",{staticClass:"link-box"},[s("a",{attrs:{href:"javascript:0"}},[t._v("成为作者")]),s("a",{attrs:{href:"javascript:0"}},[t._v("常见问题")])]),s("div",{staticClass:"link-box"},[s("a",{attrs:{href:"javascript:0"}},[t._v("用户协议")]),s("a",{attrs:{href:"javascript:0"}},[t._v("客户端")])])])}],e=s("f516"),c={name:"Postbottom",components:{Blogroll:e["a"]}},o=c,r=(s("5f32"),s("2877")),l=Object(r["a"])(o,i,n,!1,null,"d0923fe4",null);a["a"]=l.exports},"4eff":function(t,a,s){},"5f32":function(t,a,s){"use strict";var i=s("7bfb"),n=s.n(i);n.a},"66bc":function(t,a,s){"use strict";var i=s("4eff"),n=s.n(i);n.a},"7bfb":function(t,a,s){},"8c47":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("TopNav",{staticClass:"top-nav",scopedSlots:t._u([{key:"left",fn:function(){return[i("div",{staticClass:"left-nav-container"},[i("router-link",{attrs:{to:"/"}},[i("a",{staticClass:"logo"},[i("span",{staticClass:"logo-icon"}),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.changeNav,expression:"!changeNav"}],staticClass:"logo-title"},[t._v("少数派")])])])],1)]},proxy:!0},{key:"center",fn:function(){return[i("ul",{directives:[{name:"show",rawName:"v-show",value:!t.changeNav,expression:"!changeNav"}],staticClass:"center-nav-lists"},[i("li",{staticClass:"nav-list-item",on:{click:t.toMatrix}},[i("img",{attrs:{src:s("39b9")}}),i("span",[t._v("Matrix")])]),i("li",{staticClass:"nav-list-item",on:{click:t.toSubscription}},[i("img",{attrs:{src:s("b399")}}),i("span",[t._v("付费订阅")])]),i("li",{staticClass:"nav-list-item",on:{click:t.toSpecPlanning}},[i("img",{attrs:{src:s("df5c")}}),i("span",[t._v("特别策划")])]),i("li",{staticClass:"nav-list-item",on:{click:t.toTaobao}},[i("img",{attrs:{src:s("afcb")}}),i("span",[t._v("Pi Store")])]),i("li",{staticClass:"nav-list-item tron"},[i("img",{attrs:{src:s("bee7")}}),i("span",[t._v("Tron 计划")]),i("div",{staticClass:"tron-box"},[i("a",{staticClass:"tron-link",attrs:{href:"javascript:0"}},[t._v("加入Tron 计划")]),i("a",{staticClass:"tron-link",attrs:{href:"javascript:0"}},[i("img",{attrs:{src:s("b365"),alt:""}})])])])])]},proxy:!0},{key:"right",fn:function(){return[i("div",{staticClass:"right-nav-container"},[i("i",{staticClass:"iconfont",class:t.iconStyle,on:{click:t.showSearchInput}}),i("Search",{directives:[{name:"show",rawName:"v-show",value:t.isShowSearch,expression:"isShowSearch"}],staticClass:"home-search",on:{hideSearch:t.hideSearch}}),t.isLoginSuc?i("NavUser"):i("div",{staticClass:"home-nav-login",class:{"login-btn-black":t.changeNav},on:{click:t.clickLogin}},[t._v("登录")])],1)]},proxy:!0}])})],1)},n=[],e=s("2ff7"),c=s("b7d8"),o=s("2633"),r={name:"PostNav",data:function(){return{isShowSearch:!1,navLists:["推荐","最热","应用推荐","生活方式","Power+"]}},components:{TopNav:e["a"],Search:c["a"],NavUser:o["a"]},created:function(){localStorage.getItem("username")&&(this.$store.state.isLoginSuc=!0)},methods:{showSearchInput:function(){this.isShowSearch=!this.isShowSearch},clickLogin:function(){this.$store.state.isShowLogin=!0,this.isShowSearch=!1},hideSearch:function(){this.isShowSearch=!1},toMatrix:function(){var t=this.$route.path;"/Matrix"!==t&&this.$router.push("/Matrix")},toSubscription:function(){var t=this.$route.path;"/Subscription"!==t&&this.$router.push("/Subscription")},toSpecPlanning:function(){var t=this.$route.path;"/topics"!==t&&this.$router.push("/topics")},toTaobao:function(){var t="https://shop549593764.taobao.com/?spm=a1z10.1-c.0.0.33ee1ba8XVHos6";window.open(t,"_blank")}},computed:{changeNav:function(){return this.$store.state.changeNav},iconStyle:function(){var t=this.isShowSearch?"icon-guanbi":"icon-search",a=this.changeNav?" icon-color":"";return t+a},isLoginSuc:function(){return this.$store.state.isLoginSuc}}},l=r,v=(s("00ec"),s("2877")),h=Object(v["a"])(l,i,n,!1,null,"6fc19cdd",null);a["a"]=h.exports},"961e":function(t,a,s){},a4bf:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Nav"),t._m(0),s("Footer")],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"write-page-content"},[s("img",{attrs:{src:"https://cdn.sspai.com/2018/08/06/e2670299b4aa60ddbbfe4a2515e45fe4.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1"}}),s("h2",[t._v("成为少数派 Matrix 作者")]),s("p",[t._v("Matrix 是少数派旗下的写作平台。在这里有对产品体验和实用技巧的分享，有开发经验和思路的介绍，还有更多围绕数字生活的思考。在 Matrix 写作，分享有趣的观点，了解更丰富的数字生活体验，收获意想不到的回应。")]),s("p",[t._v("你可以在 Matrix 自由写作，优秀文章有机会被编辑评为 Matrix 精选，甚至登上少数派首页。如果你既能写出好文章，又能保持长期活跃，你还可以成为少数派签约作者，获得包括稿酬在内的更多福利……")]),s("div",{staticClass:"new-info"},[t._v(" 相关内容完善中...")])])}],e=s("8c47"),c=s("11c4"),o={name:"Writing",components:{Nav:e["a"],Footer:c["a"]}},r=o,l=(s("66bc"),s("2877")),v=Object(l["a"])(r,i,n,!1,null,"4e73256e",null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-371c0c63.84f8b596.js.map