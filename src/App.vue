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

<style lang="scss">

:root {
  --violet: #7030a0;
  --pink: #ff2ea0;
  --blue: #00b0f0;
  --dark: #3b3838;
  --grey: #d9d9d9;
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

button, button:active, button:focus {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}

.title {
  font-size: 70px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  line-height: 1.2;
  color: #000;
}

.text {
  font-size: 22px;
  line-height: 1.3;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
  color: #000;
}

.bold {
  font-weight: bold;
}

.normal {
  font-weight: normal;
}

.lighter {
  font-weight:lighter;
}

.right {
  text-align: right;
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