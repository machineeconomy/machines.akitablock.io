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
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus rem at ratione maiores. Adipisci molestias iste dolor pariatur aut? Nam facere ut accusamus voluptatibus repellendus minima sit odit beatae.",
          img: "#",
          alt: "lorem",
          margin: 0
        },
        {
          left: false,
          year: "2018",
          title: "Headline",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus rem at ratione maiores. Adipisci molestias iste dolor pariatur aut? Nam facere ut accusamus voluptatibus repellendus minima sit odit beatae.",
          img: "#",
          alt: "lorem",
          margin: 250
        },
        {
          left: true,
          year: "2018",
          title: "Headline",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus rem at ratione maiores. Adipisci molestias iste dolor pariatur aut? Nam facere ut accusamus voluptatibus repellendus minima sit odit beatae.",
          img: "#",
          alt: "lorem",
          margin: 350
        },
        {
          left: false,
          year: "2019",
          title: "Headline",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus rem at ratione maiores. Adipisci molestias iste dolor pariatur aut? Nam facere ut accusamus voluptatibus repellendus minima sit odit beatae.",
          img: "#",
          alt: "lorem",
          margin: 350
        },
        {
          left: true,
          year: "2020",
          title: "Headline",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus rem at ratione maiores. Adipisci molestias iste dolor pariatur aut? Nam facere ut accusamus voluptatibus repellendus minima sit odit beatae.",
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