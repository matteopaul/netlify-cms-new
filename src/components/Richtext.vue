<template>
    <!-- RQ-007 -->
    <div class="kmt-richtext" :class="columnsCSSClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Richtext',
  props: {
    columns: {
      type: String,
      default: 1,
      validator: function (value) {
        return [1, 2, 3].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    columnsCSSClass () {
      return `kmt-richtext--columns-${this.columns}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-richtext {
        &--columns {
            &-1 {
                column-count: 1;
            }

            &-2 {
                column-count: 2;
                column-gap: 20px;
            }

            &-3 {
                column-count: 3;
                column-gap: 20px;
            }
        }

        a {
            color: $color--copper;
            text-decoration: none;
        }

        h1 {
            @extend %typo-h1;
        }

        h2 {
            @extend %typo-h2;
        }

        h3 {
            @extend %typo-h3;
        }

        p {
            @extend %typo-p--regular;

            &.small {
                @extend %typo-p--small;
            }
            &.large {
                @extend %typo-p--large;
            }
            &.label {
                @extend %typo-label;
            }
        }

        ul {
            @extend %bulletlist;
        }

        ol {
            padding: 0;
            list-style: none;
            counter-reset: ol;

            li {
                position: relative;
                padding-left: 30px;
                @extend %typo-p--regular;

                &:before {
                    position: absolute;
                    left: 0;
                    top: 0;
                    content: counter(ol);
                    display: block;
                    counter-increment: ol;
                }
            }
        }

        > * + * {
            margin-top: 20px;
        }
    }
</style>
