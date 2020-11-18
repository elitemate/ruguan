<template>
	<view class="container">

		<view class="block virtual_bg" >
			
			<view class="cell_row1" style="">
				<image class="portrait "  style="" src="../../static/img/service/icon_orderstate.png"></image>
				<text class="username" >托管善尽待预付</text>
			</view>
				
			<view class="cell_row2" style="">
				<view  class="row2_wrap div_shadow" >
					<view class="">
						  <image class="img1 little_icon" src="../../static/img/service/icon_titledecrate.png" style=""></image>
							  需求详情
						  </view>
						  <view class="simple_row1" style="">
							  我需要品牌故事撰写，一个关于家具品牌的背景故事...
						  </view>
						  <view class="simple_row2" style="" >
							  需求预算：<text class="yellow_tag">可议价</text>
						  </view>
						  <view class="simple_row3" style="" >
							  预付金额：<text class="yellow_tag">¥1200</text>
						  </view> 
				
					 </view>
				</view>
			</view>
		
	
	
		
		<view class="block merchatinfo" style="" >
			<view class="info1" style="">
				<image class="logo"  style="" src="../../static/img/goods/img_avatar2.png"></image>
				<text class="title" style="">原点生活馆</text>
			</view>
			
			<view class="info2" style="">
				<image class="little_icon img"  style="" src="../../static/img/service/icon_message.png"></image>
				<text class="yellow_tag text" style="">发消息</text>
			</view>
		
			<view class="info3" style="">
				<image class="little_icon img"  style="" src="../../static/img/service/icon_tel.png"></image>
				<text class="yellow_tag text" style="">打电话</text>
			</view>
		
		</view>
		

		
		<view class="block process"   style="">
		
			<view  class="info1_wrap" style="">
				<view class="info1" style="">
					<view class="flexcol">
						<text class="text1" style="">04-10</text>
						<text class="text2" style="">14:52</text>
					</view>
				</view>
				<view class="info2 process_bg" style="">
					<image class="little_icon img"  style="" src="../../static/img/service/icon_process_active.png"></image>
				</view>
				
				<view class="info3" style="">
					<view class="info3_wrap" style="">
						<text class="text1" style="">服务商正在等待您的托管赏金</text>
						<text class="text2" style="">预付托管赏金后服务商即可剋是为您工作</text>
					    <text class="text2" style="">若您长时间不托管，服务商有权在<text class="yellow_tag">0天0小时0分0妙</text>后放弃为您服务</text>
					    <text class="text2" style="">若您已无意向继续此交易，服务商有权在<text class="yellow_tag">0天0小时0分0妙</text>后关闭需求</text>
					</view>
				</view>
			</view>
				
			<view  class="info1_wrap" style="">
				<view class="info1" style="">
					<view class="flexcol">
						<text class="text1" style="">04-10</text>
						<text class="text2" style="">14:52</text>
					</view>
				</view>
				<view class="info2 process_bg" style="">
					<image class="little_icon img2"  style="" src="../../static/img/service/icon_process.png"></image>
				</view>
				<view class="info3" style="">
					<view class="info3_wrap" style="">
						<text class="text3" style="">原点生活馆接受了需求</text>
						</view>
				</view>
			</view>
			
			<view  class="info1_wrap" style="">
				<view class="info1" style="">
					<view class="flexcol">
						<text class="text1" style="">04-10</text>
						<text class="text2" style="">14:52</text>
					</view>
				</view>
				<view class="info2 process_bg" style="">
					<image class="little_icon img2"  style="" src="../../static/img/service/icon_process.png"></image>
				</view>
				<view class="info3" style="">
					<view class="info3_wrap" style="">
						<text class="text3" style="">您已付款给服务商3500元</text>
						<text class="text2" style="">
							如果您需要变更合同内容，您可以修改合同
						</text>
						</view>
				</view>
			</view>
		</view>
		<view class="block footbtn" style="" >
			<view class="info2" style=" ">
				<text class="more" style="width: 200upx;">更多</text>
				<text class="btn1" style="">发起合同</text>
				<text class="btn2" style="">预付定金</text>
			</view>
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
		padding: 10px 20px 10px 20px;background: #FFFFFF;border-radius:10px;
	}
	.virtual_bg .cell_row1 .portrait{
		height:25px;width:23px;vertical-align: top;
	}
	.virtual_bg .cell_row1 .username{
		display: inline-block;vertical-align: top;margin: 2px 0 0 6px;color: #FFFFFF;
	}
	.virtual_bg .cell_row1{
		padding: 20px 0 0 40px;
	}
	.virtual_bg .cell_row2{
		padding: 10px 20px 0 20px;
	}
	.yellow_tag{color: #fcaa2c;}
	.virtual_bg{
		background: url("https://img.alicdn.com/imgextra/i2/2208006111062/O1CN01WyOzUf1JiRDnMOgMk_!!2208006111062.png") no-repeat center center;
	}
	.process_bg{
		background: url("https://img.alicdn.com/imgextra/i1/2208006111062/O1CN0114OI8Q1JiRDxuudZs_!!2208006111062.png") no-repeat center center;
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

</style>
