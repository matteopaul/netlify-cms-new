<template>
    <!-- RQ-094 -->
    <div class="kmt-projectlink" :class="[positionCSSClass, colorCSSClass]">
        <Responsiveimage :src="src" class="kmt-projectlink__image"/>
        <div class="kmt-projectlink__content">
            <slot></slot>
            <g-link :to="link">{{linkText}}</g-link>
        </div>
    </div>
</template>

<script>
import Responsiveimage from '~/components/Responsiveimage.vue';

export default {
  name: 'projectlink',
  components: {
    Responsiveimage
  },
  props: {
    title: {
      type: String
    },
    link: {
      type: String,
      default: '/'
    },
    linkText: {
      type: String,
      default: 'mehr erfahren'
    },
    src: {
      type: String,
      default: function () {
        return {};
      }
    },
    blobColor: {
      type: String,
      default: 'midnight',
      validator: function (value) {
        return ['dark', 'copper', 'midnight'].indexOf(value) !== -1;
      }
    },
    blobPosition: {
      type: String,
      default: 'middle',
      validator: function (value) {
        return ['left', 'middle', 'right'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    positionCSSClass () {
      return `kmt-projectlink--position-${this.blobPosition}`;
    },
    colorCSSClass () {
      return `kmt-projectlink--color-${this.blobColor}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-projectlink {
        $projectlink: &;
        @include center-inner-xl();
        height: 544px;
        overflow: hidden;

        &__content {
            position: absolute;
            padding-left: 117px;
            padding-top: 90px;
            width: 534px;
            height: 390px;
            bottom: -28px;

            #{$projectlink}--color-midnight & {
                background: url('/uploads/svg/Kosmonaut-Blob-Midnight.svg');
                background-size: contain;
                background-repeat: no-repeat;

                #{$projectlink}__title {
                    color: $color--white;
                }
            }

            #{$projectlink}--color-dark & {
                background: url('/uploads/svg/Kosmonaut-Blob-Dark.svg');
                background-size: contain;
                background-repeat: no-repeat;
            }

            #{$projectlink}--color-copper & {
                background: url('/uploads/svg/Kosmonaut-Blob-Cooper.svg');
                background-size: contain;
                background-repeat: no-repeat;
            }

            #{$projectlink}--position-left & {

            }

            #{$projectlink}--position-middle & {
                left: 50%;
                transform: translateX(-50%);

            }

            #{$projectlink}--position-right & {
                right: 0;
            }
        }

        &__title {
            @extend %typo-h1;
        }

        p {
            @extend %typo-p--large;
            color: $color--white;
        }

        a {
            @extend %typo-link;
        }
    }
</style>
