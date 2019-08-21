<template>
  <div class="rq-011-container horizontal" v-if="href && linkText">
    <div class="rq-011-icon" v-if="icon">
      <g-image :src="icon"/>
    </div>
    <div class="rq-011-content horizontal">
      <p class="label" v-html="hint" />
      <h3 v-html="title" class="rq-011-title" />
      <p v-html="text" class="size--sm"></p>
      <g-link :to="href" class="rq-011-link">{{linkText}}</g-link>
    </div>
  </div>

  <div class="rq-011-container vertical" v-else-if="!href && !linkText && text" :style="style">
    <div class="rq-011-icon" v-if="icon">
      <g-image :src="icon"/>
    </div>
    <div class="rq-011-content">
      <p class="label" v-html="hint" />
      <h3 v-html="title" class="rq-011-title" />
      <p v-html="text" class="rq-011-text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RQ-011',
  props: {
    icon: {
      type: String,
      required: false
    },
    count: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String,
      required: false
    },
    hint: {
      type: String,
      required: false
    },
    href: {
      type: String,
      required: false
    },
    linkText: {
      type: String,
      required: false
    }
  },
  computed: {
    style() {
      if(parseInt(this.count)) {
        return "grid-column: span " + 12 / parseInt(this.count) + ';';
      } else {
        return null;
      }
    }
  }
}
</script>

<style>

  .rq-011-icon img {
    width: 100%;
    height: 100%;
  }

  .rq-011-container.vertical {
    grid-column: span 5;
    grid-row: span 11;
    text-align: left;
  }

  .rq-011-container.vertical .rq-011-icon > .rq-011-content {
    text-align: center;
  }

  .rq-011-link {
    text-transform: uppercase;
  }

  .rq-011-link::after {
    content: url('/uploads/svg/arrow-button_link.svg');
    width: 22px;
    height: 12px;
    margin-left: 12px;
  }

  .rq-011-container.vertical .rq-011-icon {
    margin: 0 auto 42px auto;
  }

  .rq-011-container.vertical .rq-011-content .rq-011-title {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .rq-011-container.vertical .rq-011-content .label {
    margin: 0;
  }



  .rq-011-content .horizontal {
    margin: 0 0 22px 0;
  }

  .rq-011-container.horizontal {
    grid-column: span 6;
    padding-left: 120px;
    padding-right: 120px;
    grid-row: span 10;
    position: relative;
    display: flex;
    margin-bottom: 73px;
  }

  .rq-011-content.horizontal .label {
    margin: 0;
  }

  .rq-011-icon {
    width: 72px;
    height: 64px;
    margin-right: 48px;
  }

  .rq-011-content.horizontal {
    max-width: 360px;
  }

  .rq-011-container.horizontal .rq-011-title {
      margin: 2px 0 16px 0;
      max-height: 80px;

  }

</style>
