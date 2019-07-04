<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>

<style>

:root {
  --akita-primary: #5f46b1;
  --akita-secondary: #eb479d;
  --akita-blue: #0BC5FE;
  --akita-dark: #3D4449;
  --akita-light: #EFEFEF;
}

.contain {
  max-width: 1600px;
  padding: 0px 50px;
  margin: auto;
}

ul {
  list-style: none;
  padding-left: 0;
}

.title {
  font-size: 70px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  line-height: 1.2;
}

.text {
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
}

@media (max-width:1500px)  {
  .title {
    font-size: 64px;
  }
  .text {
    font-size: 20px;
  }
}

@media (max-width: 1250px) {
  .title {
    font-size: 54px;
  }
  .text {
    font-size: 18px;
  }
}

@media (max-width: 1250px) {
  .title {
    font-size: 48px;
  }
  .text {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 40px;
  }
  .text {
    font-size: 16px;
  }
}

@media (max-width: 425px) {
  .title {
    font-size: 32px;
  }

  .contain {
    padding: 0 15px;
  }
}
</style>