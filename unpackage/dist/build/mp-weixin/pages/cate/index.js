(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cate/index"],{"20e8":function(e,t,n){},"25af":function(e,t,n){"use strict";n.r(t);var a=n("e898"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},4801:function(e,t,n){"use strict";(function(e){n("fd83");a(n("66fd"));var t=a(n("feef"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"8f12":function(e,t,n){"use strict";var a=n("20e8"),i=n.n(a);i.a},9065:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement;e._self._c},o=[]},e898:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onShareAppMessage:function(e){return{title:"购物先领券，一年省一半",path:"/pages/index/index"}},data:function(){return{category:[{name:"热门抖货"},{name:"百变穿搭"},{name:"时尚潮男"},{name:"舒适好物"},{name:"美妆达人"},{name:"魅力配饰"},{name:"步履不停"},{name:"包罗万象"},{name:"萌娃驾到"}],genderKey:"gender",TabCur:0,scrollLeft:0,scrollTop:!1,couponlist:[],page:1,min_id:0,cid:0,cat_id:0,sort:4,loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}},onLoad:function(t){var n=this;this.$queue.getData(this.genderKey);e.showLoading({title:"加载中..."}),this.loadCouponList();var a=this.$queue.getData("userId");a||this.$Request.getT("/user/"+a).then((function(e){0===e.status&&(n.$queue.setData("openid",e.data.openId),n.$queue.setData("image_url",e.data.image_url),n.$queue.setData("mobile",e.data.phone),n.$queue.setData("nickName",e.data.nickName),n.$queue.setData("relation_id",e.data.relationId),n.$queue.setData("gender",parseInt(e.data.gender)))}))},onPageScroll:function(e){this.scrollTop=e.scrollTop>200},methods:{tabSelect:function(t){e.showLoading({title:"加载中..."}),this.TabCur=t.currentTarget.dataset.id,this.cat_id=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1),this.page=1,this.min_id=0,this.loadCouponList("Refresh")},topScrollTap:function(){e.pageScrollTo({scrollTop:0,duration:300})},loadCouponList:function(t){var n=this;this.loadingType=1,this.$Request.get("/get_trill_data/apikey/maxd/min_id/"+this.min_id+"/back/20/cat_id/"+this.cat_id).then((function(a){n.loadingType=0,1===a.code?(1===n.page&&(n.couponlist=[]),n.min_id=a.min_id,a.data.forEach((function(e){e.tkmoney=(e.tkmoney/2).toFixed(2),e.itemsale=e.itemsale>1e4?"已售 "+(e.itemsale/1e4).toFixed(1)+"万":"已售 "+e.itemsale,n.couponlist.push(e)}))):n.loadingType=2,e.hideLoading(),"Refresh"===t&&e.stopPullDownRefresh()}))},toGoodsInfo:function(t){var n=this.$queue.getData("relation_id");n?e.navigateTo({url:"/pages/detail/goodsinfo?itemid="+t+"&relation_id="+n}):e.navigateTo({url:"/pages/detail/goodsinfo?itemid="+t})}},onReady:function(){this.loadCouponList()},onReachBottom:function(){this.page=this.page+1,this.loadCouponList()},onPullDownRefresh:function(){this.page=1,this.min_id=1,this.loadCouponList("Refresh")}};t.default=n}).call(this,n("543d")["default"])},feef:function(e,t,n){"use strict";n.r(t);var a=n("9065"),i=n("25af");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("8f12");var u,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=r.exports}},[["4801","common/runtime","common/vendor"]]]);