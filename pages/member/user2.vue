<template>
	<view class="container">

		<view class="user-section">
			
			<view class="user-info-box" style="z-index: 1;">
				<view class="portrait-box" style="flex-direction: row;">
					<image class="portrait" src="https://img.alicdn.com/imgextra/i3/676026695/O1CN01LZZzmK1zKMGJCaN6v_!!676026695.png"></image>
				</view>
				<view>
					<view class="info-box" style="margin-top: 8px">
						<text class="username">提莫队长</text>
						
						<!-- <image src="../../static/img/center/icon_edit.png" class="icon_common icon_fix_center" >
						<view  style="" class="colorful66">
							<text class="textcolorful">服务评级9.8</text>
							</view> -->
					</view>
				</view>
				<view class="tabrole"  style="align-self: flex-end;z-index:9999;">
					<text class="role1" style="background: #a8d9ff;color:#276b9f;"  @click="openguzhu()" >切换为雇主</text>
					<image src="../../static/img/center/icon-setting.png" class="icon_common setting" >
				</view>
			</view>
			<view class="bg" style="z-index: -99;"></view>
			<view class="board_data">
				<view class="item">
					<text class="number" style="color: #FFFFFF;">12</text>
					<text class="title" style="color: #FFFFFF;">我的收藏</text>
				</view>
				<view class="item">
					<text class="number" >3</text>
					<text class="title" >我的关注</text>
				</view>
				<view class="item">
					<text class="number" >8</text>
					<text class="title" >优惠券</text>
				</view>
				<view class="item">
					<text class="number" >49</text>
					<text class="title" >足迹</text>
				</view>
			</view>
		</view>


		<view class="cell" >
			<view class="cell_line" style="">
				<text class="left text  " >
					账户余额（元）
				</text>
				<text class="left" style="color: #000;font-size:18px;">
					8500.00
				</text>
				<text class="right text" style="color: #000;margin-left:35upx;">
					提现
				</text>
				<text class="right text" style="color: #339ff2;">
					充值
				</text>	
			</view>
		</view>
		
		
		<view class="cell" >
			<view class="" style="height:30px;border-bottom:1px solid #eee;">
				<text class="left">全部订单</text>
				<text class="right"> > </text>
			</view>
			<view class="cell_row">
				<view class="item_order" >
					<image class="img" src="../../static/img/center/icon_center_b01.png" >	
					<text class="title" >待接单</text>
				</view>
				<view class="item_order" >
					<image class="img" src="../../static/img/center/icon_center_b02.png" >	
					<text class="title" >待跟单</text>
				</view>
				<view class="item_order" >
					<image class="img" src="../../static/img/center/icon_center_b03.png" >	
					<text class="title" >进行中</text>
				</view>
				<view class="item_order" >
					<image class="img" src="../../static/img/center/icon_center_b04.png" >	
					<text class="title" >待评价</text>
				</view>
			</view>
			<view class="cell_row">
				<image style=" display: flex;width:600px;height:80px;" class="ad_img" src="https://img.alicdn.com/imgextra/i2/676026695/O1CN012WDJaq1zKMGO4cfMQ_!!676026695.png" ></image>
			</view>
		</view>


	
		<view class="cell" >
			<view class="" style="height:30px;">
				<text class="left">常用功能</text>
			</view>
			<view class="cell_row">
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center05.png" >	
					<text class="title" >发票管理</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center06.png" >	
					<text class="title" >我的活动</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center07.png" >	
					<text class="title" >合作伙伴</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center08.png" >	
					<text class="title" >电子合同</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center09.png" >	
					<text class="title" >服务估价</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center10.png" >	
					<text class="title" >免费核名</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center11.png" >	
					<text class="title" >商标成功率</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center12.png" >	
					<text class="title" >商标分类</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center13.png" >	
					<text class="title" >代理记账</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center14.png" >	
					<text class="title" >经营风险测算</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center15.png" >	
					<text class="title" >联系客服</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center16.png" >	
					<text class="title" >意见反馈</text>
				</view>
				<view class="item_order2" >
					<image class="img" src="../../static/img/center/icon_center17.png" >	
					<text class="title" >帮助</text>
				</view>
				
				</view>
			</view>
			
		

         <view class="cell">
				<view class="" style="height:30px;">
					<text class="left">常用功能</text>
				</view>
				<view class="cell_row" style="	flex-flow: nowrap;">
						<view class=" colorful06 center_block_compny ">
							<image src="../../static/img/center/icon_center_31.png" class="img"></image>
							<view class="name" style="text-align: center;">
								<text class="title1">注册商标</text>
								<text class="title2">Registration</text>
							</view>
						</view>
						<view class=" colorful07 center_block_compny ">
							<image src="../../static/img/center/icon_center_32.png" class="img"></image>
							<view class="name" style="text-align: center;">
								<text class="title1">注册公司</text>
								<text class="title2">Registration</text>
							</view>
						</view>
						<view class=" colorful08 center_block_compny">
							<image src="../../static/img/center/icon_center_33.png" class="img"></image>
							<view class="name" style="text-align: center;">
								<text class="title1">项目补充</text>
								<text class="title2">Subsidy</text>
							</view>
						</view>
                </view>
        </view>


