<template>
    <a :href="href" v-html="text" class="kmt-button"></a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss">
    .kmt-button {
        @extend %typo-label;
        text-decoration: none;
        display: inline-block;
        border: none;
        padding: 20px;
        background: $color--copper;
        color: $color--white;

        &:hover {
            // TODO
        }
    }
</style>
