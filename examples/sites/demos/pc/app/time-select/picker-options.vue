<template>
  <div class="time-select-demo-picker">
    <tiny-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: '09:00',
        maxTime: '12:30'
      }"
      placeholder="选择时间"
    ></tiny-time-select>
  </div>
</template>

<script>
import { TinyTimeSelect } from '@opentiny/vue'

export default {
  components: {
    TinyTimeSelect
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.time-select-demo-picker {
  width: 270px;
}
</style>
