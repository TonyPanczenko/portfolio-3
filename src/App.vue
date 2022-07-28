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
  font-size: 1rem;

  scrollbar-width: 0;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .layout {
    margin: 0 auto;
    max-width: calc($breakpoint-lg-min - 160px);

    @media (max-width: $breakpoint-md-max) {
      margin: 0 80px;
		}

    @media (max-width: $breakpoint-sm-max) {
      margin: 0 15px;
		}
  }
}
</style>
