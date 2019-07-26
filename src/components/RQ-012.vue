<template>
  <div class="rq-012-container" v-if="!background" :style="style">
    <h2 v-html="title" class="rq-012-title" />
    <div class="rq-012-content">
      <p class="size--md" v-html="text" style="margin: 0;"/>
    </div>
  </div>
</template>

<script>
import BulletList from '~/components/BulletList.vue'
export default {
  name: 'rq-012',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    cols: {
      type: String
    }
  },
  computed: {
    style() {
      return '--cols: ' + parseInt(this.cols);
    }
  }
}
</script>

<style>

  .rq-012-container {
    grid-column: 1 / 13;
    --cols: 1;
  }

  .rq-012-content {
    column-count: var(--cols);
    column-width: calc((1408px - (var(--cols)-1) * 32px) / var(--cols));
    column-gap: 32px;
  }

  .rq-012-title {
    text-align: center;
  }

</style>
