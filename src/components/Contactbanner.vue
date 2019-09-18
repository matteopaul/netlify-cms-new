<template>
  <div class="kmt-contactbanner">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'contactbanner',
    props: {

    }
  }
</script>

<style lang="scss">
  .kmt-contactbanner {
    $contactbanner: &;
    padding: 48px;
    background: $color--lightgray;
    @include center-inner-large();

    &__title {
      @extend %typo-h2;
    }
    &__text {
      @extend %typo-p--large;
      margin-bottom: 24px;
    }
    input, select {
      font-size: 14px;
      padding: 16px;
      @extend %typo-label;
      color: $color--gray;
      border: none;
      border: 2px solid $color--gray;
      border-radius: 0px;
      box-sizing: border-box;
      width: 240px;
      height: 48px;
      margin-right: 24px;
    }
    &__button {
      @extend %button;
    }
    &__phone {
      @extend %button;
      background: #000;
      width: unset;
      padding-left: 16px;
      padding-right: 40px;
      background-image: url('/uploads/Information-Point-Branchen.svg');
      background-repeat: no-repeat;
      background-size: 16px 24px;
      background-position: 95% 45%;
      margin-right: 24px;
    }
  }
</style>
