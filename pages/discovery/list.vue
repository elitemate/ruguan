<template>

    <view class="index-content" style="background: white">
        <view class="toptab_item_wrap">
            <view class="toptab_item" style="" :class="index==TabCur?'reeew':''" v-for="(item,index) in category"
                  @tap="tabSelect" :data-id="index">
                <view class="tab_title" :style="index==TabCur?'color: #ff9d06;':'color: #666666;'">
                    {{item.name}}
                </view>
				<view class="tab_decarate" :style="index==TabCur?'background: #ff9d06;':''">
				   
				</view>
            </view>
       </view>

        <view class="index-coupon has-bg-white has-pd-10">
            <view class="goods-list" v-if="handpick.length > 0&&showHandPick" >
                <orange-handpick
                        v-for="(h,index) in handpick"
                        :copy_content="h.copy_content"
                        :total="h.dummy_click_statistics"
                        :content="h.copy_content"
                        :images="h.itempic"
                        :showTime="h.show_time"
                        :to="h.itemid"
                ></orange-handpick>
            </view>
        </view>
        <view class="index-coupon has-bg-white has-pd-10 top_30">
            <view class="goods-list" v-if="news.length > 0&&showNews" >
                <orange-news
                        v-for="(h,index) in news"
                        :total="h.share_times"
                        :copy_text="h.copy_text"
                        :content="h.copy_text"
                        :showTime="h.activity_start_time"
                        :goods="h.goods"
                ></orange-news>
            </view>
        </view>
       <!-- <view class="scroll_top" @tap="topScrollTap" v-bind:class="[scrollTop ? 'active' : '','']"
              style="bottom: 56px;">
            <text class="iconfont icon-shangla"></text>
        </view> -->
        <!-- 加载更多提示 -->
        <view class="s-col is-col-24" v-if="handpick.length > 0||news.length>0">
            <load-more :loadingType="loadingType" :contentText="contentText"></load-more>
        </view>
    </view>

</template>

