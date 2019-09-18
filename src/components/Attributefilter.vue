<template>
  <div class="kmt-attributefilter">
    <template v-if="filterType == 'projects'">
      <span class="kmt-attributefilter__option">lifestyle</span>
      <span class="kmt-attributefilter__option">b2c</span>
      <span class="kmt-attributefilter__option">onlineshop</span>
      <span class="kmt-attributefilter__option">fashion</span>
      <span class="kmt-attributefilter__option">automotive</span>
      <span class="kmt-attributefilter__option">b2b</span>
      <span class="kmt-attributefilter__option">immobilien</span>
    </template>
    <template v-if="filterType == 'agency'">
      <span class="kmt-attributefilter__option">kommandant</span>
      <span class="kmt-attributefilter__option">entwicklung</span>
      <span class="kmt-attributefilter__option">konzept</span>
      <span class="kmt-attributefilter__option">text</span>
      <span class="kmt-attributefilter__option">projektmanagement</span>
      <span class="kmt-attributefilter__option">design</span>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Attributefilter',
    props: {
      filterType: {
        type: String,
        validator: function (value) {
          return ['agency', 'projects'].indexOf(value) !== -1;
        }
      }
    }
  }
</script>

<style lang="scss">
  .kmt-attributefilter {
    @include center-inner();
    &__option {
      @extend %typo-label;
      margin-right: 24px;
      &::before {
        content: '#'
      }
    }
  }
</style>
