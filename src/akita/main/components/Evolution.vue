<template>
  <section class="evolution">
    <div class="contain relative">
      <p class="text top">
        Machines were invented to increase productivity. Since the industrial revolution they have increased in numbers, became
        smart and improved our lives in countless ways. On the downside is takes a lot of work and effort to manage all of these devices:
      </p>
      <div class="column">
        <div>
          <h2 class="title">
            Do we control the machines
            <br />or do they control us?
          </h2>
          <ul class="list">
            <li
              class="text list__item"
              v-for="item in list"
              :key="item.id"
              :style="{ backgroundImage: `url('${item.img}')` }"
            >{{item.text}}</li>
          </ul>
        </div>
        <img class="img" src="../../../assets/img/oldMachine.jpg" alt="old machine" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Evolution",
  data() {
    return {
      list: [
        {
          text:
            "Machines have to be managed and updated to run correctly. Security of valuable information and data can be guaranteed.",
          img: require("../../../assets/img/icons/clock-p.png"),
          id: 1
        },
        {
          text: "Just-in-time and global production is an industry standard.",
          img: require("../../../assets/img/icons/money-p.png"),
          id: 2
        },
        {
          text:
            "Machines depend on financial service providers and traditional banks that charge enormous fees, do not operate on the weekends and take days to process cross-country transactions.",
          img: require("../../../assets/img/icons/people-p.png"),
          id: 3
        },
        {
          text:
            "There are no global standards or networks architectures. Convert data form sources, formats and mediums like paper.",
          img: require("../../../assets/img/icons/network-p.png"),
          id: 4
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.evolution {
  padding-bottom: 100px;
}

.top {
  padding: 50px 90px 50px 0;
}

.column {
  display: flex;
}

h2 {
  color: var(--akita-pink);
}

.list__item {
  padding-left: 70px;
  margin-top: 50px;
  min-height: 50px;
  background-repeat: no-repeat;
  background-size: 50px;
  background-position: left center;
}

.img {
  width: 100%;
  height: 100%;
  margin-top: 50px;
}

@media (max-width: 1300px) {
  .top {
    padding: 30px 90px 30px 0;
  }
  .img {
    width: 475px;
  }
  .list__item {
    margin-top: 30px;
  }
}

@media (max-width: 1200px) {
  .top {
    padding: 30px 0;
  }
  .img {
    display: none;
  }
}
</style>

