<template>
  <section class="services">
    <div class="contain">
      <h2 class="title">Our blockchain services</h2>
      <p class="text normal">We offer modular and extendable services to get your blockchain business started/ bossted</p>
      <div class="blocks">
        <div class="basic">
          <div class="block">
            <p class="text normal">PoC</p>
            <p class="text normal">existing business</p>
            <p class="text normal">Project based</p>
            <button class="btn ntn-1">Basic</button>
          </div>
        </div>
        <div class="premium">
          <div class="block">
            <p class="text normal">PoC</p>
            <p class="text normal">existing business</p>
            <p class="text normal">Project based</p>
            <button class="btn ntn-1 btn-info">Premium</button>
          </div>
        </div>
        <div class="custom">
          <div class="block">
            <p class="text normal">PoC</p>
            <p class="text normal">existing business</p>
            <p class="text normal">Project based</p>
            <button class="btn ntn-1 btn-danger">Custom</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .services {
    margin-bottom: 200px;
  }

  h2 {
    margin-bottom: 30px;
  }

  .blocks {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .basic, .premium, .custom {
    width: 250px;
    height: 400px;
    border-radius: 20px;
  }

  .basic {
    background-color: #DAD9DA;
    margin-right: 50px;
    margin-bottom: 50px;
    button {
      background-color: #DAD9DA;
      width: 200px;
    }
  }

  .premium {
    background-color: #4BAFEB;
    margin-right: 50px;
    margin-bottom: 50px;
    button {
      background-color: #4BAFEB;
      width: 200px;
    }
  }

  .custom {
    background-color: #EB479E;
    button {
      background-color: #EB479E;
      width: 200px;
    }
  }

  button {
    border-radius: 10px;
    position: absolute;
    bottom: 10%;
    left: 25px;
  }

  .block {
    background-color: #F2F2F2;
    width: 100%;
    height: 340px;
    margin-top: 25px;
    padding: 10px;
    position: relative;
    p {
      line-height: 1;
    }
  }

  @media(max-width: 950px) {
  .custom {
      margin-left: 150px;
    }
  }

  @media(max-width: 700px) {
    .blocks {
      flex-direction: column;
    }

    .basic, .premium, .custom {
      margin: 25px auto;
    }
  }

  @media(max-width: 500px) {
    .basic, .premium {
      margin-right: 0;
    }
  }

</style>