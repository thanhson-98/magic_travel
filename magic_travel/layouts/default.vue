<template>
	<slot />
	<ScrollToTop />
	<FloatingButtons />
</template>
<script setup>
import AOS from 'aos';
import ScrollToTop from '~/components/common/ScrollToTop.vue';
import FloatingButtons from '~/components/common/FloatingButtons.vue';
// import 'aos/dist/aos.css'; // Import the AOS CSS

onMounted(() => {
	AOS.init({
		duration: 1400,
		once: true,
	});
});
</script>
<style lang="css">
@import '../public/css/style.css';
</style>
