<script setup>
import TheIntro from '@/components/TheIntro.vue';
import PortfolioList from '@/components/PortfolioList.vue';
</script>

<template>
	<TheIntro />
	<main class="layout">
		<PortfolioList />
	</main>
</template>

<style scoped lang="scss">
main {
	background-color: white;
}
</style>
