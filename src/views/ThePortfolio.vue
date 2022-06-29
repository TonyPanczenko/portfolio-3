<script setup>
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <main> {{ counterStore }}
  </main>
</template>
