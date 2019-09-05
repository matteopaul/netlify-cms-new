<template>
    <!-- RQ-011 List -->
    <div class="kmt-textandiconlist" :class="[columnsCSSClass, alignCSSClass]">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Textandiconlist',
  props: {
    columns: {
      type: Number,
      default: 2
    },
    align: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'center'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    columnsCSSClass () {
      return `kmt-textandiconlist--columns-${this.columns}`;
    },
    alignCSSClass () {
      return `kmt-textandiconlist--align-${this.align}`;
    },
  },
  components: {
  }
};
</script>

<style lang="scss">
    .kmt-textandiconlist {
        $textandiconlist: &;

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

        &#{$textandiconlist}--align-center {
            justify-content: center;
        }
    }
</style>
