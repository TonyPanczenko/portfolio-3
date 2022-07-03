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

* {
  font-family: var(--font-family-primary);
}

body {
  margin: 0;

  scrollbar-width: 0;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .layout {
    margin: 0 auto;
    width: 80%;
    max-width: $breakpoint-lg-min;
  }
}
</style>
