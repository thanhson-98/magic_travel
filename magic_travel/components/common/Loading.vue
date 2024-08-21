<template>
	<div class="loading-box">
		<div class="icon-loading">
			<img :src="loadingIcon" alt="Loading Icon" />
		</div>
	</div>
</template>

<script setup>
import loadingIcon from '@/public/img/icons/loading.svg';
</script>

<style lang="scss" scoped>
.loading-box {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.3);
    z-index: 9999;
	.icon-loading {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			width: 40px;
			height: 40px;
		}
	}
}
</style>
