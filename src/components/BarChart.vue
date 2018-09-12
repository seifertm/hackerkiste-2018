<template>
  <svg :width="width" :height="height">
    <svg v-for="(point, index) in data" :key="index" :width="barWidth" :x="index*(barWidth + gapWidth)">
      <svg :height="plotAreaHeight">
        <rect :y="100 - 100*(point.value/maxValue) + '%'" width="100%" :height="100*point.value/maxValue + '%'" />
        <text x="50%" :y="100 - 100*(point.value/maxValue) + '%'" alignment-baseline="middle" text-anchor="middle">{{point.value}}</text>
      </svg>
      <text x="50%" :y="labelBaselineY" alignment-baseline="middle" text-anchor="middle">{{point.label}}</text>
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
