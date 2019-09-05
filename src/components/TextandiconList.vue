<template>
    <!-- RQ-011 List -->
    <div class="kmt-textandiconlist" :class="columnsCSSClass">
        <Textandicon image="/mockdata/stage.jpg" :align="align"></Textandicon>
        <Textandicon image="/mockdata/stage-vertical.png" :align="align"></Textandicon>
        <Textandicon image="/mockdata/stage-vertical.png" :align="align"></Textandicon>
    </div>
</template>

<script>
import Textandicon from '~/components/Textandicon.vue';

export default {
  name: 'Textandiconlist',
  props: {
    columns: {
      type: Number,
      default: 2
    },
    align: {
      type: String,
      default: 'vertical',
      validator: function (value) {
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    columnsCSSClass () {
      return `kmt-textandiconlist--columns-${this.columns}`;
    },
  },
  components: {
    Textandicon
  }
};
</script>

<style lang="scss">
    .kmt-textandiconlist {
        &--columns {
            &-4 {
                @include _grid(4, 40px, 40px, '.kmt-textandicon');
            }
            &-3 {
                @include _grid(3, 40px, 40px, '.kmt-textandicon');
            }
            &-2 {
                @include _grid(2, 40px, 40px, '.kmt-textandicon');
            }
        }
    }
</style>
