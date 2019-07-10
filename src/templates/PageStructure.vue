<template>
  <Layout :title="$page.pageContents.title">
    <div v-for="content in $page.pageContents.contents">
      <div class="">
        hallo
      </div>
    </div>
  </Layout>
</template>

<page-query>
query PageStructure ($id: String!) {
  pageContents: pageStructure (id: $id) {
    title
    contents {
      ...text
      ...image
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

</page-query>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.pageContents.title
    }
  }
}
</script>
