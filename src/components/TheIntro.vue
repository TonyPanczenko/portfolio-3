<script>
</script>

<template>
  <div class="intro">
    <div class="intro__content">
      <h1>Hi, I'm Tony</h1>
      <h2>and these are some of my projects.</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro {
  background-color: var(--c-primary);

  &__content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
    max-width: $breakpoint-lg-min;

    padding: 0 20px;
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
