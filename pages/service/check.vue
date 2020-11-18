<template>

    <view class="index-content" style="background: #f4f5f6;margin-top:10upx;">
		
		
		<view class="orangeyellowbg" style="display: block;height: 80px;padding: 30px;">
			<image class="titleicon "  style="" src="../../static/img/service/icon_orderstate.png"></image>
			<text class="title" >确认验收，请您支付尾款</text>
		</view>
		<view class="grey_block" style=" display: block;height: 10px;background: #f4f5f6;">
		</view>
		<view class="item" style="">
			<view class=" title" style="">
				<text class="" >项目阶段</text>
			</view>
			<view class="content" style="">
				<text class="" >三期 项目整体完成</text>
			</view>
		</view>
		

		<view class="item" style="">
			<view class=" title" style="">
				<text class="" >项目阶段</text>
			</view>
			<view class="content" style="">
				<text class="" >推广资料上传，源文件交付</text>
			</view>
		</view>
		<view class="item" style="">
			<view class=" title" style="">
				<text class="" >付款金额(元)</text>
			</view>
			<view class="content" style="color: #cb1c41;">
				<text class="" >1200</text>
			</view>
		</view>
	
		
		<view class="option_btn_wrap" style="padding: 20px;">
			<text class="option_btn" style="" >支付并验收</text>
		</view>
		
		
		
		
	
	
    </view>

</template>

<script>
    import discover from '../../common/discover.js';

    export default {
        name: "Card",
        data() {
            return {}
              
        },
        onLoad: function (e) {
           
          
        },
        onPageScroll: function (e) {
            this.scrollTop = e.scrollTop > 200;
        },
        onReachBottom: function () {
            if (this.TabCur == 0) {
                this.handpickOnLoad();
            } else {
                this.newsOnLoad();
            }
        },
        onPullDownRefresh: function () {
            this.min_id = 1;
            this.min_id1 = 1;
            if (this.TabCur == 0) {
                this.getHandpick(1);
            } else {
                this.getNews(1);
            }
        },
        methods: { }
           
          
          

    }

</script>

<style>
	.orangeyellowbg{
		background: linear-gradient(left, #fd8f36,#ffb848);
		color: #ffffff;
	}
	.titleicon{
		height:25px;width:23px;vertical-align: top;
	}
	.title{
		display: inline-block;vertical-align: top;margin: 2px 0 0 6px;color: #FFFFFF;
	}
	.item{display: flex;flex-direction: row;padding:26upx 20upx;background: #ffffff;border-bottom:1px solid #eee;}
	.item .title{width:350upx;color: #999999;display: block;}
	.item .content{width:400upx;color: #666666;display: block;text-align: right;}
	.red{
		color: #d82025;margin-left: 3px;
	}
	.item_textarea{
		display: flex;background: #ffffff;flex-direction: row;
	}
	.option_btn{
		background:#fcaa2c;color: #FFFFFF;
		width:100%;display: block;text-align: center;padding:8px 0;border-radius: 3px;
	}
	.option_btn_1{
		background:#ffffff;padding: 2px 6px;color: #fcaa2c;border: 1px solid #fcaa2c;
			width:110px;display: block;text-align: center;border-radius: 5px;
		
	}
	page{
		background: #f4f5f6;
	}
    @import "../../static/css/index.css";
</style>
