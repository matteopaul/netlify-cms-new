<template>
    <div class="kmt-avatar">
        <div class="kmt-avatar__image">
            <img :src="image"/>
        </div>
        <strong>{{name}}</strong>
        <small>{{position}}</small>
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
      type: String
    },
    position: {
      type: String
    }
  }
};
</script>

<style lang="scss">
    .kmt-avatar {
        position: relative;
        padding-left: 100px;

        &__image {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 80px;
            mask-image: url(~@/assets/svg/avatarmask.svg);
            mask-position: 50% 50%;
            mask-repeat: no-repeat;
            flex: 0 1 auto;

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
    }
</style>
