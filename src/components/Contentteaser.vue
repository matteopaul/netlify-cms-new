<template>
    <!-- RQ-015 -->
    <div class="kmt-contentteaser" :class="imageformatCSSClass">
        <div class="kmt-contentteaser__image">
            <img :src="image"/>
        </div>
        <div class="kmt-contentteaser__text">
            <h3>Headline</h3>
            <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
            <a href="#">Mehr Details</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Contentteaser',
  props: {
    image: {
      type: String
    },
    imageformat: {
      type: String,
      default: 'landscape',
      validator: function (value) {
        return ['landscape', 'portrait', 'square'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    imageformatCSSClass () {
      return `kmt-contentteaser--imageformat-${this.imageformat}`;
    }
  }
};
</script>

<style lang="scss">
    .kmt-contentteaser {
        $contentteaser: &;
        position: relative;
        display: flex;
        flex-direction: column;

        &__image {
            position: relative;

            .kmt-contentteaser--imageformat-landscape & {
                @extend %image-landscape;
            }

            .kmt-contentteaser--imageformat-portrait & {
                @extend %image-portrait;
            }

            .kmt-contentteaser--imageformat-square & {
                @extend %image-square;
            }

            img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
            }

            + #{$contentteaser}__text {
                margin-top: 20px;
            }
        }

        &__text {
            h3 {
                @extend %typo-h3;

                small {
                    @extend %typo-label;
                    display: block;
                }

                + p {
                    margin-top: 10px;
                }
            }

            p {
                @extend %typo-p--regular;
            }

            > a {
                @extend %typo-link;
            }
        }
    }
</style>
