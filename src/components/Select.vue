<template>
  <div>
    <select 
      class="form-select form-select-lg mb-3" 
      aria-label="Large select example" 
      style="width: 100%"
      @change="filtrar"
    > 
      <option selected value="x">{{ firstOption }}</option>
      <option v-for="(opt, i) in listOptions" :key="i" :value="opt.value">{{ opt.label }}</option>
    </select>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  filtrar: Function,
  listOptions: Array,
  firstOption: String
})

</script>