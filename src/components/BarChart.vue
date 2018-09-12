<template>
  <svg :width="width" :height="height">
    <svg v-for="(point, index) in data" :key="index" :width="barWidth" :x="index*(barWidth + gapWidth)">
      <rect :y="plotAreaHeight - (point.value/maxValue)*plotAreaHeight" width="100%" :height="point.value/maxValue*plotAreaHeight" />
      <text :y="labelBaselineY">{{point.label}}</text>
    </svg>
  </svg>
</template>

<script>
export default {
  name: 'bar-chart',
  props: {
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    data: {type: Array, required: true},
    gap: {type: Number, default: 1},
    fontSize: {type: Number, default: 12}
  },
  computed: {
    maxValue: function() {
      return Math.max(...this.data.map(v => v.value))
    },
    barWidth: function() {
      return (this.width - this.gapCount*this.gapWidth) / this.data.length
    },
    gapCount: function() {
      return this.data.length - 1
    },
    gapWidth: function() {
      return this.fontSize*this.gap
    },
    plotAreaHeight: function() {
      return this.height - this.labelHeight
    },
    labelHeight: function() {
      // 0.5*fontSize is the line spacing below and above the label
      return 2*this.fontSize
    },
    labelBaselineY: function() {
      return this.height - this.fontSize/2
    }
  }
}
</script>

<style>
</style>
