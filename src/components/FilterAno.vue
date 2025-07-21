<template>
  <div>
    <!-- <label for="#">Filtrar por Tecnologias:</label> -->
    <select 
      class="form-select form-select-lg mb-3" 
      aria-label="Large select example" 
      style="width: 100%"
      @change="filtrar"
    >
      <option selected value="todos">Ano criado</option>
      <option value="2025">2025</option>
      <option value="2024">2024</option>
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
    </select>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  filtrar: Function
})
</script>