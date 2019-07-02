<template>
  <div class="background__line">
    <span class="img__factory"></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.background__line {
  height: 120px;
  width: 100%;
  position: absolute;
  bottom: -1px;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0) 49%, white 51%);
}

.img__factory {
  background-image: url("./../../../../public/FactoryItems.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  right: 10%;
  top: -470%;
  width: 800px;
  height: 800px;
}

@media (max-width: 1500px) {
  .img__factory {
    right: 0;
  }
}

@media (max-width: 1400px) {
  .img__factory {
    right: 0;
    top: -330%;
    width: 600px;
    height: 600px;
  }
}

@media (max-width: 1100px) {
  .img__factory {
    right: 0;
    top: -250%;
    width: 500px;
    height: 500px;
  }
}

@media (max-width: 900px) {
  .img__factory {
    right: 0;
    top: -200%;
    width: 400px;
    height: 400px;
  }
  .background__line {
    display: none;
  }
}

@media (max-width: 800px) {
  .background__line {
    height: 60px;
  }
  .img__factory {
    display: none;
  }
}

</style>