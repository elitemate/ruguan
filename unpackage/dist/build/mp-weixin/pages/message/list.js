(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/list"],{"21ba":function(t,e,a){"use strict";a.r(e);var n=a("a61e"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},2583:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"5e8f":function(t,e,a){"use strict";a.r(e);var n=a("2583"),i=a("21ba");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8a4b");var d,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],d);e["default"]=c.exports},"8a4b":function(t,e,a){"use strict";var n=a("c45f"),i=a.n(n);i.a},a61e:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("45b8"));function i(t){return t&&t.__esModule?t:{default:t}}var o={name:"Card",data:function(){return{contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},loadingType:0,scrollTop:!1,TabCur:0,showNews:!1,showHandPick:!0,scrollLeft:0,res:n.default,handpick:[],handpickLoad:{loading:!1,finished:!1,total:1},category:[{name:"关注",position:1,total:0,data:[]},{name:"推荐",position:2,total:0,data:[]},{name:"最新",position:3,total:0,data:[]},{name:"品牌设计",position:4,total:0,data:[]},{name:"知识产权",position:5,total:0,data:[]},{name:"知识",position:6,total:0,data:[]}],news:[],newsLoad:{loading:!1,finished:!1,total:1},min_id:1,min_id1:1}},onLoad:function(e){t.showLoading({title:"加载中..."}),this.getHandpick(1)},onPageScroll:function(t){this.scrollTop=t.scrollTop>200},onReachBottom:function(){0==this.TabCur?this.handpickOnLoad():this.newsOnLoad()},onPullDownRefresh:function(){this.min_id=1,this.min_id1=1,0==this.TabCur?this.getHandpick(1):this.getNews(1)},methods:{tabSelect:function(e){t.hideLoading(),t.pageScrollTo({scrollTop:0,duration:500}),this.TabCur=e.currentTarget.dataset.id,this.scrollLeft=60*(e.currentTarget.dataset.id-1),0==e.currentTarget.dataset.id?0==this.handpick.length?(t.showLoading({title:"加载中..."}),this.getHandpick(1)):(this.showNews=!1,this.showHandPick=!0):0==this.news.length?(t.showLoading({title:"加载中..."}),this.getNews(1)):(this.showNews=!0,this.showHandPick=!1)},topScrollTap:function(){t.pageScrollTo({scrollTop:0,duration:300})},handpickOnLoad:function(){this.getHandpick(this.handpickLoad.total+=1)},getHandpick:function(e){var a=this;this.showNews=!1,this.showHandPick=!0,this.loadingType=1,this.$Request.get("/selected_item/apikey/maxd/min_id/"+this.min_id).then((function(n){if(a.loadingType=0,1===n.code){1===e&&(a.handpick=[]),a.min_id=n.min_id;for(var i=0;i<n.data.length;i++)n.data[i].show_content=n.data[i].show_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),n.data[i].copy_content=n.data[i].copy_content.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),n.data[i].copy_content=n.data[i].copy_content.replace(/<br>/g,"\n"),a.handpick.push(n.data[i]);a.handpickLoad.loading=!1}else a.loadingType=2,a.handpickLoad.loading=!1,a.handpickLoad.finished=!0;t.hideLoading(),t.stopPullDownRefresh()}))},getBian:function(e){var a=this;this.loadingType=1,this.$Request.get1("/excellent_editor/apikey/maxd/back/20/min_id/"+this.min_id1).then((function(n){if(a.loadingType=0,1===n.code){1===e&&(a.news=[]),a.min_id1=n.min_id;for(var i=0;i<n.data.length;i++)n.data[i].copy_text=n.data[i].copy_text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),a.news.push(n.data[i]);a.newsLoad.loading=!1}else a.loadingType=2,a.newsLoad.loading=!1,a.newsLoad.finished=!0;t.hideLoading(),t.stopPullDownRefresh()}))},newsOnLoad:function(){this.getNews(this.newsLoad.total+=1)},getNews:function(e){var a=this;this.loadingType=1,this.showNews=!0,this.showHandPick=!1,this.$Request.get("/subject_hot/apikey/maxd/min_id/"+this.min_id1).then((function(n){if(a.loadingType=0,1===n.code){1===e&&(a.news=[]),a.min_id1=n.min_id;for(var i=0;i<n.data.length;i++){n.data[i].goods=[];for(var o=n.data[i].item_data,d=0;d<o.length;d++)void 0!==o[d].itemendprice&&n.data[i].goods.push({image:o[d].itempic,price:"券后价"+o[d].itemendprice,to:o[d].itemid});n.data[i].show_text=n.data[i].show_text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),n.data[i].copy_text=n.data[i].copy_text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&apos;/g,"'"),n.data[i].copy_text=n.data[i].copy_text.replace(/<br>/g,"\n"),a.news.push(n.data[i])}a.newsLoad.loading=!1}else a.loadingType=2,a.newsLoad.loading=!1,a.newsLoad.finished=!0;t.stopPullDownRefresh(),t.hideLoading()}))}}};e.default=o}).call(this,a("543d")["default"])},c45f:function(t,e,a){},f6b6:function(t,e,a){"use strict";(function(t){a("fd83");n(a("66fd"));var e=n(a("5e8f"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])}},[["f6b6","common/runtime","common/vendor"]]]);