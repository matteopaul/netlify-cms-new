<template>
    <!-- RQ-090 List -->
    <div class="kmt-bulletlist">
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Bulletlist',
  props: {}
};
</script>

<style lang="scss">
    .kmt-bulletlist {
        @include center-inner-large();

        ul {
            @extend %bulletlist;
        }
    }
</style>
