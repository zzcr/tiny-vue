<template>
  <div>
    <div class="mb-16">全部禁用 <tiny-switch v-model="isDisabled"></tiny-switch></div>
    <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll" :disabled="isDisabled"> 全选 </tiny-checkbox>
    <div class="mb-16"></div>
    <tiny-checkbox-group v-model="checkboxGroup" :disabled="isDisabled">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">
        {{ city }}
      </tiny-checkbox>
    </tiny-checkbox-group>
  </div>
</template>

<script>
import { TinyCheckbox, TinyCheckboxGroup, TinySwitch } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox,
    TinyCheckboxGroup,
    TinySwitch
  },
  data() {
    return {
      isDisabled: false,
      checkboxGroup: ['北京'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  },
  computed: {
    isIndeterminate: {
      get() {
        return this.checkboxGroup.length > 0 && this.checkboxGroup.length !== this.cities.length
      }
    },
    checkAll: {
      get() {
        return this.checkboxGroup.length === this.cities.length
      },
      set(val) {
        if (val) {
          this.checkboxGroup = [...this.cities]
        } else {
          this.checkboxGroup = []
        }
      }
    }
  }
}
</script>

<style scoped>
.mb-16 {
  margin-bottom: 16px;
}
</style>