<!-- 猜你喜欢 -->
		<view  class="guesslike" style="background: #ffffff;padding:15upx;">
			<text class="spacecol">
				
			</text>
			<text class="title" style=" height: 20px;">
				每日严推
			</text>
			<text  style="12px;color: #666;">为您量身推荐服务</text>					
		
		</view>
		<view class="index-coupon has-pd-10">
			
			<view class="productlist_yanxuan" >
				
			    <view  class="itemInfo1" style="padding-top: 25rpx;">
					<view class="spacecol1"></view>
			        <image src="../../static/img/home/itemimage.png" class="img2">
			        <view class="spacecol2"></view>
					<view class="right">
			           <view class="">
			           	<view class="center_title_wrap" style="">
			           		<view class="center_title1" style=""> 名创优品10年老店高新企业 </view>
			           		<view class="center_title2" style="" >广州</view>
			           	</view>
			           </view>
			           <view class="line3">
						   <view style="display: block;">
								<view class="text4">
									<text>服务雇主</text>
									<text class="yellow" >538</text>
									<text> 位｜成交额 </text>
									 <text class="yellow">864.81</text>
									<text> 万｜好评率</text>
									 <text class="yellow">100%</text>
								 </view>
								 <view class="text4" >擅长：品牌营销｜商标注册｜知识产权申请</view>	           	
							</view>
					   </view>
					</view>
			        <view class="spacecol1"></view>
				</view>
				<view  class="itemInfo1" style="padding-top: 25rpx;">
					<view class="spacecol1"></view>
				    <image src="../../static/img/home/itemimage.png" class="img2">
				    <view class="spacecol2"></view>
					<view class="right">
				       <view class="">
				       	<view class="center_title_wrap" style="">
				       		<view class="center_title1" style=""> 名创优品10年老店高新企业 </view>
				       		<view class="center_title2" style="" >广州</view>
				       	</view>
				       </view>
				       <view class="line3">
						   <view style="display: block;">
								<view class="text4">
									<text>服务雇主</text>
									<text class="yellow" >538</text>
									<text> 位｜成交额 </text>
									 <text class="yellow">864.81</text>
									<text> 万｜好评率</text>
									 <text class="yellow">100%</text>
								 </view>
								 <view class="text4" >擅长：品牌营销｜商标注册｜知识产权申请</view>	           	
							</view>
					   </view>
					</view>
				    <view class="spacecol1"></view>
				</view>
				
				
				
				
			</view>
		</view>
		

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
			 openguzhu() {
							 uni.switchTab({
								url: '/pages/member/user'
							 });
					     },
		
			navTo(url) {
				uni.navigateTo({
					url
				})
		
			}
		
		
		
		
		}
	}
