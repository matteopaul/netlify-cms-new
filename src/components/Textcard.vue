<template>
    <!-- RQ-092 -->
    <div class="kmt-card kmt-card--type-text" :class="themeCSSClass">
        <div class="kmt-card__icon" v-if="icon !== ''">
            <img :src="icon"/>
        </div>
        <h3 v-if="subheadline !== '' || headline !== ''">
            <small v-if="subheadline !== ''">Subheadline</small>
            <span v-if="headline !== ''">Headline</span>
        </h3>
        <slot name="text"></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Textcard',
  props: {
    icon: {
      type: String,
      default: ''
    },
    headline: {
      type: String,
      default: ''
    },
    subheadline: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'gray',
      validator: function (value) {
        return ['gray', 'copper', 'white'].indexOf(value) !== -1;
      }
    },
  },
  computed: {
    themeCSSClass(){
      return `kmt-card--theme-${this.theme}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-card {
        $card: &;

        &--theme {
            &-gray {
                background: $color--lightgray;
            }
            &-copper {
                background: $color--copper;
            }
            &-white {
                background: $color--white;
            }
        }

        &--type-text {
            padding: 20px;

            h3 {
                display: block;

                small {
                    @extend %typo-label;
                    display: block;

                    #{$card}--theme-copper & {
                        color: $color--white;
                    }
                }

                span {
                    @extend %typo-h3;
                    display: block;

                    #{$card}--theme-copper & {
                        color: $color--white;
                    }
                }
            }

            p {
                @extend %typo-p--regular;
                display: block;
            }

            #{$card}__icon {
                position: relative;
                width: 50px;
                height: 50px;

                + * {
                    margin-top: 20px;
                }

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                }
            }

            > ul {
                @extend %bulletlist;
            }

            // TODO: source out!
            dl {
                dt {
                    @extend %typo-label;
                }

                dd {
                    @extend %typo-p--large;

                    + dt {
                        margin-top: 20px;
                    }
                }
            }

            > * + * {
                margin-top: 20px;
            }
        }
    }
</style>
