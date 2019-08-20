<template>
  <div class="rq-014-container bulletlist" v-if="options && !textWithIcon && href && linkText">
    <g-image :src="src" class="rq-014-preview-image" />
    <h2 class="rq-014-title" v-html="title"/>
    <div class="rq-014-bulletLists">
      <template v-for="list in options">
        <RQ_090 v-bind:options="list.options" :title="list.title" :text="list.text"/>
      </template>
    </div>
    <g-link :href="href" class="rq-014-link">{{linkText}}</g-link>
  </div>

  <div class="rq-014-container twi" v-else-if="!options && !href && textWithIcon">
    <g-image src="~/assets/svg/Kosmonaut-Blob-Gray_Lines-Details.svg" type="image/svg+xml" class="rq-014-overlay-image"/>
    <g-image :src="src" class="rq-014-preview-image" />
    <h2 class="rq-014-title" v-html="title" />
    <template v-for="text in textWithIcon">
        <RQ_011  :icon="text.icon" :title="text.title" :linkText="text.linkText" :text="text.text" :href="text.href"/>
    </template>
  </div>

</template>

<script>
  import RQ_090 from '~/components/RQ-090.vue'
  import RQ_011 from '~/components/RQ-011.vue'
export default {
  name: 'rq-014',
  props: {
    src: {
      type: String
    },
    options: {
      type: Array,
      required: false
    },
    title: {
      type: String
    },
    href: {
      type: String,
      required: false
    },
    linkText: {
      type: String,
      required: false
    },
    textWithIcon: {
      type: Array,
      required: false
    }
  },
  components: {
    RQ_090,
    RQ_011
  }
}
</script>

<style>

  .rq-014-container {
    grid-row: span 45;
  }

  .rq-014-container.twi {
    position: relative;
    place-self: center;
    grid-column: 2 / 12;
    width: 1288px;
    height: 697px;
  }

  .rq-014-container.twi .rq-014-overlay-image {
    width: 775px;
    height: 665px;
    opacity: 0.15;
    float: right;
  }

  .rq-014-container.twi .rq-014-preview-image {
    position: absolute;
    top: 90px;
    right: 123px;
    width: 600px;
    height: 446px;
  }

  .rq-014-container.twi .rq-014-title {
    margin-bottom: 111px;
  }






  .rq-014-container.bulletlist {
    position: relative;
    place-self: center;
    grid-column: 1 / 13;
    width: 1600px;
    height: 728px;
    background: #f5f5f5;
  }

  .rq-014-container.bulletlist .rq-014-link {
    position: absolute;
    left: 935px;
    top: calc(521px - 50px);
    margin-top: 50px;
    font-size: 14px;
    text-transform: uppercase;
  }

  .rq-014-container.bulletlist .list-container {
    display: inline-block;
    margin-left: 30px;
  }

  .rq-014-container.bulletlist .rq-014-preview-image {
    width: 848px;
    height: 482px;
    top: 125px;
    left: 56px;
    position: absolute;
  }

  .rq-014-bulletLists {
    position: absolute;
    left: 935px;
    margin-top: 51px;
    top: calc(283px - 51px);
  }

  .rq-014-link::after {
    content: url('/uploads/svg/arrow-button_link.svg');
    width: 22px;
    height: 12px;
    margin-left: 12px;
  }

  .rq-014-container.bulletlist .rq-014-title {
    position: absolute;
    top: 184px;
    left: calc(935px - 31px);
    display: inline-block;
    margin-left: 31px;
  }

</style>
