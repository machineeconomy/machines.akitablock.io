<template>
  <div class="transfer_animation-container">
    <img
      class="transfer_animation transfer_animation__token"
      :class="{'active': active, ['transfer_animation__token__' + position]: position }"
      src="../../../../assets/img/iota_blue_small.png"
      alt
    />
    <img
      class="transfer_animation transfer_animation__token"
      :class="{'active': energy, ['transfer_animation__token__' + position]: position }"
      src="../../../../assets/img/electricity-icon.png"
      alt
    />
     <img
      v-show="position == 'top' "
      class="transfer_animation transfer_animation__token"
      :class="{'active': send, ['transfer_animation__token__' + position]: position }"
      src="../../../../assets/img/headphone.png"
      alt
    />
     <img
      v-show="position == 'bottom' "
      class="transfer_animation transfer_animation__token"
      :class="{'active': send, ['transfer_animation__token__' + position]: position }"
      src="../../../../assets/img/laptop.png"
      alt
    />
    <img
      v-if="provider"
      class="transfer_animation transfer_animation__line"
      :class="{'active': active, ['transfer_animation__line__' + position]: position, 'transfer_animation__line__energy': energy}"
      src="../../../../assets/img/value_transfer_anim_provider.gif"
      alt
    />
    <img
      class="transfer_animation transfer_animation__line"
      v-else
      :class="{'active': active, 'transfer_animation__flip_transfer_img': flip_transfer_img, ['transfer_animation__line__' + position]: position, 'transfer_animation__line__send': send}"
      src="../../../../assets/img/value_transfer_anim_provider.gif"
      alt
    />
  </div>
</template>

<script>
export default {
  name: "MachineTransferAnimation",
  props: ["active", "provider", "flip_transfer_img", "position", "energy", "send"],
  data() {
    return {};
  },
  created() {
    console.log("this.position", this.position);
  }
};
</script>

<style lang="scss" scoped>
.transfer_animation-container {
  .transfer_animation {
    position: relative;
    visibility: hidden;
    left: 180px;

    &__flip_transfer_img {
      -webkit-transform: scaleY(-1);
      transform: scaleY(-1);
    }
    &__token {
      left: 240px;
      width: 50px;
      height: 50px;
       &__top {
        top: 160px;
      }
      &__bottom {
        top: 200px;
      }
      &__send {
        width: 150px;
        height: 150px;
      }
    }
    &__line {
      padding-right: 30px;
      &__top {
        top: 160px;
      }
      &__bottom {
        top: 0px;
      }
      &__energy {
         -webkit-transform: scaleX(-1);
         transform: scaleX(-1);
         visibility: visible;
      }
      &__send {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        visibility: visible;
      }
    }
  }
  .active {
    visibility: visible;
  }
}
</style>
