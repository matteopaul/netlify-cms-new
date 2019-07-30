<template>
  <Layout>
    <h1 class="color-headline">RQ-003: Color</h1>
     <div class="preview">
        <div class="color copper"></div>
        <h2>Color Copper</h2>
      </div>
      <div class="preview">
          <div class="color dark"></div>
          <h2>Color Dark</h2>
        </div>
        <div class="preview">
            <div class="color midnight"></div>
            <h2>Color Midnight</h2>
          </div>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Farben'
  }
}
</script>

<style media="screen">
  .preview, .color-headline {
    grid-column: span 12;
  }

  .color.copper {
    background: var(--copper);
  }
  .color.midnight {
    background: var(--midnight);
  }
  .color.dark {
    background: var(--dark);
  }
  .color {
    width: 300px;
    height: 300px;
  }
</style>
