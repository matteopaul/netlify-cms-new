<template>
  <div class="rq-092-container" :style="this.style" :class="classes">
      <template v-for="content in contents">
        <h3 v-if="content.type == 'h3'" v-html="content.text" />
        <p v-if="content.type == 'label'" v-html="content.text" class="label" />
        <p v-if="content.type == 'p regular'" v-html="content.text" class="size--md"/>
        <p v-if="content.type == 'p large'" v-html="content.text" class="size--lg"/>
        <g-image v-if="content.type == 'icon'" :src="content.src" class="img"/>
        <g-link v-if="content.type == 'link'" :to="content.href" class="rq-092-link">{{content.text}}</g-link>
        <RQ_090 v-if="content.type == 'bulletList'" :title="content.title" :text="content.text" v-bind:options="content.options" checked="content.checked" />
        <RQ_091 v-if="content.type == 'quote'" :text="content.text" :src="content.src" :description="content.description" :name="content.name" />
        <RQ_021 v-if="content.type == 'image'" :src="content.src" class="rq-092-image" :size="content.size" :title="content.title" />
        <Profile_Card v-if="content.type == 'profile-card'" :src="content.src" class="rq-092-profile-card" :title="content.title" :description="content.description" :contact="content.contact" />
        <div class="rq-092-info-div" v-if="content.type == 'info div'">
          <template v-for="infocontent in content.information_contents">
            <p v-if="infocontent.type == 'p large'" class="size--lg" v-html="infocontent.text" />
            <p v-if="infocontent.type == 'label'" class="label" v-html="infocontent.text" />
          </template>
        </div>
      </template>
  </div>
</template>

<script>
import RQ_090 from '~/components/RQ-090.vue'
import RQ_091 from '~/components/RQ-091.vue'
import RQ_021 from '~/components/RQ-021.vue'
import Profile_Card from '~/components/profile-card.vue'
export default {
  name: 'rq-092',
  props: {
    contents: {
      type: Array
    },
    attr: {
      type: Array,
      required: false
    },
    color: {
      type: String,
      default: "gray"
    }
  },
  computed: {
    style() {
      let style = "--card-color: var(--" + this.color + ");";
      if(this.color == 'copper') {
        style += '--font-color: var(--white); --label-color: var(--white);'
      }
      return style
    },
    classes() {
      let name = "";
      for(let i in this.attr) {
        name += ' ' + this.attr[i].toLowerCase();
      }
      for(let i = 0; i < this.contents.length; i++) {
        if(this.contents[i]["type"] == "profile-card") {
          name += ' large';
          break;
        }

      }
      if(name.indexOf('large') <= -1) {
          if(this.color == 'white') {
            name += ' profile card';
        }
      }
      return name;
    }
  },
  components: {
    RQ_090,
    RQ_091,
    RQ_021,
    Profile_Card
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
    box-sizing: border-box;
    padding-bottom: 24px;
  }

  .rq-092-container .rq-092-info-div {
    display:inline-block;
    margin-right: 30px;
    margin-bottom: 20px;
  }

  .rq-092-container .rq-092-info-div * {
    margin: 0;
    padding: 0;
  }

  .rq-092-container.large {
    grid-column: span 6;
  }

  .rq-092-container.large .rq-092-profile-card .rq-021-container {
    width: 150px;
    height: 100%;
    margin-right: 20px;
  }

  .rq-092-container.deactive {
    display: none;
  }

  .rq-092-container p.size--lg, .rq-092-container p.size--md {
    color: var(--gray);
  }

  .rq-092-container.profile.card p.label {
    color: var(--gray);
  }

  .rq-092-container p.label {
    color: var(--dark);
  }

  .rq-092-container.profile.card *, .rq-092-container .rq-092-image *, .rq-092-container .rq-092-image, .rq-092-container.large * {
    padding: 0;
  }

  .rq-092-container.profile.card {
    width: auto;
    grid-column: span 3;
  }

  .rq-092-container * {
    padding: 24px;
  }

  .rq-092-container h3, .rq-092-container p  {
    margin: 0;
  }

  .rq-092-container .label {
    color: var(--label-color);
    margin-top: 20px;
  }

  .rq-092-container * {
    color: var(--font-color);
  }

  .rq-092-container a {
    text-decoration: underline;
  }

  .rq-092-image.rq-021-container {
    height: auto;
  }

  .rq-092-link {
    color: var(--copper);
    text-align: right;
    text-transform: uppercase;
    text-decoration: none;
  }

  .rq-092-link::after {
    content: url('/uploads/arrow-button_link.svg');
    padding-left: 10px;
  }

  .rq-092-profile-card {
    width: 100%;
    display: flex;
  }




</style>
