<template>
  <div class="LiveDemo">
    <div class="contain">
      <p>In this Machine Economy demonstrator every participant has its own blockchain based service application.</p>
      <p>Each transaction triggers an automated machine-to-machine (M2M) payment and production process:</p>
      <ol>
        <li>Click to fund your wallet with virtual tokens</li>
        <li>Select a new pair of headphones or a laptop</li>
        <li>The rest of the process is completely automated - just watch what happens...</li>
      </ol>
      <use-case></use-case>
    </div>
  </div>
</template>

    <script>
import UseCase from "./UseCase.vue";

export default {
  name: "LiveDemo",
  components: { UseCase },
  data() {
    return {};
  }
};
</script>