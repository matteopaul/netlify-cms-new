<template>
  <Layout :title="$page.pageContents.title">
    <template v-for="content in $page.pageContents.contents">
      <RQ_007 v-if="content.type == 'rq_007'" v-bind:contents="content.contents" :background="content.background" />
      <RQ_011 v-if="content.type == 'rq_011'" :icon="content.src" :count="content.count" :title="content.title" :text="content.text" :hint="content.category" :href="content.href" :linkText="content.linkText" />
      <RQ_012 v-if="content.type == 'rq_012'" :title="content.title" :text="content.text" :cols="content.cols" />
      <RQ_013 v-if="content.type == 'rq_013'" :src="content.src" :title="content.title" :buttonText="content.buttonText"/>
      <RQ_014 v-if="content.type == 'rq_014' && content.style == 'twi'" :src="content.src" :title="content.title" v-bind:textWithIcon="content.textWithIcon"/>
      <RQ_014 v-if="content.type == 'rq_014' && content.style == 'list'" :src="content.src" :title="content.title" :linkText="content.linkText" :href="content.href" v-bind:options="content.options"/>
      <RQ_016 v-if="content.type == 'rq_016'" :path="content.path" :src="content.src" :text="content.text" :title="content.title"/>
      <Divider v-if="content.type == 'divider'"/>
      <RQ_090 v-if="content.type == 'rq_090'" v-bind:options="content.options" :text="content.text" :title="content.title"/>
    </template>
  </Layout>
</template>

<page-query>
query PageStructure ($id: String!) {
  pageContents: pageStructure (id: $id) {
    title
    contents {
      ...stage
      ...category
      ...richText
      ...divide
      ...textWithIcon
      ...textInColumns
      ...promoBanner
    }
  }
}

fragment richText on rq_007 {
  type
  background
  contents {
    type
    title
    md
    text
    options
  }
}

fragment promoBanner on rq_014 {
  type
  src
  style
  options {
    type
    title
    text
    options
  }
  title
  href
  linkText
  textWithIcon {
    title
    text
    icon
    linkText
    href
  }
}


fragment textInColumns on rq_012 {
  type
  cols
  text
  title
}

fragment textWithIcon on rq_011 {
  type
  title
  text
  src
  category
  href
  linkText
  count
}

fragment stage on rq_013 {
  type
  title
  src
  buttonText
}

fragment category on rq_016 {
  type
  title
  src
  text
  path
}

fragment divide on divider {
  type
}

</page-query>

<script>
import Layout from '~/layouts/Default.vue';
import RQ_007 from '~/components/RQ-007.vue';
import RQ_013 from '~/components/RQ-013.vue';
import RQ_016 from '~/components/RQ-016.vue';
import RQ_090 from '~/components/RQ-090.vue';
import RQ_011 from '~/components/RQ-011.vue';
import RQ_012 from '~/components/RQ-012.vue';
import RQ_014 from '~/components/RQ-014.vue';
import Divider from '~/components/Divider.vue';

export default {
  components: {
    Layout,
    RQ_007,
    RQ_013,
    RQ_016,
    RQ_090,
    Divider,
    RQ_011,
    RQ_012,
    RQ_014
  },
  metaInfo () {
    return {
      title: this.$page.pageContents.title
    }
  }
}
</script>
