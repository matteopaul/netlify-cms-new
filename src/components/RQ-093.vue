<template>
  <div class="rq-093-container">
    <RQ_092 v-bind:contents="cardContents" :color="cardColor" class="rq-093-card"/>
    <RQ_007 v-bind:contents="mdContents" :background="mdBackground" class="rq-093-markdown"/>
  </div>
</template>

<script>
import RQ_007 from '~/components/RQ-007.vue'
import RQ_092 from '~/components/RQ-092.vue'
export default {
  name: 'rq-007',
  props: {
    cardContents: {
      type: Array
    },
    cardColor: {
      type: String
    },
    mdBackground: {
      type: Boolean,
      required: false
    },
    mdContents: {
      type: Array
    }
  },

  components: {
      RQ_007,
      RQ_092
  }
}
</script>

<style>

  .rq-093-container {
    grid-column: 1 / 13;
    position: relative;
  }

  .rq-093-card {
    position: absolute;
    left: -120px;

  }

  .rq-093-container .rq-007-container{
    width: 1768px;
  }

  .rq-093-markdown {
    display: inline-block;
    margin-left: 360px;
    width: calc(1048px + 120px);
  }

</style>
