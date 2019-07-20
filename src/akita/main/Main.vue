<template>
  <main>
    <Evolution />
    <deliveryRoadmap />
    <services />
    <team />
  </main>
</template>

<script>
import Evolution from "./components/Evolution";
import DeliveryRoadmap from "./components/DeliveryRoadmap";
import Services from "./components/Services";
import Team from "./components/Team"

export default {
  name: "Main",
  components: { 
    Evolution,
    DeliveryRoadmap,
    Services,
    Team
  }
};
</script>

<style lang="scss" scoped>
  main {
    background: var(--grey);
  }
</style>
