<template>
    <!-- RQ-022 -->
    <div class="kmt-categorybanner" :class="typeCSSClass">
        <div class="kmt-categorybanner__inner">
            <Responsiveimage :src="image" :mode="mode"></Responsiveimage>
            <div class="kmt-categorybanner__text">
                <svg width="1247" height="909" viewBox="0 0 1247 909" xmlns="http://www.w3.org/2000/svg">
                    <path d="m1156.24364 77.0029348c107.26815 86.6141432 112.61671 261.7725492 51.70266 403.3951172-60.61691 141.622568-187.19928 249.709298-353.301493 329.085491-166.102214 79.376192-371.724275 130.041847-538.123631 78.893662-166.399355-51.148185-293.8731471-204.110209-313.78164141-354.418318-19.61135259-150.066844 68.34259241-297.238507 191.06211741-386.747831 122.719524-89.5093229 279.907487-121.3563059 462.946778-138.00359243 183.336433-16.88855157 392.22705-18.81867175 499.49521 67.79547123z"/>
                </svg>
                <Breadcrumb path="pfad/zur/seite" />
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
        </div>
    </div>
</template>

<script>
import Responsiveimage from '~/components/Responsiveimage.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  name: 'Categorybanner',
  components: {
    Responsiveimage,
    Breadcrumb
  },
  props: {
    headline: {
      type: String
    },
    text: {
      type: String
    },
    imageType: {
      type: String,
      default: 'background',
      validator: function (value) {
        return ['background', 'inline'].indexOf(value) !== -1;
      }
    },
    image: {
      type: Object
    }
  },
  computed: {
    typeCSSClass () {
      if (this.image) {
        return `kmt-categorybanner--type-${this.imageType}`;
      } else {
        return `kmt-categorybanner--type-text`;
      }
    },
    mode () {
      if (this.imageType === 'background') {
        return 'cover';
      } else if (this.imageType === 'inline') {
        return 'contain';
      }
    }
  }
};
</script>

<style lang="scss">
    .kmt-categorybanner {
        $categorybanner: &;

        &__inner {
            @include center-inner();
            position: relative;

            &:before {
                padding-top: 50%;
                content: '';
                display: block;
            }
        }

        &__text {
            position: absolute;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
            @extend %padding;

            svg {
                position: absolute;
                z-index: 0;

                path {
                    fill: $color--midnight;
                }
            }

            h2,
            p {
                position: relative;
                z-index: 1;
            }

            h2 {
                @extend %typo-h2;
                color: inherit;
            }

            p {
                @extend %typo-p--regular;
                color: inherit;
            }
            .kmt-breadcrumb {
              position: absolute;
              top: -16px;
            }
        }

        &--type {
            &-background,
            &-inline {
                #{$categorybanner}__text {
                    max-width: 30%;
                    color: $color--white;

                    svg {
                        left: 50%;
                        top: 50%;
                        width: 140%;
                        height: auto;
                        transform: translate3d(-50%, -50%, 0);
                    }
                }
            }

            &-background {
                .kmt-responsiveimage {
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    object-fit: cover
                }
            }

            &-inline {
                .kmt-responsiveimage {
                    position: absolute;
                    left: 30%;
                    right: 0;
                    top: 0;
                    bottom: 0;
                }
            }

            &-text {
                #{$categorybanner}__text {
                    color: $color--midnight;
                    max-width: 75%;

                    svg {
                        left: 50%;
                        top: 50%;
                        width: 75%;
                        height: auto;
                        transform: translate3d(-100%, -50%, 0);

                        path {
                            fill: rgb(245, 245, 245);
                        }
                    }
                }
            }
        }
    }
</style>
