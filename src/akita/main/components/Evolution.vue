<template>
  <section class="evolution">
    <div class="contain">
      <p class="text top">
        Machines were invented to increase productivity. Since the industrial revolution they have increased in numbers, became
        smart and improved our lives in countless ways. On the downside is takes a lot of work and effort to manage all of these devices:
      </p>
      <h2 class="title">
        Do we control the machines
        <br />or do they control us?
      </h2>
      <ul class="list">
        <li class="text list__item" v-for="item in list" :key="item.id">{{item.text}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { UAnimateContainer, UAnimate } from "vue-wow";

export default {
  name: "Evolution",
  components: {
    UAnimateContainer,
    UAnimate
  },
  data() {
    return {
      list: [
        {
          text:
            "Machines have to be managed and updated to run correctly. Security of valuable information and data can be guaranteed.",
          img: "#",
          id: 1
        },
        {
          text: "Just-in-time and global production is an industry standard.",
          img: "#",
          id: 2
        },
        {
          text:
            "Machines depend on financial service providers and traditional banks that charge enormous fees, do not operate on the weekends and take days to process cross-country transactions.",
          img: "#",
          id: 3
        },
        {
          text:
            "There are no global standards or networks architectures. Convert data form sources, formats and mediums like paper.",
          img: "#",
          id: 4
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.evolution {
  min-height: 100vh;
  position: relative;
  padding-bottom: 10vh;
}

.top {
  padding: 5vh 10vh 0 0;
}

h2 {
  margin: 3vh 0;
  color: var(--akita-pink);
}

.list {
    width: 60%;
}

.list__item {
  padding: 3vh 0 0 10vh ;
}

@media (max-width: 900px) {
  .list {
    width: 100%;
}
}
</style>

