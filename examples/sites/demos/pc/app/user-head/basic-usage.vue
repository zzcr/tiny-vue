<template>
  <tiny-user-head type="icon" :model-value="tinyIconSmile"></tiny-user-head>
</template>

<script>
import { TinyUserHead } from '@opentiny/vue'
import { iconSmile } from '@opentiny/vue-icon'

export default {
  components: {
    TinyUserHead
  },
  data() {
    return {
      tinyIconSmile: iconSmile()
    }
  }
}
</script>
