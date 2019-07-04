<template>
  <header>
    <div class="contain">
      <navigation/>
      <div class="block">
        <information/>
      </div>
    </div>
    <div class="background__line"></div>
  </header>
</template>
<script>
import Navigation from "./components/Navigation";
import Information from "./components/Information";

export default {
  name: "Header",
  components: {
    Navigation,
    Information
  }
};
</script>

<style>
header {
  background: url("./../../../public/chain.png") no-repeat,
    linear-gradient(to top left, #0BC5FE 0%, #5f46b1 50%, #ff2ea0 100%);
  background-size: cover;
  position: relative;
  font-family: "Roboto", sans-serif;
  margin-bottom: 200px;
  padding-bottom: 120px;
}

.background__line {
  height: 120px;
  width: 100%;
  position: absolute;
  bottom: -1px;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0) 49%, white 51%);
}

@media (max-width: 900px) {
  header {
      margin-bottom: 70px;
  }
  
  .background__line {
    height: 60px;
  }
}
</style>