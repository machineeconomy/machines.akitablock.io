<template>
  <header>
    <div class="contain">
      <navigation/>
      <information/>
      <div class="header__button">
        <StandartButton/>
      </div>
    </div>
    <backgroundLine/>
  </header>
</template>
<script>
import Navigation from "./components/Navigation";
import Information from "./components/Information";
import StandartButton from "./components/StandartButton";
import BackgroundLine from "./components/BackgroundLine";

export default {
  name: "Header",
  components: {
    Navigation,
    Information,
    StandartButton,
    BackgroundLine
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
}

.header__button {
  width: 100%;
  height: 210px;
  margin-left: 40px;
}

@media (max-width: 1400px) {
  .header__button {
    height: 140px;
  }
}

@media (max-width: 900px) {
  header {
      margin-bottom: 70px;
  }
}
@media (max-width: 425px) {
  .header__button {
    margin-left: 0px;
  }
}
</style>