<script setup>
import PortfolioItem from './PortfolioItem.vue';

const projects = [
  {
    name: 'Search and locator platform for car buyers',
    description: 'A platform allowing customers of a known luxury car manufacturer to \
      locate their desired vehicle for purchase.\
      Users can search, sort and filter new or used car stock by various vehicle attributes,\
      such as price, mileage, type of powertrain etc. Different vehicles can be compared, favourited,\
      have their detailed specs viewed and used to generate hot leads through submitted enquiries.',
    technologies: ['Vue.js', 'Node.js', 'Serverless', 'GraphQL', 'Geolocation', 'AWS Cloud'],
    previewUrl: 'https://asia.olympus-imaging.com/content/000107507.jpg',
    sourceUrl: 'a',
    imgUrl: 'https://asia.olympus-imaging.com/content/000107507.jpg'
  },
];
</script>

<template>
  <PortfolioItem 
    v-for="project in projects"
    :project="project"
    :key="project.name"
  />
</template>

<style scoped lang="scss">
</style>
