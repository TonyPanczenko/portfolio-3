<script setup>
import { ref } from 'vue';

const tab = ref('portfolio');
</script>

<template>
	<nav class="nav shadow-2">
		<div class="nav__container layout">
			<h1>Tony Panczenko</h1>
			<q-tabs v-model="tab"
				class="nav__tabs"
				align="right"
				narrow-indicator
				no-caps
			>
				<q-route-tab name="portfolio"
					label="Portfolio"
					:to="{ name: 'portfolio' }"
					:ripple="{ color: 'secondary' }"
				/>
				<q-route-tab name="contact"
					label="Contact"
					:to="{ name: 'contact' }"
					:ripple="{ color: 'secondary' }" />
			</q-tabs>
		</div>
	</nav>
</template>

<style scoped lang="scss">
.nav {
  width: 100%;
  position: fixed;
	z-index: 100;

  background: white;

	&__container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	h1 {
		font-size: 1.2rem;
		line-height: 1.2rem;
	}
}

:deep(.q-tab__label) {
	font-size: 1.2rem;
}

:deep(.q-tab__indicator) {
  background-color: var(--c-accent-first);
}
</style>
