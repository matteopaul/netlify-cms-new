<template>
    <!-- RQ-011 List -->
    <div class="kmt-textandiconlist" :class="[columnsCSSClass, alignCSSClass, backgroundCSSClass]">
      <div class="kmt-textandiconlist__inner">
        <slot></slot>
      </div>
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
    background: {
      type: Boolean,
      default: false
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
    backgroundCSSClass () {
      return `kmt-textandiconlist--background-${this.background}`
    }
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

                  #{$textandiconlist}__inner {
                    @include _grid(4, 40px, 40px, '.kmt-textandicon');
                    @include center-inner-large();

                  }
              }

              &-3 {
                #{$textandiconlist}__inner {
                  @include _grid(3, 40px, 40px, '.kmt-textandicon');
                  @include center-inner-large();

                }
              }

              &-2 {
                #{$textandiconlist}__inner {
                  @include _grid(2, 40px, 40px, '.kmt-textandicon');
                }

                  &#{$textandiconlist}--background {
                    &-true {
                      #{$textandiconlist}__inner {
                        @include center-inner-mm();
                      }
                    }
                    &-false {
                      #{$textandiconlist}__inner {
                        @include center-inner-mmm();
                      }
                    }
                  }
              }

          }



        &#{$textandiconlist}--align-center {
          #{$textandiconlist}__inner {
            justify-content: center;
          }
        }

        &--background-true {
          #{$textandiconlist}__inner {
            @include center-inner-large();
          }
          background-color: $color--lightgray;
          padding-top: 100px;
          padding-bottom: 100px;
        }
    }
</style>
