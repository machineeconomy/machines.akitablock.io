<template>
  <base-button @click="order" :disabled="loading">
    <div v-if="loading">
      <pulse-loader :loading="true" color="#FFFFFF" size="5px"></pulse-loader>
      <p v-for="(message, index) in logs" :key="index">{{message}}</p>
    </div>
    <slot v-else>{{text}}</slot>
  </base-button>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

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
    amount: {
      type: Number,
      required: true,
      description: "Value of IOTA which will be sent to the provider."
    }
  },
  data() {
    return {
      loading: false,
      logs: []
    };
  },
  methods: {
    order() {
      this.loading = true;
      let obj = {
        name: this.name,
        amount: this.amount
      };
      this.$emit("ordered", obj);
      let self = this;
      setTimeout(function() {
        self.loading = false;
      }, 5000);
    }
  }
};
</script>
