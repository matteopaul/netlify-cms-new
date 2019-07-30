<template>
  <div class="rq-015-container" v-if="!position || position == 'vertical'" :class="classes + ' ' + size">
    <RQ_021 :src="src" :size="size" :title="title" class="rq-015-image" />
    <h2 v-html="title" class="rq-015-title" />
    <p class="size--md rq-015-text" v-html="text" />
    <g-link :href="link" class="rq-015-link">{{linkText}}</g-link>
  </div>
  <div class="rq-015-container horizontal" v-else-if="position && position == 'horizontal' && size == 'landscape'" :class="classes">
    <RQ_021 :src="src" :size="size" :title="title" class="rq-015-image horizontal" />
    <div class="rq-015-content horizontal">
      <h2 v-html="title" class="rq-015-title" />
      <p class="size--md rq-015-text" v-html="text" />
      <RQ_090 v-if="options && label" class="rq-015-bulletList" title="label" v-bind:options="options" />
      <g-link :href="link" class="rq-015-link">{{linkText}}</g-link>
    </div>
  </div>
</template>

<script>
import RQ_090 from '~/components/RQ-090.vue'
import RQ_021 from '~/components/RQ-021.vue'

export default {
  name: 'rq-015',
  props: {
    title: {
      type: String
    },
    src: {
      type: String
    },
    size: {
      type: String
    },
    link: {
      type: String
    },
    linkText: {
      type: String
    },
    text: {
      type: String,
      required: false
    },
    attr: {
      type: Array,
      required: false
    },
    options: {
      type: Object,
      required: false
    },
    label: {
      type: String
    },
    position: {
      type: String,
      required: false
    }
  },

  components: {
      RQ_090,
      RQ_021
  },
  computed: {
    classes() {
      let name = "";
      for(let i in this.attr) {
        name += ' ' + this.attr[i];
      }
      return name;
    }
  }
}
</script>

<style>

  .rq-015-container, .rq-015-content {
    position: relative;
  }

  .rq-015-container.deactive {
    display: none !important;
  }

  .rq-015-container.horizontal {
    grid-column: span 12;
    display: flex;
    flex-direction: row;
  }

  .rq-015-container.horizontal .rq-015-image.horizontal {
    flex-shrink: 0;
    margin-right: 120px;
  }

  .rq-015-container.horizontal.reverse {
    flex-direction: row-reverse;
  }

  .rq-015-bulletList {
    height: auto;
    max-height: 300px;
  }

  .rq-015-bulletList ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 150px;
  }

  .rq-015-container.horizontal.reverse .rq-015-image.horizontal {
    margin-right: 0;
    margin-left: 120px;
  }

  .rq-015-container.square {
    grid-column: span 6;
  }

  .rq-015-container.portrait {
    grid-column: span 4;
  }

  .rq-015-container.landscape {
    grid-column: span 6;
  }

  .rq-015-image.landscape {
    margin-bottom: 40px;
  }

  .rq-015-image.portrait, .rq-015-image.square {
    margin-bottom: 32px;
  }

  .rq-015-title {
    margin: 0;
  }

  .rq-015-text {
    margin-top: 16px;
    margin-bottom: 49px;
  }

  .rq-015-link {
    position: absolute;
    right: 0;
    bottom: 5px;
  }

  .rq-015-link::after {
    content: url('/uploads/svg/arrow-button_link.svg');
    margin-left: 15px;
  }

</style>
