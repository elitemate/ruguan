<template>
    <view class="productlist">
        <view @click="open(itemid)" class="itemInfo1">
			<view class="spacecol1"></view>
            <view class="left">
				<view class="imgwrap"> <image :src="itempic" class="img"></image></view> 
            </view>
            <view class="spacecol2"></view>
			<view class="right">
                <view class="line1">
					<view class="spaceline"> </view>
                    <view class="twolist-hidden"> {{ itemtitle }} </view>
                </view>
				 <view class="line2">
					<view  class="pricebox">
						<view class="price1">{{ itemprice }}<text class="price2">/套</text></view>
						<view class="rankinfo">{{ itemsale}}
						</view>
					</view>
					<view class="clickbox"><view class="clicktext">免费咨询</view></view>
				</view>
			</view>
            <view class="spacecol1"></view>
		</view>
    </view>
</template>

<script>
    export default {
        name: "orange-goods-card",
        props: [
            "itempic", "itemtitle", "itemprice", "itemsale", "itemendprice", "couponmoney", "itemid", "logo", "index", "tkmoney"
        ],
        methods: {
            open(itemid) {
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
        }
    }
</script>

<style>
.productlist{
	display: flex;
	flex-direction: column;
}

.itemInfo1 {
        display: flex;
		flex-direction: row;
		justify-content: space-around;
	    background:#ffffff;
		height: 200upx;
		
    }
.itemInfo1 .spacecol1{	
	width:18upx;
	height: 200upx;
}
.itemInfo1 .spacecol2{	
	border-bottom:1px solid #eeeeee;
	width:18upx;
	height: 200upx;
	display: flex;
}
.itemInfo1 .left{
	border-bottom:1px solid #eeeeee;
	width:148upx;
	height: 200upx;
	justify-content: flex-start;
	display: flex;
	align-items: center;
	
    
}


.itemInfo1 .right{
	border-bottom:1px solid #eeeeee;
	width:548upx;
	height: 200upx;
	justify-content: flex-start;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-content:flex-start ;
}


.itemInfo1 .left .imgwrap{

	display: flex;
	
	height: 200upx;
}




.itemInfo1 .left .img{
	border-radius: 8upx;
	width:148upx;
	height: 148upx;
	align-self:center;
}

.itemInfo1 .line1{
	height: 100upx;
}


.itemInfo1 .line1 .spaceline{height: 22upx;}
.itemInfo1 .line2{
	height: 60upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.itemInfo1 .line2 .pricebox{
	width:400upx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.itemInfo1 .line2 .pricebox .price1{
	font-size:14px;
	color:#e10a07;
	width:400upx;
	display: flex;
	justify-content:flex-start;
}
.itemInfo1 .line2 .pricebox .price2{
	font-size:13px;
	position: relative;
	top:-1px;
		color:#e10a07;
}
.itemInfo1 .line2 .pricebox .rankinfo{
	height: 30rpx;
	color: #999999;
	font-size:12px;
	width:400upx;
	display: flex;
	justify-content:flex-start;
}
.itemInfo1 .line2 .clickbox{
	width:148upx;
	display: flex;
	justify-content: center;
	align-self:center;
}
.itemInfo1 .line2 .clickbox .clicktext{
	width: 140upx;
	height:38upx;
	line-height: 38upx;
	border-radius: 8upx;
	color: #ffffff;
	font-size:12px;
	background-color: #FCAA2C;
	display: flex;
	justify-content: center;
	align-self:center;
	align-content: center;
	
}
   
</style>
