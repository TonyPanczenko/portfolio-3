<script setup>
import { toRef } from 'vue';

const props = defineProps({
  project: Object
});

const project = toRef(props, 'project');
</script>

<template>
	<div class="item">
		<img class="item__img" :src="project.imgUrl" :alt="`Preview image of ${project.name}`">
		<div class="item__content">
			<h3>{{ project.name }}</h3>
			<div class="item__badgeline">
				<q-badge v-for="tech in project.technologies"
					:key="tech"
					:label="tech"
					outline 
					:class="`item__badge--${tech}`.replace(/[.\s]/g, '').toLocaleLowerCase()"
				/>
			</div>
			<p class="item__description">
				{{ project.description }}
			</p>
			<div class="item__actions">
				<q-btn v-if="project.previewUrl" icon="" :href="project.previewUrl" />
				<q-btn v-if="project.sourceUrl" icon="" :href="project.sourceUrl" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
$badge-colors: (
  "vuejs": #34495e,
  "reactjs": #61dafb,
  "nodejs": #539e43,
  "serverless": #fd5750,
  "graphql": #e535ab,
  "geolocation": rgb(0, 34, 255),
  "awscloud": #f7981f,
  "awscdk": #ffc32f  
);

.item {
  display: flex;
  flex: row;
}

@each $tech, $color in $badge-colors {
  .item__badge--#{$tech} {
    color: $color;
    border-color: $color;
  }
}
</style>