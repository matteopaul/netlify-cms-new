<template>
  <div class="rq-015-container" v-if="!position || position == 'vertical'" :class="classes + ' ' + size">
    <RQ_021 :src="src" :size="size" :title="title" class="rq-015-image" />
    <h2 v-html="title" class="rq-015-title" />
    <p class="size--md rq-015-text" v-html="text" />
    <g-link :to="link" class="rq-015-link">{{linkText}}</g-link>
  </div>
  <div class="rq-015-container horizontal" v-else-if="position && position == 'horizontal' && size == 'landscape'" :class="classes">
    <RQ_021 :src="src" :size="size" :title="title" class="rq-015-image horizontal" />
    <div class="rq-015-content horizontal">
      <h2 v-html="title" class="rq-015-title" />
      <p class="size--md rq-015-text" v-html="text" />
      <RQ_090 v-if="options && label" class="rq-015-bulletList" title="label" v-bind:options="options" />
      <g-link :to="link" class="rq-015-link">{{linkText}}</g-link>
    </div>
  </div>
  <div class="rq-015-container small" v-else-if="position == 'horizontal' && size == 'square' && scale == 'small'" :class="classes">
    <RQ_021 :src="src" :size="size" :title="title" class="rq-015-image horizontal small" />
    <div class="rq-015-content horizontal">
      <h2 v-html="title" class="rq-015-title" />
      <p class="size--md rq-015-text" v-html="text" />
      <RQ_090 v-if="options && label" class="rq-015-bulletList" title="label" v-bind:options="options" />
      <g-link :to="link" class="rq-015-link">{{linkText}}</g-link>
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
      type: Array,
      required: false
    },
    label: {
      type: String
    },
    position: {
      type: String,
      required: false
    },
    scale: {
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
      name += " " + this.position;
      return name;
    }
  }
}
</script>

<style>

.rq-015-container.vertical:nth-child(2n-1) {
  grid-column: span 6;
}

.rq-015-container.vertical.portrait:nth-of-type(2n-1) {
  padding-right: 240px;
  grid-column: span 6;
}

.rq-015-container.vertical.portrait:nth-of-type(2n - 1) .rq-015-link {
  right: 240px;
}

.rq-015-container.vertical.portrait:nth-child(2n-1) .rq-015-link{
  right: 240px;
}

.rq-015-container.square {
  grid-row: span 43;
}

.rq-015-container {
  margin-bottom: 40px;
}

.rq-015-container.vertical .rq-021-container.rq-015-image {
  padding-left: 0;
}

.rq-015-container.portrait {
  grid-row: span 38;
}

.rq-015-container.landscape {
  grid-row: span 24;
}

  .rq-015-container, .rq-015-content {
    position: relative;
  }

  .rq-015-container.horizontal .rq-015-image {
    grid-column: span 1;
  }

  .rq-015-container.deactive {
    display: none !important;
  }

  .rq-015-container.horizontal {
    grid-column: span 12;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 50px;
  }

  .rq-015-container.horizontal.small {
    grid-column: span 6;
    grid-template-columns: 208px 67%;
    grid-template-rows: 208px;
    grid-column-gap: 32px;
  }

  .rq-021-container.square.rq-015-image.horizontal.small {
    grid-row: 1;
    width: 100%;
    height: 100%;
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
    text-transform: uppercase;
    right: 0;
  }

  .rq-015-link::after {
    content: url('/uploads/arrow-button_link.svg');
    margin-left: 15px;
  }

</style>
