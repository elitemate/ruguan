<template>
	<view class="index-content" style="background: white">
		<!-- 搜索模块 -->
		<view class="index-header" style="top: 0;">    
			<view class="icon_header">
				<view class="icon-gender"  >
					<text >北京</text>
				</view>
			<!-- 	@tap="toSearchIndex" -->
				<view class="index-search"   @click="opensearch()" style="margin-left: 70px;margin-right: 60px">
					<view class="icon_search" style="text-align: left">
						<text class="cuIcon cuIcon-search" style="margin-right: 6px"></text>
						<text>输入关键字或粘贴宝贝标题</text>
					</view>
				</view>
			</view>
		</view>
       <!-- TAB切换 -->
       <view  class="toptab" >
			<view class="line2">
				<view class="tab_item"   @click="open1()">
					<text class="title active">服务	</text>
					<text  class="title_decorate"></text>	
				</view>
			

				<view  class="tab_item"   @click="open2()">
					 <text class="title" >严选	</text>
				</view>
				
				
				<view class="tab_item"  @click="open3()" >
					<text class="title">交易	</text>
				</view>
				<view class="tab_item"  @click="open4()">
					<text class="title">项目扶持	</text>
				</view>
								
		   </view>
       </view>
		<!-- 轮播模块 -->
		<view class="swiper" style="background: white" v-if="banners.length>0">
			<swiper class="swiper-container" :autoplay="true" :interval="4000" :circular="true" :indicator-dots="true"
			 indicator-active-color="#ffffff" indicator-color="#cccccc" style="padding: 18upx 16upx 8upx 16upx">
				<block v-for="(item, index3) in banners" :key="index3">
					<swiper-item class="swiper-wrapper" >
						<image @tap="toGoodsInfos(item.itemid)" :src="item.itempic"   class="img"  mode="aspectFit"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<!-- 功能模块 -->
		<view style="background: white">
			<view class="index-navlist s-grids"  style="padding-top: 15px;padding-bottom: 15px;background: white">
				<!-- <view class="is-col-1-4 is-center" v-for="(nav,index) in navlist" :key="index" @tap="toNavList(nav.url,nav.title)">
					<view class="has-pdtb-5">
						<image :src="nav.image" mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							{{nav['title']}}
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">{{nav['title']}}</view>
					</view>
				</view> -->
			
				
				<view class="is-col-1-4 is-center"  @tap="opensoftware">
					<view class="has-pdtb-5">
						<image src="../../static/img/home/icon_cate01.png"  mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							品牌设计
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">品牌设计</view>
					</view>
				</view>
				<view class="is-col-1-4 is-center"  @tap="opensoftware">
					<view class="has-pdtb-5">
						<image src="../../static/img/home/icon_cate02.png"  mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							营销推广
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">营销推广</view>
					</view>
				</view>
				<view class="is-col-1-4 is-center"  @tap="opensoftware">
					<view class="has-pdtb-5">
						<image src="../../static/img/home/icon_cate03.png"  mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							IT/软件
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">IT/软件</view>
					</view>
				</view>
				<view class="is-col-1-4 is-center"  @tap="openkownlggin">
					<view class="has-pdtb-5">
						<image src="../../static/img/home/icon_cate04.png"  mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							知识产权
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">知识产权</view>
					</view>
				</view>
				<view class="is-col-1-4 is-center"  @tap="openbusiness">
					<view class="has-pdtb-5">
						<image src="../../static/img/home/icon_cate05.png"  mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							工商财税
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">工商财税</view>
					</view>
				</view>
				<view class="is-col-1-4 is-center"  @tap="opensoftware">
					<view class="has-pdtb-5">
						<image src="../../static/img/home/icon_cate06.png"  mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							电商服务
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">电商服务</view>
					</view>
				</view>
				<view class="is-col-1-4 is-center"  @tap="toCate">
					<view class="has-pdtb-5">
						<image src="../../static/img/home/icon_cate07.png"  mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							金融服务
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">金融服务</view>
					</view>
				</view>
				<view class="is-col-1-4 is-center"  @tap="toCate">
					<view class="has-pdtb-5">
						<image src="../../static/img/home/icon_cate08.png"  mode="widthFix" style="height: 35px;width: 35px;"></image>
						<view v-if="nav.url=='13'" style="margin-top: 15px;margin-bottom: 20px;color: red;font-weight: bold" class="is-size-14">
							全部分类
						</view>
						<view v-else style="bottom: 10px" class="is-size-14">全部分类</view>
					</view>
				</view>
			
			</view>
		</view>
		<!-- 暂时不用 -->
		<view  style="" class="publisher" >
			<view  class="shadow" >
				<view  class="spaceline" >
					&nbsp;
				</view>
				<view class="flexrowblock" >
					<view class="title">-&nbsp; 发&nbsp; 布&nbsp; 需 &nbsp;求 ，推 &nbsp;荐 &nbsp;优 &nbsp;质&nbsp; 服&nbsp; 务&nbsp; -</view>
				</view>
				<view class="flexrowblock" >
					<text class="tag" >◎信用审核</text><text class="tag" >◎官方监督</text><text class="tag" >◎实名注册</text>
				</view>
				<view class=" iputboxwrap" >
					<view class=" iputbox">
					<text class="input_title " >
						我的需求
					</text>
					<text class="input_content " style="width: 75%;" >
						如：电商营销
					</text>
					</view>
				</view>
				<view class=" iputboxwrap" >
				<view class=" iputbox" >
					<text class="input_title " >
						手机号
					</text>
					<text class="input_content " style="width: 60%;">
						请输入您的手机号码
					</text>
					<text style="width: 15%;color:#FF9D06;font-size:14px;">
						修改
					</text>
				</view>
				</view>
				<view  class="flexrowblock"   @tap="showGender" >
			<!-- 	@tap="newagreement()" -->
					<view class="yellowbtn flexrow"  >立即发布</view>
				</view>
				<view  class="spaceline" >
					&nbsp;
				</view>
				
				
			</view>
			
		</view>
		<!-- 暂时不用 -->
		<view style="display: none;padding: 4px 10px 8px 10px" v-if="couponlist.length > 0">
			<view style="width:48%;height:60px;background:rgba(248,248,250,1);border-radius:6px;display: flex" @tap="toNavList(4,'巨划算')">
				<view>
					<view style="margin:7px;color: #e10a07;font-size: 16px;font-weight: bold;">
						巨划算
					</view>
					<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">保湿爽肤控油</view>
				</view>
				<image src="" style="border-radius: 8px;height: 40px;width: 40px;margin-top: 10px;margin-left: 22px"></image>
			</view>
			<view style="width:48%;height:60px;background:rgba(248,248,250,1);border-radius:6px;margin-left: 16px;display: flex"
			 @tap="toNavList(2,'9.9包邮')">
				<view>
					<view style="margin:7px;color: #e10a07;font-size: 16px;font-weight: bold">
						9.9包邮
					</view>
					<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">去细纹黑眼圈</view>
				</view>
				<image src="" style="border-radius: 8px;height: 40px;width: 40px;margin-top: 10px;margin-left: 22px"></image>
			</view>
		</view>
	    <!-- 巅峰榜 -->
		<view class="home_ant_juhuasuan has-bg-white"  style="margin: 8px 8px 8px 8px;border-radius: 10px">
			<view >
				<text style="float: left;margin-top:10px;color: transparent;font-size: 15px;font-weight: bold;color: #000000; height: 16px">
					巅峰榜 
				</text><text  style="margin-top:10px;" class="colorful01">TOP.01</text>					
				<text class="fr-jutext">全部</text>
			</view>
			<view class="s-row juhuasuan-list">
				<view class="dianfengbang" >
					<view class=" colorful06 block">
						<image src="../../static/img/home/icon_tops01.png" class="img"></image>
						<view class="name" style="text-align: center;">
							<text class="bottomfix" style="color: #ffffff;">高端设计榜</text>
						</view>
					</view>
				</view>
				<view class="dianfengbang" >
					<view  class="colorful05 block">
						<image src="../../static/img/home/icon_tops02.png"  class="img"></image>
						<view class="name" style="text-align: center;">
							<text class="bottomfix">知识产权榜</text>
						</view>
					</view>
				</view>
				<view class="dianfengbang" >
					<view   class="colorful04 block">
						<image src="../../static/img/home/icon_tops03.png"  class="img"></image>
						<view class="name" style="text-align: center;">
							<text class="bottomfix">软件开发榜</text>
						</view>
					</view>
				</view>
				<view class="dianfengbang" >
					<view   class="colorful05 block">
						<image src="../../static/img/home/icon_tops04.png"  class="img"></image>
						<view class="name" style="text-align: center;">
							<text class="bottomfix">财税服务榜</text>
						</view>
					</view>
				</view>
				
				
			</view>
		</view>
		<!-- Tab模块 -->
	<!-- 	<view>
			<scroll-view v-if="couponlist.length > 0" scroll-x class="nav" scroll-with-animation :scroll-left="scrollLeft" style="z-index: 100;padding-left:8px;padding-right: 8px "
			 v-bind:class="[scrollTops ? 'scroll_top_act' : '','']">
				<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in category" :key="index" @tap="tabSelect"
				 :data-id="index">
					<text :style="index==TabCur?'background: #e10a07;color: white;padding: 2px 10px 2px 10px;border-radius: 16px;margin-right: -10px':'background: transparent;color: #333333;margin-right: -10px'">
						1{{item.name}}
					</text>
				</view>
			</scroll-view>
		</view> -->
	<!-- 	<simpleModal style="display: block;" ref="simpleModalTkl" @maskClose="TklmaskClose">
			<view class="buy-box-title" @tap="closeGender()" >取消</view>
			<view class="buy-box-center">
				<view class="code-cent" style="padding: 30px 80px 40px 80px">
					<view style="margin-bottom: 16px;" @tap="newagreement()">
						<image src="../../static/img/home/icon_publish01.png" style="width: 50px;height: 50px"></image>
						<view style="color: #0e80d2">发需求</view>
					</view>
					<view @tap="choseGender(2)">
						<image src="../../static/img/home/icon_publish02.png" style="width: 50px;height: 50px"></image>
						<view style="color: pink">发服务</view>
					</view>
				</view>
			</view>
		</simpleModal> -->
	<!-- 	<simpleModal ref="simpleModalTkls" @maskClose="TklmaskClose">
			<view style="width: 600upx;border-radius: 16upx;">
				<view class="buy-box-title" style="font-weight: bold;color: #FF6DB2;">全网超级搜</view>
				<view class="buy-box-center">
					<view class="code-cent">
						<view style="padding: 8px;font-size: 32upx">{{ copyTklStatus }}</view>
					</view>
					<view class="buy-btn-copy" @click="goSearch()">立即搜索</view>
				</view>
			</view>
		</simpleModal> -->
		<!-- 猜你喜欢 -->
		<view  class="guesslike" style="">
			<text class="spacecol">
				
			</text>
			<text class="title">
				猜你喜欢
			</text>
			<!-- <text  class="title_decorate"></text>		 -->			
		
		</view>
		<view class="index-coupon has-pd-10" style="margin: 4px;background: #F6F6F6">
			
			<view class="goods-list" v-if="couponlist.length > 0">
				<orange-goods-card-home v-for="(item,index) in couponlist" :index="index%2" :logo="logo" :tkmoney='"￥"+item.tkmoney'
				 :itemid="item.itemid" :itempic="item.itempic?item.itempic+'_310x310.jpg':'../../static/img/avatar.png'"
				 :itemtitle="item.itemtitle" :itemprice='"¥"+item.itemprice' :itemsale="item.itemsale" :itemendprice='""+item.itemendprice'
				 :couponmoney="item.couponmoney"></orange-goods-card-home>
			</view>
		</view>
		<!-- 加载更多提示 -->
		<view class="s-col is-col-24" v-if="couponlist.length> 0">
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
		<!-- 悬浮上拉 -->
		<!-- <view class="scroll_top" @tap="topScrollTap" v-bind:class="[scrollTop ? 'active' : '','']" style="bottom: 56px;">
			<text class="iconfont icon-shangla"></text>
		</view> -->
		<!-- TODOO 悬浮ADD -->
		<view class="addpublish"   @tap="showGender" >
			<text class=" "  >+</text>
		</view>
		
		
		<!-- 发需求 发服务 active-->
		<simpleModal style="display: block;" ref="simpleModalTkl" @maskClose="TklmaskClose">
			<view v-if="showPublishButton"  class="index-goods" >
			<view class="goods_share" v-bind:class="[showPublishButton ? 'active' : '','']">
				<view class="cent">
					<view class="itemwrap" style="">
						<view class="item"  @tap="newagreement()" >
							<view class="title">
								<text class="maintitle" style="">发需求</text>
								<text class="secondtitle" style="" >我需要找人外包，解决需求</text>
							</view>
							<image src="../../static/img/home/icon_publish01.png" class="img"></image>
						</view>
					</view>
					<text class="em"></text>
					<view class="itemwrap" style="">
						<view class="item" style="">
							<view class="title">
								<text class="maintitle" style="">发服务</text>
								<text class="secondtitle" style="" >我有技能，接单赚钱</text>
							</view>
							<image src="../../static/img/home/icon_publish02.png" class="img"></image>
						</view>
					</view>
					<text class="em"></text>
					<view class="itemwrap" style="" @tap="closeGender()" >
						<view class="item_noshadow"  style="text-align:center ;color: #999999;font-size:16px;" >	 
							取消
						</view>
					</view>
				</view>
			</view>
		</view>
		</simpleModal>
		<!-- janafilter -->
		<view class="index-goods" ref="simpleModalTkl3" @maskClose="TklmaskClose">	
			<view class="goods_filter" v-bind:class="[showFilter ? 'active' : '','']">
				<view class="cent">
					
					<view class="titleLine">
						<text class="title" style="">全部分类</text>
						<text class="more" style="" >更多></text>
					</view>
					<view class="itemwrap" >
						<text class="item_active" >全部</text>
						<text class="item" >品牌设计</text>
						<text class="item" >营销推广</text>
						<text class="item" >软件开发</text>
						<text class="item" >知识产权</text>
						<text class="item" >工商财税</text>
						<text class="item" >电商服务</text>
						<text class="item" >金融服务</text>
					</view>
					<view class="titleLine">
						<text class="title" style="">发布类型</text>
						<text class="more" style="" ></text>
					</view>
					<view class="itemwrap" >
						<text class="item_active" >全部</text>
						<text class="item" >企业</text>
						<text class="item" >个人</text>
					</view>
					<view class="titleLine">
						<text class="title" style="">地区省份</text>
						<text class="more" style="" >更多></text>
					</view>
					<view class="itemwrap" >
						<text class="item_active" >全部</text>
						<text class="item" >安徽</text>
						<text class="item" >福建</text>
						<text class="item" >甘肃</text>
						<text class="item" >广东</text>
						<text class="item" >广西</text>
						<text class="item" >贵州</text>
						<text class="item" >海南</text>
						<text class="item" >河北</text>
						<text class="item" >黑龙江</text>
						<text class="item" >河南</text>
						<text class="item" >湖南</text>
						<text class="item" >湖北</text>
						<text class="item" >江苏</text>
						<text class="item" >江西</text>
						<text class="item" >吉林</text>
						<text class="item" >辽宁</text>
						<text class="item" >内蒙古</text>
						<text class="item" >宁夏</text>
						<text class="item" >青海</text>
						<text class="item" >山东</text>
						<text class="item" >山西</text>
						<text class="item" >陕西</text>
						<text class="item" >四川</text>
					</view>
				
				  <view class="btnline" style="position: relative!important;">
						<view class="btn" style="">重置</view>
						<view class="btn_yellow" style="" >确定</view>
					</view>
			</view>
		    </view>
		</view>
					
			<!-- 	</view>
			</view> -->
		    <!-- janafilter—end -->
		<!-- 加载更多提示 -->
		<!-- 加载更多提示 -->
		<network v-if="couponlist.length === 0&&showEmpty" des="暂无数据"></network>
	</view>
