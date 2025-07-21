<template>
  <div>
    <!-- <label for="#">Filtrar por Tecnologias:</label> -->
    <select 
      class="form-select form-select-lg mb-3" 
      aria-label="Large select example" 
      style="width: 100%"
      @change="filtrar"
    >
      <option selected value="todos">Selecione tecnologias</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="js">JS</option>
      <option value="bootstrap">Bootstrap</option>
      <option value="reactjs">React.js</option>
    </select>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  filtrar: Function
})

</script>