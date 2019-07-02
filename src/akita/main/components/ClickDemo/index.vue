<template>
  <div class="LiveDemo">
    <div class="contain">
      <p style="font-size:20px;">In this Machine Economy alpha version demonstrator every participant has its own IOTA (DevNet) based service application.
      <br>
     Each transaction triggers an automated machine-to-machine (M2M) payment and the related energy delivery and production process:</p>
      <ol>
        <li style="font-size:20px;">Buy a new pair of headphones or a laptop</li>
        <li style="font-size:20px;">The rest of the process is completely automated. Just sit back and watch.</li>
        <li style="font-size:20px;">When your product is ready, you will receive a notification link to both transactions on the Tangle</li>
      </ol>
      <use-case></use-case>
    </div>
  </div>
</template>

    <script>
import UseCase from "./UseCase.vue";

export default {
  name: "ClickDemo",
  components: { UseCase },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.LiveDemo {
  margin-bottom: 180px;
}
@media (max-width: 900px) {
  .contain {
    padding: 0 30px;
  }
}
</style>