</script>
<style lang='scss'>
	.text4{color: #999999;font-size:13px;}
	.item_order2{padding:10px 0;width:168upx;display: flex;flex-wrap: wrap;flex-direction: column;justify-content: center;align-content: center;}
		.item_order2 .img{width:32px;height:28px;display:flex;justify-content: center;align-content: center;align-self: center;
	}
		.item_order2 .title{font-size:14px;color:#666666;padding-top:2px;display:flex;justify-content: center;align-content: center;align-self: center;
	}
	.item_order{padding:10px 0;width:168upx;display: flex;flex-wrap: wrap;flex-direction: column;justify-content: center;align-content: center;}
	.item_order .img{width:30px;height:35px;display:flex;justify-content: center;align-content: center;align-self: center;
}
	.item_order .title{color:#666666;padding-top:2px;display:flex;justify-content: center;align-content: center;align-self: center;
}
	.cell_line{height: 30px;line-height: 30px;}
	
	.cell_row{display: flex;flex-direction: row;flex-flow: wrap;}
	.left{float:left}
	.right{float:right;}
	.text{font-size:16px;color:#666666;}
	.cell{padding:10px 40upx;background: white;margin-bottom: 20px;}
	
	
	.board_data{display: flex;flex-direction: row;justify-content: space-between;position: relative;bottom: -10upx;
}
	.board_data .item{
		width:180upx;display: flex;flex-direction: column;justify-content: center;
	}
	.board_data .item .title{justify-content: center;display: flex;color: #ffffff;font-size:14px;font-weight: 300;}
	.board_data .item .number{justify-content: center;display: flex;color: #ffffff;font-size:14px;font-weight: 400;}
	.icon_fix_center{position:relative;top:5upx;left:5upx;}

	.tabrole .role1{
		position: relative;
		right: -220upx;
		top:0upx;
		display:flex;justify-content: center;width:180upx;background:#fcaa2c;color:#fff;padding-left:4px;height:50upx;line-height:50upx;font-size:14px;font-weight:400;border-top-left-radius:45upx;border-bottom-left-radius:45upx;
	}
	.setting{
	position: relative;
	right: -380upx;
	top:-105upx;
		
	}
	page {
		background: #f5f5f5;
	}
	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10px;
	}



	.user-section {
	/* 	margin-top: 0px; */
		height: 200px;
		padding: 50px 15px 0;
		position: relative;}

		.bg {
			background: #4ca6ec;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
		}
	

	.user-info-box {
		height: 100px;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;

		.portrait {
			width: 70px;
			height: 70px;
			/*border: 5px solid #fff;*/
			border-radius: 50%;
		}

		.username {
			font-size: 16px;
			color: #f2f2f2;
			margin-top: 16px;
			margin-left: 10px;
		}

		.username1 {
			font-size: 14px;
			color: whitesmoke;
			margin-top: 16px;
			margin-left: 10px;
		}
	}

	.vip-card-box {
		display: flex;
		flex-direction: column;
		color: #f7d680;
		height: 180px;
		background: linear-gradient(left, rgba(0, 0, 0, .7), rgba(0, 0, 0, .8));
		border-radius: 12px 16px 0 0;
		overflow: hidden;
		position: relative;
		padding: 20px 24px;

		.card-bg {
			position: absolute;
			top: 20px;
			right: 0;
			width: 220px;
			height: 160px;
		}

		.b-btn {
			position: absolute;
			right: 10px;
			top: 16px;
			width: 80px;
			height: 30px;
			text-align: center;
			line-height: 30px;
			font-size: 14px;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}

		.tit {
			font-size: 14px;
			color: #f7d680;
			margin-bottom: 16px;
		}

	}

	.cover-container {
		background: $page-color-base;
		margin-top: -80px;
		padding: 0 18px;
		position: relative;
		background: #f5f5f5;
		padding-bottom: 12px;

		.arc {
			position: absolute;
			left: 0;
			top: -17px;
			width: 100%;
			height: 22px;
		}
	}

	.tj-sction {
		@extend %section;

		.tj-item {
			@extend %flex-center;
			flex-direction: column;
			height: 80px;
			font-size: $font-sm;
			color: #75787d;
		}

		.num {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8px;
		}
	}

	.order-section {
		@extend %section;
		padding: 16px 0;
		margin-top: 12px;
}
		.order-item {
			@extend %flex-center;
			width: 70px;
			height: 70px;
			border-radius: 10px;
			font-size: $font-sm;
			color: $font-color-dark;
		}

		.yticon {
			font-size: 24px;
			margin-bottom: 12px;
			color: #fa436a;
		}

		.icon-shouhoutuikuan {
			font-size: 22px;
		}
	

	.history-section {
		padding: 16px 0 0;
		margin-top: 12px;
		background: #fff;
		border-radius: 10px;
}
		.sec-header {
			display: flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 22px;
			margin-left: 15px;
}
			.yticon {
				font-size: 22px;
				color: #5eba8f;
				margin-right: 10px;
				line-height: 20px;
			}
		

		.h-list {
			white-space: nowrap;
			padding: 15px 15px 0;
}
			image {
				display: inline-block;
				width: 100px;
				height: 100px;
				margin-right: 12px;
				border-radius: 10px;
			}
		

</style>
