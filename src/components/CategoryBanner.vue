<template>
  <div class="category-banner-container">
    <g-image :src="src" />
    <button class="button" type="button" name="button">mehr erfahren</button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    src: String,
    text: String,
    buttonText: String
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>
  .category-banner-container {
    position: relative;
    place-self: center;
    grid-column: 1 / 13;
  }

  .stage-container img {
    width: 1920px;
    height: 904px;
  }

  .button {
    position: relative;
    left: 265px;
    bottom: 168px;
    width: 192px;
    height: 48px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: var(--copper);
  }
</style>
