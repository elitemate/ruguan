<template>
	<view class="index-content" style="background: white">
		<!-- 搜索模块 -->
		<view class="index-header" style="top: 0;">    
			<view class="icon_header">
				<view class="icon-gender"  @tap="showGender" >
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
      <view style=""  class="hottag" > 
      	<text class="tag" style=""  >热搜 ：</text><text class="tag_active" >公司注册</text><text class="tag_active" >低价代账</text><text class="tag_active" >资质代办</text><text class="tag_active" >税收筹划</text>
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
		
		<view class="rowflow" style="display: flex;flex-direction: row;justify-content: center;align-content: center;">
					<view  class="item5"  style="width: 150upx;display: flex;flex-direction: column;justify-content: center;align-content: center;">
						<image class="img" src="../../static/img/business_img01.png" ></image>
						<text class="title" >公司注册</text>	
					</view>
					<view  class="item5"  style="width: 150upx;display: flex;flex-direction: column;justify-content: center;align-content: center;">
						<image class="img" src="../../static/img/business_img02.png" ></image>
						<text class="title" >低价代账</text>	
					</view>
					<view  class="item5"  style="width: 150upx;display: flex;flex-direction: column;justify-content: center;align-content: center;">
						<image class="img" src="../../static/img/business_img03.png" ></image>
						<text class="title" >资质代办</text>	
					</view>
					<view  class="item5"  style="width: 150upx;display: flex;flex-direction: column;justify-content: center;align-content: center;">
						<image class="img" src="../../static/img/business_img04.png" ></image>
						<text class="title" >税收筹划</text>	
					</view>
					<view  class="item5"  style="width: 150upx;display: flex;flex-direction: column;justify-content: center;align-content: center;">
						<image class="img" src="../../static/img/business_img05.png" ></image>
						<text class="title" >法律服务</text>	
					</view>
		</view>
	
		<view  style="" class="publisher" >
			<view  class="shadow" >
				<view  class="spaceline" >
					&nbsp;
				</view>
				<view class="flexrowblock" >
					<view class="title">-&nbsp; 免费查询公司名称能否注册 &nbsp; -</view>
				</view>
				<view class="flexrowblock" >
					<view class="tag" style="color: #666;"> 累计查询<text style="color:#ff6238;">36026429</text>次</view>
				</view>
				<view class=" iputboxwrap" >
					<view class=" iputbox">
					<text class="input_title " >
						公司名称
					</text>
					<text class="input_content " style="width: 75%;" >
						请填写手机号码，仅官方可见
					</text>
					</view>
					
				</view>
				<view class=" iputboxwrap" >
				<view class=" iputbox" >
					<text class="input_title " >
						手机号
					</text>
					<text class="input_content " style="width: 60%;">
						请填写手机号码，仅官方可见
					</text>
					<view style="width: 15%;">
						<image class="little_icon" src="../../static/img/business_img_check.png" ></image>
					</view>
				</view>
				</view>
				<view class="flexrowblock" style="text-align: left;">
					<view class="tag" style="color:#666666;">我已阅读并同意无界易联平台<text style="color:#ff6238;">《隐私保护政策》</text></view>
				</view>
				<view  class="flexrowblock" >
					<view class="yellowbtn flexrow">立即获取</view>
				</view>
				<view  class="spaceline" >
					&nbsp;
				</view>
				
				
			</view>
			
		</view>
		
		<view style="display: flex;padding: 4px 10px 8px 10px">
			<text style="float: left;margin-top:10px;color: transparent;font-size: 15px;font-weight: bold;color: #000000; height: 16px">
				热销专区 
			</text>
	<!-- 		<text  style="margin-top:10px;" class="colorful01">TOP.01</text>					
			<text class="fr-jutext">全部</text> -->
		</view>
		
		<view style="display: flex;padding: 4px 10px 8px 10px" >
			
			<view style=" padding:10px 5px 0 0;width:48%;height:90px;background:rgba(248,248,250,1);border-radius:6px;display: flex" @tap="toNavList(5,'嗨抢购')">
				<view>
					<image src="../../static/img/icon_showtag.png" style="position: relative;
