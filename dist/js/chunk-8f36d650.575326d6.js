(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f36d650"],{"01e2":function(t,e,s){},"059c":function(t,e,s){"use strict";var i=s("e5cf"),n=s.n(i);n.a},"0ff7":function(t,e,s){},2921:function(t,e,s){"use strict";var i=s("da60"),n=s.n(i);n.a},"495d":function(t,e,s){"use strict";var i=s("0ff7"),n=s.n(i);n.a},"4b8c":function(t,e,s){"use strict";var i=s("f3cf"),n=s.n(i);n.a},"4ffa":function(t,e,s){"use strict";var i=s("88b6"),n=s.n(i);n.a},"7be7":function(t,e,s){"use strict";var i=s("01e2"),n=s.n(i);n.a},"88b6":function(t,e,s){},"8c1f":function(t,e,s){},"9fc0":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("TopNav",{staticClass:"top-nav",scopedSlots:t._u([{key:"left",fn:function(){return[i("div",{staticClass:"left-nav-container"},[i("router-link",{attrs:{to:"/"}},[i("a",{staticClass:"logo"},[i("span",{staticClass:"logo-icon"}),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.changeNav,expression:"!changeNav"}],staticClass:"logo-title"},[t._v("少数派")])])])],1)]},proxy:!0},{key:"center",fn:function(){return[i("ul",{directives:[{name:"show",rawName:"v-show",value:!t.changeNav,expression:"!changeNav"}],staticClass:"center-nav-lists"},[i("li",{staticClass:"nav-list-item"},[i("img",{attrs:{src:s("39b9")}}),i("span",[t._v("Matrix")])]),i("li",{staticClass:"nav-list-item"},[i("img",{attrs:{src:s("b399")}}),i("span",[t._v("付费订阅")])]),i("li",{staticClass:"nav-list-item"},[i("img",{attrs:{src:s("df5c")}}),i("span",[t._v("特别策划")])]),i("li",{staticClass:"nav-list-item"},[i("img",{attrs:{src:s("afcb")}}),i("span",[t._v("Pi Store")])]),i("li",{staticClass:"nav-list-item tron"},[i("img",{attrs:{src:s("bee7")}}),i("span",[t._v("Tron 计划")]),i("div",{staticClass:"tron-box"},[i("a",{staticClass:"tron-link",attrs:{href:"javascript:0"}},[t._v("加入Tron 计划")]),i("a",{staticClass:"tron-link",attrs:{href:"javascript:0"}},[i("img",{attrs:{src:s("b365"),alt:""}})])])])])]},proxy:!0},{key:"right",fn:function(){return[i("div",{staticClass:"right-nav-container"},[i("i",{staticClass:"iconfont",class:t.iconStyle,on:{click:t.showSearchInput}}),i("Search",{directives:[{name:"show",rawName:"v-show",value:t.isShowSearch,expression:"isShowSearch"}],staticClass:"home-search",on:{hideSearch:t.hideSearch}}),t.isLoginSuc?i("NavUser"):i("div",{staticClass:"home-nav-login",class:{"login-btn-black":t.changeNav},on:{click:t.clickLogin}},[t._v("登录")])],1)]},proxy:!0}])})],1)},n=[],a=s("2ff7"),o=s("b7d8"),c=s("2633"),r={name:"PostNav",data:function(){return{isShowSearch:!1,navLists:["推荐","最热","应用推荐","生活方式","Power+"]}},components:{TopNav:a["a"],Search:o["a"],NavUser:c["a"]},created:function(){localStorage.getItem("username")&&(this.$store.state.isLoginSuc=!0)},methods:{showSearchInput:function(){this.isShowSearch=!this.isShowSearch},clickLogin:function(){this.$store.state.isShowLogin=!0,this.isShowSearch=!1},hideSearch:function(){this.isShowSearch=!1}},computed:{changeNav:function(){return this.$store.state.changeNav},iconStyle:function(){var t=this.isShowSearch?"icon-guanbi":"icon-search",e=this.changeNav?" icon-color":"";return t+e},isLoginSuc:function(){return this.$store.state.isLoginSuc}}},l=r,m=(s("4ffa"),s("2877")),u=Object(m["a"])(l,i,n,!1,null,"059f1767",null);e["a"]=u.exports},d8eb:function(t,e,s){"use strict";var i=s("8c1f"),n=s.n(i);n.a},da60:function(t,e,s){},e5cf:function(t,e,s){},f3cf:function(t,e,s){},fb13:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{on:{click:t.colseComment}},[s("PostMain",{scopedSlots:t._u([{key:"top",fn:function(){return[s("PostBanner",{attrs:{banner:t.banner,title:t.title,head_img:t.head_img,author:t.author,created_time:t.created_time}})]},proxy:!0},{key:"center",fn:function(){return[s("PostCenter",{attrs:{content:t.content,head_img:t.head_img,author:t.author,like_number:t.like_number,comment:t.comment},on:{userClickZan:t.reqNewData,chongdian:t.reqNewData}})]},proxy:!0}])}),s("Comment",{attrs:{isShowRe:t.isShowRe},on:{showRe:t.showRe,reqNewData:t.reqNewData,commentCount:t.commentCount}}),s("recommend"),s("Postbottom"),s("goTop",{staticClass:"go-top-component"}),s("PostNav")],1)},n=[],a=(s("ac6a"),s("6762"),s("6b54"),s("9fc0")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-main"},[s("div",{staticClass:"post-main-top"},[t._t("top")],2),s("div",{staticClass:"post-main-center"},[t._t("center")],2)])},c=[],r={name:"PostMain"},l=r,m=(s("059c"),s("2877")),u=Object(m["a"])(l,o,c,!1,null,"157e051e",null),d=u.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-column-center post-banner"},[s("div",{staticClass:"bgbox"}),s("div",{staticClass:"post-banner-content"},[s("img",{staticClass:"post-banner-img",attrs:{src:t.banner}}),s("h2",[t._v(t._s(t.title))]),s("div",{staticClass:"post-banner-info flex-between"},[s("div",{staticClass:"info-left"},[s("img",{attrs:{src:t.head_img}}),s("span",{staticClass:"author"},[t._v(t._s(t.author))])]),s("div",{staticClass:"info-right"},[t._v(t._s(t.created_time))])])])])},f=[],v={name:"PostBanner",props:{banner:{type:String,default:""},title:{type:String,default:""},head_img:{type:String,default:""},author:{type:String,default:""},created_time:{type:String,default:""}}},_=v,p=(s("7be7"),Object(m["a"])(_,h,f,!1,null,"0a30df38",null)),g=p.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-column-center post-center"},[s("div",{ref:"postcontent",staticClass:"post-article-content wangEditor-text",domProps:{innerHTML:t._s(t.content)}}),s("div",{ref:"postleft",staticClass:"post-center-left flex-column-center"},[s("i",{staticClass:"iconfont icon-chongdian center",class:{like_active:t.likeArt.includes(Number(t.article_id))},on:{click:t.likeArticle}}),s("span",[t._v(t._s(t.like_number))]),s("i",{staticClass:"iconfont icon-liuyan",on:{click:t.toComment}}),s("span",[t._v(t._s(t.comment))]),s("i",{staticClass:"iconfont icon-share"})]),s("div",{staticStyle:{width:"100%",height:"1px","background-color":"#eee","max-width":"750px"}}),s("div",{staticClass:"content-bottom"},[s("div",{staticClass:"info-left"},[s("img",{attrs:{src:t.head_img}}),s("span",{staticClass:"author"},[t._v(t._s(t.author))]),s("span",{staticClass:"attention-btn"},[t._v("关注")])])])])},b=[],w=(s("c5f6"),s("dc07")),k={name:"PostCenter",props:{content:{type:String,default:""},author:{type:String,default:""},view:{type:Number,default:0},comment:{type:Number,default:0},head_img:{type:String,default:""},like_number:{type:Number,default:0}},data:function(){return{likeArt:[],article_id:""}},created:function(){if(this.article_id=this.$route.params.id,this.isLogin){var t=localStorage.getItem("uid"),e=Object(w["j"])(Number(t));e&&(this.likeArt=e.data)}},mounted:function(){window.addEventListener("scroll",this.fixedLeft,!1)},updated:function(){var t=localStorage.getItem("uid");if(t){var e=Object(w["j"])(Number(t));e&&(this.likeArt=e.data)}},methods:{fixedLeft:function(){var t=document.documentElement.clientHeight/2,e=this.$refs.postcontent,s=this.$refs.postleft,i=e.getBoundingClientRect(),n=i.top,a=i.height,o=i.bottom,c=s.getBoundingClientRect().height;t>=n+c/2?(s.style.position="fixed",s.style.top=t-c/2+"px"):t<n+c/2&&(s.style.position="absolute",s.style.top="0px"),a>2*t&&o<=t+c/2&&(s.style.position="absolute",s.style.top=a-c+"px")},toComment:function(){var t=document.querySelector(".post-main").getBoundingClientRect().height,e=document.documentElement,s=document.body,i=setInterval((function(){var n=e.scrollTop||s.scrollTop,a=Math.floor((t-n)/8);e.scrollTop=s.scrollTop=n+a,0==a&&(e.scrollTop=s.scrollTop=t,clearInterval(i))}),5)},likeArticle:function(){if(this.isLogin){var t=localStorage.getItem("uid")||0,e=this.$route.params.id,s=Object(w["b"])(Number(t),Number(e));s&&this.$emit("chongdian")}else this.$store.state.isShowLogin=!0}},computed:{isLogin:function(){return this.$store.state.isLoginSuc}},watch:{isLogin:function(){var t=localStorage.getItem("uid")||0,e=Object(w["j"])(Number(t));e&&(this.likeArt=e.data)}},destroyed:function(){document.documentElement.scrollTop=0,window.removeEventListener("scroll",this.fixedLeft)}},S=k,x=(s("d8eb"),Object(m["a"])(S,C,b,!1,null,"6459c548",null)),y=x.exports,L=s("8bbb"),N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-column-center"},[s("div",{staticClass:"post-rec"},[s("h3",[t._v("推荐阅读")]),s("ul",{staticClass:"recommend-list"},t._l(t.recommentedList,(function(e,i){return s("li",{key:i,on:{click:function(s){return t.toX(e.id)}}},[s("div",{staticClass:"li-list-img"},[s("img",{attrs:{src:e.list_img_src}})]),s("h3",[t._v(t._s(e.title))]),s("div",{staticClass:"article-author-info"},[s("div",{staticClass:"left"},[s("img",{staticClass:"author-header-img",attrs:{src:e.headerImg}}),s("span",{staticClass:"author-username"},[t._v(t._s(e.author))])]),s("div",{staticClass:"right"},[s("span",{staticClass:"article-view"},[s("i",{staticClass:"iconfont icon-like"}),t._v("\n              "+t._s(e.view)+"\n            ")])])])])})),0)])])},j=[],$={name:"recommend",data:function(){return{recommentedList:[]}},created:function(){this.reqData()},methods:{reqData:function(){var t=Object(w["e"])("推荐");this.recommentedList=t.slice(3,9)},toX:function(t){var e=this.$router.resolve({path:"/articledetails/".concat(t)}),s=e.href;window.open(s,"_blank")}}},I=$,P=(s("495d"),Object(m["a"])(I,N,j,!1,null,"6098b46d",null)),q=P.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-bottom"},[s("div",{staticClass:"post-bottom-main flex-between"},[s("div",{staticClass:"left"},[t._m(0),s("Blogroll"),s("p",{staticClass:"copyright"},[t._v("© 2013-2019 少数派 | 粤ICP备09128966号-4 | CC BY-NC 4.0")])],1),t._m(1)])])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left-logo"},[s("span",{staticClass:"logo-icon"}),s("span",{staticClass:"logo-title"},[t._v("少数派")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[s("div",{staticClass:"link-box"},[s("a",{attrs:{href:"javascript:0"}},[t._v("关于我们")]),s("a",{attrs:{href:"javascript:0"}},[t._v("联系我们")])]),s("div",{staticClass:"link-box"},[s("a",{attrs:{href:"javascript:0"}},[t._v("成为作者")]),s("a",{attrs:{href:"javascript:0"}},[t._v("常见问题")])]),s("div",{staticClass:"link-box"},[s("a",{attrs:{href:"javascript:0"}},[t._v("用户协议")]),s("a",{attrs:{href:"javascript:0"}},[t._v("客户端")])])])}],T=s("f516"),A={name:"Postbottom",components:{Blogroll:T["a"]}},R=A,Z=(s("2921"),Object(m["a"])(R,O,E,!1,null,"562dadaa",null)),B=Z.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-column-center"},[s("div",{staticClass:"comment-comtainer"},[s("div",{staticClass:"comment-title"},[t._v("全部评论（"+t._s(t.commentCount)+"）")]),s("div",{staticClass:"comment-input"},[s("div",{staticClass:"left"},[s("img",{staticClass:"user-head-img",attrs:{src:t.headImg}})]),s("div",{staticClass:"right"},[t.isShowRe?t._e():s("input",{staticClass:"write-comment",attrs:{type:"text",placeholder:"写下你的评论"},on:{focus:t.writeComment}}),t.isShowRe?s("div",[s("p",{staticClass:"user-name"},[t._v(t._s(t.username))]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],staticClass:"comment-textarea",attrs:{autofocus:"true"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}}),s("div",{staticClass:"write-comment-bottom"},[s("span",{staticClass:"comment-submit",on:{click:function(e){return t.subComment()}}},[t._v("评论")])])]):t._e()])]),t.isNo?s("div",{staticClass:"no-comment"},[t._v("还没有评论哦~")]):t._e(),s("ul",{staticClass:"comment-ul"},t._l(t.commentList,(function(e,i){return s("div",{key:i,staticClass:"comment-item"},[s("li",{staticClass:"comment-li"},[s("div",{staticClass:"left"},[s("img",{staticClass:"user-head-img",attrs:{src:e.head_img}})]),s("div",{staticClass:"right"},[s("p",{staticClass:"user-name"},[t._v(t._s(e.username))]),s("p",{staticClass:"comment-created-time"},[t._v(t._s(e.created_time))]),s("p",{staticClass:"comment-content",domProps:{innerHTML:t._s(e.content)}}),s("div",{staticClass:"comment-icon"},[s("i",{staticClass:"iconfont icon-liuyan",on:{click:function(s){return t.showTexterea(e.created_time)}}}),s("span",{staticClass:"amount"},[t._v(t._s(e.reply_num))]),t.likeList.includes(e.id)?s("i",{staticClass:"iconfont icon-xin",on:{click:function(s){return t.cancleClickZan(e.id)}}}):s("i",{staticClass:"iconfont icon-like",on:{click:function(s){return t.clickZan(e.id)}}}),s("span",{staticClass:"amount"},[t._v(t._s(e.like_number))])]),s("div",{staticClass:"texterea-container",attrs:{"data-index":e.created_time}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],staticClass:"comment-textarea",attrs:{autofocus:"true"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}}),s("div",{staticClass:"write-comment-bottom"},[s("span",{staticClass:"comment-submit",on:{click:function(s){return t.subComment(e.id)}}},[t._v("评论")])])]),s("ul",{staticClass:"user-reply"},t._l(e.re_comment,(function(i,n){return s("li",{key:n,staticClass:"comment-li"},[s("div",{staticClass:"left"},[s("img",{staticClass:"user-head-img",attrs:{src:i.head_img}})]),s("div",{staticClass:"right"},[s("p",{staticClass:"user-name"},[t._v("\n                    "+t._s(i.username)+"\n                    "),i.re_username?s("span",{staticClass:"reply-username"},[t._v("回复 "+t._s(i.re_username))]):t._e()]),s("p",{staticClass:"comment-created-time"},[t._v(t._s(i.created_time))]),s("p",{staticClass:"comment-content",domProps:{innerHTML:t._s(i.content)}}),s("div",{staticClass:"comment-icon"},[s("i",{staticClass:"iconfont icon-liuyan",on:{click:function(e){return t.showTexterea(i.created_time)}}}),s("span",{staticClass:"amount"},[t._v(t._s(i.reply_num))]),t.likeList.includes(i.id)?s("i",{staticClass:"iconfont icon-xin",on:{click:function(e){return t.cancleClickZan(i.id)}}}):s("i",{staticClass:"iconfont icon-like",on:{click:function(e){return t.clickZan(i.id)}}}),s("span",{staticClass:"amount"},[t._v(t._s(i.like_number))])]),s("div",{staticClass:"texterea-container",attrs:{"data-index":i.created_time}},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentContent,expression:"commentContent"}],staticClass:"comment-textarea",attrs:{autofocus:"true"},domProps:{value:t.commentContent},on:{input:function(e){e.target.composing||(t.commentContent=e.target.value)}}}),s("div",{staticClass:"write-comment-bottom"},[s("span",{staticClass:"comment-submit",on:{click:function(s){return t.subComment(e.id,i.username,i.id)}}},[t._v("评论")])])])])])})),0)])])])})),0)])])},M=[],U=(s("a481"),s("ed08")),F={name:"comment",props:{isShowRe:{type:Boolean,default:!1}},data:function(){return{commentCount:0,headImg:"",username:"",commentList:[],isNo:!0,commentContent:"",likeList:[]}},created:function(){this.showUserName(),this.reqComment(),this.reqIsClickZan()},methods:{showUserName:function(){if(this.isLogin){var t=localStorage.getItem("headImg"),e=localStorage.getItem("username");t&&(this.headImg=t),e&&(this.username=e)}else this.headImg="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571071012103&di=246bbc25cc64b3ae9e466baf1755e816&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png%401280w_1l_2o_100sh.png"},writeComment:function(){if(this.isLogin){this.$emit("showRe",!0);var t=document.querySelectorAll(".texterea-container");t.forEach((function(t){t.style.display="none"}))}else this.$store.state.isShowLogin=!0},reqComment:function(){var t=this,e=this.$route.params.id,s=Object(w["f"])(e),i=[];s.length&&s.forEach((function(t){if(0===t.re_comment_id){var e={};e.id=t.id,e.article_id=t.article_id,e.user_id=t.user_id,e.username=Object(w["h"])(t.user_id).username,e.head_img=Object(w["h"])(t.user_id).headerImg,e.content=t.comment_content,e.created_time=Object(U["a"])(t.created_time),e.like_number=t.like_number,e.reply_num=t.reply_num,e.re_comment=[],i.unshift(e)}else i.forEach((function(e){if(e.id===t.re_comment_id){var s={};s.id=t.id,s.article_id=t.article_id,s.user_id=t.user_id,s.head_img=Object(w["h"])(t.user_id).headerImg,s.username=Object(w["h"])(t.user_id).username,s.created_time=Object(U["a"])(t.created_time),s.content=t.comment_content,s.reply_num=t.reply_num,s.like_number=t.like_number,"0"==t.re_username?s.re_username="":s.re_username=t.re_username,e.re_comment.push(s)}}))})),this.commentList=i,this.commentCount=i.length,i.length>0&&i.forEach((function(e){t.commentCount=t.commentCount+e.re_comment.length})),this.$emit("commentCount",this.commentCount),s.length&&(this.isNo=!1)},subComment:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(this.commentContent.trim()){var i=this.$route.params.id,n=t,a=localStorage.getItem("uid"),o=e,c=this.commentContent.replace(/\n|\r\n/g,"<br/>"),r=Object(w["k"])({article_id:i,user_id:a,re_comment_id:n,re_username:o,content:c,subCommentId:s});"成功"===r.msg&&(this.reqComment(),this.commentContent="",this.$emit("showRe",!1),this.hideTextereaAll())}else this.$store.state.toastMsg="不能提交空内容！",this.$store.state.isShowPopup=!0},showTexterea:function(t){if(this.isLogin){this.$emit("showRe",!1),this.hideTextereaAll();var e=document.querySelector(".texterea-container[data-index='".concat(t,"']"));e.style.display="block"}else this.$store.state.isShowLogin=!0},hideTextereaAll:function(){var t=document.querySelectorAll(".texterea-container");t.forEach((function(t){t.style.display="none"}))},clickZan:function(t){if(this.isLogin){var e=localStorage.getItem("uid"),s=Object(w["c"])(e,t);"成功"===s.msg&&(this.reqComment(),this.reqIsClickZan())}else this.$store.state.isShowLogin=!0},reqIsClickZan:function(){var t=localStorage.getItem("uid")||0,e=Object(w["i"])(t);e.data&&(this.likeList=e.data)},cancleClickZan:function(t){var e=localStorage.getItem("uid"),s=Object(w["a"])(e,t);"成功"===s.msg&&(this.reqComment(),this.reqIsClickZan())}},computed:{isLogin:function(){return this.$store.state.isLoginSuc}},watch:{isLogin:function(){this.showUserName(),this.reqIsClickZan()}}},H=F,z=(s("4b8c"),Object(m["a"])(H,D,M,!1,null,"7099cb1e",null)),J=z.exports,X={name:"Post",props:["id"],components:{PostNav:a["a"],PostMain:d,PostBanner:g,PostCenter:y,goTop:L["a"],recommend:q,Postbottom:B,Comment:J},data:function(){return{isShowRe:!1,banner:"",title:"",head_img:"",author:"",created_time:"",content:"",view:1,like_number:1,comment:0}},created:function(){this.reqArticleData(),localStorage.getItem("username")&&(this.$store.state.isLoginSuc=!0)},methods:{reqArticleData:function(){var t=this.$route.params.id,e=Object(w["d"])(t);e.id?(this.created_time=Object(U["a"])(e.created_time).toString().slice(0,10),this.banner=e.banner_img_src,this.title=e.title,this.head_img=e.headerImg,this.author=e.author,this.content=e.content,this.view=e.view,this.like_number=e.like_number):this.$router.push("/Page404")},colseComment:function(t){var e=t.target,s=["comment-input","comment-submit","file-btn","comment-textarea","iconfont icon-liuyan"],i=s.includes(e.className);if(!i){this.isShowRe=!1;var n=document.querySelectorAll(".texterea-container");n.forEach((function(t){t.style.display="none"}))}},showRe:function(t){this.isShowRe=t},reqNewData:function(){this.reqArticleData()},commentCount:function(t){this.comment=t}}},Y=X,G=Object(m["a"])(Y,i,n,!1,null,"3e02afc6",null);e["default"]=G.exports}}]);
//# sourceMappingURL=chunk-8f36d650.575326d6.js.map