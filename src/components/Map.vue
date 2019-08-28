<template>
  <div class="map-container" :class="classes">
    <div id="map"/>
  </div>
</template>


<script>
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

export default {
  name: 'Map',
  props: {
    size: {
      type: String
    }
  },
  computed: {
    classes() {
      return " " + this.size;
    }
  }
}
</script>

<style>
  .map-container.large {
    grid-column: span 6;
    height: 688px;
    grid-row: span 2;
    background: var(--gray);
  }

  .map-container.small {
    grid-column: span 4;
  }
</style>
