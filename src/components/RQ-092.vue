<template>
  <div class="rq-092-container" :style="this.style">
      <template v-for="content in contents">
        <h3 v-if="content.type == 'h3'" v-html="content.text" />
        <p v-if="content.type == 'label'" v-html="content.text" class="label" />
        <p v-if="content.type == 'p regular'" v-html="content.text" class="size--md"/>
        <p v-if="content.type == 'p large'" v-html="content.text" class="size--lg"/>
        <g-image v-if="content.type == 'icon'" :src="content.src"/>
        <g-link v-if="content.type == 'link'" :href="content.href">{{content.text}}</g-link>
        <BulletList v-if="content.type == 'bulletList'" :title="content.title" :text="content.text" v-bind:options="content.options" checked="content.checked" />
        <RQ_091 v-if="content.type == 'quote'" :text="content.text" :src="content.src" :description="content.description" :name="content.name" />
        <RQ_021 v-if="content.type == 'image'" :src="content.src" class="rq-092-image" :size="content.size" :title="content.title" />
      </template>
  </div>
</template>

<script>
import BulletList from '~/components/BulletList.vue'
import RQ_091 from '~/components/RQ-091.vue'
import RQ_021 from '~/components/RQ-021.vue'
export default {
  name: 'rq-092',
  props: {
    contents: {
      type: Array
    },
    color: {
      type: String,
      default: "gray"
    }
    //
    // TYPES:
    // label / text
    // icon / label / text
    // label / text / link
    // headline / text / list
    // quote
    // profile
    // image
    //
  },
  computed: {
    style() {
      let style = "--card-color: var(--" + this.color + ");";
      if(this.color == 'copper') {
        style += '--font-color: var(--white); --label-color: var(--white);'
      }
      return style
    }
  },
  components: {
    BulletList,
    RQ_091,
    RQ_021
  }
}
</script>

<style>
  .rq-092-container {
    --label-color: var(--gray);
    --font-color: var(--dark);
    width: 448px;
    margin-right: 32px;
    display: inline-block;
    grid-column: span 4;
    background: var(--card-color);
    color: var(--font-color);
    position: relative;
    padding: 24px;
    box-sizing: border-box;
  }

  .rq-092-container .label {
    color: var(--label-color);
  }

  .rq-092-container * {
    color: var(--font-color);
  }

  .rq-092-container a {
    text-decoration: underline;
  }

  .rq-092-image {
    position: absolute;
    left: 0;
  }




</style>
