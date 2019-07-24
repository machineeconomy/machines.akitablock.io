<template>
  <main>
    <evolution />
    <bank />
    <machines />
    <roadmap />
    <people />
  </main>
</template>

<script>
import Evolution from "./components/Evolution";
import Bank from "./components/Bank";
import Machines from "./components/Machines";
import Roadmap from "./components/Roadmap";
import People from "./components/People";

export default {
  name: "Main",
  components: {
    Evolution,
    Bank,
    Machines,
    Roadmap,
    People
  }
};
</script>

<style lang="scss" scoped>
</style>
