<template>
  <div>
    <p>{{ message }}</p>
    <input :tabindex v-model="message">
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  tabindex: { type: Number, default: undefined },
})

const message = ref('Hello, world!')

defineOptions({
  shadowRootOptions: { delegatesFocus: true },
})
</script>
