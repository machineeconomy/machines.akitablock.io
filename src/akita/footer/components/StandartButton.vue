<template>
  <div class="button-size">  
    <base-button type="info" class="text">Send E-Mail</base-button>
  </div>
</template>

<script>
export default {}
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