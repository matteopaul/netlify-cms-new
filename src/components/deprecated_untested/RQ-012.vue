<template>
    <div class="rq-012-container" v-if="!background" :style="style">
        <h2 v-html="title" class="rq-012-title"/>
        <div class="rq-012-content">
            <p class="size--md" v-html="text" style="margin: 0;"/>
        </div>
    </div>
</template>

<script>
import RQ_090 from '~/components/RQ-012.vue';

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
      type: Number,
      default: 1
    },
    background: {
      type: Object
    }
  },
  computed: {
    style () {
      return '--cols: ' + parseInt(this.cols);
    }
  }
};
</script>

<style lang="scss">
    .rq-012-container {
        grid-column: 1 / 13;
        --cols: 1;
        grid-row: span 15;

        .rq-012-title {
            text-align: center;
        }

        .rq-012-content {
            column-count: var(--cols);
            column-width: calc((1408px - (var(--cols) - 1) * 32px) / var(--cols));
            column-gap: 32px;
        }
    }
</style>
