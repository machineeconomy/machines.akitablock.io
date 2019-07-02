<template>
  <div class="machine">
    <img class="machine_img" :src="getImgUrl()" alt="machine">
    <div class="machine_wallet">
      <h3>{{ mutableName }}</h3>
      <p class="balance">{{ this.balance }}</p>
      <p>
        <pulse-loader :loading="!this.balance" color="#FFFFFF" size="5px"></pulse-loader>Balance
      </p>
    </div>
    <div v-if="connected" class="info">
      <div :class="status">
        <badge :type="getStatusColor(status)">{{status}}</badge>
      </div>
    </div>
    <div v-else class="info not_connected">
      <badge :type="getStatusColor('not_connected')">not connected</badge>
      <p>
        connecting...
        <pulse-loader :loading="true" color="#5f46b1" size="5px"></pulse-loader>
      </p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  props: ["url", "name"],
  components: { PulseLoader },
  data() {
    return {
      status: "",
      balance: "",
      connected: false,
      mutableName: this.name
    };
  },
  created() {
    var socket = io(this.url, { path: "/socket", secure: true });
    if (socket) {
      var self = this;
      socket.on("init", function(msg) {
        self.mutableName = msg.name;
        self.status = msg.status;
        self.connected = true;
        self.$emit("newActivity", {
          message: `Machine '${self.name}' connected.`,
          timestamp: Date.now()
        });
      });

      socket.on("status", function(msg) {
        console.log("ws: tx_confirmed", msg);
        self.status = msg.status;
        self.$emit("newActivity", {
          message: `Machine '${self.name}': ${msg.message}`,
          timestamp: Date.now()
        });
      });

      socket.on("new_balance", function(msg) {
        console.log("ws: new_balance", msg);
        self.balance = msg.balance.toString();
      });
    }
  },
  methods: {
    getImgUrl() {
      var images = require.context("../../../../assets/img/", false, /\.png$/);
      return images("./" + this.name + ".png");
    },
    getStatusColor(status) {
      switch (status) {
        case "not_connected":
          return "danger";
          break;
        case "waiting_for_order":
          return "info";
          break;
        case "waiting_for_tx":
        case "waiting_for_tx_confirm":
          return "primary";
          break;
        case "payout_provider":
          return "warning";
          break;
        case "working":
          return "success";
          break;
        default:
          return "default";
          break;
      }
    }
  }
};
</script>


<style lang="scss">
.machine {
  padding-bottom: 40px;
  display: flex;
  position: relative;
  right: 240px;
  .machine_img {
    width: 200px;
    height: 200px;
    position: relative;
    left: 80px;
    top: 100px;
  }
  .machine_wallet {
    min-width: 180px;
    float: left;
    text-align: center;
    border-radius: 20px;
    padding: 20px;
    background: linear-gradient(
      to top left,
      var(--akita-blue) 0%,
      var(--akita-primary) 50%,
      var(--akita-secondary) 100%
    );
    h3 {
      color: white;
    }
    p {
      color: white;
    }
    .balance {
      font-size: 3em;
    }
  }
  .info {
    min-width: 200px;
    padding: 5px;
    padding-top: 15px;
    width: 200px;
    float: right;
    border-radius: 20px;
    background: #efefef;
    text-align: center;
    justify-content: center;
    p {
      color: black;
    }
  }
  .not_connected {
    border: 2px solid red;
    p {
      padding-top: 20px;
      color: var(--akita-primary);
      text-align: center;
    }
  }
}

@media (max-width: 900px) {
  .machine {
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    position: relative;
    right: 0px;
    .machine_img {
      width: 100px;
      height: 100px;
      position: relative;
      left: 30px;
      top: 20px;
    }
    .machine_wallet {
      h3 {
        font-size: 1.2em;
      }
    }
  }
}
</style>
