<template>
  <div class="card" style="width: auto;">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text" style="height: 40px">{{ description }}</p>
      <p>Ano criado: <b>{{ ano }}</b></p>
      <b>Tecnologias</b> <br>
      <div class="justify-content-between d-flex" style="height: 40px;">
        <div class="techs__icons">
          <img v-for="(tech, index) in techs" :src="tech" alt="" :key="index">
        </div>
        <a :href=url class="btn btn-primary" target="_blank">
          Ver projeto
          <img :src="eyeIcon" alt="ver projeto">
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
import eyeIcon from '../assets/icons/eye.svg'
defineProps({
  name: String,
  url: String,
  description: String,
  ano: Number,
  techs: Array
})
</script>
<style scoped>
.techs__icons img{
  width: 40px;
}

</style>