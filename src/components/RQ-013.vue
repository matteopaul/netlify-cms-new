<template>
    <div class="rq-013-container">
        <g-image :src="src" v-if="src"/>
        <div class="rq-013-image-content">
            <h1 class="rq-013-text" v-html="title"/>
            <button class="rq-013-button" type="button" v-html="buttonText" name="button"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RQ-013',
  props: {
    src: {
      type: Object,
      default () {
        return {};
      }
    },
    title: {
      type: String
    },
    buttonText: {
      type: String
    }
  }
};
</script>

<style lang="scss">
    .rq-013-container {
        position: relative;
        place-self: center;
        grid-column: 1 / 13;
        grid-row: span 57;
        height: 904px;
    }

    .rq-013-image-content {
        max-width: 1048px;
        left: 265px;
        position: absolute;
        bottom: 168px;
    }

    .rq-013-text {
        margin: 0 0 32px 0;
        color: var(--white);
    }

    .rq-013-container img {
        width: 1920px;
        height: 100%;
    }

    .rq-013-button {
        border: none;
        left: 265px;
        bottom: 168px;
        width: 192px;
        height: 48px;
        font-size: 14px;
        color: var(--white);
        letter-spacing: 1px;
        text-transform: uppercase;
        background: var(--copper);
    }
</style>
