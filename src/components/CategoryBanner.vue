<template>
  <div class="category-banner-container">
    <g-image v-if="src" :src="src" class="preview-image" />
    <g-image v-if="src" src="~/assets/svg/Kosmonaut-Blob-Midnight.svg" type="image/svg+xml" class="overlay-image size--md"/>
    <g-image v-if="!src" src="~/assets/svg/Kosmonaut-Blob-Gray.svg" type="image/svg+xml" class="overlay-image size--lg"/>
    <div class="category-banner-content no-image" v-if="!src">
      <h1 v-html="title" class="category-banner-headline" />
      <p class="size--lg category-banner-text" v-html="text" />
    </div>
    <div class="category-banner-content" v-if="src">
      <h1 v-html="title" class="category-banner-headline" />
      <p class="size--lg category-banner-text" v-html="text" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CategoryBanner',
  props: {
    src: {
      type: String,
      required: false
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style>
  .category-banner-container {
    position: relative;
    place-self: center;
    grid-column: 1 / 13;
    grid-row: span 45;
    width: 1600px;
    height: 720px;
  }

  .category-banner-text {
    color: var(--white);
    margin: 32 0 0 0;
  }

  .category-banner-headline {
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

  .category-banner-content {
    position: absolute;
    z-index: 3;
    max-width: 340px;
    top: calc(149px + 152px);
    left: calc(99px + 117px);
  }

  .category-banner-content.no-image {
    width: 928px;
    max-width: none;
    left: 50%;
    transform: translateX(-50%);
  }

  .category-banner-content.no-image h1 {
      color: var(--midnight);
  }

  .category-banner-content.no-image .category-banner-text {
      color: var(--dark);
  }
</style>
