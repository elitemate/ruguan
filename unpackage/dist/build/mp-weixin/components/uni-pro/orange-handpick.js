(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-pro/orange-handpick"],{"163b":function(t,e,n){"use strict";var o=n("cb1e"),a=n.n(o);a.a},6274:function(t,e,n){"use strict";n.r(e);var o=n("9395"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},9395:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"orange-handpick",props:["total","to","content","images","copy_content","showTime"],methods:{openGoods:function(){var e=this.$queue.getData("relation_id");e?t.navigateTo({url:"/pages/detail/goodsinfo?itemid="+this.to+"&relation_id="+e}):t.navigateTo({url:"/pages/detail/goodsinfo?itemid="+this.to})},copyHref:function(){var e=this,n=this.$queue.getData("relation_id");n?t.setClipboardData({data:this.copy_content+"\n领券链接\n"+this.$queue.publicYuMing()+"/pages/detail/goodsinfo?itemid="+this.to+"&relation_id="+n,success:function(t){e.$queue.showToast("素材复制成功，长按下方图片保存图片素材")}}):t.setClipboardData({data:this.copy_content+"\n领券链接\n"+this.$queue.publicYuMing()+"/pages/detail/goodsinfo?itemid="+this.to,success:function(t){e.$queue.showToast("素材复制成功，长按下方图片保存图片素材")}})},toSave:function(e){t.getImageInfo({src:e,success:function(e){console.log("图片信息：",JSON.stringify(e)),t.saveImageToPhotosAlbum({filePath:e.path,success:function(){console.log("save success"),t.showToast({title:"图片保存成功",icon:"none",duration:3e3})}})}})}},filters:{formatDate:function(t){t=parseInt(t+"000");var e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1;o=o<10?"0"+o:o;var a=e.getDate();a=a<10?"0"+a:a;var i=e.getHours();i=i<10?"0"+i:i;var s=e.getMinutes();s=s<10?"0"+s:s;var u=e.getSeconds();return u=u<10?"0"+u:u,n+"-"+o+"-"+a+" "+i+":"+s+":"+u}}};e.default=n}).call(this,n("543d")["default"])},a2fd:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},b694:function(t,e,n){"use strict";n.r(e);var o=n("a2fd"),a=n("6274");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("163b");var s,u=n("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"55bee11f",null,!1,o["a"],s);e["default"]=c.exports},cb1e:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-pro/orange-handpick-create-component',
    {
        'components/uni-pro/orange-handpick-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b694"))
        })
    },
    [['components/uni-pro/orange-handpick-create-component']]
]);