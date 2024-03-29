<script setup>
import { toRef } from 'vue';
import { mdiEyeArrowRightOutline, mdiCodeTags, mdiChevronRight, mdiCodeBraces } from '@mdi/js';
import ImageCarousel from './ImageCarousel.vue';

const props = defineProps({
  project: Object
});

const project = toRef(props, 'project');
</script>

<template>
	<div class="item">
		<ImageCarousel :imgUrls="project.imgUrls" class="item__carousel" />
		<div class="item__content">
			<h3>
				{{ project.name }} 
				<q-icon :name="mdiChevronRight" /> 
				<a class="item__preview_link" :href="project.previewUrl">{{ project.domain }}</a>
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
					color="black" >
					<q-tooltip class="bg-accent text-white text-body2"
						style="opacity: 0.8"
						:offset="[0, 15]"
						:delay="800"
						:transitionHide="'fade'"
						:transition-duration="200" >
						Live preview
					</q-tooltip>
				</q-btn>
				<q-btn :disable="!project.frontendSource"
					:icon="mdiCodeTags"
					:href="project.frontendSource"
					class="item__btn"
					glossy
					unelevated
					color="black" >
					<q-tooltip class="bg-accent text-white text-body2"
						style="opacity: 0.8"
						:offset="[0, 15]"
						:delay="800"
						:transitionHide="'fade'"
						:transition-duration="200" >
						Frontend source
					</q-tooltip>
				</q-btn>
				<q-btn :disable="!project.backendSource"
					:icon="mdiCodeBraces"
					:href="project.backendSource"
					class="item__btn"
					glossy
					unelevated
					color="black" >
					<q-tooltip class="bg-accent text-white text-body2"
						style="opacity: 0.8"
						:offset="[0, 15]"
						:delay="800"
						:transitionHide="'fade'"
						:transition-duration="200" >
						Backend source
					</q-tooltip>
				</q-btn>
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
  "awssdk": #f7981f,
  "awscdk": #ffc32f,
	"vite": #a365f8,
	"quasar": #42a5f5,
	"vuecli": #34495e, 
	"vuetify": #7bc6ff, 
	"webpack": #1c78c0,
	"cracli": #09d3ac,
	"canvas": rgb(70, 70, 70),
	"nosql": rgb(70, 70, 70) 
);

.item {
  display: flex;
  flex-direction: row;
	align-items: flex-start;

	padding: 10px 0;
	margin: 25px 0;

	@media (max-width: $breakpoint-sm-max) {
		display: block;
	}

	&__preview_link {
		white-space: nowrap;
	}

	&__carousel {
		width: 100%;
		flex: 1 0 400px;
		margin: 0;

		border: 1px solid rgb(53, 53, 53);

		@media (max-width: $breakpoint-sm-max) {
			width: 400px;

			margin: 0px auto 20px auto;
		}

		@media (max-width: $breakpoint-xs-max) {
			width: 300px;
			height: 300px;
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;

		margin-left: 30px;

		@media (max-width: $breakpoint-sm-max) {
			margin: 0px 0px 30px 0px;
		}
	}

	h3 {
		margin: 10px 0;
		font-size: 1.8rem;

		@media (max-width: $breakpoint-sm-max) {
			font-size: 1.4rem;
			line-height: 2rem;
		}

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
		width: 60px;
	}
}

@each $tech, $color in $badge-colors {
  .item__badge--#{$tech} {
    color: $color;
    border-color: var(--c-accent-fadeout);
  }
}
</style>