<script>
    import discover from '../../common/discover.js';

    export default {
        name: "Card",
        data() {
            return {
                contentText: {
                    contentdown: "上拉显示更多",
                    contentrefresh: "正在加载...",
                    contentnomore: "没有更多数据了"
                },
                loadingType: 0,
                scrollTop: false,
                TabCur: 0,
                showNews: false,
                showHandPick: true,
                scrollLeft: 0,
                res: discover,
                handpick: [],
                handpickLoad: {
                    loading: false,
                    finished: false,
                    total: 1,
                },
                category: [
                    {name: '关注', position: 1, total: 0, data: []},
                    {name: '推荐', position: 2, total: 0, data: []},
					{name: '最新', position: 3, total: 0, data: []},
					{name: '品牌设计', position: 4, total: 0, data: []},
					{name: '知识产权', position: 5, total: 0, data: []},
					{name: '知识', position: 6, total: 0, data: []},
                ],
                news: [],
                newsLoad: {
                    loading: false,
                    finished: false,
                    total: 1,
                },
                min_id: 1,
                min_id1: 1,
            }
        },
        onLoad: function (e) {
            uni.showLoading({
                title: '加载中...'
            });
            this.getHandpick(1);

            //this.getBian(1)
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
        methods: {
            tabSelect(e) {
                uni.hideLoading();
                uni.pageScrollTo({
                    scrollTop: 0,
                    duration: 500
                });
                this.TabCur = e.currentTarget.dataset.id;
                this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
                if (e.currentTarget.dataset.id == 0) {
                    if (this.handpick.length == 0) {
                        uni.showLoading({
                            title: '加载中...'
                        });
                        this.getHandpick(1);
                    } else {
                        this.showNews = false;
                        this.showHandPick = true;
                    }
                } else {
                    if (this.news.length == 0) {
                        uni.showLoading({
                            title: '加载中...'
                        });
                        this.getNews(1);
                    } else {
                        this.showNews = true;
                        this.showHandPick = false;
                    }
                }
            },
            topScrollTap: function () {
                uni.pageScrollTo({
                    scrollTop: 0,
                    duration: 300
                });
            },
            handpickOnLoad() {
                this.getHandpick(this.handpickLoad.total += 1);
            },
            getHandpick(page) { //获取精选商品数据
                this.showNews = false;
                this.showHandPick = true;
                this.loadingType = 1;
                this.$Request.get('/selected_item/apikey/maxd/min_id/' + this.min_id).then(res => {
                    this.loadingType = 0;
                    if (res.code === 1) {
                        if (page === 1) {
                            this.handpick = [];
                        }
                        this.min_id = res.min_id;
                        for (let i = 0; i < res.data.length; i++) {
                            res.data[i].show_content = res.data[i].show_content
                                .replace(/&lt;/g, "<")
                                .replace(/&gt;/g, ">")
                                .replace(/&amp;/g, "&")
                                .replace(/&quot;/g, '"')
                                .replace(/&apos;/g, "'");
                            res.data[i].copy_content = res.data[i].copy_content
                                .replace(/&lt;/g, "<")
                                .replace(/&gt;/g, ">")
                                .replace(/&amp;/g, "&")
                                .replace(/&quot;/g, '"')
                                .replace(/&apos;/g, "'");
                            res.data[i].copy_content = res.data[i].copy_content
                                .replace(/<br>/g, "\n");
                            this.handpick.push(res.data[i]);
                        }
                        this.handpickLoad.loading = false;
                    } else {
                        this.loadingType = 2;
                        this.handpickLoad.loading = false;
                        this.handpickLoad.finished = true;
                    }
                    uni.hideLoading();
                    uni.stopPullDownRefresh(); // 停止刷新
                })
            },

            getBian(page) { //获取精选商品数据
                this.loadingType = 1;
                this.$Request.get1('/excellent_editor/apikey/maxd/back/20/min_id/' + this.min_id1).then(res => {
                    this.loadingType = 0;
                    if (res.code === 1) {
                        if (page === 1) {
                            this.news = [];
                        }
                        this.min_id1 = res.min_id;
                        for (let i = 0; i < res.data.length; i++) {
                            res.data[i].copy_text = res.data[i].copy_text
                                .replace(/&lt;/g, "<")
                                .replace(/&gt;/g, ">")
                                .replace(/&amp;/g, "&")
                                .replace(/&quot;/g, '"')
                                .replace(/&apos;/g, "'");
                            this.news.push(res.data[i]);
                        }
                        this.newsLoad.loading = false;
                    } else {
                        this.loadingType = 2;
                        this.newsLoad.loading = false;
                        this.newsLoad.finished = true;
                    }
                    uni.hideLoading();
                    uni.stopPullDownRefresh(); // 停止刷新
                })
            },
            newsOnLoad() {
                this.getNews(this.newsLoad.total += 1);
            },
            getNews(page) { //获取好货专场数据
                this.loadingType = 1;
                this.showNews = true;
                this.showHandPick = false;
                this.$Request.get('/subject_hot/apikey/maxd/min_id/' + this.min_id1).then(res => {
                    this.loadingType = 0;
                    if (res.code === 1) {
                        if (page === 1) {
                            this.news = [];
                        }
                        this.min_id1 = res.min_id;
                        for (let i = 0; i < res.data.length; i++) {
                            res.data[i].goods = [];
                            let itemData = res.data[i].item_data;
                            for (let p = 0; p < itemData.length; p++) {
                                //有些商品出现无效情况，所以判断...
                                if (itemData[p].itemendprice !== undefined) {
                                    res.data[i].goods.push({
                                        image: itemData[p].itempic,
                                        price: '券后价' + itemData[p].itemendprice,
                                        to: itemData[p].itemid,
                                    });
                                }
                            }

                            res.data[i].show_text = res.data[i].show_text
                                .replace(/&lt;/g, "<")
                                .replace(/&gt;/g, ">")
                                .replace(/&amp;/g, "&")
                                .replace(/&quot;/g, '"')
                                .replace(/&apos;/g, "'");
                            res.data[i].copy_text = res.data[i].copy_text
                                .replace(/&lt;/g, "<")
                                .replace(/&gt;/g, ">")
                                .replace(/&amp;/g, "&")
                                .replace(/&quot;/g, '"')
                                .replace(/&apos;/g, "'");
                            res.data[i].copy_text = res.data[i].copy_text
                                .replace(/<br>/g, "\n");
                            this.news.push(res.data[i]);
                        }
                        this.newsLoad.loading = false;
                    } else {
                        this.loadingType = 2;
                        this.newsLoad.loading = false;
                        this.newsLoad.finished = true;
                    }
                    uni.stopPullDownRefresh(); // 停止刷新
                    uni.hideLoading();
                })
            },
        }
    }

</script>

<style>
	page{
		background: #FFFFFF;
	}
    @import "../../static/css/index.css";
</style>
