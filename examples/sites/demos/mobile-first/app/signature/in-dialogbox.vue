<template>
  <div>
    <tiny-button @click="boxVisibility = true">默认属性配置</tiny-button>
    <tiny-dialog-box :visible="boxVisibility" @update:visible="boxVisibility = $event">
      <div class="h-72">
        <tiny-signature ref="signature" :show-submit-button="false"></tiny-signature>
      </div>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { TinySignature, TinyButton, TinyDialogBox } from '@opentiny/vue'

export default {
  components: {
    TinySignature,
    TinyDialogBox,
    TinyButton
  },
  data() {
    return {
      boxVisibility: false
    }
  }
}
</script>
