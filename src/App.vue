<script setup>
import { RouterView } from 'vue-router';
import TopNav from '@/components/TopNav.vue';
</script>

<template>
	<header>
		<TopNav />
	</header>
	<RouterView />
</template>

<style lang="scss">
@import '@/assets/base.scss';

:root {
  font-family: var(--font-family-primary);
}
</style>
