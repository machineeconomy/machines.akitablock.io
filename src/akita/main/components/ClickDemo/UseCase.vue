<template>
  <div class="usecase">
    <modal
      :show.sync="order_result_modal"
      gradient="primary"
      modal-classes="modal-danger modal-dialog-centered"
    >
      <h6 slot="header" class="modal-title" id="modal-title-notification">Your product was finished!</h6>

      <div class="py-3 text-center">
        <i class="ni ni-bell-55 ni-3x"></i>
        <h4 class="heading mt-4">Product is ready!</h4>
        <p>You can see your product on the tangle:</p>

        <a target="_blank" :href="`https://devnet.thetangle.org/transaction/${product_tx}`">
          Watch
          <strong>Product Order</strong> on the Tangle.org
        </a>
        <br />
        <a target="_blank" :href="`https://devnet.thetangle.org/transaction/${energy_tx}`">
          Watch
          <strong>Energy Order</strong> on the Tangle.org
        </a>
      </div>
    </modal>
    <div class="wallets">
      <UserWallet :balance="user_balance" @ordered="ordered" v-on:newActivity="addActivity" />
      <div class="machines">
        <div class="machines_park">
          <Machine
            :balance="machine_1_balance"
            name="Robot1"
            v-on:newActivity="addActivity"
            transfer_img="../../../../assets/img/value_transfer_anim_machine.gif"
            :active="active_transfer_headphone"
            :send="active_send_headphone_machine"
            position="top"
          />
          <Machine
            :balance="provider_1_balance"
            class="provider"
            provider="true"
            name="EnergyWind"
            :energy_price="provider_1_energy_price"
            v-on:newActivity="addActivity"
            transfer_img="../../../../assets/img/value_transfer_anim_provider.gif"
            :active="active_transfer_headphone_provider"
            :energy="active_energy_headphone_provider"
            position="top"
          />
        </div>
        <div class="machines_park">
          <Machine
            :balance="machine_2_balance"
            name="Robot2"
            v-on:newActivity="addActivity"
            transfer_img="../../../../assets/img/value_transfer_anim_machine.gif"
            :flip_transfer_img="true"
            :active="active_transfer_laptop"
            :send="active_send_laptop_machine"
            position="bottom"
          />

          <Machine
            :balance="provider_2_balance"
            class="provider"
            provider="true"
            name="EnergySolar"
            :energy_price="provider_2_energy_price"
            v-on:newActivity="addActivity"
            transfer_img="../../../../assets/img/value_transfer_anim_provider.gif"
            :active="active_transfer_laptop_provider"
            :energy="active_energy_laptop_provider"
            position="bottom"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import UserWallet from "./UserWallet.vue";
import Machine from "./Machine.vue";
import { setTimeout } from "timers";
import Modal from "@/components/Modal.vue";

import { composeAPI } from "@iota/core";
import generateSeed from "@/utils/generateSeed.js";

const iota = composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

const Converter = require("@iota/converter");

