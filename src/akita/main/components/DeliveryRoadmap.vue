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
              <p class="text bold right">{{item.year}}</p>
              <h4 class="text bold right">{{item.title}}</h4>
              <p class="text normal">{{item.text}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="roadmap__right">
        <ul>
          <li v-for="item in roadmap">
            <div class="block" v-if="!item.left" :style="{ 'margin-top': item.margin + 'px' }">
              <p class="text bold">{{item.year}}</p>
              <h4 class="text bold">{{item.title}}</h4>
              <p class="text normal">{{item.text}}</p>
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
  name: "DeliveryRoadmap",
  data() {
    return { 
      roadmap: [
        {
          left: true,
          year: "2017",
          title: "Distributed Data Market",
          text: `AKITA and 60 companies like Bosch, Telekom, EY participate in a closed beta test of a decentralized “ebay” for sensor data directly bought, 
                sold and documented on a global distributed platform by IOTA. This project drove IOTA’s token price from less than 1$ to 5$ in less than a month..`,
          img: "#",
          alt: "lorem",
          margin: 0
        },
        {
          left: false,
          year: "2018",
          title: "Industry 4.0 Audit Trail",
          text: `Fujitsu presented the worlds first live Production Audit Trail showcase at the HMI 2018 with components and robots. 
                The complete blockchain software integration was delivered by AKITA as official supplier. 
                Dominated Social Media #HMI with more 4.5 million organic impressions in 3 days on twitter alone.`,
          img: "#",
          alt: "lorem",
          margin: 250
        },
        {
          left: true,
          year: "2018",
          title: "ID & Access Solution",
          text: `A global personal ID combined with cutting edge biometric tech was build in cooperation with the e-shelter innovation lab. 
                Registration, Authentication and tamper proof access log files. Nominated for the German Data Center Innovation Award.`,
          img: "#",
          alt: "lorem",
          margin: 350
        },
        {
          left: false,
          year: "2019",
          title: "Automated M2M payment",
          text: `Modular machine-to-machine payment prototypes presented live on stage. The car pays a micro transaction based on the real time parking duration,
                triggering the parking space to an automated tax payment. AKITA was invited with 19 other companies out of 700 applications to the Dubai Future Blockchain Summit.`,
          img: "#",
          alt: "lorem",
          margin: 350
        },
        {
          left: true,
          year: "2019",
          title: "Virtual Blockchain Lab",
          text: `The Virtual Lab demonstrates blockchain based live Use Cases in a fast and easy to use test environment. The perfect opportunity for corporates to to gain 
                valuable experience fast and without any risks. Our corporate partner network signed on the first clients and it is growing fast now.`,
          img: "#",
          alt: "lorem",
          margin: 350
        },
        {
          left: false,
          year: "2019",
          title: "Physical Blockchain Lab ",
          text: `We are pioneers in hardware integration to blockchain based software and services. Our strength linked to the modular design of the virtual lab will allow
                seamless transfer to physical applications. Established collaboration with universities, signed NDAs with corporates from automotive, OEM and energy sectors.`,
          img: "#",
          alt: "lorem",
          margin: 350
        },
        {
          left: true,
          year: "2020",
          title: "Machine Bank",
          text: `The mainstream breakthrough will be driven by previous projects like ours and real world productive applications that deliver on the promises of blockchain: shared, global,
                fast, cost efficient and more secure. Fully autonomous driving cars, buying and offering services to other machines and turning your car into an asset will be game changer.`,
          img: "#",
          alt: "lorem",
          margin: 350
        },
        {
          left: false,
          year: "2021",
          title: "Machine Economy",
          text: `Our modular service architecture enables us to extend functions,, services, network, infrastructures in all directions. 
                AKITA’s first mover initiative will provide partners, investors and clients a unique position in the new markets.`,
          img: "#",
          alt: "lorem",
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
    margin: 30px 50px;
    text-align: justify;
  }

  .roadmap__left {
    border-right: 2px dotted #BFBBF7;
    padding: 50px;
  }

  .roadmap__right {
    padding: 50px;
  }

  h4 {
    margin: 5px 0 20px;
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
  }

  @media(max-width: 600px) {
    .roadmap {
      margin: 30px 0;
    }

    .roadmap__left {
      border: none;
      padding: 50px 0;
    }

    .roadmap__right {
      display: none;
    }

    .block {
      margin-top: 100px !important;
      display: block !important;
    }
  }
</style>