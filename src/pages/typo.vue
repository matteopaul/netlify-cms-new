<template>
  <Layout>
    <h1 class="typo-headline">RQ-002: Typo</h1>
     <div class="preview">
        <h1>TYPO Headline 1</h1>
        <h2>TYPO Headline 2</h2>
        <h3>TYPO Headline 3</h3>
        <p class="size--lg">Paragraph Large</p>
        <p class="size--md">Paragraph Medium</p>
        <p class="size--sm">Paragraph Small</p>
        <p class="label">This is a label</p>
        <g-link>I am a link.</g-link>
      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Typo'
  }
}
</script>

<style media="screen">
  .preview, .typo-headline {
    grid-column: span 12;
  }

</style>
