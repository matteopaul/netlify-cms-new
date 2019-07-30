<template>
  <Layout>
    <h1 class="forms-headline">RQ-004: Forms</h1>
     <div class="preview">
        <button type="button" class="forms-button">mehr erfahren</button>
        <h3>Standard Button</h3>
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
  .preview, .forms-headline {
    grid-column: span 12;
  }

  .forms-button {
    background: var(--copper);
  }
</style>
