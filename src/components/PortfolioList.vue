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
      The app is live on more than 100 sites in over 40 countries and supports some significant configurable feature\
      variation between them.',
    technologies: ['Vue.js', 'Vuetify', 'Node.js', 'GraphQL', 'Serverless', 'AWS SDK', 'Vue CLI'],
    previewUrl: 'https://approved.es.landrover.com/search/#/',
    domain: 'approved.es.landrover.com',
    frontendSource: '',
    backendSource: '',
    imgUrls: [
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture1.PNG',
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture2.PNG',
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture3.PNG',
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture4.PNG',
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture5.PNG',
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture6.PNG',
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture7.PNG',
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture8.PNG',
      'https://raw.githubusercontent.com/TonyPanczenko/TonyPanczenko.github.io/main/assets/ja/Capture9.PNG',
    ]
  },
  {
    name: 'Stock locator for car configurator websites',
    description: 'This app allows users to find new vehicles which match their desired car\
    configuration in the best way possible. The backend service collects data from vehicle data libraries and stock\
    solutions to present the user with the closest approximate matches to maximise fullfilment. This solution serves\
    customers on dozens of North American and European model configurator sites.',
    technologies: ['React.js','Node.js', 'GraphQL', 'NoSQL', 'Serverless', 'AWS SDK', 'Webpack'],
    previewUrl: 'https://buildyour.jaguarusa.com/jag2/r/summary/inventory/en_us/\
e-pace_k23/49ojd/a-20p-249aawd_a-e-pace_sp2/',
    domain: 'buildyour.jaguarusa.com',
    frontendSource: '',
    backendSource: '',
    imgUrls: [
      '/assets/juc/Capture3.png',
      '/assets/juc/Capture1.png',
      '/assets/juc/Capture2.png',
      '/assets/juc/Capture4.png'
    ]
  },
  {
    name: 'Crowd-sourced art project',
    description: 'This app lets any visitor paint a single pixel of a persistent image visible to anyone.\
    Users can see who and when painted each of the pixels. CDK proof of concept inspired by r/place.',
    technologies: ['React.js', 'Canvas', 'Node.js', 'NoSQL', 'AWS CDK', 'AWS SDK', 'CRA CLI', 'Webpack'],
    previewUrl: 'https://tonypanczenko.github.io/rplace-concept/',
    domain: '[GH Pages]',
    frontendSource: 'https://github.com/TonyPanczenko/rplace-concept',
    backendSource: 'https://github.com/TonyPanczenko/rplace-concept-backend',
    imgUrls: [
      '/assets/rplaceconcept/Capture1.png',
    ]
  },
  {
    name: 'This portfolio app',
    description: 'This minimalistic portfolio page, you are looking at right now, was built using some of Vue\'s\
    newest features at the time and some of Quasar\'s fantastic carousel APIs. Thank you for browsing.',
    technologies: ['Vue.js', 'Quasar', 'Vite'],
    previewUrl: 'https://tonypanczenko.github.io/',
    domain: 'tonypanczenko.github.io',
    frontendSource: 'https://github.com/TonyPanczenko/portfolio-3',
    backendSource: '',
    imgUrls: [
      '/assets/portfolio/Capture1.png',
    ]
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
