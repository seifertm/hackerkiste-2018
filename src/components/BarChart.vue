<template>
  <svg :width="width" :height="height">
    <g v-for="(value, property, index) in data" :key="index" >
      <rect :x="index*110" :y="400-(value/1517.7)*400" width="100" :height="value/1517.7*400" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'bar-chart',
  props: {
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    data: {type: Object, required: true}
  }
}
</script>

<style>
</style>
