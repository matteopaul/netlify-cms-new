<template>
  <div class="rq-016-container">
    <g-image v-if="src" :src="src" class="preview-image" />
    <g-image v-if="src" src="~/assets/svg/Kosmonaut-Blob-Midnight.svg" type="image/svg+xml" class="overlay-image size--md"/>
    <g-image v-if="!src" src="~/assets/svg/Kosmonaut-Blob-Gray.svg" type="image/svg+xml" class="overlay-image size--lg"/>
    <div class="rq-016-content no-image" v-if="!src">
      <RQ_035 :path="path" />
      <h1 v-html="title" class="rq-016-headline" />
      <p class="size--lg rq-016-text" v-html="text" />
    </div>
    <div class="rq-016-content" v-if="src">
      <h1 v-html="title" class="rq-016-headline" />
      <p class="size--lg rq-016-text" v-html="text" />
    </div>
  </div>
</template>

<script>
import RQ_035 from '~/components/RQ-035.vue'
export default {
  name: 'RQ-016',
  props: {
    src: {
      type: String,
      required: false
    },
    path: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  components: {
    RQ_035
  }
}
</script>

<style>
  .rq-016-container {
    position: relative;
    place-self: center;
    grid-column: 1 / 13;
    grid-row: span 45;
    width: 1600px;
    height: 720px;
  }

  .rq-016-text {
    color: var(--white);
    margin: 32 0 0 0;
  }

  .rq-016-headline {
    margin: 8px 0 0 0;
    color: var(--white);
  }

  .preview-image {
    width: 100%;
    height: 100%;;
  }

  .overlay-image {
    position: absolute;
    z-index: 2;
  }

  .overlay-image.size--md {
    width: 606px;
    height: 489px;
    top: 149px;
    left: 99px;
  }

  .overlay-image.size--lg {
    width: 894px;
    height: 734px;
    top: 0;
    left: 0;
  }

  .rq-016-content {
    position: absolute;
    z-index: 3;
    max-width: 340px;
    top: calc(149px + 152px);
    left: calc(99px + 117px);
  }

  .rq-016-content.no-image {
    width: 928px;
    max-width: none;
    left: 50%;
    transform: translateX(-50%);
  }

  .rq-016-content.no-image h1 {
      color: var(--midnight);
  }

  .rq-016-content.no-image .rq-016-text {
      color: var(--dark);
  }
</style>
