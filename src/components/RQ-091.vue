<template>
  <div class="rq-091-container">
    <h3 v-html="text" class="rq-091-text"/>
      <div class="rq-091-details">
        <g-image class="rq-091-overlay" src="/uploads/svg/Kosmonaut-Blob-Gray.svg" />
        <g-image class="rq-091-profile-image" :src="src"/>
        <div class="rq-091-description">
          <p class="label rq-091-name" v-html="name" />
          <p class="size--sm rq-091-profession" v-html="description" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'rq-091',
  props: {
    text: {
      type: String
    },
    src: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>

<style>

  .rq-091-container {
    grid-column: 3 / 11;
    grid-row: span 17;
  }

  .rq-091-text {
    font-weight: 300;
    margin-bottom: 45px;
  }

  .rq-091-text::before {
    content: '"'
  }

  .rq-091-text::after {
    content: '"'
  }

  .rq-091-details {
    position: relative;
  }

  .rq-091-overlay {
    width: 88px;
    height: 71px;
    margin-right: 32px;
  }

  .rq-091-description {
    position: absolute;
    display: inline-block;
  }

  .rq-091-name, .rq-091-profession {
    margin: 0;
  }

  .rq-091-profile-image {
    position: absolute;
    width: 56px;
    left: 24px;
    top: 7px;
  }

</style>
