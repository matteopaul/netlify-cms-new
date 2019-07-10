<template>
  <Layout :title="$page.page.title">
    <div v-for="content in $page.page.contents">
      <span v-html="content.title"></span>
    </div>
  </Layout>
</template>

<page-query>
query PageStructure ($id: String!) {
  page: pageStructure (id: $id) {
    title
    contents {
      ...content
    }
  }
}

fragment content on PageStructureContents {
  type
  title
  src
  alt
}

</page-query>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
