<template>
    <div class="kmt-map" :class="sizeCSSClass">
        <div class="kmt-map__inner">
            <div ref="map"></div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Map',
  props: {
    size: {
      type: String
    }
  },
  computed: {
    sizeCSSClass () {
      return `kmt-map--size-${this.size}`;
    }
  },
  created () {
    // TODO: make sure google has been loaded at this point

    new google.maps.Map(this.$refs.map, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
};
</script>

<style lang="scss">
    .kmt-map {
        $map: &;
        position: relative;
        background: var(--gray);

        &__inner {
            &:before {
                padding-top: 50%;
                content: '';
                display: block;
            }

            > div {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }

            #{$map}--size-small & {
                @include center-inner-mm();
            }

            #{$map}--size-large & {
                @include center-inner-ll();
            }
        }
    }
</style>
