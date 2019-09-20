<template>
    <div class="kmt-breadcrumb" v-if="path !== ''">
        <span class="kmt-breadcrumb__piece kmt-breadcrumb__piece--active">Startseite</span>
        <span v-for="piece in path.split('/')" class="kmt-breadcrumb__piece">{{piece}}</span>
    </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: {
    path: {
      type: String,
      validator: (value) => {
        return value.indexOf('/') !== -1 || value === '';
      }
    }
  }
};
</script>

<style lang="scss">
    .kmt-breadcrumb {
        &__piece {
            @extend %typo-label;

            &::after {
                content: '/';
            }

            &--active {
                color: $color--copper;
            }
        }
    }
</style>
