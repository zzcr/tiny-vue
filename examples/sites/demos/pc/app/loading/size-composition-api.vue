<template>
  <div class="tiny-deom-size-loading">
    <div id="tiny-size-loading1"></div>
    <div id="tiny-size-loading2" class="demo-loading"></div>
    <div id="tiny-size-loading3"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { TinyLoading } from '@opentiny/vue'

const loadingInstance = ref(null)

onMounted(() => {
  loadingInstance.value = TinyLoading.service({
    target: document.getElementById('tiny-size-loading1'),
    size: 'small'
  })
  loadingInstance.value = TinyLoading.service({
    target: document.getElementById('tiny-size-loading2'),
    size: 'medium'
  })
  loadingInstance.value = TinyLoading.service({
    target: document.getElementById('tiny-size-loading3'),
    size: 'large'
  })
})
</script>

<style>
.tiny-deom-size-loading {
  display: flex;
}

.tiny-deom-size-loading > * {
  width: 100px;
  height: 100px;
}
.demo-loading {
  margin: 0 8px;
}
</style>
