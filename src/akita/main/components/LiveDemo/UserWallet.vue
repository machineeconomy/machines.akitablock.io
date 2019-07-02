<template>
  <div class="user">
    <div class="user_wallet">
      <h3>Your wallet</h3>
      <p class="balance">{{balance}}</p>
      <p>Balance</p>
    </div>
    <div class="user_wallet__conent" v-if="!balance">
      <div v-if="!waitForTokens">
        <p>Your browser wallet don't have any IOTA tokens on it.</p>
        <p>Send IOTA devnet tokens with our IOTA Devnet Faucet. Just click this button below and wait for the IOTA tokens.</p>
        <p>
          <strong>Note: This could take a while</strong>
        </p>
        <base-button class="button" v-on:click="callFaucet">Get Tokens</base-button>
      </div>
      <div v-else>
        <pulse-loader :loading="true" color="#5f46b1" size="5px"></pulse-loader>
        <h5>Loading...</h5>
        <p>
          Watch address on
          <a
            :href="`https://devnet.thetangle.org/address/${address}`"
            target="_blank"
          >theThangle.org</a>.
        </p>
        <p>
          <strong>Don't refresh this page - it will show the balance automatically</strong>
        </p>
      </div>
    </div>
    <div class="user_wallet__conent" v-else>
      <h4>Order a Product</h4>
      <OrderButton
        class="button"
        @ordered="ordered"
        name="headphone"
        :url="machine_1_url"
        :amount="1"
      >Buy Headphone</OrderButton>
      <p>or </p>
      <OrderButton
        class="button"
        @ordered="ordered"
        name="laptop"
        :url="machine_2_url"
        :amount="1"
      >Buy Laptop</OrderButton>
      <div v-if="orders" class="orders">
        <p v-for="(order, index) in orders" :key="index">
          <a
            target="_blank"
            :href="`https://devnet.thetangle.org/transaction/${order}`"
          >Order {{index}}</a>
        </p>
      </div>
    </div>
    <img class="business_woman" src="../../../../assets/img/business_woman.png" alt="business_woman">
  </div>
</template>

<script>
import { composeAPI } from "@iota/core";
import generateSeed from "@/utils/generateSeed.js";

import OrderButton from "./OrderButton.vue";

import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const iota = composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});
const axios = require("axios");

export default {
  name: "UserWallet",
  components: { OrderButton, PulseLoader },
  data() {
    return {
      balance: 0,
      seed: "",
      address: "",
      orders: [],
      waitForTokens: false,
      machine_1_url: process.env.VUE_APP_MACHINE_1_URL,
      machine_2_url: process.env.VUE_APP_MACHINE_2_URL
    };
  },
  created() {
    // Fetch seed from local storage
    this.seed = localStorage.getItem("seed");
    this.address = localStorage.getItem("address");
    if (!this.seed || !this.address) {
      // create new seed
      this.seed = generateSeed();
      // set seed to local storage
      this.seed = localStorage.setItem("seed", this.seed);
      this.createNewAddress();
    }
    this.fetchBalance();
  },
  methods: {
    fetchBalance() {
      console.log("fetch balance", this.address);
      iota
        .getBalances([this.address], 100)
        .then(({ balances }) => {
          this.balance = balances[0];
        })
        .catch(err => {
          console.log("error fetching balance, err");
        });
    },
    createNewAddress() {
      iota
        .getNewAddress(localStorage.getItem("seed"), { index: 0 })
        .then(address => {
          localStorage.setItem("address", address);
          this.address = address;
        })
        .catch(err => {
          console.log("Error on 'getNewAddress'", err);
        });
    },
    callFaucet() {
      let self = this;
      this.waitForTokens = true;
      self.$emit("newActivity", {
        message: "User requested for tokens.",
        timestamp: Date.now()
      });
      axios
        .post(
          "https://akita.einfach-iota.de:5000/send_tokens?address=" +
            this.address,
          {}
        )
        .then(function(response) {
          if (response.status == 200) {
            console.log(
              "devnet faucet sent stokens to this address: ",
              self.address
            );

            // check for balance
            self.startBalanceChecker();
          } else {
            console.log("something went wrong.");
            console.log("Error response: ", response);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    startBalanceChecker() {
      this.checkBalanceInterval = setInterval(
        function() {
          // Check the iota balance
          iota
            .getBalances([this.address], 100)
            .then(({ balances }) => {
              this.balance = balances[0];
              if (this.balance > 0) {
                this.waitForTokens = false;
                this.$emit("newActivity", {
                  message: "Tokens from faucet arrived.",
                  timestamp: Date.now()
                });
                clearInterval(this.checkBalanceInterval);
              }
            })
            .catch(err => {
              console.log("getBalances got an error: ", err);
            });
        }.bind(this),
        3000
      );
    },
    ordered(order) {
      console.log("type", order);
      // TODO: save the order object to the history

      this.fetchBalance();
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
            z-index: 1;

  padding: 10px 20px;
  min-width: 290px;
  max-height: 500px;
  max-width: 300px;
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
      border-radius: 20px;
      background-color: #efefef;
      padding: 20px;
      text-align: center;
      max-width: 260px;
      min-width: 240px;
      p {
        color: black;
        margin: 0;
        word-wrap: break-word;
      }
    }
  }
  .button {
    z-index: 2;
  }
  a {
    z-index: 2;
  }
  .business_woman {
    width: 400px;
    height: 400px;
    position: relative;
    right: calc(100% - 50px);
    bottom: 300px;
    z-index: 0;
  }
}

@media (max-width: 900px) {
  .user {
    margin: auto;
    .business_woman {
      right: calc(0% - 120px);
    }
  }
}

@media (max-width: 450px) {
  .user {
    margin-left: -20px;
  }
  .user_wallet__conent p{
    line-height: 1.3;
  }
}

</style>
