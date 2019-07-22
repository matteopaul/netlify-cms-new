<template>
  <Layout>
    <Breadcrumb v-bind:path="['Link', 'Zur', 'Seite']" />
    <Stage src="/uploads/stage-asset_kosmonaut_startseite.jpg" buttonText="mehr erfahren" text="We're an e-commerce agency that builds shopping experiences that matter in culture."/>
    <CategoryBanner src="/uploads/bildschirmfoto-2019-06-26-um-16.02.47.png" headline="Lucky Bike" text="„Lorem ipsum dolor sit ameetur adipiscing elit. Aenean euismod bibendum laoreet.“" breadcrumb="Moin/Hallo/lol"/>
  </Layout>
</template>

<script>
import Stage from '~/components/Stage.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import CategoryBanner from '~/components/CategoryBanner.vue'


export default {
  metaInfo: {
    title: 'Module'
  },
  components: {
    Stage,
    Breadcrumb,
    CategoryBanner
  }
}
</script>
