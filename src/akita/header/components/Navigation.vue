<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item navigation__element" v-for="li in navigation" :key="li.id">
        <a href="#" class="navigation__link text" :path="li.path" @click.prevent="scroll">
          {{li.text}}
        </a>
      </li>
    </ul>
    <navigationButton></navigationButton>
  </nav>
</template>

<script>
import NavigationButton from "./NavigationButton";

export default {
  name: "Navigation",
  components: {
    NavigationButton
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
.navigation {
  padding-top: 1.9%;
  position: relative;
  z-index: 10;
  flex: 1 1 auto;
}

.navigation__list {
  display: flex;
}

.navigation__link,
.change__language {
  color: #fff;
  white-space: nowrap;
}

.navigation__item {
  flex: 1 1 auto;
}

.navigation__link:hover {
  text-decoration: underline;
  color: #fff;
}

@media (max-width: 1000px) {
  .navigation {
    padding: 0;
  }

  .navigation__element {
    display: none;
  }

  .navigation__link {
    color: #000;
  }
}
</style>