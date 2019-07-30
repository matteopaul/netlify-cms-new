<template>
  <div class="rq-090-container" :style="style">
    <p class="label" v-html="title" v-if="!text" />
    <h3 class="rq-090-title" v-if="text" v-html="title" />
    <p v-if="text" v-html="text" class="rq-090-text size--md"/>
    <ul>
      <li v-for="option in options" v-html="option" v-if="!checked"/>
      <li v-for="option in options" v-html="option" v-if="checked" class="rq-090-bulletlist-img"/>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'RQ-090',
  props: {
    title: {
      type: String
    },
    text: {
      type: String,
      required: false
    },
    options: {
      type: Array
    },
    checked: {
      type: String,
      required: false
    }
  },
  computed: {
    style() {
      let rows = (this.options.length * 2);
      return '--rows: ' + rows;
    }
  }
}
</script>

<style>
  .rq-090-container {
    grid-column: span 3;
    grid-row: span var(--rows);
    height: 300px;
    display: inline-block;
    margin-right: 30px;
  }
  ul {
    list-style-type: circle;
  }
  .rq-090-title {
    margin: 0;
  }
  .rq-090-text {
    margin: 8px 0;
  }
  .rq-090-text + ul {
    margin-top: 33px;
  }
  .rq-090-container ul li {
      color: var(--dark);
      font-family: "Sentinel-Book", sans-serif;
  }

  .rq-090-container .rq-090-text[style*="display: none;"] + ul {
      margin-top: 16px;
  }

  .rq-090-bulletlist-img {
    list-style-image: url('/uploads/svg/Points-Bullet-Special.svg');
  }
</style>
