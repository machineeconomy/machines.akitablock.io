<template>
  <header>
    <div class="contain relative">
      <navigation />
      <h1 class="title">
        <span>
          <textAnimation
            :textList="['machine bank', 'beyond blockchain']"
            :writingSpeed="50"
            :changingSpeed="4000"
          />
        </span>
      </h1>
      <div class="info">
        <p class="text">Blockchain promised faster, cheaper and global transactions.</p>
        <p
          class="text"
        >Machine bank accounts for cars, drones, gas stations and other devices enable to machines to directly buy & sell machine-to-machine (M2M) services. Machine economy.</p>
        <p class="text">Turn your car into an asset.</p>
      </div>
      <div class="btn__trailer" @click="popup">
        <div class="triangle"></div>
        <span>Watch Trailer</span>
      </div>
      <timer :timeEnd="new Date(2020, 0)" />
      <div class="background"></div>
    </div>
    <trailer :isOpen="isOpen" @popup="popup" />
  </header>
</template>

<script>
import Navigation from './components/Navigation'
import Trailer from './components/Trailer'
import TextAnimation from './components/TextAnimation'
import Timer from './components/Timer'
import { setTimeout, setInterval, clearTimeout } from 'timers'

export default {
  name: 'Header',

  components: {
    Navigation,
    Trailer,
    TextAnimation,
    Timer
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    popup() {
      this.isOpen = !this.isOpen
    },

    smoothly() {
      document.querySelector('.background').style.opacity = 1
    }
  },

  mounted() {
    setTimeout(() => this.smoothly(), 100)
  }
}
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(
    to top left,
    var(--akita-blue) 0%,
    var(--akita-violet) 40%,
    var(--akita-pink) 100%
  );
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
}

h1 {
  color: #fff;
  text-transform: uppercase;
  margin: 150px 0 30px;
  height: 100px;
}

.info {
  width: 50%;
  margin-bottom: 150px;
}

p {
  color: #fff;
}

.background {
  position: absolute;
  right: 50px;
  top: 100px;
  width: 40vw;
  height: 40vw;
  background: url("../../assets/img/sedan.png");
  background-size: 100%;
  opacity: 0;
  transition: 1s;
}

.btn__trailer {
  position: relative;
  color: #fff;
  font-size: 22px;
  width: 250px;
  font-family: "Roboto", sans-serif;
  padding: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  .triangle {
    height: 7px;
    border: 7px solid transparent;
    border-left: 15px solid #fff;
    position: relative;
    top: 10px;
    transition: 0.4s;
  }
  &:hover {
    background: #fff;
    color: var(--dark);
    .triangle {
      border-left-color: var(--dark);
    }
  }
}

@media (max-width: 1300px) {
  h1 {
    margin: 100px 0 20px;
  }
  .info {
    margin-bottom: 80px;
  }
}

@media (max-width: 1025px) {
  .background {
    right: 0px;
    top: 200px;
  }
}

@media (max-width: 769px) {
  h1 {
    margin: 130px 0 30px;
  }
  .info {
    width: 100%;
  }
  .background {
    display: none;
  }
}
</style>