<template>
  <div class="rq-016-container" :class="classes">
    <g-image v-if="src" :src="src" class="preview-image" />
    <g-image v-if="src" src="~/assets/svg/Kosmonaut-Blob-Midnight.svg" type="image/svg+xml" class="overlay-image size--md"/>
    <g-image v-if="!src" src="~/assets/svg/Kosmonaut-Blob-Gray.svg" type="image/svg+xml" class="overlay-image size--lg"/>
    <div class="rq-016-content no-image" v-if="!src">
      <RQ_035 :path="path" />
      <h1 v-html="title" class="rq-016-headline" />
      <p class="size--lg rq-016-text" v-html="text" />
    </div>
    <div class="rq-016-content" v-if="src">
      <RQ_035 :path="path" />
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
      type: Object,
      required: false
    },
    overlayImage: {
      type: Object,
    },
    width: {
      type: String,
      required: false
    },
    path: {
      type: String,
      required: false
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
  },
  computed: {
    classes() {
      if(this.width && this.width == "small") {
        return "contact"
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss">
  .rq-016-container {
    position: relative;
    // place-self: center; -> Working Draft ... nicht nutzen
    grid-column: 1 / 13;
    grid-row: span 45;
    xwidth: 1600px;
    xheight: 720px;
  }

  .rq-016-container.contact {
    grid-column: span 6;
    width: 688px;
  }

  .rq-016-container:not(.contact) .overlay-image.size--lg {
    top: 0;
    left: 0;
    transform: scale(1) rotateZ(0deg);
    transition-duration: 0.25s;
  }

  .rq-016-container.contact .overlay-image.size--lg {
    transition-duration: 1.2s;
    transform: scale(1.5) rotateZ(200deg);
    left: -70%;
    top: -40%;
  }

  .rq-016-container.contact .rq-016-content {
    top: 200px;
    width: 700px;
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
    transform: scale(1) rotateZ(0deg);
  }

  .rq-016-content {
    position: absolute;
    z-index: 3;
    max-width: 400px;
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
