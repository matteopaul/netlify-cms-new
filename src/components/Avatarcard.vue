<template>
    <!-- RQ-092 -->
    <div class="kmt-card kmt-card--type-avatar" :class="themeCSSClass">
        <Avatar :image="image" :name="name" :position="position" :phone="phone" layout="vertical"></Avatar>
    </div>
</template>

<script>
import Avatar from '~/components/Avatar.vue';

export default {
  name: 'Avatarcard',
  components : {
    Avatar
  },
  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    phone: {
      type: String,
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

        &--type-avatar {
            background: $color--lightgray;
            padding: 20px;

            .kmt-avatar {
                display: flex;
                flex-direction: column;

                &__image {
                    position: relative;
                    top: auto;
                    width: 100%;
                }
            }
        }
    }
</style>