export default {
  name: "UseCase",
  components: { UserWallet, Machine, Modal },
  data() {
    return {
      user_balance: 10000,
      machine_1_balance: 0,
      provider_1_balance: 0,
      provider_1_energy_price: 20,
      machine_2_balance: 0,
      provider_2_balance: 0,
      provider_2_energy_price: 20,
      active_transfer_headphone: false,
      active_transfer_headphone_provider: false,
      active_transfer_laptop: false,
      active_transfer_laptop_provider: false,
      active_energy_headphone_provider: false,
      active_energy_laptop_provider: false,
      active_send_headphone_machine: false,
      active_send_laptop_machine: false,
      order_result_modal: false,
      product_tx: "",
      energy_tx: "",
      activities: [
        {
          message: "Machines connecting...",
          timestamp: Date.now()
        }
      ]
    };
  },
  methods: {
    addActivity(activity) {
      this.activities.push(activity);
      let container = this.$el.querySelector("#logger");
    },
    ordered(order) {
      let order_data_energy = {
        buyer: "robot1",
        seller: "", // or energyWind - depeding on the cheaper price atm
        purchaseItem: "energy",
        price: "", // depending on the current cheaper energyPrice
        ordered_at: Date.now()
      };

      /*
      ADD THIS TO AUTOMATIC CHOOSE LOWER PRICE
      if (this.provider_1_energy_price > this.provider_2_energy_price) {
        // payout provider_2_energy_price
        order_data_energy.seller = "energySolar";
        order_data_energy.price = this.provider_2_energy_price;
      } else {
        // payout provider_1_energy_price
        order_data_energy.seller = "energyWind";
        order_data_energy.price = this.provider_1_energy_price;
      }
      */

      // show transfer animation
      if (order.name == "Headphone") {
        // REMOVE THIS TO AUTOMATIC CHOOSE LOWER PRICE
        order_data_energy.seller = "energyWind";
        order_data_energy.price = this.provider_1_energy_price;
        // END
        this.active_transfer_headphone = true;
        let self = this;
        let data = {
          buyer: "human",
          seller: "Robot1",
          purchaseItem: "headphone",
          price: 100,
          ordered_at: Date.now()
        };
        self.sendTransaction(data, "product");
        setTimeout(function() {
          self.active_transfer_headphone = false;
          self.active_transfer_headphone_provider = true;

          self.user_balance = self.user_balance - data.price;
          self.machine_1_balance = self.machine_1_balance + data.price;

          setTimeout(function() {
            self.payoutProviderWindFromMachine1(order_data_energy.price);

            setTimeout(function() {
              self.active_energy_headphone_provider = false;
              self.active_send_headphone_machine = true;
              setTimeout(function() {
                self.active_send_headphone_machine = false;

                self.sendTransaction(order_data_energy, "energy");
                self.order_result_modal = true;
              }, 3000);
            }, 5000);
          }, 5000);

          // Headphone ordered
        }, 5000);
      } else if (order.name == "Laptop") {
        // REMOVE THIS TO AUTOMATIC CHOOSE LOWER PRICE
        order_data_energy.seller = "energySolar";
        order_data_energy.price = this.provider_2_energy_price;
        // END
        this.active_transfer_laptop = true;
        let self = this;
        let data = {
          buyer: "human",
          seller: "Robot2",
          purchaseItem: "laptop",
          price: 1000,
          ordered_at: Date.now()
        };
        self.sendTransaction(data, "product");
        setTimeout(function() {
          self.active_transfer_laptop = false;
          self.active_transfer_laptop_provider = true;
          self.user_balance = self.user_balance - data.price;
          self.machine_2_balance = self.machine_2_balance + data.price;

          setTimeout(function() {
            self.payoutProviderSolarFromMachine2(order_data_energy.price);

            setTimeout(function() {
              self.active_energy_laptop_provider = false;
              self.active_send_laptop_machine = true;
              setTimeout(function() {
                self.active_send_laptop_machine = false;

                self.sendTransaction(order_data_energy, "energy");
                self.order_result_modal = true;
              }, 3000);
            }, 5000);
          }, 5000);

          // laptop ordered
        }, 5000);
      }
    },
    sendTransaction(data, type) {
      // Array of transfers which defines transfer recipients and value transferred in IOTAs.
      const transfers = [
        {
          address: generateSeed(), //generate random new address
          value: 0, // 1Ki
          tag: "AKITAMACHINETOMACHINE", // optional tag of `0-27` trytes
          message: Converter.asciiToTrytes(JSON.stringify(data)) // optional message in trytes
        }
      ];

      // Depth or how far to go for tip selection entry point.
      const depth = 3;

      // Difficulty of Proof-of-Work required to attach transaction to tangle.
      // Minimum value on mainnet is `14`, `7` on spamnet and `9` on devnet and other testnets.
      const minWeightMagnitude = 9;

      // Prepare a bundle and signs it.
      iota
        .prepareTransfers(generateSeed(), transfers)
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
          if (type == "product") {
            this.product_tx = bundle[0].hash;
          } else if (type == "energy") {
            this.energy_tx = bundle[0].hash;
          }
          console.log(`Bundle: ${bundle}`);
        })
        .catch(err => {
          // handle errors here
        });
    },
    payoutProviderWindFromMachine1(price) {
      this.active_transfer_headphone_provider = false;
      this.machine_1_balance = this.machine_1_balance - price;
      this.provider_1_balance = this.provider_1_balance + price;
      this.active_energy_headphone_provider = true;
    },
    payoutProviderSolarFromMachine1(price) {
      this.active_transfer_headphone_provider = false;
      this.machine_1_balance = this.machine_1_balance - price;
      this.provider_2_balance = this.provider_2_balance + price;
      this.active_energy_headphone_provider = true;
    },
    payoutProviderWindFromMachine2(price) {
      this.active_transfer_laptop_provider = false;
      this.machine_2_balance = this.machine_2_balance - price;
      this.provider_1_balance = this.provider_1_balance + price;
      this.active_energy_laptop_provider = true;
    },
    payoutProviderSolarFromMachine2(price) {
      this.active_transfer_laptop_provider = false;
      this.machine_2_balance = this.machine_2_balance - price;
      this.provider_2_balance = this.provider_2_balance + price;
      this.active_energy_laptop_provider = true;
    }
  }
};
</script>


<style lang="scss" scoped>
.usecase {
  margin: 0 auto;
  .wallets {
    display: flex;
    .machines {
      .machines_park {
        padding: 10px 40px;
        display: flex;
        align-items: left;
      }
    }
  }
}

.modal {
  a {
    color: #efefef;
    &:hover {
      color: #fff;
    }
  }
}
@media (max-width: 900px) {
  .usecase {
    display: flex;
    flex-direction: column;
    width: 100%;
    .user {
      width: 100%;
      padding: 0;
    }
    .wallets {
      flex-wrap: wrap;
      .machines {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: calc(100% + 20px);
        margin: 0 -10px;
        .machines_park {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          width: 100%;
          padding: 0px;
          margin: 0 10px;
          max-width: 50%;
          img {
            display: none;
          }
        }
      }
    }
  }
}
</style>