</template>

<script>
	import simpleModal from '@/components/simple-pro/customModal.vue';

	export default {
		onShareAppMessage(res) {
			return {
				title: '购物先领券，一年省一半',
				path: '/pages/index/index'
			}
		},
		components: {
			simpleModal
		},
		onPageScroll: function(e) {
			this.scrollTop = e.scrollTop > 200;
			this.scrollTops = e.scrollTop > 720;
		},
		onShow() {
			//#ifndef H5
			this.getClipboardData();
			//#endif
		},
		data() {
			return {
				showPublishButton:true,
				showFilter:false,
				logo: "../../static/img/mao.png",
				TabCur: 0,
				copyTklStatus: '',
				scrollLeft: 0,
				scrollTop: false,
				scrollTops: false,
				showEmpty: false,
				category: [{
						name: '精选'
					},
					{
						name: '女装'
					},
					{
						name: '男装'
					},
					{
						name: '内衣'
					},
					{
						name: '美妆'
					},
					{
						name: '配饰'
					},
					{
						name: '鞋品'
					},
		
	
				],
				banners: [],
				navlist: [{
						title: "品牌设计",
						image: "../../static/img/home/icon_cate01.png",
						url: '9'
					},
					{
						title: "营销推广",
						image: "../../static/img/home/icon_cate02.png",
						url: '1'
					},
					{
						title: "IT/软件",
						image: "../../static/img/home/icon_cate03.png",
						url: '8'
					},
					{
						title: "知识产权",
						image: "../../static/img/home/icon_cate04.png",
						url: '4'
					},
					{
						title: "工商财税",
						image: "../../static/img/home/icon_cate05.png",
						url: '/pages/index/business'
					}, 
					{
						title: "电商服务",
						image: "../../static/img/home/icon_cate06.png",
						url: '4'
					},
					
				
				],

			   
				couponlist: [],
				dataList: [],
				page: 1,
				min_id: 1,
				min_ids: 1,
				min_ida: 1,
				cat_id: 0,
				gender: 0,
				loadingType: 0,
				index: 0,
				genderKey: "gender",
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				}
			}
		},
		methods: {
			toCate(){
		
				 uni.navigateTo({
					url: '/pages/index/cate'
				 });
			
			},
			
			newagreement() {
				 uni.navigateTo({
					url: '/pages/service/agreement'
				 });
			},
			//TAB跳转
			 open1() {
				 uni.switchTab({
					url: '/pages/index/index'
				 });
		     },
			 open2() {
				 uni.navigateTo({
					url: '/pages/index/index2'
				 });
			 },
			 open3() {
				 uni.navigateTo({
					url: '/pages/index/index3'
				 });
			 },
			 open4() {
				 uni.navigateTo({
					url: '/pages/index/index4'
				 });
			 },
			 opensearch() {
				 uni.navigateTo({
					url: '/pages/homeSearch/index'
				 });
			 },
			 openbusiness() {
				 uni.navigateTo({
					url: '/pages/index/business'
				 });
			 },
			 openkownlggin() {
				 uni.navigateTo({
					url: 'pages/index/kownlggin'
				 });
			 },
			 opensoftware() {
				 uni.navigateTo({
					url: 'pages/index/software'
				 });
			 },
			
			
			 	  
			 	
			
			//app查询
			// goSearch() {
			// 	uni.navigateTo({
			// 		url: '/pages/search/search?keywords=' + this.copyTklStatus
			// 	});
			// 	this.$refs.simpleModalTkls.hide();
			// 	this.copyTklStatus = '';
			// 	uni.setClipboardData({
			// 		data: '',
			// 		success: r => {
			// 			uni.showToast({
			// 				icon: 'none',
			// 				title: '搜索中',
			// 				duration: 1500
			// 			});
			// 		}
			// 	});
			// },
			//app查询弹框
			// TklmaskClose: function(e) {
			// 	this.$refs.simpleModalTkls.hide();
			// 	this.copyTklStatus = '';
			// 	uni.setClipboardData({
			// 		data: '',
			// 		success: r => {
			// 			uni.showToast({
			// 				icon: 'none',
			// 				title: '已取消',
			// 				duration: 1500
			// 			});
			// 		}
			// 	});
			// },
			// TklmaskCloses: function(e) {
			// 	this.$refs.simpleModalTkls.hide();
			// },
			//获取剪切板
			// async getClipboardData() {
			// 	let that = this;
			// 	uni.getClipboardData({
			// 		success: function(res) {
			// 			that.copyTklStatus = res.data;
			// 			if (res.data) {
			// 				if (res.data.indexOf('http') == -1 && res.data.indexOf('&') == -1 && res.data.indexOf('￥') == -1) {
			// 					that.$refs.simpleModalTkls.show({
			// 						showConfirmButton: false
			// 					});
			// 				} else {
			// 					that.$refs.simpleModalTkls.hide();
			// 				}
			// 			} else {
			// 				that.$refs.simpleModalTkls.hide();
			// 			}
			// 		},
			// 		fail: function(res) {}
			// 	});
			// },
			// choseGender(type) {
			// 	this.$queue.setData(this.genderKey, type);
			// 	this.gender = type;
			// 	this.page = 1;
			// 	this.min_id = 1;
			// 	if (type === 1) {
			// 		this.TabCur = 2;
			// 		this.cat_id = 2;
			// 	}
			// 	if (type === 2) {
			// 		this.TabCur = 1;
			// 		this.cat_id = 1;

			// 	}
			// 	this.loadBanner();
			// 	this.loadCouponList("Refresh");
			// 	this.$refs.simpleModalTkl.hide();
			// },
			showGender() {
				this.$refs.simpleModalTkl.show({
					showConfirmButton: false,
				});
			 
			},
			closeGender() {
				this.$refs.simpleModalTkl.hide();
			},
			showpublish() {
				 console.log(111);
				  // this.showPublishButton = true;
				 this.$refs.simpleModalTkl2.show({
					showPublishButton: true,
				 });
				 // let showPublishButton = true;
				 console.log(showPublishButton);
		    },
		
			topScrollTap: function() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},

			loadCouponList: function(type) {
				this.loadingType = 1;
				this.$Request.get("/column/apikey/maxd/type/9/back/20/min_id/" + this.min_id + "/sort/9/cid/" + this.cat_id).then(
					res => {
						this.loadingType = 0;
						if (res.code === 1) {
							if (this.page === 1) {
								this.couponlist = [];
							}
							this.min_id = res.min_id;
							res.data.forEach(d => {
								d.tkmoney = (d.tkmoney / 2).toFixed(2);
								d.itemsale = d.itemsale > 10000 ? "已售 " + (d.itemsale / 10000).toFixed(1) + "万" : "已售 " + d.itemsale;
								this.couponlist.push(d);
							});
						} else {
							this.loadingType = 2;
						}
						this.showEmpty = true;
						if (type === "Refresh") {
							uni.stopPullDownRefresh(); // 停止刷新
						}
						uni.hideLoading();
					})
			},
			loadBanner: function() {
				this.banners = [{itempic:"https://img.alicdn.com/imgextra/i1/2208006111062/O1CN01K8p4Zt1JiRDuBAl6O_!!2208006111062.png"},
				{itempic:"https://img.alicdn.com/imgextra/i1/2208006111062/O1CN01lFdjWe1JiRDtBQKrE_!!2208006111062.png"},
				{itempic:"https://img.alicdn.com/imgextra/i3/2208006111062/O1CN01IV0KsG1JiRDrD7gwF_!!2208006111062.png"},
				{itempic:"https://img.alicdn.com/imgextra/i2/2208006111062/O1CN01wHp4c71JiRDtBR4ah_!!2208006111062.png"}
				]
				// this.$Request.get("/column/apikey/maxd/type/2/back/5/min_id/1/sort/0/cid/" + this.cat_id).then(res => {
				// 	if (res.code === 1) {
				// 		this.banners = []
				// 		res.data.forEach(d => {
				// 			this.banners.push(d);
				// 		});

				// 	}
				// })
			},

			loadDataList: function() {
				this.$Request.get("/get_deserve_item/apikey/maxd").then(res => {
					for (let i = this.index; i < 8; i++) {
						this.dataList.push(res.item_info[i]);
					}
				})
			},
			
			toNavList: function(url, title) {
				if (url === 'remeng') {
					uni.navigateTo({
						url: "/pages/categray/index"
					})
				} else if (url === 'pinduoduo') {
					//#ifndef H5
					uni.navigateTo({
						url: "/pages/member/ping?url=https://mobile.yangkeduo.com/duo_cms_mall.html?pid=8948958_104234125&cpsSign=CM_190809_8948958_104234125_05e68780da621fd572b728c3ae1ee027&range_items=1%3A0%3A10000%2C2%3A10%3A1000&duoduo_type=2"
					});
					//#endif
					//#ifdef H5
					window.location.href =
						"https://mobile.yangkeduo.com/duo_cms_mall.html?pid=8948958_104234125&cpsSign=CM_190809_8948958_104234125_05e68780da621fd572b728c3ae1ee027&range_items=1%3A0%3A10000%2C2%3A10%3A1000&duoduo_type=2";
					//#endif
				} else if (url === 'shoucang') {
					uni.navigateTo({
						url: "/pages/footer/like",
					})
				} else if (url === 'jingdong') {
					uni.navigateTo({
						url: "/pages/jd/list",
					})
				} else if (url === 'rexiao') {
					uni.switchTab({
						url: "/pages/hot/index",
					})
				} else if (url === 'daequan') {
					uni.navigateTo({
						url: "/pages/index/dae?title=" + title + "&type=9",
					})
				} else if (url === 'meishi') {
					uni.navigateTo({
						url: "/pages/index/food?title=" + title + "&type=9",
					})
				} else if (url === 'gaoyongjingxuan') {
					uni.navigateTo({
						url: "/pages/index/double?title=" + title + "&type=9"
					})
				} else if (url == 22) {
					uni.navigateTo({
						url: "/pages/cate/index",
					})
				} else {
					uni.navigateTo({
						url: "/pages/index/list?title=" + title + "&type=" + url,
					})
				}
			},
			toGoodsInfo: function(url) {
				console.error(url)
				if (url.indexOf("/pages/") !== -1) {
					uni.navigateTo({
						url
					});
				} else {
					//#ifndef H5
					uni.navigateTo({
						url: "/pages/member/webview?url=" + url
					});
					//#endif
					//#ifdef H5
					window.location.href = url;
					//#endif
				}
			},
			toGoodsInfos: function(itemid) {
				uni.navigateTo({
					url: "/pages/detail/goodsinfo?itemid=" + itemid,
				})
			},
			tonewpublish: function() {
				uni.navigateTo({
					url: "vice/add/pages/service/addneed"
				})
			},
			toZujiIndex: function() {
				uni.navigateTo({
					url: "/pages/footer/index"
				})
			}
		},
		onLoad: function() {
			let gender = this.$queue.getData(this.genderKey);
			if (gender) {
				if (gender === 1) {
					this.gender = gender;
					this.cat_id = 2;
				}
				if (gender === 2) {
					this.gender = gender;
					this.cat_id = 1;
				}

			}
			// uni.showLoading({
			// 	title: '加载中...'
			// });
			this.loadBanner();
			this.loadDataList();

			this.loadCouponList();
		},
		onReady: function() {
			
		},
		onReachBottom: function() {
			this.page = this.page + 1;
			this.loadCouponList();
		},
		onPullDownRefresh: function() {
			this.page = 1;
			this.min_id = 1;
			this.loadBanner();
		
			this.loadCouponList("Refresh");
		},
		showShopCartBg: function(type) {
			if (type === "cart") {
				this.shopCartBg = !this.shopCartBg;
			}
			if (type === "nav") {
				this.navBarButton = !this.navBarButton;
			}
			if (type === "filter") {
				this.filterButton = !this.filterButton;
			}
		}
	}
