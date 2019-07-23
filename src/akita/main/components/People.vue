<template>
  <section class="team">
    <div class="contain">
      <div class="information">
        <h2 class="title">Team</h2>
        <p class="text normal">We offer modular and extendable services to get your blockchain business stated/ boosted:</p>
      </div>
      <div class="team__section">
        <ul>
          <li v-for="person in team">
            <div class="person">
              <img class="img" :src="person.img" :alt="person.name">
              <span class="icon" :style="{'background-image': `url(${person.icon})`}"></span>
              <p class="text name bold">{{person.name}}</p>
              <p class="text lighter">{{person.description}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "People",
  data() {
    return {
      team: [
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "https://i1.wp.com/www.rivermedcenter.net/wp-content/uploads/2017/02/profile-img.jpg",
          icon: "https://www.bitprime.co.nz/wp-content/uploads/2018/01/IOTA.png"
        },
        {
          name: "George B.",
          description: "co-founder, mobile apps production, 8+ years experience",
          img: "https://i1.wp.com/www.rivermedcenter.net/wp-content/uploads/2017/02/profile-img.jpg",
          icon: "https://www.bitprime.co.nz/wp-content/uploads/2018/01/IOTA.png"
        },
        {
          name: "Jane M.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "https://i1.wp.com/www.rivermedcenter.net/wp-content/uploads/2017/02/profile-img.jpg",
          icon: "https://www.bitprime.co.nz/wp-content/uploads/2018/01/IOTA.png"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "https://i1.wp.com/www.rivermedcenter.net/wp-content/uploads/2017/02/profile-img.jpg",
          icon: "https://www.bitprime.co.nz/wp-content/uploads/2018/01/IOTA.png"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "https://i1.wp.com/www.rivermedcenter.net/wp-content/uploads/2017/02/profile-img.jpg",
          icon: "https://www.bitprime.co.nz/wp-content/uploads/2018/01/IOTA.png"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "https://i1.wp.com/www.rivermedcenter.net/wp-content/uploads/2017/02/profile-img.jpg",
          icon: "https://www.bitprime.co.nz/wp-content/uploads/2018/01/IOTA.png"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "https://i1.wp.com/www.rivermedcenter.net/wp-content/uploads/2017/02/profile-img.jpg",
          icon: "https://www.bitprime.co.nz/wp-content/uploads/2018/01/IOTA.png"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "https://i1.wp.com/www.rivermedcenter.net/wp-content/uploads/2017/02/profile-img.jpg",
          icon: "https://www.bitprime.co.nz/wp-content/uploads/2018/01/IOTA.png"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .team {
    margin-bottom: 500px;
  }

  .information {
    display: flex;
    justify-content: start;
    margin-bottom: 30px;
    p {
      padding: 30px 80px;
    }
  }

  .team__section {
    background-color: #FAFBFB;
    max-width: 1400px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  .person {
    width: 350px;
    padding: 40px;
    text-align: center;
    margin: auto;
    position: relative;
  }

  .img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 20px;
  }

  .icon {
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 40px;
    left: 55px;
    background-size: contain;
  }

  .name {
    margin-bottom: 15px;
  }

  @media(max-width: 1000px) {
    .team {
      margin-bottom: 200px;
    }

    .information {
      flex-direction: column;
      p {
        padding: 0;
        margin: 20px 0;
      }
    }
  }

  @media(max-width: 500px) {
    .person {
      padding: 40px 0;
      width: 300px;
    }
  }
</style>