<template>
	<view class="index-content" style="background: white">
		<!-- 搜索模块 -->
		<view class="index-header" style="top: 0;">    
			<view class="icon_header">
				<view class="icon-gender" >
					<text >北京</text>
				</view>
				<view class="index-search" @tap="toSearchIndex" style="margin-left: 70px;margin-right: 60px">
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
				<view class="tab_item" @click="open1()">
					<text class="title ">服务</text>
				</view>
				<view class="tab_item" @click="open2()">
					<text class="title active">严选	</text>
					<text  class="title_decorate"></text>
				</view>
				<view class="tab_item" @click="open3()">
					<text class="title">交易	</text>
				</view>
				<view class="tab_item" @click="open4()">
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

		<!-- 暂时不用 -->
		<view  style="display: none;" class="publisher" >
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
				<view  class="flexrowblock" >
					<view class="yellowbtn flexrow">立即发布</view>
				</view>
				<view  class="spaceline" >
					&nbsp;
				</view>
				
				
			</view>
		
		</view>
			<!-- 喇叭通知条 -->
			<view  class="spaceline" >
				&nbsp;
			</view>
		<view  class="basetitle_b" style="">
			 <text  class="spacecol" stele="height:10upx;"></text>	
			<text class="title_decorate topfix1" style="height:30upx;">
				                      
			</text>
			<text class="title" >
				用户烟与雾的杂货店5分钟前购买了软件开发服务
			</text>
			
		</view>
		<view  class="spaceline" >
			&nbsp;
		</view>
	<!-- 严选服务 -->
		<view  class="basetitle" style="">
			 <text  class="spacecol"></text>	
			<text class="title_decorate topfix1">
				<image class="img" src="../../static/img/home/icon_yanxuan01.png" ></image>                        
			</text>
			<text class="title topfix1" >
				为您甄选海量精品服务
			
			</text>
			
		</view>
		<!-- 严选服务 -->
		<view  class ="yanxuan" style="" v-if="couponlist.length > 0">
			<view  class="itemwrap" style="background:#FDEEE7;" @tap="toNavList(4,'巨划算')">
				<image class="img" src="../../static/img/home/icon_yanxuan01.png" ></image>
				<view>
					<view class="title" style="color:#FF7839;">
						品牌设计
					</view>
					<view class="content" >官方先行验收</view>
				</view>
			</view>
			<view class="itemwrap" style="background:#EDF8FE;margin-left:16px;" @tap="toNavList(2,'9.9包邮')">
				<image class="img" src="../../static/img/home/icon_yanxuan02.png" ></image>
				<view>                       
					<view class="title"  style="color:#4CB1E8;">
						起名取名
					</view>
					<view class="content">注册不成功退全款</view>
				</view>
			</view>
		</view>
		<view  class ="yanxuan" style="" v-if="couponlist.length > 0">
			<view  class="itemwrap" style="background:#f0eef7;" @tap="toNavList(4,'巨划算')">
				<image class="img" src="../../static/img/home/icon_yanxuan03.png" ></image>
				<view>
					<view class="title" style="color:#8c7dd8;">
						无忧云网站
					</view>
					<view class="content" >IT、软件开发</view>
				</view>
			</view>
			<view class="itemwrap" style="background:#faf4e1;margin-left:16px;" @tap="toNavList(2,'9.9包邮')">
				<image class="img" src="../../static/img/home/icon_yanxuan04.png" ></image>
				<view>
					<view class="title"  style="color:#f2bd35;">
						知产财税
					</view>
					<view class="content">创业减“负”品牌保护</view>
				</view>
			</view>
		</view>
		<view  class ="yanxuan" style="" v-if="couponlist.length > 0">
			<view  class="itemwrap" style="background:#edfaed;" @tap="toNavList(4,'巨划算')">
				<image class="img" src="../../static/img/home/icon_yanxuan05.png" ></image>
				<view>
					<view class="title" style="color:#7faf7f;">
						电商金融
					</view>
					<view class="content" >收益保障专家</view>
				</view>
			</view>
			<view class="itemwrap" style="background:#f3eef5;margin-left:16px;" @tap="toNavList(2,'9.9包邮')">
				<image class="img" src="../../static/img/home/icon_yanxuan06.png" ></image>
				<view>
					<view class="title"  style="color:#a976be;">
						更多严选
					</view>
					<view class="content">多种服务品质甄选</view>
				</view>
			</view>
		</view>
		<!-- 暂时不用 -->
		<view style="display: none;padding: 4px 10px 8px 10px" v-if="couponlist.length > 0">
			<view style="width:48%;height:60px;background:rgba(248,248,250,1);border-radius:6px;display: flex" @tap="toNavList(5,'嗨抢购')">
				<view>
					<view style="margin:7px;color: #e10a07;font-size: 16px;font-weight: bold;">
						嗨抢购
					</view>
					<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">亮肤清洁毛孔</view>
				</view>
				<image src="../../static/img/home/wanggong1.png" style="border-radius: 8px;height: 38px;width: 38px;margin-top: 10px;margin-left: 26px"></image>
			</view>
			<view style="width:48%;height:60px;background:rgba(248,248,250,1);border-radius:6px;margin-left: 16px;display: flex"
			 @tap="toNavList(3,'30元封顶')">
				<view>
					<view style="margin:7px;color: #e10a07;font-size: 16px;font-weight: bold">
						30元封顶
					</view>
					<view style="color:rgba(127,134,153,1);font-weight: 400;margin-left: 8px">潮男潮女必逛</view>
				</view>
				<image src="../../static/img/home/tupian4.png" style="border-radius: 8px;height: 38px;width: 38px;margin-top: 10px;margin-left: 24px"></image>
			</view>
		</view>
		<!-- 巅峰榜 -->
		<view class="home_ant_juhuasuan has-bg-white"  style="margin: 8px 8px 8px 8px;border-radius: 10px">
			<view >
				<image src="../../static/img/home/icon_yanxuan12.png" style="margin-top:10px;float: left;width: 16px;height:16px;" ></image>	
				<text style="float: left;margin:10px 0 0 10px;color: transparent;font-size: 15px;font-weight: bold;color: #000000; height: 16px">
					需要什么服务？官方为你严选商家
				</text>				
			</view>
			<view class="s-row juhuasuan-list">
			
				<view style="position: relative;top:10px;margin-bottom:10px;"  >
					<view  style="display: block;clear: both;" >
						
						<view class="yellowblocktext">工商注册</view>
						<view class="yellowblocktext">公司起名</view>
						<view class="yellowblocktext">软件开发</view>
						<view class="yellowblocktext">金融服务</view>
					</view>
				</view>
				
				
			</view>
		</view>

		<simpleModal ref="simpleModalTkl" @maskClose="TklmaskClose">
			<view class="buy-box-title">选择您的身份</view>
			<view class="buy-box-center">
				<view class="code-cent" style="padding: 30px 80px 40px 80px">
					<view style="margin-bottom: 16px" @tap="choseGender(1)">
						<image src="../../static/img/home/boy.png" style="width: 50px;height: 50px"></image>
						<view style="color: #0e80d2">我是帅哥</view>
					</view>
					<view @tap="choseGender(2)">
						<image src="../../static/img/home/girl.png" style="width: 50px;height: 50px"></image>
						<view style="color: pink">我是美女</view>
					</view>
				</view>
			</view>
		</simpleModal>
		<simpleModal ref="simpleModalTkls" @maskClose="TklmaskClose">
			<view style="width: 600upx;border-radius: 16upx;">
				<view class="buy-box-title" style="font-weight: bold;color: #FF6DB2;">全网超级搜</view>
				<view class="buy-box-center">
					<view class="code-cent">
						<view style="padding: 8px;font-size: 32upx">{{ copyTklStatus }}</view>
					</view>
					<view class="buy-btn-copy" @click="goSearch()">立即搜索</view>
				</view>
			</view>
		</simpleModal>
		<!-- 猜你喜欢 -->
		<view  class="guesslike" style="">
			<text class="spacecol">
				
			</text>
			<text class="title" style=" height: 20px;">
				每日严推
			</text>
			<text  style="12px;color: #666;">为您量身推荐服务</text>					
		
		</view>
		<view class="index-coupon has-pd-10" style="margin: 4px;background: #F6F6F6">
			
			<view class="productlist_yanxuan">
			    <view @click="open(itemid)" class="itemInfo1">
					<view class="spacecol1"></view>
			        <view class="left">
						<view class="imgwrap"> <image src="../../static/img/home/itemimage.png" class="img"></image></view> 
			        </view>
			        <view class="spacecol2"></view>
					<view class="right">
			            <view class="line1">
							<view class="spaceline"> </view>
			                <view style="font-size:16px;font-weight:bold;"> 注册香港公司 </view>
							 <view style="font-size:12px;color:#999999;"> 免费核名，快至3天拿证，不成功退款.</view>
			            </view>
						 <view class="line2">
							<view  class="pricebox">
								<view  style="height: 15upx;"></view>
								<view class="price1">15170销量<text class="price2">9.99评分</text></view>
							
							</view>
							<view class="clickbox"><view class="clicktext">¥2000.00/次</view></view>
						</view>
					</view>
			        <view class="spacecol1"></view>
				</view>
			</view>
		<view class="productlist_yanxuan">
			    <view @click="open(itemid)" class="itemInfo1">
					<view class="spacecol1"></view>
			        <view class="left">
						<view class="imgwrap"> <image src="../../static/img/home/itemimage.png" class="img"></image></view> 
			        </view>
			        <view class="spacecol2"></view>
					<view class="right">
			            <view class="line1">
							<view class="spaceline"> </view>
			                <view style="font-size:16px;font-weight:bold;"> 注册香港公司 </view>
							 <view style="font-size:12px;color:#999999;"> 免费核名，快至3天拿证，不成功退款.免费核名，快至3天拿证，不成功退款 </view>
			            </view>
						 <view class="line2">
							<view  class="pricebox">
								<view  style="height: 15upx;"></view>
								<view class="price1">15170销量<text class="price2">9.99评分</text></view>
							
							</view>
							<view class="clickbox"><view class="clicktext">¥2000.00/次</view></view>
						</view>
					</view>
			        <view class="spacecol1"></view>
				</view>
			</view>
		
		</view>
		<!-- 加载更多提示 -->
		<view class="s-col is-col-24" v-if="couponlist.length> 0">
			<load-more :loadingType="loadingType" :contentText="contentText"></load-more>
		</view>
		<!-- 悬浮上拉 -->
		<view class="scroll_top" @tap="topScrollTap" v-bind:class="[scrollTop ? 'active' : '','']" style="bottom: 56px;">
			<text class="iconfont icon-shangla"></text>
		</view>
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
					{
						name: '箱包'
					},
					{
						name: '儿童'
					},
					{
						name: '母婴'
					},
					{
						name: '居家'
					},
					{
						name: '美食'
					},
					{
						name: '数码'
					},
					{
						name: '家电'
					},
					{
						name: '其他'
					},
					{
						name: '车品'
					},
					{
						name: '文体'
					},
					{
						name: '宠物'
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
						url: '4'

					}, 
					{
						title: "电商服务",
						image: "../../static/img/home/icon_cate06.png",
						url: '4'

					},
					{
						title: "金融服务",
						image: "../../static/img/home/icon_cate07.png",
						url: '4'

					}, 
					{
						title: "全部分类",
						image: "../../static/img/home/icon_cate08.png",
						url: '4'

					}
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
			//app查询
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search?keywords=' + this.copyTklStatus
				});
				this.$refs.simpleModalTkls.hide();
				this.copyTklStatus = '';
				uni.setClipboardData({
					data: '',
					success: r => {
						uni.showToast({
							icon: 'none',
							title: '搜索中',
							duration: 1500
						});
					}
				});
			},
			//app查询弹框
			TklmaskClose: function(e) {
				this.$refs.simpleModalTkls.hide();
				this.copyTklStatus = '';
				uni.setClipboardData({
					data: '',
					success: r => {
						uni.showToast({
							icon: 'none',
							title: '已取消',
							duration: 1500
						});
					}
				});
			},
			TklmaskCloses: function(e) {
				this.$refs.simpleModalTkls.hide();
			},
			//获取剪切板
			async getClipboardData() {
				let that = this;
				uni.getClipboardData({
					success: function(res) {
						that.copyTklStatus = res.data;
						if (res.data) {
							if (res.data.indexOf('http') == -1 && res.data.indexOf('&') == -1 && res.data.indexOf('￥') == -1) {
								that.$refs.simpleModalTkls.show({
									showConfirmButton: false
								});
							} else {
								that.$refs.simpleModalTkls.hide();
							}
						} else {
							that.$refs.simpleModalTkls.hide();
						}
					},
					fail: function(res) {}
				});
			},
			choseGender(type) {
				this.$queue.setData(this.genderKey, type);
				this.gender = type;
				this.page = 1;
				this.min_id = 1;
				if (type === 1) {
					this.TabCur = 2;
					this.cat_id = 2;
				}
				if (type === 2) {
					this.TabCur = 1;
					this.cat_id = 1;

				}
				this.loadBanner();
				this.loadCouponList("Refresh");
				this.$refs.simpleModalTkl.hide();
			},
			showGender() {
				this.$refs.simpleModalTkl.show({
					showConfirmButton: false,
				});
			},
		
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.cat_id = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				this.page = 1;
				this.min_id = 1;
				uni.showLoading({
					title: '加载中...'
				});
				this.loadCouponList("Refresh");
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
			toSearchIndex: function() {
				uni.switchTab({
					url: "/pages/homeSearch/index"
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
			uni.showLoading({
				title: '加载中...'
			});
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
		}
	}
</script>

<style>
	@import "../../static/css/index.css";

	.topfix1{
			margin-top:3px;
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
		/* margin-right: 5upx; */
		overflow: hidden;
		border-right: 1px solid #f2f2f2;
	}

	.right .bottom .bottom-right {
		flex: 6;
		/* margin-left: 5upx; */
		/* border-left: 1px solid #f2f2f2; */
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