left: 0px;
top: 0px;
height: 25px;
width: 70px;
"></image>
					
					<view style="color: #666666;font-size: 14px;margin:0px 0 0 8px;font-weight: bold;">
						代理记账
					</view>
					<view style="font-size:12px;color:#fcaa2c;font-weight: 400;margin:5px 0 0 8px">低至1000元/年</view>
				</view>
				<image src="../../static/img/business_icon_111.png" style="position:relative;left: 30px;top:30px; height: 38px;width: 38px;"></image>
			</view>
			<view style="padding:10px 5px 0 0;width:48%;height:90px;background:rgba(248,248,250,1);border-radius:6px;margin-left: 16px;display: flex"
			 @tap="toNavList(3,'30元封顶')">
				<view>
					<view style="color: #666666;font-size: 14px;margin:10px 0 0 8px;font-weight: bold;">
						办理经营许可证
					</view>
					<view style="font-size:12px;color:#999999;font-weight: 400;margin:5px 0 0 8px">免费邮寄到家（部分地区）</view>
				</view>
				<image src="../../static/img/business_icon_112.png" style="position: relative;
top: 40px;
right: 10px;
border-radius: 8px;
height: 38px;
width: 38px;
"></image>
			</view>
		</view>
		

		<!-- 巅峰榜 -->
		<view class="home_ant_juhuasuan has-bg-white"  style="margin: 8px 8px 8px 8px;border-radius: 10px">
			
			<view class="s-row juhuasuan-list">
				<view class="dianfengbang2" >
					<view class="  block shadow_pure " style="">
						<view class="name" style="">
							<view class="text1" style="">开办公司</view>
							<view class="text2" style="">快速拿执照</view>
						</view>
						<view class="imgbox" style="">
						<image src="../../static/img/business_icon_121.png" class="img" style=""></image>
						</view>
					</view>
				</view>
				<view class="dianfengbang2" >
					<view class="  block shadow_pure " style="">
						<view class="name" style="">
							<view class="text1" style="">条形码办理</view>
							<view class="text2" style="">不成功退全数</view>
						</view>
						<view class="imgbox" style="">
						<image src="../../static/img/business_icon_122.png" class="img" style=""></image>
						</view>
					</view>
				</view>
				<view class="dianfengbang2" >
					<view class="  block shadow_pure " style="">
						<view class="name" style="">
							<view class="text1" style="">税收筹划</view>
							<view class="text2" style="">综合税负低至0.5%-2.1%</view>
						</view>
						<view class="imgbox" style="">
						<image src="../../static/img/business_icon_123.png" class="img" style=""></image>
						</view>
					</view>
				</view>
				<view class="dianfengbang2" >
					<view class="  block shadow_pure " style="">
						<view class="name" style="">
							<view class="text1" style="">合同拟审</view>
							<view class="text2" style="">修改到满意位置</view>
						</view>
						<view class="imgbox" style="">
						<image src="../../static/img/business_icon_124.png" class="img" style=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view style="display: flex;padding: 4px 10px 8px 10px">
				<text style="float: left;margin-top:10px;color: transparent;font-size: 15px;font-weight: bold;color: #000000; height: 16px">
					实用工具 
				</text>
			</view>
			
			
		<view class="rowflow" style="">
					<view  class="item5" >
						<image class="img" src="../../static/img/business_icon_131.png" ></image>
						<text class="title" >公司核名</text>	
					</view>
					<view  class="item5" >
						<image class="img" src="../../static/img/business_icon_132.png" ></image>
						<text class="title" >资质报价查询</text>	
					</view>
					<view  class="item5" >
						<image class="img" src="../../static/img/business_icon_133.png" ></image>
						<text class="title" >个税计算器</text>	
					</view>
					<view  class="item5" >
						<image class="img" src="../../static/img/business_icon_134.png" ></image>
						<text class="title" >企业风险测算</text>	
					</view>
					<view  class="item5" >
							<image class="img" src="../../static/img/business_icon_135.png" ></image>
						<text class="title" >领免费福利</text>	
					</view>
					<view  class="item5" >
						<image class="img" src="../../static/img/business_icon_136.png" ></image>
						<text class="title" >节税计算器</text>	
					</view>
					<view  class="item5" >
							<image class="img" src="../../static/img/business_icon_137.png" ></image>
						<text class="title" >商标成功率</text>	
					</view>
					<view  class="item5" >
						<image class="img" src="../../static/img/business_icon_135.png" ></image>
						<text class="title" >法律咨询</text>	
					</view>
					<view  class="item5" >
							<image class="img" src="../../static/img/business_icon_139.png" ></image>
						<text class="title" >发票查验</text>	
					</view>
					<view  class="item5"  style="">
						<image class="img" src="../../static/img/business_icon_140.png" ></image>
						<text class="title" >免费电子合同</text>	
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
		<simpleModal style="display: block;" ref="simpleModalTkl" @maskClose="TklmaskClose">
			<view class="buy-box-title">选择您的身份</view>
			<view class="buy-box-center">
				<view class="code-cent" style="padding: 30px 80px 40px 80px">
					<view style="margin-bottom: 16px;" @tap="choseGender(1)">
						<image src="../../static/img/home/icon_publish01.png" style="width: 50px;height: 50px"></image>
						<view style="color: #0e80d2">发需求</view>
					</view>
					<view @tap="choseGender(2)">
						<image src="../../static/img/home/icon_publish02.png" style="width: 50px;height: 50px"></image>
						<view style="color: pink">发服务</view>
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
	
	.rowflow{
		   display: block;
		   
		}
	.hottag .tag_active{
		display:inline-block;margin-left:15upx;
		color: #fcaa2c;
	   border: 1px solid #fcaa2c;
	    padding: 1px 4px;
	   margin: 5px;
	   border-radius: 20px;
	   font-size: 12px;
	}
	.hottag .tag{
		display:inline-block;margin-left:15upx;
	color: #666;
	   padding: 1px 4px 1px 20px;
	  margin: 5px 0;
	   font-size: 12px;
	}
	.item5 {justify-content: center;align-self: center;align-content: center;}
	.item5 .title{font-size: 12px;color:#666666;justify-content: center;align-self: center;align-content: center;}

	.rowflow .item5  .img{
		width: 60upx;
		height:60upx;
		justify-content: center;align-self: center;align-content: center;
	}
	.item5{width: 150upx;display: flex;flex-direction: column;justify-content: center;align-content: center;}
	.rowflow{display: flex;flex-direction: row;justify-content: center;align-content: center;}
	
	.dianfengbang2{width: 25%;
	display: -webkit-inline-box;
	display: -webkit-inline-flex;
	display: inline-flex;
	
	}
	.dianfengbang2  .block{padding: 10px 4px 0 10px;width: 165rpx;
	height: 98px;
	border-radius: 15rpx;
	padding: 13rpx;
	position: relative;
	}
	.dianfengbang2  .name{text-align: left;height: 48px;
}
	.dianfengbang2   .text1{display: block;color:#333333;font-size:14px;}
	.dianfengbang2   .text2{display: block;color:#999999;font-size:11px;}
	.dianfengbang2  .imgbox{text-align: right;}
	.dianfengbang2  .imgbox .img{position: relative;right:2px;bottom: 8px;border-radius: 8px;
	height: 38px;
	width: 38px;
	margin-top: 10px;
	margin-left: 20px;
	}
	
	.shadow_pure{
	-webkit-box-shadow: inset 0 0 10px #ccc;
	box-shadow: inset 0 0 10px #ccc;

	}
/* 	.item5 .img{width:100upx;height:100upx;} */

	


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
