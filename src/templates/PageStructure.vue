<template>
  <Layout :title="$page.pageContents.title">
    <template v-for="content in $page.pageContents.contents" class="loop">
      <Stage v-if="content.type == 'stageContentType'" :src="content.src" :text="content.text" :buttonText="content.buttonText"/>
      <CategoryBanner v-if="content.type == 'categoryBannerContentType'" :src="content.src" :text="content.text" :title="content.title"/>
    </template>
  </Layout>
</template>

<page-query>
query PageStructure ($id: String!) {
  pageContents: pageStructure (id: $id) {
    title
    contents {
      ...text
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
import CategoryBanner from '~/components/CategoryBanner.vue'

export default {
  components: {
    Layout,
    Stage,
    CategoryBanner
  },
  metaInfo () {
    return {
      title: this.$page.pageContents.title
    }
  }
}
</script>
