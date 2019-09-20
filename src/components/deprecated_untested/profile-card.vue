<template>
  <div class="profile-card-container">
    <RQ_021 title="profile" text="" :src="src" position="" size="square" />
    <div class="profile-card-content">
      <p class="label" v-html="title" />
      <p class="size--sm" v-html="description" />
      <p class="size--lg" v-html="contact" />
    </div>
  </div>
</template>

<script>
import RQ_021 from "~/components/RQ-021.vue";

export default {
  name: 'RQ-011',
  props: {
    src: {
      type: Object
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    contact: {
      type: String,
      required: false
    }
  },
  components: {
    RQ_021
  }
}
</script>

<style>

.profile-card-container {
  margin-top: 24px;
  display: flex;
}

</style>
