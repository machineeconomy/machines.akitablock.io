<template>
  <div class="contacts">
    <div class="contain">
      <div class="info">
        <div class="block">
          <p class="text padding">Site Notice</p>
          <p class="text">AKITA Blockchain Solutions Pte. Ltd.</p>
          <p class="text">1 Scotts Road</p>
          <p class="text">Shaw Centre</p>
          <p class="text padding">Singapore 228208</p>
          <p class="text padding">Director: Nino Ulrich</p>
          <p class="text">UEN: ABC12345678</p>
        </div>
        <div class="block">
          <p class="text padding">MACHINES</p>
          <p class="text padding">Roadmap References</p>
          <p class="text">Text</p>
          <p class="text">Text</p>
          <p class="text">Text</p>
          <p class="text padding">Text</p>
          <p class="text">MACHINES is a product of AKITA Blockchain Solutions Pte. Ltd.</p>
          <p class="text">2019 c Copyright all rights reserved</p>
        </div>
        <div class="block">
          <ul class="list">
            <li class="item" v-for="network in networks" :key="network.id">
              <a class="link" :href="network.href" :style="{backgroundImage: `url('${network.url}')`}" target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      networks: [
        {
          href: 'https://twitter.com/AkitaBlock',
          url: require('../../../assets/img/icons/twitter.png'),
          id: 1
        },
        {
          href: 'https://www.linkedin.com/in/nino-ulrich',
          url: require('../../../assets/img/icons/linkedin.png'),
          id: 2
        },
        {
          href: 'https://github.com/machineeconomy',
          url: require('../../../assets/img/icons/github.png'),
          id: 3
        },
        {
          href: 'https://www.iota.org',
          url: require('../../../assets/img/icons/iota.png'),
          id: 4
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  background: linear-gradient(
    to right,
    var(--akita-blue) 0%,
    var(--akita-violet) 40%,
    var(--akita-pink) 100%
  );
  position: absolute;
  bottom: 0;
  width: 100%;
}

.info {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  p {
    color: #fff;
  }
}

.block {
  padding-bottom: 20px;
  &:nth-child(1) {
    padding-right: 50px;
  }
}

.padding {
  padding-bottom: 15px;
}

.list {
  display: flex;
  justify-content: flex-end;
}

.link {
  display: block;
  height: 50px;
  width: 50px;
  margin: 15px;
  background-size: 100%;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1)
  }
}

@media(max-width: 1200px) {
  .list {
    flex-direction: column;
    width: 40px;
  }
  .link {
    width: 40px;
    height: 40px;
    margin: 10px 0;
  }
  .block {
    &:nth-child() {
      width: 50px;
    }
  }
}

@media(max-width: 700px) {
  .info {
    flex-direction: column;
  }
  .list {
    flex-direction: row;
    width: 250px;
    justify-content: space-between;
  }
  .link {
    width: 40px;
    height: 40px;
    margin: 10px 0;
  }
  .block {
    &:nth-child() {
      width: 50px;
    }
  }
}
</style>
