<template>
  <div class="timer title">
    <span>{{ String(day) }} : </span>
    <span>{{ String(hour).padStart(2, "0") }} : </span>
    <span>{{ String(min).padStart(2, "0") }} : </span>
    <span>{{ String(sec).padStart(2, "0") }}</span>
  </div>
</template>

<script>
import { setTimeout } from "timers"

export default {
  name: 'Timer',

  data() {
    return {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0
    };
  },

  props: ['timeEnd'],

  methods: {
    startTimer() {
      let timer = Math.floor((this.timeEnd - Date.now()) / 1000)

      this.sec = timer % 60
      timer = Math.floor(timer / 60)

      this.min = timer % 60
      timer = Math.floor(timer / 60)

      this.hour = timer % 24
      timer = Math.floor(timer / 24)

      this.day = timer

      setTimeout(this.startTimer, 1000)
    }
  },

  mounted() {
    this.startTimer()
  }
}
</script>

<style lang="scss" scoped>
.timer {
  margin-top: 50px;
  color: #fff;
  white-space: nowrap;
}
</style>
