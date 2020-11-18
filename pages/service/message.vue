<template>
      
    <view class="index-content " style="">
	
		
		
			<view class="item" style="">
				<view class="left_avatar" style="">
					<image class="avatar_img " style="" src="https://img.alicdn.com/imgextra/i3/676026695/O1CN01SKe6011zKMGJCTj2P_!!676026695.png"></image>
				</view>
				<view class=" left_talkwrap " style="">
					<view class="left_talk yellowtalk_bg" style=" " >一期策划内容</view>
				</view>
				<view class="right_avatar" style=""> 
				</view>
			</view>
			<view class="item" style="">
					<view class="left_avatar" style="">
					</view>
					<view class="  right_talkwrap" style="">
						<view class="right_talk whitetalk_bg" style="" >二期策划内容二期策划内容二期策划内容二期策划内容二期策划内容二期策划内容二期策划内容</view>
					</view>
					<view class="right_avatar">
						<image class="avatar_img " style="" src="https://img.alicdn.com/imgextra/i3/676026695/O1CN01fnLnPO1zKMGKBmbr5_!!676026695.png"></image>
					</view>
			</view>
		
		
		
			<view class="option_btn_wrap" style=" position: fixed;bottom: 40px;">
				<text class="textin" style="" >确认付款</text>
				<text class="sub" style="" >发送</text>
			</view>
		
		
		
			<view class="bottom_options" style=" position: fixed;bottom: 10px;">
				<view class="option_item" style="">
					<image class="option_img " style="" src="../../static/img/icon_message001.png"></image>
				</view>
				<view class="option_item" style="">
					<image class="option_img " style="" src="../../static/img/icon_message002.png"></image>
				</view>
				<view class="option_item" style="">
					<image class="option_img " style="" src="../../static/img/icon_message003.png"></image>
				</view>
				<view class="option_item" style="">
					<image class="option_img " style="" src="../../static/img/icon_message004.png"></image>
				</view>
				<view class="option_item" style="">
					<image class="option_img " style="" src="../../static/img/icon_message005.png"></image>
				</view>
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
	.index-content{background: #f4f5f6;}
	.option_img{border-radius: 50px;display: block;width: 26px;height:26px;}
	.item{display: flex;flex-direction: row;padding:16upx 0upx;}
	.item .left_avatar{
		width: 75upx;display: flex;align-content: center;justify-content: center;align-self: center;
	}   
	.item  .right_avatar{width: 75upx;display: flex;align-content: center;justify-content: center;align-self: center;}                   
	.item .avatar_img{border-radius: 50px;display: block;width: 30px;height:30px;}
	.left_talk{width:580upx;text-align: left;float: left;}
	.left_talkwrap{width:600upx;text-align: left;}
	.right_talk{width:580upx;text-align: left;float: right;}
	.right_talkwrap{width:600upx;text-align: left;}
	
	
	.option_btn_wrap{padding: 20px;display: flex;flex-direction: row;}
	.option_btn_wrap .textin{background:#FFFFFF;padding: 5px 20px;color: #666666;
	width:450upx;display: block;text-align: left;border-radius: 30px;}
	.option_btn_wrap .sub{background:#fcaa2c;padding: 5px 20px;color: #FFFFFF;
	width:100upx;display: block;text-align: center;border-radius: 30px;margin-left: 6px;}
	
	
	.bottom_options{padding: 0px;display: flex;flex-direction: row;align-content: center;justify-content: center;}
	.bottom_options .option_item{width: 150upx;display: flex;flex-direction:row;align-content: center;justify-content: center;}
	.bottom_options .option_item .avatar_img{display: block;width: 30px;height:30px;}
	
	.yellowtalk_bg {  background: url("https://img.alicdn.com/imgextra/i1/676026695/O1CN01kKSiIT1zKMGKF1QTP_!!676026695.png") no-repeat center left;
	
		background-color: #fcaa2c;color: #FFFFFF;padding:8px 15px 8px 28px;
	}
	.whitetalk_bg {
		background: url("https://img.alicdn.com/imgextra/i4/676026695/O1CN01ppDluS1zKMGLoAX4R_!!676026695.png") no-repeat  center right;
		
		background-color: #FFFFFF;color: #333333;padding: 8px 28px 8px 15px;
	}

	/* .item .title{width:250upx;color: #999999;display: block;}
	.item .content{width:500upx;color: #666666;display: block;text-align: right;} */
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
