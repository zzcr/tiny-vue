<template>
  <tiny-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    :popper-options="PopperOption"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <tiny-button>提示</tiny-button>
    </template>
  </tiny-popover>
</template>

<script>
import { TinyPopover, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyPopover,
    TinyButton
  },
  data() {
    return {
      PopperOption: { boundariesElement: 'body', gpuAcceleration: false }
    }
  }
}
</script>
