<template>
  <tiny-rate v-model="rate1" :icon-classes="iconclass1"></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate1: 3,
      iconclass1: ['icon-frown', 'icon-meh', 'icon-smile']
    }
  }
}
</script>
