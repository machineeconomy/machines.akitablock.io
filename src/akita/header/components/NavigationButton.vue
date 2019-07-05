<template>
  <div>
    <div class="navigation__button" @click="openPopup">
      <span class="button__line"></span>
      <span class="button__line"></span>
      <span class="button__line"></span>
    </div>
    <div class="navigation__popup">
      <ul>
        <li v-for="li in navigation" :class="li.liClass">
          <a
            href="#"
            :class="li.aClass"
            :path="li.path"
            :block="li.block"
            @click="scroll"
          >{{li.text}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationButton",
  data() {
    return {
      navigation: [
        {
          text: "Problem",
          liClass: "navigation__item popup__item",
          aClass: "popup__link text",
          path: ".problem",
          block: "start"
        },
        {
          text: "Delivery Roadmap",
          liClass: "navigation__item popup__item",
          aClass: "popup__link text",
          path: ".deliveryRoadmap",
          block: "start"
        },
        {
          text: "Services",
          liClass: "navigation__item popup__item",
          aClass: "popup__link text",
          path: ".services",
          block: "start"
        },
        {
          text: "Team",
          liClass: "navigation__item popup__item",
          aClass: "popup__link text",
          path: ".team",
          block: "start"
        },
        {
          text: "Engage Now",
          liClass: "navigation__item popup__item",
          aClass: "popup__link text",
          path: ".engageNow",
          block: "start"
        }
      ]
    };
  },
  methods: {
    openPopup() {
      let popup = document.querySelector(".navigation__popup");
      popup.classList.toggle("display-block");
    },
    scroll(e) {
      e.preventDefault();
      let path = e.target.attributes.path.value,
        block = e.target.attributes.block.value;
      document
        .querySelector(path)
        .scrollIntoView({ block: block, behavior: "smooth" });
    }
  }
};
</script>

<style>
.navigation__button {
  width: 25px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: 50px;
}

.button__line {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin-top: 6px;
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

@media (min-width: 801px) {
  .navigation__button {
    display: none;
  }

  .navigation__popup {
    display: none;
  }
}
</style>