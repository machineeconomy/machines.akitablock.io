<template>
  <header>
    <div class="contain relative">
      <Navigation />
      <h1 class="title">Machine bank<br/>beyond blockchain</h1>
      <div class="info">
        <p class="text normal">Blockchain promised faster, cheaper and global transactions.</p>
        <p class="text normal">Machine bank accounts for cars, drones, gas stations and other devices enable to machines to directly buy & sell machine-to-machine (M2M) services. Machine economy.</p>
        <p class="text normal">Turn your car into an asset.</p>
      </div>
      <div class="btn__trailer" @click="popup">
        <div class="triangle"></div>  
        <span>Watch Trailer</span>
      </div>
      <div class="background"></div>
    </div>
    <trailer :isOpen="isOpen" @popup="popup" />
  </header>
</template>

<script>
import Navigation from "./components/Navigation";
import Trailer from "./components/Trailer";

export default {
  name: "Header",
  components: {
    Navigation,
    Trailer
  },
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
};
</script>

<style lang="scss" scoped>
header {
  background: linear-gradient(to top left, var(--akita-blue) 0%, var(--akita-violet) 40%, var(--akita-pink) 100%);
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
}

h1 {
  color: #fff;
  text-transform: uppercase;
  margin: 150px 0 30px;
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
  background: url("./../../../public/sedan.png");
  background-size: 100%;
}

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
.trailer__popup-enter, .trailer__popup-leave-to {
  opacity: 0;
}

@media (max-width: 1300px) {
  h1 {
    margin: 100px 0 20px;
  }
  .info {
    margin-bottom: 80px;
  }

  .trailer {
    width: 900px;
    height: 507px;
  }
}

@media (max-width: 1025px) {
  .trailer {
    width: 600px;
    height: 338px;
  }
  .background {
    right: 0px;
    top: 200px;
  }
}

@media (max-width: 769px) {
  .trailer {
    width: 400px;
    height: 225px;
  }
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