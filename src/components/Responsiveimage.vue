<template>
    <div class="kmt-responsiveimage" :class="modeCSSClass" v-if="src">
        <!-- TODO: use image properties from gridsome -->
        <img :src="src"/>
    </div>
</template>

<script>
export default {
  name: 'Responsiveimage',
  props: {
    src: {
      type: String
    },
    mode: {
      type: String,
      default: 'cover',
      validator: function (value) {
        return ['cover', 'contain'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    modeCSSClass () {
      return `kmt-responsiveimage--mode-${this.mode}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-responsiveimage {
        $responsiveimage: &;
        overflow: hidden;

        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: block;
            max-width: none;
            max-height: none;
        }

        &--mode {
            &-cover {
                img {
                    object-fit: cover;
                    font-family: 'object-fit: cover;';
                }
            }
            &-contain {
                img {
                    object-fit: contain;
                    font-family: 'object-fit: contain;';
                }
            }
        }
    }
</style>
