(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-pro/orange-goods-list"],{3084:function(t,e,n){"use strict";n.r(e);var i=n("8718"),o=n("f3af");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("5f0f");var u,r=n("f0c5"),f=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=f.exports},"3fa4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"orange-goods-list",props:["itempic","itemtitle","itemprice","itemsale","itemendprice","couponmoney","itemid","logo","tkmoney"],methods:{open:function(e){var n=this.$queue.getData("relation_id");n?t.navigateTo({url:"/pages/detail/goodsinfo?itemid="+e+"&relation_id="+n}):t.navigateTo({url:"/pages/detail/goodsinfo?itemid="+e})}}};e.default=n}).call(this,n("543d")["default"])},"5f0f":function(t,e,n){"use strict";var i=n("97a1"),o=n.n(i);o.a},8718:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"97a1":function(t,e,n){},f3af:function(t,e,n){"use strict";n.r(e);var i=n("3fa4"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-pro/orange-goods-list-create-component',
    {
        'components/uni-pro/orange-goods-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3084"))
        })
    },
    [['components/uni-pro/orange-goods-list-create-component']]
]);
