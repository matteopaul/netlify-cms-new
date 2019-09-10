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
  },
  computed: {
  }
};
</script>

<style lang="scss">
    .kmt-textandimage {
    }
</style>
