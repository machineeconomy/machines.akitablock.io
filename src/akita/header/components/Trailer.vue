<template>
  <transition name="trailer__popup">
    <div class="popup__bg" v-if="isOpen" @click="popup">
      <div class="popup">
        <iframe class="trailer" id="trailer" src="https://player.vimeo.com/video/341052776?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <div class="btn__close">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Trailer",
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    popup() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.btn__trailer {
  position: relative;
  color: #fff;
  font-size: 22px;
  width: 250px;
  font-family: "Roboto", sans-serif;
  padding: 10px;
  text-align: center;
  background: rgba(0,0,0,0);
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: .4s;
  display: flex;
  justify-content: center;
  .triangle {
    height: 7px;
    border: 7px solid transparent;	
    border-left: 15px solid #fff;
    position: relative;
    top: 10px;
    transition: .4s;
  }
  &:hover {
    background: #fff;
    color: var(--dark);
    .triangle {
      border-left-color: var(--dark);
    }
  }
}

.popup__bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 10;
  display: flex;
}

.popup {
  margin: auto;
  padding: 30px;
  position: relative;
}

.trailer {
  width: 1200px;
  height: 676px;
  border-radius: 10px;
}

.btn__close {
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  .line {
    margin: auto;
    position: absolute;
    left: 7.5px;
    width: 5px;
    height: 20px;
    background: #fff;
    border-radius: 10px;
    transform: rotate(45deg);
    &:nth-child(1) {
      transform: rotate(-45deg);
    }
  }
  &:hover {
    .line {
      transition: .2s;
      background: var(--dark);
    }
  }
}

.trailer__popup-enter-active, .trailer__popup-leave-active {
  transition: opacity 1s;
}
.trailer__popup-enter, .trailer__popup-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

@media (max-width: 1300px) {
  .trailer {
    width: 900px;
    height: 507px;
  }
}

@media (max-width: 1000px) {
  .trailer {
    width: 600px;
    height: 338px;
  }
}

@media (max-width: 700px) {
  .trailer {
    width: 400px;
    height: 225px;
  }
  .info {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .trailer {
    width: 300px;
    height: 169px;
  }
  .popup {
    padding: 30px 10px 0 0;
  }
}
</style>