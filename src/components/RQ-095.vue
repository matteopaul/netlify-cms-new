<template>
  <div class="rq-095-container">
    <div class="rq-095-stage-container">
      <div class="rq-095-stage" v-for="stage in content">
        <g-image :src="stage.src" class="rq-095-stage-image" />
        <div class="rq-095-stage-overlay">
            <RQ_0990 :title="stage.title" :text="stage.text" v-bind:options="stage.options" class="rq-095-stage-list"/>
        </div>
      </div>
    </div>
          <!---#########-DOTS-########---->
      <div class="rq-095-dot-container">
        <div v-for="n in content.length" :key="n" class="rq-095-dot" v-on:click="showSlide(n)"/>
      </div>
  </div>
</template>

<script>
//document.getElementsByClassName('rq-095-stage-container')[0].style.width = this.
import RQ_090 from '~/components/RQ-090.vue'

let currentSlide = 1;

export default {
  name: 'rq-095',
  props: {
    title: {
      type: String
    },
    content: {
      type: Array
    }
  },
  components: {
    RQ_090
  },
  created () {
    setTimeout(() => {
      let width = this.content.length * 1408;
      console.log(width);
      document.getElementsByClassName('rq-095-stage-container')[0].style.width = width + "px";
      this.showSlide(1);
    }, 100);
  },
  methods: {
    showSlide(index) {
        console.log(index);
        currentSlide = index;
        let slides = document.getElementsByClassName('rq-095-stage');
        let dots = document.getElementsByClassName('rq-095-dot');
        if(index > slides.length) {currentSlide = 1;}
        if(index < 1) {currentSlide = slides.length;}

        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[currentSlide - 1].className += " active";
        document.getElementsByClassName('rq-095-stage-container')[0].style.left = "-" + (currentSlide - 1) * 1408 + "px"
    }
  }
}
</script>

<style>

  .rq-095-container {
    grid-column: 1 / 13;
    grid-row: span 49;
    height: 780px;
    position: relative;
    overflow: hidden;
  }

  .rq-095-stage-container {
    position: relative;
    transition-duration: 1.8s;
    display: flex;
  }

  .rq-095-stage {
    width: 100%;
    height: 720px;
    position: relative;
    display: inline-block;
  }

  .rq-095-stage-image {
    width: 100%;
    height: 100%;
  }

  .rq-095-stage-overlay {
    position: absolute;
    background: var(--white);
    width: 448px;
    height: auto;
    top: 64px;
    left: 64px;
    padding: 24px;
  }

  .rq-095-dot-container {
    text-align: center;
    margin-top: 40px;
  }

  .rq-095-dot {
    width: 12px;
    height: 12px;
    background: var(--dark);
    opacity: 0.25;
    margin: 8px;
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;
  }

  .rq-095-dot.active {
    opacity: 1;
  }

</style>
