<template>
    <div class="kmt-quote">
        <blockquote v-html="text"></blockquote>
        <Avatar :name="name" :position="position" :image="image"></Avatar>
    </div>
</template>

<script>
import Avatar from '~/components/Avatar.vue';

export default {
  name: 'Quote',
  components: {
    Avatar
  },
  props: {
    text: {
      type: String
    },
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
    .kmt-quote {
        @include center-inner();
        @extend %padding;

        blockquote {
            @extend %typo-h3;

            &:before {
                content: '"'
            }

            &:after {
                content: '"'
            }
        }

        .kmt-avatar {
            margin-top: 20px;
        }
    }
</style>
