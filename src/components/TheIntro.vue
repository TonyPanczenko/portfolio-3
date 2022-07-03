<script>
</script>

<template>
	<div class="intro">
		<div class="intro__content layout">
			<h1>Hi, I'm Tony</h1>
			<h2>and these are some of my projects.</h2>
		</div>
	</div>
</template>

<style scoped lang="scss">
.intro {
  background: linear-gradient(to right, #ffd89b, #19547b);

  &__content {
    display: flex;
    flex-direction: column;
  }
}

h1 {
  color: var(--font-color-bright-primary);
  margin-top: 200px;
}

h2 {
  color: var(--font-color-bright-secondary);
  align-self: flex-end;
  margin-bottom: 200px;
}
</style>
