<template>
    <view class="s-page-wrapper">
        <view class="search-pop" style="padding-top: 120rpx;">
            <view class="main-title">
                <view class="search-tab">
                    <view class="search">
                        <input
                                type="text"
                                :value="keywords"
                                @confirm="submitSearch"
                                :placeholder="placeholder"
                                class="search_area"
                                @input="searchInput"
                        />
                        <view class="search_submit" @tap="submitSearch">搜 索</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="search-cat">
            <view v-if="recentKeyword.length>0">
                <view class="search-cat-tit" @tap="deleteKeyword">
                    <text class="up-menu" style="font-size: 16px" @tap="deleteKeyword">搜索历史
                        <text style="font-size: 14px;margin-left: 70%" @tap="deleteKeyword">清空</text>
                    </text>
                </view>
                <view class="src-content">
                    <view class="main-src">
                        <view
                                class="src-item "
                                v-for="(key, index) in recentKeyword"
                                @click="addKeyword(key.keyword)"
                        >
                            {{ key.keyword }}
                        </view>
                    </view>
                </view>
            </view>

        </view>

        <view class="search-cat">
            <view class="search-cat-tit" v-if="keywordlist.length>0">
                <text class="up-menu" style="font-size: 16px">最近搜索</text>
            </view>
            <view class="src-content">
                <view class="main-src">
                    <view
                            class="src-item "
                            v-for="(key, index) in keywordlist"
                            :key="index"
                            @click="addKeywords(index)"
                    >
                        {{ key.keyword }}
                    </view>
                </view>
            </view>
        </view>
		<view class="search-cat2">
		    <view class="search-cat-tit" v-if="keywordlist.length>0">
		        <text class="up-menu" style="font-size: 16px">推荐搜索</text>
		    </view>
		    <view class="src-content">
		        <view class="main-src">
		            <view class="item" style="">
		               <image class="img"  style="" src="../../static/img/home/icon_yanxuan12.png"> </image>
		               <text class="text"  style="">公司注册</text>
					</view>
					<view class="item" style="">
					   <image class="img"  style="" src="../../static/img/home/icon_yanxuan12.png"> </image>
					   <text class="text"  style="">商标补贴</text>
					</view>
					<view class="item" style="">
					   <image class="img"  style="" src="../../static/img/home/icon_yanxuan12.png"> </image>
					   <text class="text"  style="">资金扶持</text>
					</view>
		        </view>
		    </view>
		</view>
		<view class="search-cat3">
		    <view class="search-cat-tit" v-if="keywordlist.length>0">
		        <text class="up-menu" style="font-size: 16px">热门搜索</text>
		    </view>
		    <view class="src-content">
		        <view class="main-src">
		            <view class="item">
		               <image  class="img" src="../../static/img/home/icon_search01.png"> </image>
		               <text class="text1" style="">公司注册</text>
					   <text class="text2" style="">5648422</text>
					</view>
					<view class="item">
					   <image  class="img" src="../../static/img/home/icon_search02.png"> </image>
					   <text class="text1" style="">资金扶持项目</text>
					   <text class="text2" style="">564842</text>
					</view>
					<view class="item">
					   <image  class="img" src="../../static/img/home/icon_search03.png"> </image>
					   <text class="text1" style="">品牌营销策划网站策略</text>
					   <text class="text2" style="">564842</text>
					</view>
					<view class="item">
					   <image  class="img" src="../../static/img/home/icon_search04.png"> </image>
					   <text class="text1" style="">抖音蓝</text>
					   <text class="text2" style="">5648</text>
					</view>
					<view class="item">
					   <image  class="img" src="../../static/img/home/icon_search05.png"> </image>
					   <text class="text1" style="">品牌股市撰写</text>
					   <text class="text2" style="">563</text>
					</view>
					<view class="item">
					   <image  class="img" src="../../static/img/home/icon_search06.png"> </image>
					   <text class="text1" style="">微信工号代运营</text>
					   <text class="text2" style="">56</text>
					</view>
	
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
                placeholder: '输入关键字或粘贴宝贝标题',
                keywords: '',
                keywordlist: [],
                recentKeyword: [],
                localKeyword: 'orange-tyh-keyword',
                current: 0
            };
        },
        onShow() {
            this.recentKeyword = this.$queue.get(this.localKeyword);
        },
        onLoad() {
            this.$Request.get("/hot_key/apikey/maxd").then(res => {
                if (res.code === 1) {
                    this.keywordlist = [];
                    for (let i = 0; i < res.data.length; i++) {
                        this.keywordlist.push(res.data[i]);
                        if (i === 18) {
                            break;
                        }
                    }
                } else {
                    this.loadingType = 2;
                }
            });
            let userId = this.$queue.getData("userId");
            if (!userId) {
                this.$Request.getT("/user/" + userId).then(res => {
                    if (res.status === 0) {
                        this.$queue.setData("openid", res.data.openId);
                        this.$queue.setData("image_url", res.data.image_url);
                        this.$queue.setData("mobile", res.data.phone);
                        this.$queue.setData("nickName", res.data.nickName);
                        this.$queue.setData("relation_id", res.data.relationId);
                        this.$queue.setData("gender", parseInt(res.data.gender));
                    }
                });
            }
        },
        methods: {
            clearInput() {
                this.keywords = '';
            },
            navigateBack: function () {
                uni.navigateBack();
            },
            searchInput: function (e) {
                this.keywords = e.detail.value;
            },
            deleteKeyword() { //清空最近搜索的关键词
                this.recentKeyword = [];
                this.$queue.remove(this.localKeyword);
            },

            submitSearch: function () {
               if (this.$queue.getSearchKeys(this.keywords)) {
                   uni.showToast({
                       title: "输入内容带有非法关键字请重新输入",
                       mask: false,
                       duration: 1500,
                       icon: "none"
                   });
                   this.keywords = '';
               } else {
                   this.$queue.insert({
                       key: this.localKeyword,
                       value: {
                           keyword: this.keywords
                       },
                       capacityNum: 20, //队列容量
                   });
                   uni.navigateTo({
                       url: '/pages/search/search?keywords=' + this.keywords
                   });
               }
            },
            swiperChange: function (e) {
                this.current = e.detail.current;
            },
            switchTab: function (current) {
                this.current = current;
            },
            addKeywords(current) {
                this.keywords = this.keywordlist[current].keyword;
                // //#ifdef APP-PLUS
                // plus.key.hideKeyboard();
                // //#endif
                uni.navigateTo({
                    url: '/pages/search/search?keywords=' + this.keywords
                });
            },
            addKeyword(keywords) {
                this.keywords = keywords;
                uni.navigateTo({
                    url: '/pages/search/search?keywords=' + this.keywords
                });
            }
        }
    };
