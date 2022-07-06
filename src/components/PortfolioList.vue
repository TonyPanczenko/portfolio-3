<script setup>
import PortfolioItem from './PortfolioItem.vue';

const projects = [
  {
    name: 'Search and locator platform for car buyers',
    description: 'An app allowing customers of a known luxury car manufacturer to \
      locate their desired vehicle for purchase.\
      Users can search, sort and filter new or used car stock by various vehicle attributes.\
      Different vehicles can be compared, favourited,\
      have their detailed specs viewed and used to generate hot leads through submitted enquiries.\
      The app is live on more than 100 sites in over 40 countries and supports some configurable feature\
      variation between them.',
    technologies: ['Vue.js', 'Node.js', 'Serverless', 'GraphQL', 'AWS Cloud', 'Vue CLI', 'Vuetify'],
    previewUrl: 'https://asia.olympus-imaging.com/content/000107507.jpg',
    domain: 'approved.es.jaguar.com',
    sourceUrl: '',
    imgUrls: [
      '/assets/jlravl/Capture1.png',
      '/assets/jlravl/Capture2.png',
      '/assets/jlravl/Capture3.png',
      '/assets/jlravl/Capture4.png',
      '/assets/jlravl/Capture5.png',
      '/assets/jlravl/Capture6.png',
      '/assets/jlravl/Capture7.png',
      '/assets/jlravl/Capture8.png',
      '/assets/jlravl/Capture9.png',
    ]
  },
  {
    name: 'Search and locator platform for car buyers',
    description: 'An app allowing customers of a known luxury car manufacturer to \
      locate their desired vehicle for purchase.\
      Users can search, sort and filter new or used car stock by various vehicle attributes.\
      Different vehicles can be compared, favourited,\
      have their detailed specs viewed and used to generate hot leads through submitted enquiries.\
      The app is live on more than 100 sites in over 40 countries and supports some configurable feature\
      variation between them.',
    technologies: ['Vue.js', 'Node.js', 'Serverless', 'GraphQL', 'Geolocation', 'AWS Cloud'],
    previewUrl: 'https://buildyour.jaguarusa.com/jag2/r/summary/inventory/en_us/\
e-pace_k23/49ojd/a-20p-249aawd_a-e-pace_sp2/',
    domain: 'buildyour.jaguarusa.com',
    sourceUrl: '',
    imgUrls: ['https://asia.olympus-imaging.com/content/000107507.jpg']
  },
];
</script>

<template>
	<div class="list">
		<PortfolioItem v-for="project in projects" :project="project" :key="project.name" />
	</div>
</template>

<style scoped lang="scss">

</style>
