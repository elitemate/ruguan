<template>

    <view class="index-content" style="background: #f4f5f6;">	
		<view class="common_subbox" style="">
			<view class="descrtion_line" style="">
				 <view class="line_text1 " style="" >
					 订单号
				 </view>
				 <view class="line_text2 " style="" >
				 	  1848566
				 </view>
			</view>
			<view class="descrtion_line" style="">
				 <view class="line_text1 " style="" >
					 需求标题
				 </view>
				 <view class="line_text2 " style="" >
				 	  微信公众号推广营销策划
				 </view>
			</view>
			<view class="descrtion_line" style="">
				 <view class="line_text1 " style="" >
					 标题备注
				 </view>
				 <view class="line_text2 " style="" >
				 	 设为备注
				 </view>
			</view>
			<view class="descrtion_line" style="">
				 <view class="line_text1 " style="" >
					需求预算(元)
				 </view>
				 <view class="line_text3 need_red " style="" >
				 	    60000
				 </view>
			</view>
			<view class="descrtion_line" style="">
				 <view class="line_text1 " style="" >
					已预付金额(元)
				 </view>
				 <view class="line_text3 need_red " style="" >
				 	 2000
				 </view>
			</view>
			
			<view class="descrtion_line" style="">
				 <view class="line_text1 " style="" >
					需求类型
				 </view>
				 <view class="line_text2 " style="" >
				 	  营销推广
				 </view>
			</view>
			<view class="descrtion_line" style="border: 0px;">
				 <view class="line_text1 " style="" >
					地域类型
				 </view>
				 <view class="line_text2 " style="" >
				 	不限
				 </view>
			</view>
			
			
		</view>
	
		
		

		<view class="grey_block" style=" ">
		</view>
		<view class="common_subbox" style="">
			<view class="title_box" style=" border: 0px;">
				<image class="icon_addfile "  style="margin-top: 8px;display: block;width: 16px;height:16px;" src="../../static/img/icon_addfile.png"></image>
				<text  class=" title need_red" style="" >查看附件</text>
			</view>
			
		</view>
		<view class="grey_block" style=" ">
		</view>
		
		<view class="common_subbox" style="">
			
	
			<view class="descrtion_box" style="">
				<view  class=" title " style="" >需求描述</view>
				 <view class="grey_text" style="" >
					我司是广州小马云科技有限公司 旗下产品有抓云app 抓云app是一个便民的AR工具 
				 </view>
				 <view class="grey_text" style="" >
				 	需要寻求有内容物输出的公司，以后的所有AR、3D、虚拟场景、对接业务由合作公司负责，以公司和公司合作的模式进行合作，新入股公司以技术入股方式进行合作，占公司干股15%，对抓云app进行二开，由于涉及后期开发和运营涉及到创意和保密机制，向已有AR技术的团队进行对接，对接后，负责开发app的未来功能，运营服务器，提供内容物。 要求有ar、3d、虚拟空间，网店运营的技术团队， 需要自己团队有人员可以进行，3d扫描、建模. app日常运营，更新，修复、懂得云端技术 
				 </view>
				 <view class="grey_text" style="" >
				 我司成立于2018年，主要业务做便民AR工具， 涉及范围很广，找一个公司在AR行业大咖来入股， 除了干股还有各种分红机制， 负责带领公司走向上市的路， 广东团队优先。
				  </view>
			</view>
		</view>
		</view>
		

	<!-- 	<view class="option_btn_wrap" style="display: flex;flex-direction: row;">
			<view class="option_btn1" style="padding-top:12px;height: 44px;color: #666;background: #ffffff;width: 375upx;display: flex;flex-direction: row;justify-content: center;align-content: center;align-self: center;" >	
				<image class="icon_preview "  style="display: flex;width:20px;height: 20px;" src="../../static/img/service/icon_preview.png"></image>
				<text style="display: flex;margin-left: 5px;">预览</text>
			</view>
			<view class="option_btn2" style="padding-top:12px;display: flex;height: 44px;color: #ffffff;background: #fcaa2c;width: 375upx;display: flex;flex-direction: row;justify-content: center;align-content: center;align-self: center;" >发起合同</view>
		</view> -->
		
		
		
		
	
	
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
	.need_red{
	color:#ff725b;
}
	.red_btn{background: #fd6a3f;color: #ffffff;border-radius: 30px;padding: 3px 10px;}
	.icon_rarrow{height:20px;width:20px;vertical-align: top;}
	.red_text{color: #ff3b06;padding: 6px 0;display: block;} 
	.orange_text{color:#fcaa2c;}
	.grey_text{color: #999999;padding: 6px 0;font-size:12px;display: block;}
	.grey_block{display: block;height: 10px;background: #f4f5f6;}
	
	.common_subbox .title_box .title{width: 700upx;display:flex;padding:6px 0px;}
	.common_subbox{display: flex;background: #ffffff;flex-direction: row;padding:6upx 20upx;display: flex;flex-direction: column;}
	.common_subbox  .title_box{display:flex;border-bottom:1px solid #eee;}
	.common_subbox  .descrtion_box{}
	.common_subbox  .descrtion_box .text{font-size: 14px;color: #999999;}
	.common_subbox   .addimg_box{padding:10px 20px;}
	.common_subbox   .addimg{width: 700upx;height:200upx;}
	.descrtion_line{display: flex;flex-direction: row;padding: 10px 2px;border-bottom: 1px solid #EEEEEE;}
	.descrtion_line .line_text1{width: 200upx;}
	.descrtion_line .line_text2{width: 500upx;display: block;text-align: right;color: #999999;}
	.descrtion_line .line_text3{width: 500upx;display: block;text-align: right;}

	.common_subbox .title_box .icon_arrow{
		height:25px;width:23px;vertical-align: top;width: 50upx;
	}
	
	
	.orangeyellowbg{
		background: linear-gradient(left, #fd8f36,#ffb848);
		color: #ffffff;
	}
	.titleicon{
		height:25px;width:23px;vertical-align: top;
	}
	 .item .title{
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
