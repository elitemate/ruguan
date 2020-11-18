<template>

    <view class="index-content" style="background: #f4f5f6;margin-top:10upx;">
		
		<view class="item" style="">
			<view class=" title" style="">
				<text class="" >项目阶段</text>
			</view>
			<view class="content" style="">
				<text class="" >一期 策划内容</text>
			</view>
		</view>
		<view class="item" style="">
			<view class=" title" style="">
				<text class="" >项目内容</text>
			</view>
			<view class="content" style="">
				<text class="" >推广策划详情及材料准备</text>
			</view>
		</view>
		<view class="item" style="">
			<view class=" title" style="">
				<text class="" >付款金额（元）</text>
			</view>
			<view class="content" style="">
				<text class="red" >1200</text>
			</view>
		</view>
		<view class="option_btn_wrap" style="padding: 20px;">
			<text class="option_btn" style="" >确认付款</text>
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
	.item{display: flex;flex-direction: row;padding:26upx 20upx;background: #ffffff;border-bottom:1px solid #eee;}
	.item .title{width:250upx;color: #999999;display: block;}
	.item .content{width:500upx;color: #666666;display: block;text-align: right;}
	.red{
		color: #d82025;margin-left: 3px;
	}
	.option_btn{
		background:#fcaa2c;padding: 5px 20px;color: #FFFFFF;
		width:100%;display: block;text-align: center;padding:8px 0;border-radius: 3px;
	}
	page{
		background: #f4f5f6;
	}
    @import "../../static/css/index.css";
</style>
