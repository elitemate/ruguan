(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-pro/orange-goods-card"],{"1ec4":function(t,e,n){"use strict";n.r(e);var i=n("5606"),o=n("8361");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("f61b");var r,u=n("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},5606:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},8361:function(t,e,n){"use strict";n.r(e);var i=n("f235"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"914b":function(t,e,n){},f235:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"orange-goods-card",props:["itempic","itemtitle","itemprice","itemsale","itemendprice","couponmoney","itemid","logo","tkmoney"],methods:{open:function(e){var n=this.$queue.getData("relation_id");n?t.navigateTo({url:"/pages/detail/goodsinfo?itemid="+e+"&relation_id="+n}):t.navigateTo({url:"/pages/detail/goodsinfo?itemid="+e})}}};e.default=n}).call(this,n("543d")["default"])},f61b:function(t,e,n){"use strict";var i=n("914b"),o=n.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-pro/orange-goods-card-create-component',
    {
        'components/uni-pro/orange-goods-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1ec4"))
        })
    },
    [['components/uni-pro/orange-goods-card-create-component']]
]);
