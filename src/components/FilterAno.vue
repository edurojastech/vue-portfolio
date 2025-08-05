<template>
  <div>
    <select 
      class="form-select form-select-lg mb-3" 
      aria-label="Large select example" 
      style="width: 100%"
      @change="filtrar"
    >
      <option selected value="todos">Ano criado</option>
      <option v-for="(ano, i) in anos" :key="i" :value="ano">{{ ano }}</option>
    </select>
  </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
defineProps({
  filtrar: Function
})

const anos = ref([2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018])
</script>