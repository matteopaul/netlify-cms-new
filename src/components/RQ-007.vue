<template>
  <div class="rq-007-container" v-if="!background">
    <div class="rq-007-content" v-for="content in contents">
      <RQ_090 v-if="content.type == 'bulletList'" class="rq-007-bulletlist" v-bind:options="content.listOptions" :title="content.title" :text="content.text"/>
      <p v-if="content.type == 'text'" class="rq-007-md size--md" v-html="parseMd(content.md)" />
    </div>
  </div>
  <div class="rq-007-container background" v-else-if="background">
    <div class="rq-007-content" v-for="content in contents">
      <RQ_090 v-if="content.type == 'bulletList'" class="rq-007-bulletlist" v-bind:options="content.listOptions" :title="content.title" :text="content.text"/>
      <p v-if="content.type == 'text'" class="rq-007-md size--md" v-html="parseMd(content.md)" />
    </div>
  </div>
</template>

<script>
import RQ_090 from '~/components/RQ-090.vue'
export default {
  name: 'rq-007',
  props: {
    contents: {
      type: Array
    },
    background: {
      type: Boolean,
      required: false
    }
  },

  components: {
      RQ_090
  },

  methods: {
    parseMd(md){
    //
    //     //ul
    //     md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
    //     md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
    //
    //     md = md.replace(/\\n/gm, '<br>');
    //     md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
    //     md = md.replace(/^\*\*(.+)\*\*/gm, '<b>$1</b>');
    //
    //     //ol
    //     md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
    //     md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1<br></ol><br>$2');
    //     md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
    //     md = md.replace(/^\*([A-Z]+)\*/gm, '<li>$1</li>');
    //
    //     //blockquote
    //     md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
    //
    //     //h
    //     //md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
    //     // md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
    //     // md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
            md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
            md = md.replace(/[\#]{2}(.+)\n/g, '<h2>$1</h2>');
    //     // md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
    //
    //     //alt h
    //     //md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
    //     //md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
    //
    //     //images
    //     //md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
    //
    //     //links
            md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2">$1</a>');

            md = md.replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>')
    //
    //     //font styles
    //     //md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
    //     //md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
    //     //md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
    //
    //     //pre
    //     //md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
    //     //md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
    //
    //     //code
    //     //md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
    //
    //     //p
    //     md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
    //       return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p class="size--md">'+m+'</p>';
    //     });
    //
    //     //strip p from pre
    //     md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
    //
         return md;
    //
       }
  }
}
</script>

<style>

  .rq-007-container {
    grid-column: span 7;
    grid-row: span 20;
    margin-left: calc(88px + 32px);
  }

  .rq-007-container.background {
    grid-column: 1 / 13;
    background: #f5f5f5;
    width: 1920px;
    padding: 104px 0;
    justify-self: center;
    margin-left: 0;
  }

  .rq-007-container.background .rq-007-content {
    max-width: 928px;
    margin-left: 396px;
  }

  .rq-007-md a {
    text-decoration: underline;
    font-family: 'Sentinel-Book', sans-serif;
  }

  .rq-007-bulletlist li {
    font-family: 'Sentinel-Book', sans-serif;
  }

  .rq-007-bulletlist .rq-090-text {
    display: none;
  }

</style>
