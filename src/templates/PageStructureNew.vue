<template>
  <Layout :title="$context.title">
    <template v-for="content in $context.contents">
<!--      <RQ_007 v-if="content.type == 'rq_007'" v-bind:contents="content.contents" :background="content.background" />-->
<!--      <RQ_008 v-if="content.type == 'rq_008'" :title="content.title" :size="content.size"/>-->
<!--      <RQ_011 v-if="content.type == 'rq_011'" :icon="content.src" :count="content.count" :title="content.title" :text="content.text" :hint="content.category" :href="content.href" :linkText="content.linkText" />-->
<!--      <RQ_012 v-if="content.type == 'rq_012'" :title="content.title" :text="content.text" :cols="content.cols" />-->
<!--      <RQ_013 v-if="content.type == 'rq_013'" :src="content.src" :title="content.title" :buttonText="content.buttonText"/>-->
<!--      <RQ_014 v-if="content.type == 'rq_014' && content.lists.length == 0" :src="content.src" :title="content.title" v-bind:textWithIcon="content.textWithIcon"/>-->
<!--      <RQ_014 v-if="content.type == 'rq_014' && content.textWithIcon.length == 0" :src="content.src" :title="content.title" :linkText="content.linkText" :href="content.href" v-bind:options="content.lists"/>-->
<!--      <RQ_015 v-if="content.type == 'rq_015'" :scale="content.scale" :title="content.title" :src="content.src" :size="content.size" :link="content.link" :linkText="content.linkText" :text="content.text" v-bind:attr="content.attr" v-bind:options="content.options" :label="content.label" :position="content.position"/>-->
<!--      <RQ_016 v-if="content.type == 'rq_016'" :width="content.width" :path="$context.url" :src="content.src" :text="content.text" :title="content.title"/>-->
<!--      <RQ_021 v-if="content.type == 'rq_021'" :title="content.title" :src="content.src" :text="content.text" :position="content.position" :size="content.size" />-->
<!--      <RQ_035 v-if="content.type == 'rq_035'" :path="$context.url" />-->
<!--      <RQ_037 v-if="content.type == 'rq_037'" :type="content.attrType" />-->
<!--      <RQ_067 v-if="content.type == 'rq_067'" :title="content.title" :text="content.text" v-bind:dropdown="content.dropdown" />-->
<!--      <Divider v-if="content.type == 'divider'" :size="content.height"/>-->
<!--      <RQ_090 v-if="content.type == 'rq_090'" v-bind:options="content.options" :text="content.text" :title="content.title" :checked="content.checked"/>-->
<!--      <RQ_091 v-if="content.type == 'rq_091'" :text="content.text" :src="content.src" :name="content.name" :description="content.description" />-->
<!--      <RQ_092 v-if="content.type == 'rq_092'" v-bind:attr="content.attr" v-bind:contents="content.contents" :color="content.color" />-->
<!--      <RQ_093 v-if="content.type == 'rq_093'" v-bind:cardContents="content.cardContents" :cardColor="content.cardColor" :mdBackground="content.mdBackground" v-bind:mdContents="content.mdContents" />-->
<!--      <RQ_094 v-if="content.type == 'rq_094'" :src="content.src" :title="content.title" :text="content.text" :href="content.href" :linkText="content.linkText" />-->
<!--      <RQ_095 v-if="content.type == 'rq_095'" :title="content.title" v-bind:content="content.stages" />-->
<!--      <CardSlider v-if="content.type == 'cardSlider'" :title="content.title" v-bind:content="content.cards" />-->
<!--      <Contact v-if="content.type == 'contact'"/>-->
<!--      <Map v-if="content.type == 'map'" :size="content.size"/>-->
    </template>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue';
// import RQ_007 from '~/components/RQ-007.vue';
// import RQ_008 from '~/components/RQ-008.vue';
// import RQ_011 from '~/components/RQ-011.vue';
// import RQ_012 from '~/components/RQ-012.vue';
// import RQ_013 from '~/components/RQ-013.vue';
// import RQ_014 from '~/components/RQ-014.vue';
// import RQ_015 from '~/components/RQ-015.vue';
// import RQ_016 from '~/components/RQ-016.vue';
// import RQ_021 from '~/components/RQ-021.vue';
// import RQ_035 from '~/components/RQ-035.vue';
// import RQ_037 from '~/components/RQ-037.vue';
// import RQ_067 from '~/components/RQ-067.vue';
// import RQ_090 from '~/components/RQ-090.vue';
// import RQ_091 from '~/components/RQ-091.vue';
// import RQ_092 from '~/components/RQ-092.vue';
// import RQ_093 from '~/components/RQ-093.vue';
// import RQ_094 from '~/components/RQ-094.vue';
// import RQ_095 from '~/components/RQ-095.vue';
import Divider from '~/components/Divider.vue';
import CardSlider from '~/components/CardSlider.vue';
import Contact from '~/components/Contact.vue';
import Map from '~/components/Map.vue';

export default {
  components: {
    Layout,
    // RQ_007,
    // RQ_008,
    // RQ_011,
    // RQ_012,
    // RQ_013,
    // RQ_014,
    // RQ_015,
    // RQ_016,
    // RQ_021,
    // RQ_035,
    // RQ_037,
    // RQ_067,
    // RQ_090,
    // RQ_091,
    // RQ_092,
    // RQ_093,
    // RQ_094,
    // RQ_095,
    Divider,
    CardSlider,
    Contact,
    Map
  },
  metaInfo () {
    return {
      title: this.$context.title
    }
  }
}
</script>
