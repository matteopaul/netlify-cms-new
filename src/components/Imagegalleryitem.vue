<template>
    <!-- RQ-021 -->
    <div class="kmt-imagegalleryitem">
        <img :src="image"/>
    </div>
</template>

<script>
export default {
  name: 'Imagegalleryitem',
  props: {
    image: {
      type: String
    }
  },
  computed: {}
};
</script>

<style lang="scss">
    .kmt-imagegalleryitem {
        position: relative;

        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }

        &:before {
            content: '';
            display: block;

            .kmt-imagegallery--imagecount-1 & {
                @extend %image-landscape;
            }

            .kmt-imagegallery--imagecount-2 & {
                @extend %image-square;
            }
        }
    }
</style>
