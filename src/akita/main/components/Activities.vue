<template>
  <div class="activities">
    <h3>Activities</h3>
    <ul id="logger">
      <li
        v-for="(activity, index) in sortedActivities"
        :key="index"
      >{{ activity.timestamp | formatTimestampToTime}}: {{activity.message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Activities",
  props: ["activities"],
  data() {
      return {
      
      }
  },
  computed: {
    sortedActivities: function() {
      function compare(a, b) {
        if (b.timestamp < a.timestamp) return -1;
        if (b.timestamp > a.timestamp) return 1;
        return 0;
      }

      return this.activities.sort(compare);
    }
  }
};
</script>

<style lang="scss" scoped>

.activities {
    width: 100%;
  h3 {
    margin-top: 40px;
  }
  ul {
    line-height: 2em;
    border: 1px solid #ccc;
    padding: 0;
    margin: 0;
    overflow: scroll;
    overflow-x: hidden;
    background-color: #efefef;
    border-radius: 20px;
    height: 130px;
    padding-inline-start: 0;
    li {
      list-style: none;
      padding-left: 5px;
    }
  }
}
</style>

