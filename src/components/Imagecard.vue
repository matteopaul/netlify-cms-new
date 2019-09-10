<template>
    <!-- RQ-092 -->
    <div class="kmt-card kmt-card--type-image" :class="themeCSSClass">
        <div class="kmt-card__image">
            <img :src="image"/>
        </div>
        <div class="kmt-card__text">
            <h3 v-if="headline !== '' || subheadline !== ''">
                <small v-if="subheadline !== ''">{{subheadline}}</small>
                <span v-if="headline !== ''">{{headline}}</span>
            </h3>
            <a :href="linkurl" v-if="linkurl !== '' && linktext !== ''">{{linktext}}</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Imagecard',
  props: {
    image: {
      type: String,
    },
    headline: {
      type: String,
      default: ''
    },
    subheadline: {
      type: String,
      default: ''
    },
    linkurl: {
      type: String,
      default: ''
    },
    linktext: {
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

        &--type-image {
            background: $color--lightgray;
            display: flex;
            flex-direction: column;

            #{$card}__image {
                position: relative;
                flex: 0 0 auto;

                &:before {
                    padding-top: 60%;
                    content: '';
                    display: block;
                }

                img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            #{$card}__text {
                padding: 20px;
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;

                h3 {
                    display: block;
                    flex: 0 0 auto;

                    small {
                        @extend %typo-label;
                        display: block;
                    }

                    span {
                        @extend %typo-h3;
                        display: block;
                    }
                }

                > a {
                    color: $color--copper;
                    display: block;
                    align-self: flex-end;
                    flex: 0 0 auto;
                    text-decoration: none;
                }
            }
        }
    }
</style>
