<script setup>
import { ref } from 'vue';

const tab = ref('portfolio');
</script>

<template>
  <nav class="nav">
    <q-tabs v-model="tab" class="nav__tabs shadow-2" align="right" narrow-indicator>
      <q-route-tab name="portfolio" label="Portfolio" :to="{ name: 'portfolio' }" />
      <q-route-tab name="contact" label="Contact" :to="{ name: 'contact' }" />
    </q-tabs>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  margin: 0 auto;
  width: 80%;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: var(--c-primary);

  &__tabs {
    padding: 0 20px;
  }
}

:deep(.q-tab) {
  color: var(--c-accent-first);
}

:deep(.q-tab__indicator) {
  background-color: var(--c-accent-second);
}
</style>
