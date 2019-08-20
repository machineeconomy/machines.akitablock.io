<template>
  <transition name="animation">
    <div class="popup__bg" v-if="isOpen" @click="$emit('popup')">
      <div class="popup">
        <iframe
          class="trailer"
          id="trailer"
          src="https://player.vimeo.com/video/341052776?title=0&byline=0&portrait=0"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <div class="close">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Trailer',
  props: ['isOpen']
}
</script>

<style lang="scss" scoped>
.popup__bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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

.close {
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
      transition: 0.2s;
      background: var(--dark);
    }
  }
}

.animation-enter-active,
.animation-leave-active {
  transition: opacity 1s;
}
.animation-enter,
.animation-leave-to {
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