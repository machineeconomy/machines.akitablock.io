<template>
  <section class="team">
    <div class="contain">
      <div class="information">
        <h2 class="title">Team</h2>
        <p class="text normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quasi minus veniam aspernatur distinctio quisquam, ipsum quibusdam ducimus in facere!</p>
      </div>
      <div class="team__section">
        <ul>
          <li v-for="person in team">
            <div class="person">
              <div class="img"></div>
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
  name: "Team",
  data() {
    return {
      team: [
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "#",
          icon: "#"
        },
        {
          name: "George B.",
          description: "co-founder, mobile apps production, 8+ years experience",
          img: "#",
          icon: "#"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "#",
          icon: "#"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "#",
          icon: "#"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "#",
          icon: "#"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "#",
          icon: "#"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "#",
          icon: "#"
        },
        {
          name: "Richard G.",
          description: "co-founder, tehnical lead, 8+ years experience",
          img: "#",
          icon: "#"
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
    margin-bottom: 30px;
    p {
      padding: 15px 80px;
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
  }

  .img {
    width: 200px;
    height: 200px;
    background-color: grey;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 20px;
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