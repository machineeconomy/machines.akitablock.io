<template>
  <main>
    <problem />
    <deliveryRoadmap />
    <services />
    <team />
  </main>
</template>

<script>
import Problem from "./components/Problem";
import DeliveryRoadmap from "./components/DeliveryRoadmap";
import Services from "./components/Services";
import Team from "./components/Team"

export default {
  name: "Main",
  components: { 
    Problem,
    DeliveryRoadmap,
    Services,
    Team
  }
};
</script>

<style lang="scss" scoped>

</style>
