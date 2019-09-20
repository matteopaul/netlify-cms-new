<template>
  <div class="rq-094-container">
    <g-image :src="src" class="rq-094-image" />
    <img :src="src.dataUri" alt="" :data-srcset="src.srcset" class="rq-094-image">
    <img src="/uploads/svg/Kosmonaut-Blob-Midnight.svg" type="image/svg+xml" class="rq-094-overlay">
    <div class="rq-094-content">
      <h1 class="rq-094-title" v-html="title" />
      <p class="size--lg" v-html="text" />
      <g-link :to="href" class="rq-094-link">{{linkText}}</g-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rq-094',
  props: {
    src: {
      type: Object
    },
    title: {
      type: String
    },
    text: {
      type: String
    },
    href: {
      type: String
    },
    linkText: {
      type: String
    }
  }
}
</script>

<style>

  .rq-094-container {
    position: relative;
    place-self: center;
    grid-column: 1 / 13;
    grid-row: span 28;
    height: 448px;
    width: 1920px;
    overflow: hidden;
  }

  .rq-094-container .rq-094-image {
    width: 100%;
    height: 100%;
  }

  .rq-094-overlay {
    bottom: -48px;
    position: absolute;
    left: 384px;
    width: 534px;
    height: 431px;
  }

  .rq-094-link {
    margin-top: 33px;
    text-transform: uppercase;
  }

  .rq-094-link::after {
    content: url('/uploads/arrow-button_link.svg');
    margin-left: 15px;
  }


  .rq-094-content {
    position: absolute;
    z-index: 3;
    max-width: 340px;
    top: 138px;
    left: 501px;
  }

  .rq-094-content .rq-094-title, .rq-094-content p.size--lg {
    color: var(--white);
    margin: 0;
    margin-bottom: 16px;
  }

  .rq-094-content .g-link {
    margin-top: 33px;
    text-transform: uppercase;
  }

</style>
