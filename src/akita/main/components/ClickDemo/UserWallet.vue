<template>
  <div class="user">
    <div class="user_wallet">
      <h3>Your wallet</h3>
      <p class="balance">{{balance}}</p>
      <p>Balance</p>
    </div>
    <div class="user_wallet__conent" v-if="!balance">
      <p>You dont have any virtual tokens anymore. Please refresh the website tp generate new virtual tokens.</p>
    </div>
    <div class="user_wallet__conent" v-else>
      <h4>Order a Product</h4>
      <order-button @ordered="ordered" name="Headphone" :amount="100">Buy Headphone (100)</order-button>
      <br>
      <br>
      <br>
      <strong>or</strong>
      <br />
      <br />
      <br />
      <order-button @ordered="ordered" name="Laptop" :amount="1000">Buy Laptop (1000)</order-button>
      <div v-if="orders" class="orders">
        <p v-for="(order, index) in orders" :key="index">
          <a
            target="_blank"
            :href="`https://devnet.thetangle.org/transaction/${order}`"
          >Order {{index}}</a>
        </p>
      </div>
    </div>
    <img
      class="business_woman"
      src="../../../../assets/img/business_woman.png"
      alt="business_woman"
    />
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import OrderButton from "./OrderButton";

export default {
  name: "User",
  components: { PulseLoader, OrderButton },
  props: ["balance"],
  data() {
    return {
      orders: [],
      loading: true
    };
  },
  methods: {
    ordered(order) {
      // TODO: save the order object to the history
      if (order.amount <= this.balance) {
        this.$emit("ordered", order);
      } else {
        console.log("not enough virtual tokens");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  padding: 10px 20px;
  width: 30%;
  max-height: 500px;
  max-width: 320px;
  h3 {
    color: white;
  }
  .user_wallet {
    text-align: center;
    border-radius: 20px;
    padding: 20px;
    background: linear-gradient(
      to top left,
      var(--akita-blue) 0%,
      var(--akita-primary) 50%,
      var(--akita-secondary) 100%
    );
    p {
      color: white;
      margin: 0;
    }
    .balance {
      margin: 0;
      font-size: 3em;
    }
    &__conent {
      min-height: 500px;
      border-radius: 20px;
      background-color: #efefef;
      padding: 20px;
      text-align: center;
      p {
        color: black;
        margin: 0;
        word-wrap: break-word;
      }
    }
  }
  button {
    z-index: 2;
  }
  .business_woman {
    width: 400px;
    height: 400px;
    position: relative;
    right: calc(100% - 50px);
    bottom: 300px;
    z-index: 1;
  }
}

@media (max-width: 900px) {
  .user {
    min-width: 100%;
    height: 100%;
    .business_woman {
      right: calc(80% - 70px);
    }
  }
}
</style>
