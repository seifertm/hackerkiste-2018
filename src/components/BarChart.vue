<template>
  <svg :width="width" :height="height">
    <g v-for="(point, index) in data" :key="index" >
      <rect :x="index*(barWidth + gap)" :y="height-(point.value/maxValue)*height" :width="barWidth" :height="point.value/maxValue*height" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'bar-chart',
  props: {
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    data: {type: Array, required: true},
    gap: {type: Number, default: 10}
  },
  computed: {
    maxValue: function() {
      return Math.max(...this.data.map(v => v.value))
    },
    barWidth: function() {
      return (this.width - this.gapCount*this.gap) / this.data.length
    },
    gapCount: function() {
      return this.data.length - 1
    }
  }
}
</script>

<style>
</style>
