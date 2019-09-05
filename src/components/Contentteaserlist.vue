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
        &__list {
            .kmt-contentteaser,
            &__grid {
                width: _width(6, 20px);
            }

            .kmt-contentteaser {
                margin-top: 20px;
            }

            &__gutter {
                width: 20px;
            }
        }
    }
</style>
