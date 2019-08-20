<template>
  <Layout :title="$page.pageContents.title">
    <template v-for="content in $page.pageContents.contents">
      <RQ_007 v-if="content.type == 'rq_007'" v-bind:contents="content.contents" :background="content.background" />
      <RQ_011 v-if="content.type == 'rq_011'" :icon="content.src" :count="content.count" :title="content.title" :text="content.text" :hint="content.category" :href="content.href" :linkText="content.linkText" />
      <RQ_012 v-if="content.type == 'rq_012'" :title="content.title" :text="content.text" :cols="content.cols" />
      <RQ_013 v-if="content.type == 'rq_013'" :src="content.src" :title="content.title" :buttonText="content.buttonText"/>
      <RQ_014 v-if="content.type == 'rq_014' && content.options.length == 0" :src="content.src" :title="content.title" v-bind:textWithIcon="content.textWithIcon"/>
      <RQ_014 v-if="content.type == 'rq_014' && content.textWithIcon.length == 0" :src="content.src" :title="content.title" :linkText="content.linkText" :href="content.href" v-bind:options="content.options"/>
      <RQ_015 v-if="content.type == 'rq_015'" :title="content.title" :src="content.src" :size="content.size" :link="content.link" :linkText="content.linkText" :text="content.text" v-bind:attr="content.attr" v-bind:options="content.options" :label="content.label" :position="content.position"/>
      <RQ_016 v-if="content.type == 'rq_016'" :path="content.path" :src="content.src" :text="content.text" :title="content.title"/>
      <RQ_021 v-if="content.type == 'rq_021'" :title="content.title" :src="content.src" :text="content.text" :position="content.position" :size="content.size" />
      <RQ_035 v-if="content.type == 'rq_035'" :path="content.path" />
      <RQ_037 v-if="content.type == 'rq_037'" :type="content.attrType" />
      <RQ_067 v-if="content.type == 'rq_067'" :title="content.title" :text="content.text" v-bind:dropdown="content.dropdown" />
      <Divider v-if="content.type == 'divider'"/>
      <RQ_090 v-if="content.type == 'rq_090'" v-bind:options="content.options" :text="content.text" :title="content.title" :checked="content.checked"/>
      <RQ_091 v-if="content.type == 'rq_091'" :text="content.text" :src="content.src" :name="content.name" :description="content.description" />
      <RQ_092 v-if="content.type == 'rq_092'" v-bind:contents="content.content" :color="content.color" />
      <RQ_093 v-if="content.type == 'rq_093'" v-bind:cardContents="content.cardContents" :cardColor="content.cardColor" :mdBackground="content.mdBackground" v-bind:mdContents="content.mdContents" />
      <RQ_094 v-if="content.type == 'rq_094'" :src="content.src" :title="content.title" :text="content.text" :href="content.href" :linkText="content.linkText" />
      <RQ_095 v-if="content.type == 'rq_095'" :title="content.title" v-bind:content="content.contents" />
      <CardSlider v-if="content.type == 'cardSlider'" :title="content.title" v-bind:content="content.cards" />
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
      ...contentTeaser
      ...image
      ...breadcrumb
      ...attributeFilter
      ...contactForm
      ...bulletList
      ...quote
      ...card
      ...cardWithText
      ...projectLink
      ...contentSlider
      ...slider
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
    listOptions
  }
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

fragment textInColumns on rq_012 {
  type
  cols
  text
  title
}

fragment stage on rq_013 {
  type
  title
  src
  buttonText
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

fragment contentTeaser on rq_015 {
  type
  size
  src
  linkText
  position
  text
  attr {
    option
  }
  label
  title
  link
  options {
    title
  }
}

fragment category on rq_016 {
  type
  title
  src
  text
  path
}

fragment image on rq_021 {
  type
  title
  text
  src
  position
  size
}

fragment breadcrumb on rq_035 {
  type
  title
  path
}

fragment attributeFilter on rq_037 {
  type
  title
  attrType
}

fragment contactForm on rq_067 {
  type
  title
  text
  dropdown {
    option
  }
}

fragment bulletList on rq_090 {
  type
  title
  text
  checked
  options {
    option
  }
}

fragment quote on rq_091 {
  type
  text
  src
  name
  description
}

fragment card on rq_092 {
  type
  color
  content {
    type
    text
    src
    href
    checked
    listOptions {
      option
    }
    name
    description
    position
    size
  }
}

fragment cardWithText on rq_093 {
  type
  mdContents {
    type
    listOptions {
      listOption
    }
    title
    text
    md
  }
  cardContents {
    type
    options {
      option
    }
    title
    checked
  }
  cardColor
  mdBackground
}

fragment projectLink on rq_094 {
  type
  title
  src
  text
  link
  linkText
}

fragment contentSlider on rq_095 {
  type
  title
  contents {
    src
    title
    text
    checked
    options {
      option
    }
  }
}

fragment slider on cardSlider {
  type
  cards {
    color
    content {
      type
      text
      src
      href
      checked
      listOptions {
        option
      }
      name
      description
      position
      size
    }
  }
}

fragment divide on divider {
  type
}

</page-query>

<script>
import Layout from '~/layouts/Default.vue';
import RQ_007 from '~/components/RQ-007.vue';
import RQ_011 from '~/components/RQ-011.vue';
import RQ_012 from '~/components/RQ-012.vue';
import RQ_013 from '~/components/RQ-013.vue';
import RQ_014 from '~/components/RQ-014.vue';
import RQ_015 from '~/components/RQ-015.vue';
import RQ_016 from '~/components/RQ-016.vue';
import RQ_021 from '~/components/RQ-021.vue';
import RQ_035 from '~/components/RQ-035.vue';
import RQ_037 from '~/components/RQ-037.vue';
import RQ_067 from '~/components/RQ-067.vue';
import RQ_090 from '~/components/RQ-090.vue';
import RQ_091 from '~/components/RQ-091.vue';
import RQ_092 from '~/components/RQ-092.vue';
import RQ_093 from '~/components/RQ-093.vue';
import RQ_094 from '~/components/RQ-094.vue';
import RQ_095 from '~/components/RQ-095.vue';
import Divider from '~/components/Divider.vue';
import CardSlider from '~/components/CardSlider.vue';

export default {
  components: {
    Layout,
    RQ_007,
    RQ_011,
    RQ_012,
    RQ_013,
    RQ_014,
    RQ_015,
    RQ_016,
    RQ_021,
    RQ_035,
    RQ_037,
    RQ_067,
    RQ_090,
    RQ_091,
    RQ_092,
    RQ_093,
    RQ_094,
    RQ_095,
    Divider,
    CardSlider
  },
  metaInfo () {
    return {
      title: this.$page.pageContents.title
    }
  }
}
</script>
