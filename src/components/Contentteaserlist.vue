<template>
    <!-- RQ-015 List -->
    <div class="kmt-contentteaserlist">
        <div class="kmt-contentteaserlist__list" ref="list">
            <div class="kmt-contentteaserlist__list__grid"></div>
            <div class="kmt-contentteaserlist__list__gutter"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Masonry from 'masonry-layout';

export default {
  name: 'Contentteaserlist',
  props: {
    image: {
      type: String
    }
  },
  computed: {},
  mounted () {
    var msnry = new Masonry(this.$refs.list, {
      columnWidth: '.kmt-contentteaserlist__list__grid',
      gutter: '.kmt-contentteaserlist__list__gutter',
      itemSelector: '.kmt-contentteaser',
      percentPosition: true
    });
  }
};
</script>

<style lang="scss">
    .kmt-contentteaserlist {
        @include center-inner-large();

        &__list {
            .kmt-contentteaser,
            &__grid {
                width: _width(6, 30px);
            }

            .kmt-contentteaser {
                margin-top: 20px;
            }

            &__gutter {
                width: 0;
            }

            .kmt-contentteaser--imageformat {
              &-landscape {
                &:nth-child(2n + 1) {
                  padding-right: 0
                }
                &:nth-child(2n + 2) {
                  padding-left: 0
                }
              }
              &-portrait {
                &:nth-child(2n + 1) {
                  padding-right: 240px
                }
                &:nth-child(2n + 2) {
                  padding-left: 240px
                }
              }
              &-square {
                &:nth-child(2n + 1) {
                  padding-right: 120px
                }
                &:nth-child(2n + 2) {
                  padding-left: 120px
                }
              }
            }
        }
    }
</style>
