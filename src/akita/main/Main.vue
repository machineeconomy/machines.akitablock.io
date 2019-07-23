<template>
  <main>
    <evolution />
    <roadmap />
    <services />
    <people />
  </main>
</template>

<script>
import Evolution from "./components/Evolution";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import People from "./components/People"

export default {
  name: "Main",
  components: { 
    Evolution,
    Roadmap,
    Services,
    People
  }
};
</script>

<style lang="scss" scoped>
  main {
    background: var(--grey);
  }
</style>
