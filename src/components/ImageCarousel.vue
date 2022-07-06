<script setup>
import { ref } from 'vue';
import { mdiCircle, mdiFullscreen, mdiFullscreenExit, mdiChevronRight, mdiChevronLeft } from '@mdi/js';

const props = defineProps({
  imgUrls: Array
});
const slide = ref(1);
const fullscreen = ref(false);
</script>

<template>
	<q-carousel
		animated
		swipeable
		transition-prev="jump-right"
		transition-next="jump-left"
		:prev-icon="mdiChevronLeft"
		:next-icon="mdiChevronRight"
		arrows
		control-text-color="secondary"
		v-model="slide"
		navigation
		infinite
		keep-alive
		:fullscreen="fullscreen"
		:class="{ 'q-ml-xl': !fullscreen }"
		class="carousel shadow-2"
	>
		<template v-slot:navigation-icon="{ active, onClick }">
			<q-btn v-if="active"
				size="sm"
				:icon="mdiCircle"
				color="secondary"
				flat
				round
				dense
				@click="onClick" />
			<q-btn v-else
				size="sm"
				:icon="mdiCircle"
				color="grey"
				flat
				round
				dense
				@click="onClick" />
		</template>

		<template v-slot:control>
			<q-carousel-control
				position="top-right"
				:offset="[18, 18]"
			>
				<q-btn
					unelevated 
					push
					round
					color="white"
					text-color="black"
					:icon="fullscreen ? mdiFullscreenExit : mdiFullscreen"
					@click="fullscreen = !fullscreen"
				/>
			</q-carousel-control>
		</template>
      
		<q-carousel-slide v-for="(url, index) in props.imgUrls"
			:key="index"
			:name="index"
			:img-src="url"
		/>
	</q-carousel>
</template>

<style scoped lang="scss">
.carousel {
  .q-carousel__slide {
    background-size: contain;
    background-repeat: no-repeat;
  }
}

:deep(.q-carousel__arrow .q-icon) {
  font-size: 40px;
}
</style>