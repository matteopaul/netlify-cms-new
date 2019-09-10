<template>
    <!-- RQ-092 -->
    <div class="kmt-card kmt-card--type-quote" :class="themeCSSClass">
        <Quote :text="text" :image="image" :name="name" :position="position"></Quote>
    </div>
</template>

<script>
import Quote from '~/components/Quote.vue';

export default {
  name: 'Quotecard',
  components: {
    Quote
  },
  props: {
    text: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    theme: {
      type: String,
    },
    theme: {
      type: String,
      default: 'gray',
      validator: function (value) {
        return ['gray', 'copper', 'white'].indexOf(value) !== -1;
      }
    },
  },
  computed: {
    themeCSSClass(){
      return `kmt-card--theme-${this.theme}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-card {
        &--theme {
            &-gray {
                background: $color--lightgray;
            }
            &-copper {
                background: $color--copper;
            }
            &-white {
                background: $color--white;
            }
        }

        &--type-quote {
            background: $color--lightgray;
            padding: 20px;

            .kmt-quote {
                max-width: none;
                padding: 0;
                height: 100%;
            }
        }
    }
</style>
