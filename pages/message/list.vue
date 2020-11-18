<template>

    <view class="index-content" style="background: #f4f5f6;margin-top:10upx;">
		
		<view class="message_item" style="">
			<view  class="avatar" style="">
				<image class="headImage" src="../../static/img/message/icon_message01.png"></image>
			</view>
			<view class="box-name title" style="">
					<text class="name" >
						交易通知
					</text>
			</view>
			<view class="more" style="">
				<image class="moreimg" src="../../static/img/goods/right_icon.png"></image>
			</view>
		</view>
		<view class="message_item" style="">
			<view  class="avatar" style="">
				<image class="headImage" src="../../static/img/message/icon_message02.png"></image>
			</view>
			<view class="box-name title" style="">
					<text class="name" >
						系统通知
					</text>
			</view>
			<view class="more" style="">
				<image class="moreimg" src="../../static/img/goods/right_icon.png"></image>
			</view>
		</view>
		<view class="message_item" style="">
			<view  class="avatar" style="">
				<image class="headImage" src="../../static/img/message/icon_message03.png"></image>
			</view>
			<view class="box-name title" style="">
					<text class="name" >
						推送通知
					</text>
			</view>
			<view class="more" style="">
				<image class="moreimg" src="../../static/img/goods/right_icon.png"></image>
			</view>
		</view>
		
		<view class="greybox" style="">
			
		</view>
		
		<view class="message_item" style="">
			<view  class="avatar" style="">
				<image class="headImage" src="../../static/img/message/icon_message04.png"></image>
			</view>
			<view class="box-name title" style="">
					<text class="name" >
						动态评论
					</text>
			</view>
			<view class="more" style="">
				<image class="moreimg" src="../../static/img/goods/right_icon.png"></image>
			</view>
		</view>
		<view class="message_item" style="">
			<view  class="avatar" style="">
				<image class="headImage" src="../../static/img/message/icon_message05.png"></image>
			</view>
			<view class="box-name title" style="">
					<text class="name" >
						点赞收藏
					</text>
			</view>
			<view class="more" style="">
				<image class="moreimg" src="../../static/img/goods/right_icon.png"></image>
			</view>
		</view>
		<view class="message_item" style="">
			<view  class="avatar" style="">
				<image class="headImage" src="../../static/img/message/icon_message06.png"></image>
			</view>
			<view class="box-name title" style="">
					<text class="name" >
						盟友
					</text>
			</view>
			<view class="more" style="">
				<image class="moreimg" src="../../static/img/goods/right_icon.png"></image>
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
	.moreimg{
		display: flex;
		width: 8px;
		height: 14px;
		justify-content: center;
		align-self: center;
		align-content: center;

		
	}


	.message_item{display: flex;flex-direction: row;padding:16upx 20upx;background: #ffffff;border-bottom:1px solid #eee;}
	.message_item .avatar{display: flex;justify-content: flex-start;}
	.message_item .title{display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;align-content: flex-start;}
	.message_item .more{display: flex;justify-content: flex-start; height: 80upx;line-height: 80up;justify-content:center;}
	.headImage {
		
		margin-right: 8px;
		height: 80upx;
		width: 80upx;
		border-radius: 80upx;
	}
	
	.name {
		color: #666666;
		height: 80upx;
		line-height: 80upx;
		display: block;
		font-size: 15px;
	
	}
	
	.total {
		font-size: 14px;
		color: #999999;
		padding-left: 16px;
	}
	
	.box-name {
		width: 100%;
		display: flex;
		align-items: center;
	}
	
	.box-click {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.content {
		font-size: 15px;
	}
	
	.box-float {
		float: left;
		padding-top: 5px;
		padding-left: 5px;
	}
	
	.image {
		height: 200upx;
		width: 200upx;
	}
	page{
		background: #f4f5f6;
	}
    @import "../../static/css/index.css";
</style>
