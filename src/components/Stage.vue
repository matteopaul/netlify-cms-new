<template>
  <div class="stage-container">
    <g-image :src="src" />
    <div class="image-content">
      <h1 class="text" v-html="text"/>
      <button class="button" type="button" v-html="buttonText" name="button"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stage',
  props: {
    src: String,
    text: String,
    buttonText: String
  }
}
</script>

<style>

  .stage-container {
    position: relative;
    place-self: center;
    grid-column: 1 / 13;
    grid-row: 2;
    height: 904px;
  }

  .image-content {
      max-width: 1048px;
      left: 265px;
      position: absolute;
      bottom: 168px;
  }

  .text {
    margin: 0 0 32px 0;
  }

  .stage-container img {
    width: 1920px;
    height: 100%;
  }

  .button {

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
