<template>
    <!-- RQ-014 Item -->
    <div class="kmt-promotionbanner" :class="[backgroundCSSClass, alignCSSClass, overlayCSSClass]">
      <div class="kmt-promotionbanner__inner">
        <div class="kmt-promotionbanner__image">
          <img :src="src" />
        </div>
        <div class="kmt-promotionbanner__content">
          <h2 v-html="title" />
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
import ResponsiveImage from '~/components/Responsiveimage.vue';
export default {
  name: 'PromotionBanner',
  props: {
    title: {
      type: String
    },
    src: {
      type: Object,
      default: function() {
        return{};
      }
    },
    background: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    overlayCSSClass () {
      return `kmt-promotionbanner--overlay-${this.overlay}`;
    },
    alignCSSClass () {
      return `kmt-promotionbanner--align-${this.align}`;
    },
    backgroundCSSClass () {
      return `kmt-promotionbanner--background-${this.background}`
    }
  },
  components: {
    ResponsiveImage
  }
};
</script>

<style lang="scss">
    .kmt-promotionbanner {
        $promotionbanner: &;
        @include center-inner-ll();

        &--background-true {
          padding-top: 88px;
          padding-bottom: 88px;
          background-color: $color--lightgray;
        }

        &__inner {
          display: flex;
          @include center-inner-large();

          #{$promotionbanner}__content {
            width: 50%;

            h2 {
              @extend %typo-h2;
            }

            #{$promotionbanner}__list {
              display: inline-block;
              margin: 50px 50px 50px 0;
              max-width: 250px;
              vertical-align: top;

              ul {
                @extend %bulletlist
              }
              + a {
                @extend %typo-link;
                display: block;
              }
            }
          }
        }
        &--overlay {
          &-false {
            #{$promotionbanner}__image {
                width: 45%;
                margin-right: 5%;

                img {
                  object-fit: cover;
                  width: 100%;
                  height: 100%;
                }
            }
          }
          &-true {
            #{$promotionbanner}__image::before {
              background: url('/uploads/svg/Kosmonaut-Blob-Gray_Lines-Details.svg');
              background-size: 100% 100%;
              position: absolute;
              width: 775px;
              height: 645px;
              content: "";
              background-repeat: no-repeat;
            }
            #{$promotionbanner}__image {
              width: 775px;
              height: 645px;

              img {
                width: 600px;
                height: 446px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-100%, -50%);
              }
            }
            #{$promotionbanner}__content {
              margin-left: 70px;
              width: 448px;

              .kmt-textandicon {
                margin-top: 20px;
              }

            }
          }
        }
    }
</style>
