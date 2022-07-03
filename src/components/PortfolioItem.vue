<script setup>
import { toRef } from 'vue';
import { mdiEyeArrowRightOutline, mdiCodeTags } from '@mdi/js';

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
					class="item__badge shadow-2"
					:class="`item__badge--${tech}`.replace(/[.\s]/g, '').toLocaleLowerCase()"
				/>
			</div>
			<p class="item__description">
				{{ project.description }}
			</p>
			<div class="item__actions">
				<q-btn :disable="!project.previewUrl"
					:icon="mdiEyeArrowRightOutline"
					:href="project.previewUrl"
					class="item__btn"
					glossy
					unelevated
					color="grey-8" />
				<q-btn :disable="!project.sourceUrl"
					:icon="mdiCodeTags"
					:href="project.sourceUrl"
					class="item__btn"
					glossy
					unelevated
					color="grey-8" />
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
  flex-direction: row;
	align-items: center;

	margin: 0 20px;
	padding: 10px 0;
	border-bottom: 1px lightgrey solid;

	&__img {
		margin-right: 20px;
		object-fit: cover;
		flex: 1 0 auto;
		height: 240px;
	}

	&__content {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
	}

	h3 {
		margin: 10px 0;
		font-size: 1.8rem;
	}

	&__badgeline {
		margin-bottom: 10px;
	}

	&__badge {
		margin-right: 10px;
		font-size: 1.2rem;
		line-height: 1.2rem;
		font-family: 'League Spartan', sans-serif;
	}

	&__description {
		font-size: 1.1rem;
		text-align: justify;
		text-justify: auto;
	}

	&__actions {
		margin-bottom: 10px;
		align-self: end;
	}

	&__btn {
		margin-left: 20px;
		width: 100px;
	}
}

@each $tech, $color in $badge-colors {
  .item__badge--#{$tech} {
    background-color: $color;
    border-color: $color;
  }
}
</style>