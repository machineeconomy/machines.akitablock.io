<template>
<div class="top">
  <nav class="navigation">
    <div class="logo title">Machines</div>
    <ul class="list">
      <li class="item element" v-for="li in navigation" :key="li.id">
        <a href="#" class="link text" :path="li.path" @click.prevent="scroll">
          {{li.text}}
        </a>
      </li>
    </ul>
  </nav>
  <mobileNavigation :navigation="navigation" />
</div>
</template>

<script>
import MobileNavigation from "./MobileNavigation";

export default {
  name: "Navigation",
  components: {
    MobileNavigation
  },
  data() {
    return {
      navigation: [
        {
          text: "Problem",
          path: ".evolution",
          id: 1
        },
        {
          text: "Solution",
          path: ".bank",
          id: 2
        },
        {
          text: "Product",
          path: ".machines",
          id: 3
        },
        {
          text: "Roadmap",
          path: ".roadmap",
          id: 4
        },
        {
          text: "People",
          path: ".people",
          id: 5
        },
        {
          text: "Contact",
          path: ".engage",
          id: 6
        },
      ]
    };
  },
  methods: {
    scroll(e) {
      document
        .querySelector(e.target.attributes.path.value)
        .scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  position: relative;
}

.navigation {
  z-index: 10;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}

.logo {
  color: #fff;
  text-transform: uppercase;
  flex: 1 1 auto;
}

.list {
  display: flex;
  flex: 2 1 auto;
}

.item {
  flex: 1 1 auto;
  padding-top: 25px;
}

.link {
  color: #fff;
  white-space: nowrap;
}

.link:hover {
  text-decoration: underline;
  color: #fff;
}

@media (max-width: 1025px) {
  .element {
    display: none;
  }

  .link {
    color: #000;
  }
}
</style>