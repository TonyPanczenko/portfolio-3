<script setup>
import { ref } from 'vue';

const tab = ref('portfolio');
</script>

<template>
	<nav class="nav">
		<q-tabs v-model="tab"
			class="nav__tabs layout"
			align="right"
			narrow-indicator
			no-caps
		>
			<q-route-tab name="portfolio"
				label="Portfolio"
				:to="{ name: 'portfolio' }"
				class="no-border" 
			/>
			<q-route-tab name="contact" label="Contact" :to="{ name: 'contact' }" />
		</q-tabs>
	</nav>
</template>

<style scoped lang="scss">
.nav {
  width: 100%;
  position: fixed;
	z-index: 100;

  background: white;
}

:deep(.q-tab) {
  color: var(--c-accent-first);
  border-left: 1px solid var(--c-accent-first);
}

:deep(.q-tab__indicator) {
  background-color: var(--c-accent-second);
}
</style>
