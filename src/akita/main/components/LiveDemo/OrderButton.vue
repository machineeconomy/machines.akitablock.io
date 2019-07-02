<template>
  <base-button @click="order" :disabled="loading">
  <div v-if="loading">
    <pulse-loader  :loading="true" color="#FFFFFF" size="5px"></pulse-loader>
    <p v-for="(message, index) in logs" :key="index">{{message}}</p>
  </div>
    <slot v-else>{{text}}</slot>
  </base-button>
</template>

<script>
const axios = require("axios");
import { composeAPI } from "@iota/core";

const iota = composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: "OrderButton",
  components: { PulseLoader },
  props: {
    text: {
      type: String,
      default: "",
      description: "Button text in case not provided via default slot"
    },
    name: {
      type: String,
      required: true,
      description: "The name of the product which can be ordered."
    },
    url: {
      type: String,
      required: true,
      description: "URL of the provider machine."
    },
    amount: {
      type: Number,
      required: true,
      description: "Value of IOTA which will be sent to the provider."
    }
  },
  data() {
    return {
      seed: "",
      loading: false,
      logs: []
    };
  },
  created() {
    this.seed = localStorage.getItem("seed");
  },
  methods: {
    order() {
      this.loading = true;
      let self = this;
      axios
        .post(this.url + "/orders/", {})
        .then(function(response) {
          console.log(response);
          if (response.status == 200) {
            let address = response.data;
            self.transferIOTA(address);
            self.logs.push(`Pay tp address: https://devnet.thetangle.org/address/s  ${address}`)
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    transferIOTA(address) {
      console.log(`send ${this.amount} iota to ${address}.`);
      // Array of transfers which defines transfer recipients and value transferred in IOTAs.
      const transfers = [
        {
          address: address,
          value: this.amount, // 1Ki
          tag: "AKITA9MACHINE", // optional tag of `0-27` trytes
          message: "" // optional message in trytes
        }
      ];

      // Depth or how far to go for tip selection entry point.
      const depth = 3;

      // Difficulty of Proof-of-Work required to attach transaction to tangle.
      // Minimum value on mainnet is `14`, `7` on spamnet and `9` on devnet and other testnets.
      const minWeightMagnitude = 9;

      // Prepare a bundle and signs it.
      iota
        .prepareTransfers(this.seed, transfers)
        .then(trytes => {
          // Persist trytes locally before sending to network.
          // This allows for reattachments and prevents key reuse if trytes can't
          // be recovered by querying the network after broadcasting.

          // Does tip selection, attaches to tangle by doing PoW and broadcasts.
          return iota.sendTrytes(trytes, depth, minWeightMagnitude);
        })
        .then(bundle => {
          console.log(
            `Published transaction with tail hash: ${bundle[0].hash}`
          );
          console.log(`Bundle: ${bundle}`);
          this.loading = false;
          let obj = {
            tx: bundle[0].hash,
            name: this.name
          };
          this.$emit("ordered", obj);
        })
        .catch(err => {
          // handle errors here
          console.log("Error sending iota", err);
        });
    }
  }
};
</script>
