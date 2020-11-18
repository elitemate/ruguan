<template>
	<view class="container">

		<view class="block  virtual_bg2" >
			<view  class="block_item " style="" >
				 <view class="bgreytext" style="">
					  需求类型
				  </view>
				  <view class="agreytext paddingfix" style="">
					营销策划
				  </view>
			 </view>
		 </view>
		
		 <view class="block " >
		 	<view  class="block_item " style="" >
		 		 <view class="bgreytext" style="">
		 			  需求信息标题
		 		  </view>
		 		  <view class="agreytext paddingfix bottomline" style="">
		 			  短视频营销策划
		 		  </view>
				  <view class="bgreytext paddingfix" style="">
				  		 目前需求描述
				   </view>
				   <view class="agreytext  textarea" style="">
				    	我司是广州小马云科技有限公司 旗下产品有抓云app 抓云app是一个便民的AR工具 需要寻求有内容物输出的公司
				   </view>
				   <view class="bgreytext paddingfix" style="">
				   		 补充需求
				    </view>
				    <view class="agreytext  textarea" style="">
				     	我司是广州小马云科技有限公司 旗下产品有抓云app 抓云app是一个便民的AR工具 需要寻求有内容物输出的公司
				    </view>
		 	 </view>
		  </view>
		 
		  
		  <view class="block " >
		  	<view  class="block_item " style="" >
		  		 <view class="bgreytext" style="">
		  			  目前预算
		  		  </view>
		  		  <view class=" paddingfix bottomline orange" style="">
		  			  ¥12000 - ¥15000 
		  		  </view>
				  <view class="bgreytext paddingfix" style="">
						 补充预算
				   </view>
				   <view class=" paddingfix bottomline red" style="">
						  ¥12000 - ¥15000 
						  <image class="icon_rarrow "  style="float: right;display: inline-block;width: 25upx;height:25upx;" src="../../static/img/icon_rarrow.png"></image>
				   </view>
				   <view class="agreytext paddingfix" style="font-size:10px;">
						 行业情报：相似需求成交均价 <text class="orange">13980.46元</text>，可参考此价格补充预算。
					</view>
		  	 </view>
		   </view>
		
		
		
		
		<view class="block footbtn" style="" >	
		   <label class="radio"><radio value="r1"  />我已阅读并准时</label>
		
		<text class="blue" >《儒观项目交易平台交易规则》</text>
		</view>
	
		<view class="block footbtn" style="" >
			
				<text class="btn1" style=" width: 600upx;">提交</text>
		
			
		</view>
		
		
		
、
	</view>
</template>
<script>
	import listCell from '../../components/mix-list-cell';

	export default {
		components: {
			listCell
		},
		data() {
			return {

			}
		},



		methods: {

			navTo(url) {
				uni.navigateTo({
					url
				})

			}




		}
	}
