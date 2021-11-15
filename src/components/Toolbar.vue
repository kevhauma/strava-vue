<template>
  <Toolbar>
    <template #left>
      <a href="/" class="title">
        <span>Strava Activity Map </span>
      </a>
    </template>

    <template #right>
      <a href="/about">
        <Button class="p-button-raised"> More </Button>
      </a>
      <Button class="ml-2 p-button-text">
        <a href="https://github.com/kevhauma/strava-vue" target="_blank">
          <img alt="logo" src="/img/github.png" style="width: 1.5rem" />
        </a>
      </Button>
    </template>
  </Toolbar>
</template>
<style scoped lang="scss">
.title {
  font-weight: 800;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
}
</style>