</script>

<style>
	
	@import "../../static/css/index.css";
	.addpublish{
		background: linear-gradient(to bottom, #FE972D 0, #F4504A 100%);
		display: block;
		width: 44px;
		height: 44px;
		border-radius: 40px;
		-moz-border-radius: 40px;
		-webkit-border-radius: 40px;
		-o-border-radius: 40px;
		-ms-border-radius: 40px;
		line-height: 40px;
		position: relative;
		bottom: 10upx;
		right: 5upx;
		color: #fff;
		font-size: 2.2em;
	/* 	padding: 1upx; */
		text-align: center;
		line-height: 40px;
		color: #fff;
		position: fixed;
		z-index: 1;
		zoom: 1;
	   /* right: 20px;
		bottom: 25px; */
	 /*   opacity: 0; */
	   /* -webkit-transform: translateY(100px) translateX(0);
		transform: translateY(100px) translateX(0);
		transition: all .4s ease 0s;
		-o-transition: all .4s ease 0s;
		-moz-transition: all .4s ease 0s;
		-webkit-transition: all .4s ease 0s;
		-webkit-transform-origin: center;
				transform-origin: center; */
	}
	.swiper-item img {
		display: block;
		height: 200upx;
	}
	.title .fr {
		float: right;
		line-height: 50px;
		margin-right: 16px;
		font-size: 10px;
		color: #ccc;
	}
	/*#ifndef APP-PLUS*/
	.scroll_top_act {
		background: white;
		top: 45px;
		position: fixed;
	}
	/*#endif*/
	/*#ifdef APP-PLUS*/
	.scroll_top_act {
		background: white;
		top: 65px;
		position: fixed;
	}
	/*#endif*/
	.banner {
		border-radius: 10px;
		margin: 8px 8px 0 8px;
		overflow: hidden;
		display: flex;
	}
	.banner img {
		width: 100%;
	}
	.banner>.left {
		flex: 4;
		/* margin-right: 10upx; */
		border-right: 2px solid #f2f2f2;
		overflow: hidden;
	}
	.banner>.right {
		flex: 7;
	}
	.right .top {
		width: 100%;
		/* margin-bottom: 7upx; */
		/*border-bottom: 2px solid #f2f2f2;*/
		overflow: hidden;
	}
	.right .bottom {
		display: flex;
		width: 100%;
	}
	.right .bottom .bottom-left {
		flex: 6;
		overflow: hidden;
		border-right: 1px solid #f2f2f2;
	}
	.right .bottom .bottom-right {
		flex: 6;
		overflow: hidden;
	}
	.marquee-box {
		border-radius: 5px;
		overflow: hidden;
		position: relative;
		background: #fff;
		height: 26px;
		line-height: 26px;
	}
	.marquee-title {
		padding-left: 8px;
		padding-right: 8px;
		position: absolute;
		color: #ff5100;
		top: 0;
		left: 0;
		z-index: 3;
		background: #fff;
		font-size: 14px;
	}
	.marquee {
		padding: 6px 10px;
		color: #000;
		display: inline-block;
		white-space: nowrap;
		animation: 35s wordsLoop linear infinite normal;
		font-size: 14px;
	}
	@keyframes wordsLoop {
		0% {
			transform: translateX(350px);
			-webkit-transform: translateX(350px);
		}

		100% {
			transform: translateX(-100%);
			-webkit-transform: translateX(-100%);
		}
	}
	.is-size-14{
		height: 30px;
	}
</style>
