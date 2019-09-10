<template>
    <!-- RQ-011 -->
    <div class="kmt-textandicon" :class="layoutCSSClass">
        <div class="kmt-textandicon__icon">
            <img :src="image"/>
        </div>
        <div class="kmt-textandicon__text">
            <h4>
                <small>Subheadline</small>
                Headline
            </h4>
            <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
            <a href="#">Mehr Details</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Textandicon',
  props: {
    image: {
      type: String
    },
    layout: {
      type: String,
      default: 'vertical',
      validator: function (value) {
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    layoutCSSClass () {
      return `kmt-textandicon--layout-${this.layout}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-textandicon {
        $textandicon: &;
        display: flex;

        &__icon {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 60px;
            width: 60px;
            flex: 0 0 auto;

            img {
                display: block;
                height: 100%;
                width: auto;
                max-width: 100%;
                object-fit: contain;
            }
        }

        &__text {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;

            h4 {
                @extend %typo-h3;

                small {
                    @extend %typo-label;
                    display: block;
                }

                + p {
                    margin-top: 10px;
                }
            }

            p {
                @extend %typo-p--regular;
            }

            > a {
                display: block;
                color: $color--copper;
                text-decoration: none;
                margin-top: 20px;
            }
        }

        &--layout {
            &-vertical {
                flex-direction: column;
                align-items: center;

                #{$textandicon}__icon {
                    + #{$textandicon}__text {
                        margin-top: 20px;
                    }

                    img {
                        object-position: 50% 50%;
                    }
                }

                #{$textandicon}__text {
                    flex-direction: column;
                    align-items: center;

                    h4,
                    p {
                        text-align: center;
                    }
                }
            }

            &-horizontal {
                #{$textandicon}__icon {
                    + #{$textandicon}__text {
                        margin-left: 40px;
                    }

                    img {
                        object-position: 50% 0;
                    }
                }

                #{$textandicon}__text {
                    h4,
                    p {
                        text-align: left;
                    }
                }
            }
        }
    }
</style>
