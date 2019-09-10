<template>
    <div class="kmt-avatar" :class="layoutCSSClass">
        <div class="kmt-avatar__image">
            <img :src="image"/>
        </div>
        <strong v-if="name !== ''">{{name}}</strong>
        <small v-if="position !== ''">{{position}}</small>
        <a :href="phonelink" v-if="phone !== ''">{{phone}}</a>
    </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    image: {
      type: Object,
      default () {
        return {};
      }
    },
    name: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    layout: {
      type: String,
      default: 'horizontal',
      validator: function (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    phonelink () {
      return `tel:${this.phone}`;
    },
    layoutCSSClass () {
      return `kmt-avatar--layout-${this.layout}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-avatar {
        $avatar: &;
        position: relative;

        &--layout {
            &-horizontal {
                padding-left: 100px;

                #{$avatar}__image {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }

            &-vertical {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                #{$avatar}__image + * {
                    margin-top: 20px;
                }
            }
        }

        &__image {
            position: relative;
            mask-image: url(~@/assets/svg/avatarmask.svg);
            mask-position: 50% 50%;
            mask-repeat: no-repeat;
            width: 80px;

            &:before {
                padding-top: 75%;
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

        strong {
            @extend %typo-label;
            display: block;

            + small {
                margin-top: 5px;
            }
        }

        small {
            @extend %typo-p--small;
            display: block;
        }

        > a {
            color: $color--copper;
            text-decoration: none;
            display: block;
        }
    }
</style>
