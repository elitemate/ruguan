(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/comment"],{"094d":function(t,e,a){"use strict";a.r(e);var n=a("17e3"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"17e3":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("45b8"));function o(t){return t&&t.__esModule?t:{default:t}}var i={name:"Card",data:function(){return{contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},loadingType:0,scrollTop:!1,TabCur:0,showNews:!1,showcomment:!0,scrollLeft:0,res:n.default,comment:[],commentLoad:{loading:!1,finished:!1,total:1},category:[{name:"关注",position:1,total:0,data:[]},{name:"推荐",position:2,total:0,data:[]},{name:"最新",position:3,total:0,data:[]},{name:"品牌设计",position:4,total:0,data:[]},{name:"知识产权",position:5,total:0,data:[]},{name:"知识",position:6,total:0,data:[]}],news:[],newsLoad:{loading:!1,finished:!1,total:1},min_id:1,min_id1:1}},onLoad:function(e){t.showLoading({title:"加载中..."}),this.getcomment(1)},onPageScroll:function(t){this.scrollTop=t.scrollTop>200},onReachBottom:function(){0==this.TabCur?this.commentOnLoad():this.newsOnLoad()},onPullDownRefresh:function(){this.min_id=1,this.min_id1=1,0==this.TabCur?this.getcomment(1):this.getNews(1)},methods:{tabSelect:function(e){t.hideLoading(),t.pageScrollTo({scrollTop:0,duration:500}),this.TabCur=e.currentTarget.dataset.id,this.scrollLeft=60*(e.currentTarget.dataset.id-1),0==e.currentTarget.dataset.id?0==this.comment.length?(t.showLoading({title:"加载中..."}),this.getcomment(1)):(this.showNews=!1,this.showcomment=!0):0==this.news.length?(t.showLoading({title:"加载中..."}),this.getNews(1)):(this.showNews=!0,this.showcomment=!1)},topScrollTap:function(){t.pageScrollTo({scrollTop:0,duration:300})},commentOnLoad:function(){this.getcomment(this.commentLoad.total+=1)},getcomment:function(e){var a=this;this.showNews=!1,this.showcomment=!0,this.loadingType=1,this.$Request.get("/selected_item/apikey/maxd/min_id/"+this.min_id).then((function(n){if(a.loadingType=0,1===n.code){1===e&&(a.comment=[]),a.min_id=n.min_id;for(var o=0;o<n.data.length;o++)n.data[o].show_content=n.data[o].show_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),n.data[o].copy_content=n.data[o].copy_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),n.data[o].copy_content=n.data[o].copy_content.replace(/<br>/g,"\n"),a.comment.push(n.data[o]);a.commentLoad.loading=!1}else a.loadingType=2,a.commentLoad.loading=!1,a.commentLoad.finished=!0;t.hideLoading(),t.stopPullDownRefresh()}))},getBian:function(e){var a=this;this.loadingType=1,this.$Request.get1("/excellent_editor/apikey/maxd/back/20/min_id/"+this.min_id1).then((function(n){if(a.loadingType=0,1===n.code){1===e&&(a.news=[]),a.min_id1=n.min_id;for(var o=0;o<n.data.length;o++)n.data[o].copy_text=n.data[o].copy_text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),a.news.push(n.data[o]);a.newsLoad.loading=!1}else a.loadingType=2,a.newsLoad.loading=!1,a.newsLoad.finished=!0;t.hideLoading(),t.stopPullDownRefresh()}))},newsOnLoad:function(){this.getNews(this.newsLoad.total+=1)},getNews:function(e){var a=this;this.loadingType=1,this.showNews=!0,this.showcomment=!1,this.$Request.get("/subject_hot/apikey/maxd/min_id/"+this.min_id1).then((function(n){if(a.loadingType=0,1===n.code){1===e&&(a.news=[]),a.min_id1=n.min_id;for(var o=0;o<n.data.length;o++){n.data[o].goods=[];for(var i=n.data[o].item_data,s=0;s<i.length;s++)void 0!==i[s].itemendprice&&n.data[o].goods.push({image:i[s].itempic,price:"券后价"+i[s].itemendprice,to:i[s].itemid});n.data[o].show_text=n.data[o].show_text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),n.data[o].copy_text=n.data[o].copy_text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),n.data[o].copy_text=n.data[o].copy_text.replace(/<br>/g,"\n"),a.news.push(n.data[o])}a.newsLoad.loading=!1}else a.loadingType=2,a.newsLoad.loading=!1,a.newsLoad.finished=!0;t.stopPullDownRefresh(),t.hideLoading()}))}}};e.default=i}).call(this,a("543d")["default"])},"5f23":function(t,e,a){"use strict";a.r(e);var n=a("61f8"),o=a("094d");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("dd96");var s,d=a("f0c5"),c=Object(d["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=c.exports},"61f8":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"9b1a":function(t,e,a){"use strict";(function(t){a("fd83");n(a("66fd"));var e=n(a("5f23"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},a76a:function(t,e,a){},dd96:function(t,e,a){"use strict";var n=a("a76a"),o=a.n(n);o.a}},[["9b1a","common/runtime","common/vendor"]]]);