<template>
  <div class="kmt-contentstage" :class="cardPositionCSSClass">
    <Responsiveimage :src="src"></Responsiveimage>
    <Textcard :theme="cardTheme" :headline="headline">
      <slot slot="text" name="text"></slot>
      <slot></slot>
    </Textcard>
  </div>
</template>

<script>
import Responsiveimage from "~/components/Responsiveimage.vue";
import Textcard from "~/components/Textcard.vue";
export default {
  name: 'Contentstage',
  props: {
    src: {
      type: String
    },
    headline: {
      type: String
    },
    position: {
      type: String,
      default: 'top',
      validator: function(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) !== -1;
      }
    },
    cardTheme: {
      type: String,
      validator: function(value) {
        return ['gray', 'copper', 'white'].indexOf(value) !== -1;
      }
    }
  },
  components: {
    Responsiveimage,
    Textcard
  },
  computed: {
    cardPositionCSSClass() {
      return `kmt-contentstage--position-${this.position}`;
    }
  }
}
</script>

<style lang="scss">
  .kmt-contentstage {
    $contentstage: &;
    @include center-inner-large();
    height: 720px;
    width: 1408px;
    .kmt-card--type-text {
      width: 448px;
      margin-left: 64px;
      position: absolute;
    }
    &:focus {
      outline: none;
    }
    &--position {
      &-top {
        .kmt-card--type-text {
          top: 64px;
        }
      }
      &-middle {
        .kmt-card--type-text {
          top: 50%;
          transform: translateY(-50%);
        }
      }
      &-bottom {
        .kmt-card--type-text {
          bottom: 64px;
        }
      }
    }
  }
</style>
