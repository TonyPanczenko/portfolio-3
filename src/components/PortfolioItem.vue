<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  project: Object
});

const { 
  name,
  description,
  technologies,
  previewUrl,
  sourceUrl,
  imgUrl
} = toRefs(props.project);
</script>

<template>
<div class="item">
  <img class="item__img" :src="imgUrl" :alt="`Preview image of ${name}`">
  <div class="item__content">
    <h3>{{ name }}</h3>
    <div class="item__badges">
      <q-badge v-for="tech in technologies" :key="tech" :label="tech" outline />
    </div>
    <p class="item__description">
      {{ description }}
    </p>
    <div class="item__actions">
      <q-btn v-if="previewUrl" icon="" :href="previewUrl" />
      <q-btn v-if="sourceUrl" icon="" :href="sourceUrl" />
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
</style>