<template>
  <div>
    <div style="margin-bottom: 12px">
      <span>右侧插入排序策略：</span>
      <tiny-radio v-for="order in ['original', 'push', 'unshift']" v-model="targetOrder" :label="order" :key="order">
        {{ order }}
      </tiny-radio>
    </div>
    <tiny-transfer v-model="value" :data="data" :target-order="targetOrder"></tiny-transfer>
  </div>
</template>

<script lang="jsx">
import { TinyTransfer, TinyRadio } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer,
    TinyRadio
  },
  data() {
    const generateData = () => {
      const data = []

      for (let i = 0; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      data: generateData(),
      value: [1, 4],
      targetOrder: 'original'
    }
  }
}
</script>
