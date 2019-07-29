<template>
  <div class="rq-067-container horizontal">
      <h2 class="rq-067-title" v-html="title"/>
      <p class="size--lg" v-html="text" />
      <input type="text" placeholder="E-MAIL ADRESSE" v-if="dropdown">
      <select class="rq-067-select" v-if="dropdown">
          <option v-for="option in dropdown" v-html="option" :value="option"/>
      </select>
      <button type="button" v-if="!dropdown" class="rq-067-button telephone" onclick="window.open('tel:004952425880765765124');">+49 5242 588 0124 <g-image src="~/assets/svg/Information-Point-Rocket.svg" /> </button>
      <button type="button" class="rq-067-button">E-MAIL</button>
  </div>
</template>

<script>
export default {
  name: 'rq-067',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
    dropdown: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>

  .rq-067-container {
    grid-column: 1 / 13;
    background: #f5f5f5;
    height: 256px;
    padding-left: 64px;
    grid-row: span 16;
  }

  .rq-067-title {
    margin: 48px 0 8px 0;
  }

  .rq-067-container p.size--lg {
    margin: 0;
    margin-bottom: 24px;
  }

  .rq-067-container input[type=text], .rq-067-container select, .rq-067-container .rq-067-button {
      font-size: 14px;
      padding-left: 16px;
      padding-right: 16px;
  }

  .rq-067-container input[type=text], .rq-067-container select {
    width: 240px;
    height: 48px;
    outline: none;
    font-family: 'Gotham-Medium';
    font-size: 14px;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 1px;

    margin-right: 24px;
    border: none;
    border: 2px solid var(--gray);
    box-sizing: border-box;

  }

  .rq-067-container select {
      -webkit-appearance:none;
      border-radius: 0;
      background: var(--white);
  }

  .rq-067-container .rq-067-button {
    border: none;
    width: 192px;
    height: 48px;
    color: var(--white);
    text-transform: uppercase;
    background: var(--copper);
    cursor: pointer;
    margin-right: 24px;
  }

  .rq-067-container .rq-067-button.telephone {
    color: var(--white);
    background: var(--dark);
    width: auto;
  }

  .rq-067-container .rq-067-button:focus {
    outline: none;
  }

  .rq-067-button.telephone img {
    padding: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0px;
    margin-left: 45px;
    border: 0px;
    vertical-align: middle;
  }

</style>
