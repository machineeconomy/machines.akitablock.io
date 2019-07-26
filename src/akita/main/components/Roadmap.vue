<template>
  <section class="roadmap">
    <div class="contain">
      <div class="info">
        <h2 class="title">Roadmap</h2>
        <p
          class="text"
        >Machines were invented to increase productivity. Since the industrial revolution they have increased in numbers, became…</p>
      </div>
      <div class="map">
        <ul class="list">
          <li class="item" v-for="item in topFilter" :key="item.id">
            <div class="block">
              <h4 class="text bold">{{item.title}}</h4>
              <img class="img" :src="item.img" :alt="item.alt" />
              <div class="text year" :class="item.finished ? 'blue' : ''">{{item.year}}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="map">
        <ul class="list">
          <li class="item" v-for="item in bottomFilter" :key="item.id">
            <div class="block">
              <h4 class="text bold">{{item.title}}</h4>
              <img class="img" :src="item.img" :alt="item.alt" />
              <div class="text year" :class="item.finished ? 'blue' : ''">{{item.year}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Roadmap",
  data() {
    return {
      roadmap: [
        {
          top: true,
          finished: true,
          year: "2017",
          title: "Distributed Data Market",
          img: require("../../../assets/img/roadmap/dataMarket.png"),
          alt: "Distributed Data Market",
          id: 1
        },
        {
          top: true,
          finished: true,
          year: "2018",
          title: "Industry 4.0 Audit Trail",
          img: require("../../../assets/img/roadmap/dataMarket.png"),
          alt: "Industry 4.0 Audit Trail",
          id: 2
        },
        {
          top: true,
          finished: true,
          year: "2018",
          title: "ID & Access Solution",
          img: require("../../../assets/img/roadmap/dataMarket.png"),
          alt: "ID & Access Solution",
          id: 3
        },
        {
          top: true,
          finished: true,
          year: "2019",
          title: "Automated M2M payment",
          img: require("../../../assets/img/roadmap/dataMarket.png"),
          alt: "Automated M2M payment",
          id: 4
        },
        {
          top: false,
          finished: true,
          year: "2019",
          title: "Virtual Blockchain Lab",
          img: require("../../../assets/img/roadmap/dataMarket.png"),
          alt: "Virtual Blockchain Lab",
          id: 5
        },
        {
          top: false,
          finished: false,
          year: "2020",
          title: "Physical Blockchain Lab",
          img: require("../../../assets/img/roadmap/dataMarket.png"),
          alt: "Physical Blockchain Lab",
          id: 6
        },
        {
          top: false,
          finished: false,
          year: "2021",
          title: "ID & Access Solution",
          img: require("../../../assets/img/roadmap/dataMarket.png"),
          alt: "ID & Access Solution",
          id: 7
        },
        {
          top: false,
          finished: false,
          year: "2022",
          title: "Machine bank as a service",
          img: require("../../../assets/img/roadmap/dataMarket.png"),
          alt: "Machine bank as a service",
          id: 8
        },
      ]
    };
  },
  computed: {
    topFilter() {
      return this.roadmap.filter(obj => obj.top);
    },
    bottomFilter() {
      return this.roadmap.filter(obj => !obj.top);
    }
  }
};
</script>

<style lang="scss" scoped>
.roadmap {
  padding-bottom: 200px;
  background: #eee;
}

.info {
  padding-top: 50px;
  display: flex;
}

h2 {
  color: var(--akita-pink);
  margin-right: 50px;
}

.map {
  margin-bottom: 130px;
  margin-top: 50px;
  border-bottom: 1px solid var(--akita-blue);
  color: grey;
}

.list {
  display: flex;
  justify-content: space-between;
}

.item {
  width: 22%;
}

.block {
  position: relative;
}

h4 {
  text-align: center;
  color: var(--akita-blue);
  margin: 5px;
}

.year {
  position: absolute;
  bottom: calc(0% - 45px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  text-align: center;
  padding-top: 15px;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid var(--akita-blue);
  color: var(--akita-blue);
}

.blue {
  background-color: var(--akita-blue);
  color: #fff;
}

.img {
  width: 100%;
  border-radius: 10px;
  background: #fff;
}
</style>