</script>
<style lang='scss'>

	.footbtn{padding: 10px 20px;display: flex;flex-direction: row;justify-content: flex-start;}
	.footbtn .info2{display: flex;flex-direction: row;justify-content: center;align-content: center;align-self: center;}
	.footbtn .info2 .more{color: #666;font-size:13px;margin: 6px;}
	.footbtn .info2 .btn1{margin-left:5px;padding: 5px 25px;background: #fcaa2c;color: #fff;border-radius: 40px;font-size:14px;display: flex;justify-content: center;align-content: center;align-self: center;}
	.footbtn .info2 .btn2{margin-left:5px;padding: 5px 25px;background: #ffffff;border:1px solid #fcaa2c;color: #fcaa2c;border-radius: 40px;font-size:14px;display: flex;justify-content: center;align-content: center;align-self: center;}
	
	.process .info3 .info3_wrap .text3{font-size:14px;color: #666666;}
	.info2_wrap{height:50px;display: flex;flex-direction: row;justify-content: flex-start;}
	.process .info3 .info3_wrap .text1{font-size:14px;}
	.process .info3 .info3_wrap .text2{font-size:12px;color: #999999;}
	.process .info3 .info3_wrap{display: flex;flex-direction: column;}
	.process .info3{margin-bottom: 20px;width: 500upx;display: flex;flex-direction: column;justify-content: flex-start;align-content: center;align-self: center;}
	.process .info2{
		width: 40upx;display: flex;flex-direction: column;align-items: stretch;
			}
	.process .info2 .img{
	height:15px;width:15px;display: flex;justify-content: center;align-content: center;align-self: center;
		}
		
	.process .info2 .img2	{height:8px;width:10px;display: flex;justify-content: center;align-content: center;align-self: center;}
	.process{padding: 20px;border-bottom: 1px solid #eee;}
	.process .info1_wrap{display: flex;flex-direction: row;justify-content: flex-start;}
	.process .info1_wrap .info1{width: 90upx;display: flex;justify-content: flex-start;align-items: stretch;}
	.flexcol{
		display: flex;flex-direction: column;
	}
	.process .info1_wrap .info1 .text1{
		font-size:16px;display: flex;justify-content: flex-start;
	}
	.process .info1_wrap .info1 .text2{
		font-size:12px;margin-left:5px;display: flex;justify-content: center;align-content: center;align-self: center;
	}
	.merchatinfo .info3{
		width: 120upx;display: flex;flex-direction: column;align-items: stretch;
	}
	.merchatinfo .info3 .img{
		height:20px;width:20px;display: flex;justify-content: center;align-content: center;align-self: center;
	}
	.merchatinfo .info3 .text{
		font-size:12px;display: flex;justify-content: center;align-content: center;align-self: center;
	}
	.merchatinfo .info2{
		width: 120upx;display: flex;flex-direction: column;justify-content: center;align-content: center;align-self: center;
	}
	.merchatinfo .info2 .img{
		height:20px;width:20px;display: flex;justify-content: center;align-content: center;align-self: center;
	}
	.merchatinfo .info2 .text{
		font-size:12px;display: flex;justify-content: center;align-content: center;align-self: center;
	}
	.merchatinfo{
		border-bottom: 1px solid #eee;padding: 10px 20px;display: flex;flex-direction: row;justify-content: flex-start;
	}
	.merchatinfo .info1{
		width: 490upx;display: flex;
	}
	.merchatinfo .info1 .logo{
		height:30px;width:30px;border-radius: 30px;display: flex;justify-content: center;align-content: center;align-self: center;
	}
	.merchatinfo .info1 .title{
		margin-left:5px;display: flex;justify-content: center;align-content: center;align-self: center;
	}
	.virtual_bg .row2_wrap .simple_row1{
		color: #666666;font-size:14px;margin:5px 0 10px 5px;
	}
	.virtual_bg .row2_wrap .simple_row2{
		color: #999999;font-size:12px;margin:5px;
	}
	.virtual_bg .row2_wrap .simple_row3{
		color: #999999;font-size:12px;margin:5px;
	}
	.virtual_bg .row2_wrap .img1{
		width: 14px;height: 14px;position: relative;top:2px;left: -5px;
	}
	.virtual_bg .row2_wrap{
		
	}

	
	.virtual_bg .cell_row2{
	
	}
	.yellow_tag{color: #fcaa2c;}
	
	
	
	.process_bg{
		}
    .bg {
		background: linear-gradient(left, #fd8f36,#ffb848);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		filter: blur(1px);
		}



    page{
    	background: #f4f5f6;
    }
	.orange{color:#fcaa2c;}
	.red{color:#ff3b06;}
	.blue{color:#339ff2;}
	.paddingfix{padding: 10px 0;}
	.bottomline{border-bottom:1px solid #eee;}
	.agreytext{color: #666666;}
	.bgreytext{color: #999999;}
	.textarea{border:1px solid #eeeeee;padding:10px 8px;}
	.virtual_bg2{
		background: url("https://img.alicdn.com/imgextra/i3/676026695/O1CN01YejHtD1zKMGOKMQ5l_!!676026695.png") no-repeat center center;
	}
	.block{
		padding: 10px 20px 0 20px;
	}
	.block_item{padding: 10px 20px 10px 20px;background: #FFFFFF;border-radius:10px;}
	.btn1{width:700upx;padding: 5px 45px;background: #fcaa2c;color: #fff;font-size:14px;text-align: center;}
	

</style>
