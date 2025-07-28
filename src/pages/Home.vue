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
    <div class="container my-5 px-3">
      <h2 class="text-center">Bem-vindos ao site de Eduardo Rojas</h2>
      <img :src="imgCover" id="imgCover" alt="" style="border-radius: 8px; margin: auto auto; display: block;"/>
    </div>
    
  </Dashboard>
</template>
<style scoped>
#imgCover {
  width: 50%;
}

@media(max-width: 640px) {
  #imgCover {
    width: 90%;
  }
}
</style>