<template>
  <svg :width="width" :height="height">
    <g v-for="(point, index) in data" :key="index" >
      <rect :x="index*110" :y="400-(point.value/maxValue)*400" width="100" :height="point.value/maxValue*400" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'bar-chart',
  props: {
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    data: {type: Array, required: true}
  },
  computed: {
    maxValue: function() {
      return Math.max(...this.data.map(v => v.value))
    }
  }
}
</script>

<style>
</style>
