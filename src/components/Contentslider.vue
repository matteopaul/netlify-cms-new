<template>
  <div class="kmt-contentslider">
    <div class="kmt-contentslider__stagecontainer main-carousel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Flickity from 'flickity';
  export default {
    name: 'Contentslider',
    props: {
      stagecount: {
        type: Number
      }
    },
    components: {

    },
    mounted() {
      let slider = document.querySelector('.main-carousel');
      console.log(slider);
      var flkty = new Flickity('.main-carousel', {
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        autoPlay: 5000,
        pauseAutoPlayOnHover: true
      });
    }
  }
</script>

<style lang="scss">

  .flickity-viewport {
    outline: none;
  }

  .flickity-page-dots {
    @include center-inner();
    text-align: center;
    margin-top: 24px;
  }

  .flickity-page-dots .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
    background: $color--lightgray;
    &.is-selected {
      background: $color--gray;
    }
  }

  .kmt-contentslider {
    $contentslider: &;
    &__dotcontainer {
      @include center-inner();
      text-align: center;
    }
    &__stagecontainer {

      overflow-x: hidden;
      @include center-inner-large();
      .kmt-contentstage {
        display: inline-block;
        transition-duration: 1s;
      }
    }
    &__dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 8px;
      background: $color--lightgray;
      &--active {
        background: $color--gray;
      }
    }
  }
</style>
