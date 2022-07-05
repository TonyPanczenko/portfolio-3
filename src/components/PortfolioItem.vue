<script setup>
import { toRef } from 'vue';
import { mdiEyeArrowRightOutline, mdiCodeTags, mdiChevronRight } from '@mdi/js';

const props = defineProps({
  project: Object
});

const project = toRef(props, 'project');
</script>

<template>
	<div class="item">
		<img class="item__img" :src="project.imgUrl" :alt="`Preview image of ${project.name}`">
		<div class="item__content">
			<h3>
				{{ project.name }} 
				<q-icon :name="mdiChevronRight" /> 
				<a :href="project.previewUrl">{{ project.domain }}</a>
			</h3>
			<div class="item__badgeline">
				<q-badge v-for="tech in project.technologies"
					:key="tech"
					:label="tech"
					class="item__badge"
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

	padding: 10px 0;

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

		.q-icon {
			color: var(--c-accent-fadeout);
			margin: 0 10px;
		}

		a, a:visited, a:hover, a:active, a:link {
			color: rgb(130, 151, 255);
			font-size: 1.2rem;
		}
	}

	&__badgeline {
		margin-bottom: 10px;
	}

	&__badge {
		padding: 0 10px;
		font-size: 1.1rem;
		line-height: 1.0rem;
		font-family: 'League Spartan', sans-serif;

		border-right: solid 1px var(--c-accent-fadeout);
		border-radius: 0px;
		background-color: transparent;
		opacity: 0.8;

		&:first-child {
			padding-left: 0px;
		}

		&:last-child {
			border-right: 0;
		}
	}

	&__description {
		font-size: 1rem;
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
    color: $color;
    border-color: var(--c-accent-fadeout);
  }
}
</style>