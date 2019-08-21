<template>
  <div class="rq-037-container">
    <ul class="rq-037-list" v-if="type == 'agency'">
      <li v-for="(name, i) in getAgency" v-html="name" :class="i" @click="select('p'+i)" v-bind:ref="'p'+i"/>
    </ul>
    <ul class="rq-037-list" v-if="type == 'projects'">
      <li v-for="(name, i) in getProjects" v-html="name" :class="i" @click="select('p'+i)" v-bind:ref="'p'+i"/>
    </ul>
  </div>
</template>

<script>
var filter = [];

export default {
  name: 'rq-037',
  props: {
    type: {
      String
    }
  },
  computed: {
    getAgency() {
      return ['kommandant', 'backend', 'frontend', 'konzept', 'text', 'projektmanagement', 'design'];
    },
    getProjects() {
      return ['lifestyle', 'fashion', 'automotive', 'chemie', 'immobilien', 'interior', 'b2c', 'b2b'];
    }
  },
  methods: {
    select (obj) {
      if(this.$refs[obj][0].className.indexOf('active') != -1) {
        this.$refs[obj][0].classList.remove('active');
        filter.splice(filter.indexOf(this.$refs[obj][0].innerHTML), 1);
        console.log(filter);
      } else {
        filter.push(this.$refs[obj][0].innerHTML);
        this.$refs[obj][0].classList.add('active');
        console.log(filter);
      }
      let contentTeaser = Array.from(document.getElementsByClassName('rq-015-container')).concat(Array.from(document.getElementsByClassName('rq-092-container')));
      for(let i = 0; i < contentTeaser.length; i++) {
        for(let f = 0; f < filter.length; f++) {
          console.log(contentTeaser[i].classList);
          if(contentTeaser[i].className.indexOf(filter[f]) == -1) {
            contentTeaser[i].classList.add('deactive');
            break;
          } else {
            contentTeaser[i].classList.remove('deactive');
          }
        }
        if(filter.length == 0) {
          for(let i = 0; i < contentTeaser.length; i++) {
            contentTeaser[i].classList.remove('deactive');
          }
        }
      }
    }
  }
}
</script>

<style>
  .rq-037-container {
    grid-column: 2 / 12;
  }

  .rq-037-list li {
    display: inline-block;
    margin: 10px;
    color: var(--gray);
    cursor: pointer;
    font-family: "Sentinel-Book", sans-serif;
  }

  .rq-037-list li.active {
    color: var(--copper);
  }

  .rq-037-list {
    list-style-type: none;
  }

  .rq-037-list li::before {
    content: '#';
  }


</style>
