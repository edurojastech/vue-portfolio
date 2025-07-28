<script setup>
import TitlePagesIcon from '../components/TitlePagesIcon.vue';
import Dashboard from '../layout/Dashboard.vue';
import imgCover from '../assets/cover.png'

</script>

<template>
  <Dashboard>
    <!-- Title Page na navbar -->
    <template v-slot:iconAndTitle>
      <TitlePagesIcon
        icon-desc="bi bi-house" 
        title="Página Inicial"
      />
    </template>
    <div class="container my-5">
      <h1>Bem-vindos ao site de Eduardo Rojas</h1>
      <img :src="imgCover" alt="" width="640" style="border-radius: 8px;"/>
    </div>
    
  </Dashboard>
</template>