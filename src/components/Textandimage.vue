<template>
    <!-- RQ-00? (eigentlich RQ-021) -->
    <div class="kmt-textandimage">
        <div class="kmt-textandimage__image">
            <img :src="image"/>
        </div>
        <div class="kmt-textandimage__text">
            <h4>
                Headline
            </h4>
            <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Textandimage',
  props: {
    image: {
      type: String
    }
  }
};
</script>

<style lang="scss">
    .kmt-textandimage {
        $textandimage: &;
        width: -width(6, 20px, 12);
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;

        &__image {
            position: relative;

            &:before {
                @extend %image-portrait;
                display: block;
                content: '';
            }

            img {
                position: absolute;
                left: 0;
                top: 0;
                background-size: cover;
                display: block;
                width: 100%;
                height: 100%;
            }
        }

        &__text {
        }

        &:nth-child(even) {
            #{$textandimage}__image {
                width: -width(8, 20px, 12);
                order: 1;
            }

            #{$textandimage}__text {
                order: 2;
                width: -width(8, 20px, 12);
                margin-left: calc((-4 / 12 * 100% - 10px) * 0.5);
                margin-top: 20px;
            }
        }

        &:nth-child(odd) {
            #{$textandimage}__image {
                width: -width(8, 20px, 12);
                order: 2;
                margin-top: 20px;
            }

            #{$textandimage}__text {
                order: 1;
                width: -width(8, 20px, 12);
                align-self: center;
            }
        }

        .kmt-textandimagelist--teasercount-1 & {
            flex-direction: row;
            width: 100%;

            #{$textandimage}__image {
                width: -width(4, 20px, 12);
                order: 1;
                flex: 0 0 auto;
            }

            #{$textandimage}__text {
                order: 2;
                flex: 1 1 auto;
                margin-left: calc((4 / 12 * 100% - 0px) * 0.25);
            }
        }
    }
</style>
