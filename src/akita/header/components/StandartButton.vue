<template>
  <div class="button-size">  
    <base-button type="info" block path=".LiveDemo" position="start" @click="scroll">Live Demo</base-button>
  </div>
</template>

<script>
export default {
  name: "StandartButton",
  methods: {
    scroll(e) {
      e.preventDefault();
      console.log(e);
      let path = e.target.attributes.path.value,
        position = e.target.attributes.position.value;
      document
        .querySelector(path)
        .scrollIntoView({ block: position, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
.button-size {
  width: 200px;
  height: 60px;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
  button {
    font-size: 22px;
    background: #0BC5FE;
  }
}
</style>