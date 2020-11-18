<template>

    <view class="index-content" style="background: #f4f5f6;margin-top:10upx;">
		
		<view class="item" style="">
			<view class=" title" style="">
				<text class="" >选择类型</text>
			</view>
			<view class="content" style="">
				<text class="" >工作交付问题</text>
			</view>
		</view>
		<view class="grey_block" style=" display: block;height: 10px;background: #f4f5f6;">
		</view>
		<view class="item_textarea" style="padding:6upx 20upx;display: flex;flex-direction: column;">
			<view class=" textarea_title" style="border-bottom:1px solid #eee;">
				<text style="display:block;padding:6px 0px;" >知识工作者未按要求完成工作</text>
			</view>
			<view class="textarea_content" style="">
				<text style="display: block;min-height:140px;padding:10px 0;font-size:14px;color: #999999;" >请描述申请维权的详细原因</text>
			</view>
			<view class="textarea_descrtion" style="">
				<text class="" style="font-size:12px;color: #999999;display: block;text-align: right;" >0/800</text>
			</view>
		</view>
		<view class="grey_box" style=" display: block;background: #f4f5f6;padding: 15px 0 10px 15px;">
			<text class="option_btn_1" style="" >上传凭证</text>
			<text class="" style="font-size:10px;color: #888;" >支持文档，图片，压缩文件，单个文件小于20M，文件数量最多5个</text>
		</view>
		<view class="item" style="">
			<view class=" title" style="">
				<text class="" >申请退款金额（元）</text>
			</view>
			<view class="content" style="">
				<text class="" >0</text>
			</view>
		</view>
		<view class="grey_box" style=" display: block;background: #f4f5f6;padding: 8px 0 10px 15px;">
			
			<text class="" style="font-size:10px;color: #888;" >最多可申请</text>
			<text class="" style="font-size:10px;color: #fcaa2c;" >5000元</text>
			<text class="" style="font-size:10px;color: #888;" >，已支付服务商</text>
			<text class="" style="font-size:10px;color: #fcaa2c;" >4300元</text>
			
			
		</view>
		
		<view class="option_btn_wrap" style="padding: 20px;">
			<text class="option_btn" style="" >提交</text>
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
