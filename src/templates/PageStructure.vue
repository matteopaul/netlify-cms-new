<template>
  <Layout :title="$page.pageContents.title">
    <template v-for="content in $page.pageContents.contents" class="loop">
      <Stage v-if="content.type == 'stageContentType'" :src="content.src" :text="content.text" :buttonText="content.buttonText"/>
      <CategoryBanner v-if="content.type == 'categorybannercontenttype'" :src="content.src" :text="content.text" :headline="content.title"/>
    </template>
  </Layout>
</template>

<page-query>
query PageStructure ($id: String!) {
  pageContents: pageStructure (id: $id) {
    title
    contents {
      ...text
      ...image
      ...stage
      ...category
    }
  }
}

fragment text on textcontenttype {
  type
  title
  content
}

fragment image on imagecontenttype {
  type
  title
  src
  alt
}

fragment stage on stagecontenttype {
  type
  title
  src
  buttonText
  text
}

fragment category on categorybannercontenttype {
  type
  title
  src
  text
}

</page-query>

<style media="screen">
  .loop {
    grid-column-start: 1;
  }
</style>

<script>
import Layout from '~/layouts/Default.vue'
import Stage from '~/components/Stage.vue'

export default {
  components: {
    Layout,
    Stage,
  },
  metaInfo () {
    return {
      title: this.$page.pageContents.title
    }
  }
}
</script>
