<template>
    <!-- RQ-095 -->
    <div class="kmt-contentslider">
        <div class="kmt-contentslider__stagecontainer" ref="slider">
            <slot></slot>
        </div>
    </div>
</template>

<script>
//import Flickity from 'flickity';

export default {
  name: 'Contentslider',
  props: {
    stagecount: {
      type: Number
    }
  },
  components: {},
  mounted () {
    /*
    new Flickity(this.$refs.slider, {
      cellAlign: 'left',
      contain: true,
      draggable: true,
      prevNextButtons: false,
      autoPlay: 5000,
      pauseAutoPlayOnHover: true
    });

     */
  }
};
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
            @include center-inner-large();
            overflow-x: hidden;

            .kmt-contentstage {
                display: inline-block;
                transition-duration: 1s;
            }
        }
    }
</style>
