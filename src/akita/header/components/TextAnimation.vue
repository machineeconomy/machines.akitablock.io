<template>
  <span>{{text}}</span>
</template>

<script>
export default {
  name: "TextAnimation",

  props: ["textList", "writingSpeed", "changingSpeed"],

  data() {
    return {
      item: 0,
      letters: 0,
      isDelete: false
    };
  },

  methods: {
    textAnimation() {
      if (!this.isDelete) this.letters += 1;
      else this.letters -= 1;

      if (this.letters === this.textList[this.item].length) {
        setTimeout(() => {
          this.isDelete = true;
          this.letters = this.textList[this.item].length;
        }, this.changingSpeed);
      } else if (this.letters === 0) {
        this.isDelete = false;
        this.item += 1;

        if (this.item === this.textList.length) {
          this.item = 0;
        }
      }
    }
  },

  computed: {
    text() {
      return this.textList[this.item].slice(0, this.letters);
    }
  },

  mounted() {
    setInterval(() => this.textAnimation(), this.writingSpeed);
  }
};
</script>
