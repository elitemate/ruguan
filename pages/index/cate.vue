<template style="background: white">
    <view class="index-goods" >
    	<view class="goods_filter active" >
    		<view class="cent">
    			
    			<view class="titleLine">
    				<text class="title" style="">最近使用</text>
					<text class="more" style="" ></text>
    			</view>
    			<view class="itemwrap" >
    				<text class="item_active" >品牌设计</text>
    				<text class="item_active" >营销推广</text>
    				<text class="item_active" >IT/软件</text>
    				
    			</view>
    			<view class="titleLine">
    				<text class="title" style="">品牌设计</text>
    				<text class="more" style="" ></text>
    			</view>
    			<view class="itemwrap" >
    				<text class="item" >LOGO设计</text>
    				<text class="item" >包装设计</text>
    				<text class="item" >VI设计</text>
					<text class="item" >宣传册设计</text>
					<text class="item" >网页设计</text>
					<text class="item" >企业网站</text>
					<text class="item" >商业策划</text>
					<text class="item" >名片设计</text>
    			</view>
    			<view class="titleLine">
    				<text class="title" style="">营销推广</text>
    				<text class="more" style="" ></text>
    			</view>
    			<view class="itemwrap" >
    				<text class="item" >抖音短视频</text>
    				<text class="item" >微信代运营</text>
    				<text class="item" >创意策划</text>
    				<text class="item" >整合营销</text>
    				<text class="item" >网站代运营</text>
    				<text class="item" >文案营销</text>
    				<text class="item" >营销全案</text>
    				<text class="item" >营销工具</text>
    				<text class="item" >网站SEO</text>
    				<text class="item" >配套服务</text>
    				
    			</view>
				<view class="titleLine">
					<text class="title" style="">IT/软件</text>
					<text class="more" style="" ></text>
				</view>
				<view class="itemwrap" >
					<text class="item" >APP开发</text>
					<text class="item" >网站建设</text>
					<text class="item" >微信开发</text>
					<text class="item" >小程序开发</text>
					<text class="item" >二次开发</text>
					<text class="item" >网站维护</text>
					<text class="item" >公众号开发</text>
					<text class="item" >H5定制</text>
					
				</view>
				<view class="titleLine">
					<text class="title" style="">知识产权</text>
					<text class="more" style="" ></text>
				</view>
				<view class="itemwrap" >
					<text class="item" >商标免费查询</text>
					<text class="item" >专利免费查询</text>
					<text class="item" >版权免费查询</text>
					<text class="item" >商标成功率</text>
					<text class="item" >商标担保注册</text>
					<text class="item" >商标转让</text>
					<text class="item" >版权登记</text>
					<text class="item" >专利购买</text>
					
				</view>
				<view class="titleLine">
					<text class="title" style="">工商财税</text>
					<text class="more" style="" ></text>
				</view>
				<view class="itemwrap" >
					<text class="item" >免费核名</text>
					<text class="item" >注册公司</text>
					<text class="item" >代理记账</text>
					<text class="item" >资质办理</text>
					<text class="item" >法律咨询</text>
					<text class="item" >税收筹划</text>
					<text class="item" >公司营业执照</text>
					<text class="item" >工商代帐</text>
					<text class="item" >资质办理查询</text>
					<text class="item" >节省所得税</text>
					
				</view>
    		
    		  
    	</view>
        </view>
    </view>
</template>

<script>
    export default {
        onShareAppMessage(res) {
            return {
                title: '购物先领券，一年省一半',
                path: '/pages/index/index'
            }
        },

        data() {
            return {
                logo: "../../static/img/mao.png",
                tab: [
                    {name: '热销', position: 4, total: 0, data: []},
                    {name: '最新', position: 0, total: 0, data: []},
                    {name: '超低价', position: 1, total: 0, data: []},
                    {name: '大额券', position: 3, total: 0, data: []},
                ],
                category: [
                    '全部',
                    '女装',
                    '男装',
                    '内衣',
                    '美妆',
                    '配饰',
                
                ],
                TabCur: 0,
                TabCurs: 0,
                scrollLeft: 0,
                scrollLefts: 0,
                couponlist: [],
                page: 1,
                min_id: 1,
                cid: 0,
                type: 1,
                sort: 4,
                genderKey: "gender",
                loadingType: 0,
                scrollTop: false,
                contentText: {
                    contentdown: "上拉显示更多",
                    contentrefresh: "正在加载...",
                    contentnomore: "没有更多数据了"
                }
            }
        },
        onLoad: function (e) {
           
        },
        onPageScroll: function (e) {
            this.scrollTop = e.scrollTop > 200;
        },
        methods: {
            searchSelect(e) {
                
                this.loadCouponList("Refresh");
            },
            tabSelect(e) {
               
                this.loadCouponList("Refresh");
            },
            topScrollTap: function () {
                uni.pageScrollTo({
                    scrollTop: 0,
                    duration: 300
                });
            },

            loadCouponList: function (type) {
                this.loadingType = 1;
                this.$Request.get('/column/apikey/maxd/type/' + this.type + '/back/20/sort/' + this.sort + '/min_id/' + this.min_id + '/cid/' + this.cid).then(res => {
                    this.loadingType = 0;
                    if (res.code === 1) {
                        if (this.page === 1) {
                            this.couponlist = [];
                        }
                        this.min_id = res.min_id;
                        res.data.forEach(d => {
                            d.tkmoney = (d.tkmoney / 2).toFixed(2);
                            d.itemsale = d.itemsale > 10000 ? (d.itemsale / 10000).toFixed(1) + "万" : d.itemsale;
                            this.couponlist.push(d);
                        })

                    } else {
                        this.loadingType = 2;
                    }
                    uni.hideLoading();
                    if (type === "Refresh") {
                        uni.stopPullDownRefresh(); // 停止刷新
                    }
                })
            },
            toGoodsInfo: function (itemid) {
                let relation_id = this.$queue.getData("relation_id");
                if (relation_id) {
                    uni.navigateTo({
                        url: "/pages/detail/goodsinfo?itemid=" + itemid + "&relation_id=" + relation_id,
                    })
                } else {
                    uni.navigateTo({
                        url: "/pages/detail/goodsinfo?itemid=" + itemid,
                    })
                }
            },
        },

        onReady: function () {
            this.loadCouponList();
        },
        onReachBottom: function () {
            this.page = this.page + 1;
            this.loadCouponList();
        },
        onPullDownRefresh: function () {
            this.page = 1;
            this.min_id = 1;
            this.loadCouponList("Refresh");
        }
    }
</script>

<style>
    @import "../../static/css/index.css";
</style>