</script>

<style>
    .swiper {
        height: 100%;
    }

    .help-tips {
        font-size: 13px;
        color: #999;
        line-height: 26px;
        padding: 0 0 0 30px;
        margin: 0;
        width: 80%;
        text-align: left;
    }

    .help-tips.color999 {
        color: #999999;
    }

    .search-default {
        text-align: center;
        height: 150px;
        margin: auto;
    }

    .search-default image {
        display: block;
        margin: auto;
        width: 80%;
    }

    .search-cat {
 /*       position: fixed;
        top: 0;
        bottom: 0; */
      /*  padding-top: 60px; */
        width: 100%;
        height: 100%;
        padding-bottom: 20px;
      
    }

    .search-cat .search-cat-tit {
     /*   position: relative; */
        height: 10px;
        margin: 6px  20px;
    }

    .search-cat .search-cat-tit .up-menu {
        display: block;
        height: 20px;
        line-height: 20px;
        font-size: 0.9em;
        color: #333;
    }

    .src-content {
       margin: 5px 0 30px 15px;
        width: 97%;
    }

    .main-src .src-item {
        float: left;
        border-radius: 2px;
        padding: 0 10px;
        height: 23px;
        line-height: 23px;
        background-color: #EEEEEE;
        margin: 10px 5px 0 0;
        position: relative;
        font-size: 13x;
        color: #333;
		font-weight: 300;
    }

    .main-title {
        height: 60px;
    }

    .main-title {
        border-bottom-color: transparent;
        padding: 10px 20px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 120;
        display: block;
        box-sizing: border-box;
    }

    .clear {
        color: crimson;
        width: 23px;
        height: 22px;
        position: relative;
        z-index: 100;
        background: white;
    }

    .clears {
        float: right;
        color: crimson;
        margin-left: 8px;
        z-index: 100;
    }

    .uni-input-input, .uni-input-placeholder {
        width: 93%;
    }

    .search-pop .search-tab {
/* padding-top:60rpx; */
        margin: 5px 0 10px;
        color: #fff;
        font-size: 15px;
        text-align: center;
        /* #ifdef APP-PLUS */
        padding-top: var(--status-bar-height);
        /* #endif */
    }

    .search-pop .search-tab .my-sub-src {
        margin: 0 auto 0 20px;
        display: inline-block;
        color: #fff;
        line-height: 30px;
        margin-bottom: 10px !important;
    }

    .search-pop .search-tab .my-sub-src:nth-child(1) {
        margin-left: 0px !important;
    }

    .main-title .search-tab .cur {
        opacity: 1;
        border-bottom: 1px solid #fff;
    }

    .main-title .search-tab .close-src {
        position: absolute;
        left: 20px;
        display: block;
        float: left;
        color: #ffffff;
        margin-top: 15px;
    }

    .main-title .search-tab .close-src .iconfont {
        font-size: 20px;
    }

    .main-title .search {
        background-color: #eee;
		color: #999;
        border-radius: 20px;
        width: 88%;
      
        position: relative;
        padding: 0 9px;
        height: 32px;
        line-height: 32px;
        font-size: 13px;
        margin-top: 10px;
    }

    .uni-input-wrapper {
        width: 87% !important;
    }

    .search_submit {
        width: 100upx;
        height: 32px;
        color: #ffb925;
        right:-100upx;
        position: absolute;
		top:0upx;
        border-radius: 15px;
	    font-size:16px;
        z-index: 30;
    }

    .main-title .search input {
        border: none;
        outline: 0;
        height: 64upx;
        font-size: 13px;
        line-height: 30px;
        background: #fff;
        color: #666;
        border-radius: 5px;
        padding: 0 0 0 5px;
        text-align: left;
    }

    .main-title .search input.search_area {
        background-color: transparent;
        position: relative;
        z-index: 99;
        width: 80%;
        color: #333;
        font-size: 12px;
    }
	
	.search-cat2 {
	 /*   position: fixed;
	    top: 0;
	    bottom: 0;
	    padding-top: 150px; */
	    width: 100%;
	    height: 100%;
	  /*  padding-bottom: 11px; */
	}
	.search-cat2  .item{
	   background: #ffecce;display: inline-block;line-height: 28px;padding:0px 6px;border-radius: 3px;margin:0 5px 0 0
	   
	}
	.search-cat2  .item .img{
	  display: inline-block;height:14px;width:14px;
	}
	.search-cat2  .item .text{
	   display: inline-block;height: 16px;width:66px;color:#ff8706;margin-left:3px;font-size:13px;
	}

	.search-cat2 .search-cat-tit {
	    position: relative;
	    height: 10px;
	    margin: 15px  0 18px 20px;
	}
	
	.search-cat2 .search-cat-tit .up-menu {
	    display: block;
	    height: 20px;
	    line-height: 20px;
	    font-size: 0.9em;
	    color: #333;
	}
	.search-cat3 {
	  /*  position: fixed;
	    top: 0;
	    bottom: 0; */
	   /* padding-top: 220px; */
	    width: 100%;
	    height: 100%;
	    padding-bottom: 11px;
	  
	}
	
	.search-cat3 .search-cat-tit {
	    position: relative;
	    height: 10px;
	    margin: 15px  0 18px 20px;
	}
	
	.search-cat3 .search-cat-tit .up-menu {
	    display: block;
	    height: 20px;
	    line-height: 20px;
	    font-size: 0.9em;
	/*    color: #333; */
	}
	.search-cat3 .item{
		display:block;line-height: 28px;padding:0px 6px;border-radius: 3px;margin:0 5px 0 0;
	}
	.search-cat3 .item .img{
		display: inline-block;height:20px;width:14px;
	}
	.search-cat3 .item .text1{
		display: inline-block;height: 16px;color:#666666;margin-left:3px;font-size:14px;font-weight:300;
	}
	.search-cat3 .item .text2{
		display: inline-block;height: 16px;color:#999999;margin-left:3px;font-size:11px;font-weight:300;
	}

</style>
