<template>
  <div>
    <div class="navigation__button" @click="openPopup">
      <span class="button__line"></span>
      <span class="button__line"></span>
      <span class="button__line"></span>
    </div>
    <div class="navigation__popup">
      <ul>
        <li class="" v-for="li in navigation" :key="li.id">
          <a href="#" class="navigation__link text" :path="li.path" @click="scroll">
            {{li.text}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {navigation} from "./Navigation"

export default {
  
};
</script>

<style>
.navigation__button {
  width: 25px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: 30%;
}

.button__line {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin-bottom: 6px;
}

.navigation__popup {
  display: none;
  position: absolute;
  background-color: #fff;
  width: 100%;
  top: 90px;
  height: 150px;
  left: 0;
  border-radius: 5px;
}

.popup__item {
  padding: 3px 20px;
}

.popup__link {
  color: #000;
}

.popup__link:hover {
  color: #000;
}

.display-block {
  display: block;
}

@media (min-width: 1000px) {
  .navigation__button {
    display: none;
  }

  .navigation__popup {
    display: none;
  }
}
</style>