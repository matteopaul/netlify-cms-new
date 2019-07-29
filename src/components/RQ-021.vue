<template>
  <div class="rq-021-container" :class="size + hasText">
      <div class="rq-021-image-content top" v-if="text && position && position == 'top'">
        <h3 v-html="title" class="rq-021-title" />
        <p class="rq-021-text size--md" v-html="text"/>
      </div>
      <g-image class="rq-021-image" :src="src"/>
      <div class="rq-021-image-content right" v-if="text && position && position == 'right'">
        <h3 v-html="title" class="rq-021-title" />
        <p class="rq-021-text size--md" v-html="text"/>
      </div>
      <div class="rq-021-image-content bottom" v-if="text && position && position == 'bottom'">
        <h3 v-html="title" class="rq-021-title" />
        <p class="rq-021-text size--md" v-html="text"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'rq-021',
  props: {
    title: {
      type: String
    },
    src: {
      type: String
    },
    text: {
      type: String,
      required: false
    },
    position: {
      type: String,
      required: false
    },
    size: {
      type: String
    }
  },
  computed: {
    hasText() {
      if(this.text) {
        return ' hasText';
      } else {
        return '';
      }
    }
  }
}
</script>

<style>
  .rq-021-container {
  }
  .rq-021-container.panorama {
    grid-column: span 12;
    grid-row: span 45;
    height: 720px;
  }

  .rq-021-container.square {
    grid-column: span 6;
    grid-row: span 2;
    height: 688px;
  }

  .rq-021-container.landscape-small {
    grid-column: span 4;
    width: 448px;
    height: 248px;
  }

  .rq-021-container.landscape {
    grid-column: span 6;
    height: 384px;
  }

  .rq-021-container.portrait {
    grid-column: span 4;
    height: 600px;
  }

  .rq-021-container.portrait .rq-021-image {
    width: 448px;
    height: 600px;
  }

  .rq-021-container.portrait.hasText {
    grid-column: span 5;
    grid-row: span 54;
    height: auto;
    position: relative;
  }

  .rq-021-container.portrait.hasText .rq-021-image {
    margin-top: 55px;
    margin-bottom: 55px;
    position: relative;
  }

  .rq-021-container .rq-021-image {
    width: 100%;
    height: 100%;
  }

  .rq-021-image-content {
    margin-left: 32px;
    position: absolute;
  }

  .rq-021-title {
    margin-bottom: 16px;
  }

  .rq-021-image-content.top {
    left: 112px;
    position: relative;
  }

  .rq-021-image-content.bottom {
    left: -112px;
  }

  .rq-021-image-content.right {
    margin-left: 112px;
    position: absolute;
    display: inline-block;
    top: 50%;
  }



</style>
