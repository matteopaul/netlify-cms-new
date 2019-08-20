<template>
  <div class="card-slider-container">
    <div class="card-slider-stage-container">
      <div class="card-slider-stage" v-for="card in content">
        <RQ_092 :color="card.color" v-bind:contents="card.content" />
      </div>
    </div>
          <!---#########-DOTS-########---->
      <div class="card-slider-dot-container">
        <div v-for="n in content.length" :key="n" class="card-slider-dot" v-on:click="showSlide(n)"></div>

      </div>
  </div>
</template>

<script>
//document.getElementsByClassName('card-slider-stage-container')[0].style.width = this.
import RQ_092 from '~/components/RQ-092.vue'

let currentSlide = 1;

export default {
  name: 'card-slider',
  props: {
    title: {
      type: String
    },
    content: {
      type: Array
    }
  },
  components: {
    RQ_092
  },
  created () {
    setTimeout(() => {
      console.log(this.content);
      let width = this.content.length * 448;
      console.log(width);
      document.getElementsByClassName('card-slider-stage-container')[0].style.width = width + "px";
      this.showSlide(1);
    }, 10);
  },
  methods: {
    showSlide(index) {
        console.log(index);
        currentSlide = index;
        let slides = document.getElementsByClassName('card-slider-stage');
        let dots = document.getElementsByClassName('card-slider-dot');
        if(index > slides.length) {currentSlide = 1;}
        if(index < 1) {currentSlide = slides.length;}

        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[currentSlide - 1].className += " active";
        document.getElementsByClassName('card-slider-stage-container')[0].style.left = "-" + (currentSlide - 1) * (448 + 32) + "px"
    }
  }
}
</script>

<style>

  .card-slider-container {
    grid-column: 1 / 13;
    height: auto;
    position: relative;
    overflow: hidden;
  }

  .card-slider-stage-container {
    position: relative;
    transition-duration: 0.8s;
    display: flex;
  }

  .card-slider-stage {
    width: 100%;
    position: relative;
    display: inline-block;
  }

  .card-slider-stage-image {
    width: 100%;
    height: 100%;
  }

  .card-slider-stage-overlay {
    position: absolute;
    background: var(--white);
    width: 448px;
    height: auto;
    top: 64px;
    left: 64px;
    padding: 24px;
  }

  .card-slider-dot-container {
    text-align: center;
    margin-top: 40px;
  }

  .card-slider-dot {
    width: 12px;
    height: 12px;
    background: var(--dark);
    opacity: 0.25;
    margin: 8px;
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;
  }

  .card-slider-dot.active {
    opacity: 1;
  }

</style>
