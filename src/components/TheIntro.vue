<script>
</script>

<template>
	<div class="intro">
		<div class="intro__content layout">
			<h2>
				I am a <span class="intro__emphasis">software engineering leader</span> 
				who specialises in creating scaleable solutions while keeping apps engaging to the user.
				I foster an environment where developers feel able to take risks and innovate quickly.
			</h2>
		</div>
		<div></div>
	</div>
</template>

<style scoped lang="scss">
.intro {

  &__content {
    padding: 160px 0 120px;
  }

  &__emphasis {
    background-color: rgb(35, 35, 35);
    color: white;
    padding: 5px 10px;
  }
}

h2 {
  width: 50%;

  font-size: 1.8rem;
  text-align: justify;

  @media (max-width: $breakpoint-sm-max) {
    width: auto;

    font-size: 1.4rem;
    line-height: 2.5rem;
	}
}
</style>
