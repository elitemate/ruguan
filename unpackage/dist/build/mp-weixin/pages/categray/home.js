(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/categray/home"],{1386:function(t,e,i){"use strict";i.r(e);var n=i("f71c"),o=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=o.a},"369c":function(t,e,i){},"3d4e":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement;t._self._c},c=[]},"7c75":function(t,e,i){"use strict";i.r(e);var n=i("3d4e"),o=i("1386");for(var c in o)"default"!==c&&function(t){i.d(e,t,(function(){return o[t]}))}(c);i("e854");var r,a=i("f0c5"),l=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=l.exports},d0a6:function(t,e,i){"use strict";(function(t){i("fd83");n(i("66fd"));var e=n(i("7c75"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},e854:function(t,e,i){"use strict";var n=i("369c"),o=i.n(n);o.a},f71c:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("4b9c"));function o(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{name:"wkiwi",height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,classifyData:n.default,arr:[0,584,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0}},created:function(){},onLoad:function(){t.showLoading({title:"加载中..."}),this.height=t.getSystemInfoSync().windowHeight-this.tabBarHeight},onReady:function(){this.getHeightList()},methods:{getHeightList:function(){var e=this,i=t.createSelectorQuery();i.selectAll(".nav-left-item").boundingClientRect((function(t){e.leftItemHeight=t[0].height,e.navLeftHeight=e.leftItemHeight*n.default.length,e.diff=e.navLeftHeight-e.height})),i.selectAll(".box").boundingClientRect((function(t){var i=[0],n=0;t.forEach((function(t){n+=t.height,i.push(n)})),console.log(i),e.arr=i})).exec(),t.hideLoading()},scroll:function(t){var e=this;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){e.scrollHeight=t.detail.scrollTop+1+e.height/2;for(var i=0;i<e.arr.length;i++){var o=e.arr[i],c=e.arr[i+1];if(!c||e.scrollHeight>=o&&e.scrollHeight<c)return e.categoryActive=i,e.diff>0&&(e.scrollLeftTop=Math.round(e.categoryActive*e.diff/(n.default.length-1))),!1}e.categoryActive=0,e.timeoutId=void 0}),10)},categoryClickMain:function(t){this.categoryActive=t,this.scrollTop==this.arr[t]?this.scrollTop=this.scrollTop+1:this.scrollTop=this.arr[t]},cart:function(e){t.navigateTo({url:"/pages/search/search?keywords="+e})}},components:{}};e.default=c}).call(this,i("543d")["default"])}},[["d0a6","common/runtime","common/vendor"]]]);