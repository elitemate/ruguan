<template>

	<view style="background: white;padding:16px;border-bottom: 1px solid #F6F6F6">
		<!--头部标题介绍-->
		<view style="display: flex;flex-direction: row;">
			<view>
				<image class="headImage" src="../../static/img/avatar.png"></image>
			</view>
			<view class="box-name" style="display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;align-content: flex-start;">
				<view >
					<text  class="colorful00" style="float: right;margin-left:5upx;">商</text>
					<text class="name" >
						珊瑚文化
					</text>
					
				</view>
				<view  style="color:#666;">回复<text class="message_yellow">二郎神影视</text>今日世界都在读书，4月23日-世界读书日，弘扬尊重知识，崇尚文明的阅读理念</view>
			    <view  style="color:#666;font-size:12px;" > 04月23日 18:03</view>
			</view>
		<view>
			<image class="commentImage" src="../../static/img/message/image_comment_01.png"></image>
		</view>
		</view>

	</view>


</template>

<script>
	export default {
		name: "orange-comment",
		props: [
			"total",
			"to",
			"content",
			"images",
			"copy_content",
			"showTime",
		],
		methods: {
			openGoods() {
				let relation_id = this.$queue.getData("relation_id");
				if (relation_id) {
					uni.navigateTo({
						url: "/pages/detail/goodsinfo?itemid=" + this.to + "&relation_id=" + relation_id,
					})
				} else {
					uni.navigateTo({
						url: "/pages/detail/goodsinfo?itemid=" + this.to,
					})
				}
			},
			/**
			 * 复制链接
			 */
			copyHref() {
				let relation_id = this.$queue.getData("relation_id");
				if (relation_id) {
					uni.setClipboardData({
						data: this.copy_content + "\n领券链接\n" + this.$queue.publicYuMing() + "/pages/detail/goodsinfo?itemid=" + this.to +
							"&relation_id=" + relation_id,
						success: (r => {
							this.$queue.showToast("素材复制成功，长按下方图片保存图片素材")
						}),
					})
				} else {
					uni.setClipboardData({
						data: this.copy_content + "\n领券链接\n" + this.$queue.publicYuMing() + "/pages/detail/goodsinfo?itemid=" + this.to,
						success: (r => {
							this.$queue.showToast("素材复制成功，长按下方图片保存图片素材")
						}),
					})
				}
			},
			/**
			 * 保存图片
			 * @param url
			 */
			toSave(url) {
				//#ifndef H5
				uni.getImageInfo({
					src: url,
					success: function(image) {
						console.log('图片信息：', JSON.stringify(image));
						uni.saveImageToPhotosAlbum({
							filePath: image.path,
							success: function() {
								console.log('save success');
								uni.showToast({
									title: '图片保存成功',
									icon: 'none',
									duration: 3000
								});
							}
						});
					}
				});

				//#endif
			},
		},
		filters: {
			formatDate: function(value) {
				value = parseInt(value + "000");
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m;
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s;
				return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
			}
		}
	}
</script>

<style scoped>
	.bottom_options{text-align: right;margin-top: 16px;margin-right: 16px}
	.icon_common{width: 30upx;height:30upx;}
	.icon_fix{margin-left:30upx;top: -2px;}
	.headImage {
		margin-right: 8px;
		height: 80upx;
		width: 80upx;
		border-radius: 8upx;
	}
	.commentImage {
		margin-right: 8px;
		height: 120upx;
		width: 120upx;
		border-radius: 5upx;
	}

	.name {
		font-size: 15px;
		color: #333333;
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
</style>
