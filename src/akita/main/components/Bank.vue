<template>
  <section class="bank">
    <div class="contain">
      <p class="text top">
        Machines were invented to increase productivity. Since the industrial revolution they have increased in numbers, became
        smart and improved our lives in countless ways. On the downside is takes a lot of work and effort to manage all of these devices:
      </p>
      <div class="column">
        <div class="block">
          <h2 class="title">The bank for machines</h2>
          <ul class="list">
            <li
              class="text list__item"
              v-for="item in list"
              :key="item.id"
              :style="{ backgroundImage: `url('${item.img}')` }"
            >{{item.text}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Evolution',
  data() {
    return {
      list: [
        {
          text: 'Machines have to be managed and updated to run correctly. Security of valuable information and data can be guaranteed.',
          img: require('../../../assets/img/icons/clock-b.png'),
          id: 1
        },
        {
          text: 'Just-in-time and global production is an industry standard.',
          img: require('../../../assets/img/icons/money-b.png'),
          id: 2
        },
        {
          text: 'Machines depend on financial service providers and traditional banks that charge enormous fees, do not operate on the weekends and take days to process cross-country transactions.',
          img: require('../../../assets/img/icons/people-b.png'),
          id: 3
        },
        {
          text: 'There are no global standards or networks architectures. Convert data form sources, formats and mediums like paper.',
          img: require('../../../assets/img/icons/network-b.png'),
          id: 4
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bank {
  padding-bottom: 100px;
  margin-bottom: 210px;
  background: url("../../../assets/img/machineChain.png") no-repeat -30% 70%;
  background-size: 50%;
}

.top {
  padding: 0 90px 50px 0;
}

.column {
  display: flex;
  justify-content: flex-end;
}

.block {
  width: 800px;
}

h2 {
  color: var(--akita-blue);
}

.list__item {
  padding-left: 70px;
  margin-top: 50px;
  min-height: 50px;
  background-repeat: no-repeat;
  background-size: 50px;
  background-position: left center;
}

@media (max-width: 1300px) {
  .bank {
    background-size: 55%;
  }
  .top {
    padding: 30px 90px 30px 0;
  }
  .block {
    width: 600px;
  }
  .list__item {
    margin-top: 30px;
  }
}

@media (max-width: 1100px) {
  .bank {
    background: none;
  }
  .top {
    padding: 30px 0;
  }
  .block {
    width: 100%;
  }
}
</style>

