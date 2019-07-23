<template>
  <section class="deliveryRoadmap">
    <div class="contain">
      <h2 class="title">We are pioneers in delivering blockchain prototypes</h2>
      <p class="text normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint temporibus libero architecto assumenda perspiciatis expedita fugiat alias totam quidem quaerat doloribus, dolores tempora molestias officiis pariatur distinctio. Tenetur, magni!</p>
    <div class="roadmap">
      <div class="roadmap__left">
        <ul>
          <li v-for="item in roadmap">
            <div class="block" v-show="item.left" :style="{ 'margin-top': item.margin + 'px' }">
              <div v-if="item.finished" class="text bold year blue">{{item.year}}</div>
              <div v-else class="text bold year">{{item.year}}</div>
              <h4 class="text bold right">{{item.title}}</h4>
              <p class="text normal">{{item.text}}</p>
              <p class="text normal text__description">{{item.description}}</p>
              <img class="img" :src="item.img" :alt="item.alt">
            </div>
          </li>
        </ul>
      </div>
      <div class="roadmap__right">
        <ul>
          <li v-for="item in roadmap">
            <div class="block" v-if="!item.left" :style="{ 'margin-top': item.margin + 'px' }">
              <div v-if="item.finished" class="text bold year blue">{{item.year}}</div>
              <div v-else class="text bold year">{{item.year}}</div>
              <h4 class="text bold">{{item.title}}</h4>
              <p class="text normal">{{item.text}}</p>
              <p class="text normal text__description">{{item.description}}</p>
              <img class="img" :src="item.img" :alt="item.alt">
            </div>
          </li>
        </ul>
      </div>
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
          left: true,
          year: "2017",
          finished: true,
          title: "Distributed Data Market",
          text: "AKITA and 60 companies like Bosch, Telekom, EY participate in a closed beta test of a decentralized “ebay” for sensor data directly bought, sold and documented on a global distributed platform by IOTA.",
          description: "This project drove IOTA’s token price from less than 1$ to 5$ in less than a month..",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmtlOau9rrVih-xbzQg-LLpauw8JoRCt9itEvxhD3WYV_A3Vv",
          alt: "network",
          margin: 0
        },
        {
          left: false,
          year: "2018",
          finished: true,
          title: "Industry 4.0 Audit Trail",
          text: "Fujitsu presented the worlds first live Production Audit Trail showcase at the HMI 2018 with components and robots. The complete blockchain software integration was delivered by AKITA as official supplier.",
          description: "Dominated Social Media #HMI with more 4.5 million organic impressions in 3 days on twitter alone.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmtlOau9rrVih-xbzQg-LLpauw8JoRCt9itEvxhD3WYV_A3Vv",
          alt: "img",
          margin: 350
        },
        {
          left: true,
          year: "2018",
          finished: true,
          title: "ID & Access Solution",
          text: "A global personal ID combined with cutting edge biometric tech was build in cooperation with the e-shelter innovation lab. Registration, Authentication and tamper proof access log files. ",
          description: "Nominated for the German Data Center Innovation Award.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmtlOau9rrVih-xbzQg-LLpauw8JoRCt9itEvxhD3WYV_A3Vv",
          alt: "img",
          margin: 150
        },
        {
          left: false,
          year: "2019",
          finished: true,
          title: "Automated M2M payment",
          text: "Modular machine-to-machine payment prototypes presented live on stage. The car pays a micro transaction based on the real time parking duration, triggering the parking space to an automated tax payment.",
          description: "AKITA was invited with 19 other companies out of 700 applications to the Dubai Future Blockchain Summit.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmtlOau9rrVih-xbzQg-LLpauw8JoRCt9itEvxhD3WYV_A3Vv",
          alt: "img",
          margin: 350
        },
        {
          left: true,
          year: "2019",
          finished: true,
          title: "Virtual Blockchain Lab",
          text: "The Virtual Lab demonstrates blockchain based live Use Cases in a fast and easy to use test environment. The perfect opportunity for corporates to to gain valuable experience fast and without any risks.",
          description: "Our corporate partner network signed on the first clients and it is growing fast now.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmtlOau9rrVih-xbzQg-LLpauw8JoRCt9itEvxhD3WYV_A3Vv",
          alt: "img",
          margin: 350
        },
        {
          left: false,
          year: "2019",
          finished: false,
          title: "Physical Blockchain Lab ",
          text: "We are pioneers in hardware integration to blockchain based software and services. Our strength linked to the modular design of the virtual lab will allow seamless transfer to physical applications.",
          description: "Established collaboration with universities, signed NDAs with corporates from automotive, OEM and energy sectors.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmtlOau9rrVih-xbzQg-LLpauw8JoRCt9itEvxhD3WYV_A3Vv",
          alt: "img",
          margin: 350
        },
        {
          left: true,
          year: "2020",
          finished: false,
          title: "Machine Bank",
          text: "The mainstream breakthrough will be driven by previous projects like ours and real world productive applications that deliver on the promises of blockchain: shared, global, fast, cost efficient and more secure.",
          description: "Fully autonomous driving cars, buying and offering services to other machines and turning your car into an asset will be game changer.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmtlOau9rrVih-xbzQg-LLpauw8JoRCt9itEvxhD3WYV_A3Vv",
          alt: "img",
          margin: 350
        },
        {
          left: false,
          year: "2021",
          finished: false,
          title: "Machine Economy",
          text: "Our modular service architecture enables us to extend functions,, services, network, infrastructures in all directions.",
          description: "AKITA’s first mover initiative will provide partners, investors and clients a unique position in the new markets.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmtlOau9rrVih-xbzQg-LLpauw8JoRCt9itEvxhD3WYV_A3Vv",
          alt: "img",
          margin: 350
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .deliveryRoadmap {
    margin-bottom: 200px;
  }

  .roadmap {
    display: flex;
    justify-content: center;
    margin: 30px 50px;
    text-align: justify;
  }

  .roadmap__left {
    border-right: 2px dotted #00B0F0;
    width: 50%;
    padding: 50px;
  }

  .roadmap__right {
    width: 50%;
    padding: 50px;
  }

  h4 {
    margin: 5px 0 20px;
  }

  .text__description {
    margin-top: 20px;
    color: #00B0F0;
  }

  .year {
    position: absolute;
    left: calc(50% - 30px);
    width: 60px;
    height: 60px;
    text-align: center;
    padding-top: 13px;
    background-color: #fff;
    border-radius: 50%;
    border: 3px solid #00B0F0;
    color: #00B0F0;
  }

  .blue {
    background-color: #00B0F0;
    color: #fff;
  }

  .img {
    width: 100%;
  }

  @media(max-width: 1000px) {
    .roadmap {
      margin: 30px 0;
    }

    .roadmap__left {
      padding-left: 0;
    }

    .roadmap__right {
      padding-right: 0;
    }

    .year {
      padding-top: 17px;
    }
  }

  @media(max-width: 600px) {
    .roadmap {
      margin: 30px 0;
    }

    .roadmap__left {
      border: none;
      padding: 50px 0;
      width: 100%;
    }

    .roadmap__right {
      display: none;
    }

    .block {
      margin-top: 100px !important;
      display: block !important;
    }

    .year {
      position: relative;
      left: 75%;
    }
  }
</style>