(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/hot/index"],{"590a":function(t,e,n){},"5a61":function(t,e,n){"use strict";n.r(e);var o=n("e815"),i=n("9f8a");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("f707");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=c.exports},"709c":function(t,e,n){"use strict";(function(t){n("fd83");o(n("66fd"));var e=o(n("5a61"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"9f8a":function(t,e,n){"use strict";n.r(e);var o=n("cbea"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},cbea:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onShareAppMessage:function(t){return{title:"购物先领券，一年省一半",path:"/pages/index/index"}},data:function(){return{logo:"../../static/img/mao.png",TabCur:0,scrollLeft:0,category:[{name:"实时销量榜",position:1,total:0,data:[]},{name:"今日爆单榜",position:2,total:0,data:[]},{name:"昨日爆单榜",position:3,total:0,data:[]},{name:"出单指数榜",position:4,total:0,data:[]}],genderKey:"gender",couponlist:[],page:1,min_id:1,cid:1,sort:4,loadingType:0,scrollTop:!1,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(t){this.loadCouponList()},onPageScroll:function(t){this.scrollTop=t.scrollTop>200},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.cid=this.category[t.currentTarget.dataset.id].position,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.page=1,this.min_id=1,this.loadCouponList("Refresh")},topScrollTap:function(){t.pageScrollTo({scrollTop:0,duration:300})},loadCouponList:function(e){var n=this;this.loadingType=1,t.showLoading({title:"加载中..."}),this.$Request.get("/sales_list/apikey/maxd/sale_type/"+this.cid+"/back/20/min_id/"+this.min_id+"/cid/0").then((function(o){n.loadingType=0,1===o.code?(1===n.page&&(n.couponlist=[]),n.min_id=o.min_id,o.data.forEach((function(t){t.tkmoney=(t.tkmoney/2).toFixed(2),t.itemsale=t.itemsale>1e4?"已售 "+(t.itemsale/1e4).toFixed(1)+"万":"已售 "+t.itemsale,n.couponlist.push(t)}))):n.loadingType=2,"Refresh"===e&&t.stopPullDownRefresh(),t.hideLoading()}))},toGoodsInfo:function(e){var n=this.$queue.getData("relation_id");n?t.navigateTo({url:"/pages/detail/goodsinfo?itemid="+e+"&relation_id="+n}):t.navigateTo({url:"/pages/detail/goodsinfo?itemid="+e})}},onReachBottom:function(){this.page=this.page+1,this.loadCouponList()},onPullDownRefresh:function(){this.page=1,this.min_id=1,this.loadCouponList("Refresh")}};e.default=n}).call(this,n("543d")["default"])},e815:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},f707:function(t,e,n){"use strict";var o=n("590a"),i=n.n(o);i.a}},[["709c","common/runtime","common/vendor"]]]);