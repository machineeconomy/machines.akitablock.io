<template>
  <section class="people">
    <div class="contain">
      <div class="info">
        <p
          class="text"
        >Skills to deliver, diverse people & personalities, global team, all focused on the same goal to DELIVER!</p>
      </div>
      <div class="team block">
        <h3 class="title">Team</h3>
        <ul class="list">
          <li class="item" v-for="person in team" :key="person.id">
            <p class="text bold">{{person.name}}</p>
            <p class="text color">{{person.description}}</p>
          </li>
        </ul>
      </div>
      <div class="advisors block">
        <h3 class="title">Advisors</h3>
        <ul class="list">
          <li class="item" v-for="person in advisors" :key="person.id">
            <p class="text bold">{{person.name}}</p>
            <p class="text color">{{person.description}}</p>
          </li>
        </ul>
      </div>
      <div class="partners block">
        <h3 class="title">Partners</h3>
        <ul class="list">
          <li class="item" v-for="partner in partners" :key="partner.id">
            <p class="text bold color">{{partner.name}}</p>
          </li>
        </ul>
      </div>
      <div class="news block">
        <h3 class="title">News</h3>
        <ul class="list">
          <li class="item" v-for="record in news" :key="record.id">
            <p class="text bold color">{{record.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'People',
  data() {
    return {
      team: [
        { name: 'Nino Ulrich', description: 'Co-Founder', key: 1 },
        { name: 'Janina Ulrich', description: 'Co-Founder', key: 2 },
        { name: 'Felix Walter', description: 'Business Dev.', key: 3 },
        { name: 'Dr.Christian Berning', description: 'Banking Expert', key: 4 },
        { name: 'Sebastian Wolff', description: 'Sales & Marketing', key: 5 },
        { name: 'Sebastian Heusser', description: 'Blockchain Dev.', key: 6 },
        { name: 'Martin Neubauer', description: 'Blockchain Dev.', key: 7 },
        { name: 'Pavel Maxuta', description: 'Blockchain Dev.', key: 8 }
      ],
      advisors: [
        { name: 'Ulrich Kemp', description: 'Sales & Marketing', key: 1 },
        { name: 'Nico Konrad', description: 'STO Services', key: 2 },
        { name: 'Yasmin Ulrich', description: 'Payments & Banking', key: 3 },
        { name: 'Hirad Horoufchin', description: 'Investment', key: 4 },
        { name: 'Loy', description: 'Legal & Strategy', key: 5 },
        { name: 'CK Tong', description: 'International Trade', key: 6 },
        { name: 'Mina Chung', description: 'Banking & Customs', key: 7 },
        {
          name: 'Yuanfei Zhu',
          description: 'Blockchain Dev & Investment',
          key: 8
        },
        { name: 'Kyle Weber', description: 'Automotive & EV', key: 9 },
        {
          name: 'Tobias Masiak ',
          description: 'Academic & Production',
          key: 10
        },
        { name: 'MORE', description: 'R&D', key: 11 }
      ],
      partners: [
        { name: 'DLT Capital', key: 1 },
        { name: 'unitedcrowd', key: 2 },
        { name: 'Dentons', key: 3 },
        { name: 'Satori', key: 4 },
        { name: 'Homerun Capital', key: 5 },
        { name: 'Zema', key: 6 },
        { name: 'Brandfocus (Monkkey)', key: 7 },
        { name: 'MORE', key: 8 }
      ],
      news: [
        { name: 'BTC-Echo', key: 1 },
        { name: 'Medium', key: 2 },
        { name: 'Cointelegraph', key: 3 },
        { name: 'MORE', key: 4 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.people {
  background: #eee;
}

.info {
  padding: 20px 0 50px 250px;
}

.block {
  display: flex;
  padding-bottom: 50px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

h3 {
  min-width: 350px;
  padding-bottom: 20px;
}

.item {
  width: 25%;
  margin-bottom: 25px;
}

.team {
  h3,
  .color {
    color: var(--akita-pink);
  }
}

.advisors {
  h3,
  .color {
    color: var(--akita-violet);
  }
}

.partners {
  h3,
  .color {
    color: var(--akita-blue);
  }
}

@media (max-width: 1250px) {
  h3 {
    min-width: 250px;
  }
  .item {
    width: 200px;
  }
}

@media (max-width: 1000px) {
  .info {
    padding: 20px 0 50px;
  }
  .block {
    display: block;
  }
  .item {
    width: 200px;
  }
}
</style>