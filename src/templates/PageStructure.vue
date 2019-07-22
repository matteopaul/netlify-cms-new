<template>
  <Layout :title="$page.pageContents.title">
    <div v-for="content in $page.pageContents.contents">
      <Stage v-if="content.type == 'stageContentType'" :src="content.src" :text="content.content" :buttonText="content.buttonText"/>
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
      ...stage
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

</page-query>

<script>
import Layout from '~/layouts/Default.vue'
import Stage from '~/components/Stage.vue'

export default {
  components: {
    Layout,
    Stage
  },
  metaInfo () {
    return {
      title: this.$page.pageContents.title
    }
  }
}
</script>
