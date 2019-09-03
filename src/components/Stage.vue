<template>
    <!-- RQ-013 -->
    <div class="kmt-stage" :class="[textPositionCSSClass, themeCSSClass]">
        <div class="kmt-stage__inner">
            <Responsiveimage :src="backgroundImage"></Responsiveimage>

            <div class="kmt-stage__text">
                <h1 v-html="headline" v-if="headline !== ''"/>
                <Button :href="buttonLink" :text="buttonText"></Button>
            </div>
        </div>
    </div>
</template>

<script>
import Responsiveimage from '~/components/Responsiveimage.vue';
import Button from '~/components/Button.vue';

export default {
  name: 'RQ-013',
  components: {
    Responsiveimage,
    Button
  },
  props: {
    headline: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonLink: {
      type: String
    },
    backgroundImage: {
      type: Object,
      default () {
        return {};
      }
    },
    theme: {
      type: String,
      default: 'light',
      validator: function (value) {
        return ['light', 'dark'].indexOf(value) !== -1;
      }
    },
    textPosition: {
      type: String,
      default: 'topleft',
      validator: function (value) {
        return ['topleft', 'middleleft', 'bottomleft'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    textPositionCSSClass () {
      return `kmt-stage--textposition-${this.textPosition}`;
    },
    themeCSSClass () {
      return `kmt-stage--theme-${this.theme}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-stage {
        $stage: &;

        &__inner {
            @include center-outer();
            position: relative;

            &:before {
                padding-top: 50%;
                content: '';
                display: block;
            }
        }

        &__text {
            @include center-inner();
            @extend %padding;
            position: absolute;
            // TODO: make responsive
            padding-top: 60px;
            // TODO: make responsive
            padding-bottom: 60px;
            width: 100%;
            height: 100%;
            top: 0;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            #{$stage}--textposition-topleft & {
                justify-content: flex-start;
            }

            #{$stage}--textposition-middleleft & {
                justify-content: center;
            }

            #{$stage}--textposition-bottomleft & {
                justify-content: flex-end;
            }

            h1 {
                @extend %typo-h1;
                max-width: 75%;

                #{$stage}--theme-light & {
                    color: $color--white;
                }
                #{$stage}--theme-dark & {
                    color: $color--dark;
                }

                + .kmt-button {
                    // TODO: responsive
                    margin-top: 40px;
                }
            }
        }

        .kmt-responsiveimage {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
        }
    }
</style>
