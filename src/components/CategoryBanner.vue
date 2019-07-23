<template>
  <div class="category-banner-container">
    <g-image :src="src" class="preview-image" />
    <g-image src="~/assets/svg/Kosmonaut-Blob-Midnight.svg" type="image/svg+xml" class="overlay-image"/>
    <div class="category-banner-content">
      <h1 v-html="headline" class="category-banner-headline" />
      <p class="size--lg category-banner-text" v-html="text" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CategoryBanner',
  props: {
    src: String,
    headline: String,
    text: String
  }
}
</script>

<!---style>
  .category-banner-container {
    position: relative;
    place-self: center;
    grid-column: 1 / 13;
  }

  .category-banner-text {
    color: var(--white);
  }

  .category-banner-headline {
    margin: 0;
    height: 64px;
    color: var(--white);
  }

  .preview-image {
    width: 1600px;
    height: 720px;
  }

  .overlay-image {
    position: absolute;
    z-index: 2;
    width: 606px;
    height: 489px;
    top: 149px;
    left: 99px;
  }

  .category-banner-content {
    position: absolute;
    z-index: 3;
    max-width: 340px;
    top: calc(149px + 152px);
    left: calc(99px + 117px);
  }
</style--->
